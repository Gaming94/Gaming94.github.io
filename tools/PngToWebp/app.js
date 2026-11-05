(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const refs = {
    input: $('file-input'), drop: $('drop-zone'), list: $('file-list'),
    empty: $('empty-results'), count: $('item-count'), clear: $('clear-btn'),
    convert: $('convert-btn'), zip: $('zip-btn'), footer: $('results-footer'),
    summary: $('results-summary'), status: $('status-message'),
    quality: $('quality'), qualityValue: $('quality-value'),
    qualityField: $('quality-field'), resize: $('resize'),
    settingHelp: $('setting-help'), avif: $('avif-option'), avifBadge: $('avif-badge'),
    format: $('format-fieldset')
  };
  const outputTypes = {
    'image/webp': { ext: 'webp', label: 'WebP' },
    'image/jpeg': { ext: 'jpg', label: 'JPG' },
    'image/png': { ext: 'png', label: 'PNG' },
    'image/avif': { ext: 'avif', label: 'AVIF' }
  };
  const inputTypes = new Set(['image/png', 'image/jpeg', 'image/webp', 'image/avif']);
  const maxFiles = 100;
  const maxPixels = 45_000_000;
  let nextId = 0;
  let items = [];
  let busy = false;
  let archiveUrl = null;

  function formatBytes(size) {
    if (size < 1024) return `${size} B`;
    if (size < 1024 ** 2) return `${(size / 1024).toFixed(1)} KB`;
    if (size < 1024 ** 3) return `${(size / 1024 ** 2).toFixed(2)} MB`;
    return `${(size / 1024 ** 3).toFixed(2)} GB`;
  }
  function setMessage(message) { refs.status.textContent = message; }
  function formatLabel(mime) { return outputTypes[mime]?.label || '이미지'; }
  function currentMime() { return document.querySelector('input[name="output-format"]:checked').value; }
  function itemOutputName(originalName, mime, used) {
    const base = originalName.replace(/\.[^.]+$/, '') || 'image';
    const ext = outputTypes[mime].ext;
    let name = `${base}.${ext}`;
    let suffix = 2;
    while (used.has(name.toLowerCase())) name = `${base}-${suffix++}.${ext}`;
    used.add(name.toLowerCase());
    return name;
  }
  function dropOutput(item) {
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
    item.resultUrl = null;
    item.blob = null;
    item.outputName = '';
    item.state = 'waiting';
    item.error = '';
  }
  function resetResults() {
    if (busy) return;
    items.forEach(dropOutput);
    render();
  }
  function addFiles(fileList) {
    if (busy) return;
    const files = Array.from(fileList || []);
    let added = 0, unsupported = 0, overflow = 0;
    for (const file of files) {
      if (!inputTypes.has(file.type)) { unsupported++; continue; }
      if (items.length >= maxFiles) { overflow++; continue; }
      items.push({
        id: ++nextId, file, previewUrl: URL.createObjectURL(file),
        resultUrl: null, blob: null, outputName: '', state: 'waiting', error: ''
      });
      added++;
    }
    render();
    const parts = [];
    if (added) parts.push(`${added}개 이미지가 추가됐어요.`);
    if (unsupported) parts.push(`지원하지 않는 파일 ${unsupported}개를 제외했어요.`);
    if (overflow) parts.push(`최대 ${maxFiles}개까지만 추가할 수 있어요.`);
    setMessage(parts.join(' ') || '추가할 수 있는 이미지가 없어요.');
  }
  function releaseAll() {
    for (const item of items) {
      URL.revokeObjectURL(item.previewUrl);
      if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
    }
    items = [];
    if (archiveUrl) { URL.revokeObjectURL(archiveUrl); archiveUrl = null; }
  }
  function removeItem(id) {
    if (busy) return;
    const index = items.findIndex((item) => item.id === id);
    if (index < 0) return;
    const [item] = items.splice(index, 1);
    URL.revokeObjectURL(item.previewUrl);
    if (item.resultUrl) URL.revokeObjectURL(item.resultUrl);
    setMessage('');
    render();
  }
  function buildRow(item) {
    const row = document.createElement('article');
    row.className = `file-row ${item.state === 'done' ? 'done' : item.state === 'error' ? 'error' : ''}`;
    row.setAttribute('role', 'listitem');
    const thumbnail = document.createElement('div');
    thumbnail.className = 'file-thumb';
    const img = document.createElement('img');
    img.src = item.previewUrl;
    img.alt = '';
    img.loading = 'lazy';
    thumbnail.append(img);

    const info = document.createElement('div');
    info.className = 'file-info';
    const title = document.createElement('span');
    title.className = 'file-name';
    title.textContent = item.file.name;
    const meta = document.createElement('div');
    meta.className = 'file-meta';
    meta.textContent = `${formatBytes(item.file.size)} · ${item.file.type.split('/')[1].toUpperCase()}`;
    const state = document.createElement('span');
    state.className = 'file-status';
    if (item.state === 'done') {
      const change = Math.round((1 - item.blob.size / item.file.size) * 100);
      state.textContent = `${formatBytes(item.blob.size)} · ${change >= 0 ? `${change}% 절감` : `${Math.abs(change)}% 증가`} · ${formatLabel(item.blob.type)}`;
    } else if (item.state === 'error') {
      state.textContent = item.error;
    } else {
      state.textContent = item.state === 'working' ? '변환 중…' : '변환 대기';
    }
    info.append(title, meta, state);

    const actions = document.createElement('div');
    actions.className = 'file-actions';
    if (item.state === 'done') {
      const link = document.createElement('a');
      link.className = 'file-download';
      link.href = item.resultUrl;
      link.download = item.outputName;
      link.textContent = '저장 ↓';
      link.setAttribute('aria-label', `${item.outputName} 다운로드`);
      actions.append(link);
    }
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'remove-btn';
    remove.textContent = '삭제 ×';
    remove.disabled = busy;
    remove.setAttribute('aria-label', `${item.file.name} 목록에서 제거`);
    remove.addEventListener('click', () => removeItem(item.id));
    actions.append(remove);
    row.append(thumbnail, info, actions);
    return row;
  }
  function render() {
    refs.list.replaceChildren(...items.map(buildRow));
    refs.empty.hidden = items.length !== 0;
    refs.empty.style.display = items.length ? 'none' : '';
    refs.count.textContent = `${items.length}개 파일`;
    refs.clear.disabled = busy || items.length === 0;
    const complete = items.filter((item) => item.state === 'done');
    refs.footer.hidden = items.length === 0;
    refs.zip.disabled = busy || complete.length === 0;
    refs.convert.disabled = busy || items.length === 0;
    refs.convert.textContent = busy ? '이미지 변환 중…' : items.length ? `${items.length}개 이미지 변환하기 →` : '이미지를 먼저 추가해 주세요';
    refs.input.disabled = busy;
    refs.quality.disabled = busy || currentMime() === 'image/png';
    refs.resize.disabled = busy;
    refs.format.disabled = busy;
    document.querySelectorAll('input[name="output-format"]').forEach((input) => {
      input.disabled = busy || (input.value === 'image/avif' && refs.avif.dataset.supported !== 'yes');
    });
    if (complete.length) {
      const before = complete.reduce((n, item) => n + item.file.size, 0);
      const after = complete.reduce((n, item) => n + item.blob.size, 0);
      const pct = Math.abs(Math.round((1 - after / before) * 100));
      refs.summary.textContent = `${complete.length}개 변환 완료 · ${formatBytes(before)} → ${formatBytes(after)} (${pct}% ${after <= before ? '절감' : '증가'})`;
    } else {
      refs.summary.textContent = '파일을 변환하면 크기 비교와 일괄 다운로드가 가능해요.';
    }
  }
  function updateSettingText() {
    const mime = currentMime();
    const png = mime === 'image/png';
    refs.qualityValue.textContent = png ? '무손실' : `${refs.quality.value}%`;
    refs.qualityField.classList.toggle('quality-disabled', png);
    refs.settingHelp.textContent = png
      ? 'PNG는 무손실 형식으로 화질 조절이 적용되지 않아요.'
      : mime === 'image/jpeg'
        ? 'JPG는 투명한 배경을 흰색으로 변환해요.'
        : mime === 'image/avif'
          ? 'AVIF는 지원되는 브라우저에서만 선택할 수 있어요.'
          : 'WebP는 크기와 화질의 균형이 좋은 형식이에요.';
  }
  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('이미지를 읽을 수 없어요. 파일이 손상됐거나 브라우저가 이 형식을 지원하지 않을 수 있어요.'));
      image.src = url;
    });
  }
  async function convertOne(item, mime, quality, scale) {
    const image = await loadImage(item.previewUrl);
    const width = Math.max(1, Math.round(image.naturalWidth * scale));
    const height = Math.max(1, Math.round(image.naturalHeight * scale));
    if (width * height > maxPixels) throw new Error('이미지 크기가 너무 커요. 크기 옵션을 낮춰 다시 시도해 주세요.');
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    try {
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('이미지 처리 기능을 사용할 수 없는 브라우저예요.');
      if (mime === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
      }
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(image, 0, 0, width, height);
      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob((result) => result ? resolve(result) : reject(new Error('이미지 변환에 실패했어요.')), mime, quality);
      });
      if (blob.type !== mime) throw new Error('현재 브라우저에서 이 출력 형식을 지원하지 않아요.');
      return blob;
    } finally {
      canvas.width = 0;
      canvas.height = 0;
    }
  }
  async function convertAll() {
    if (busy || !items.length) return;
    busy = true;
    items.forEach(dropOutput);
    const mime = currentMime();
    const quality = Number(refs.quality.value) / 100;
    const scale = Number(refs.resize.value);
    const used = new Set();
    let success = 0, failed = 0;
    render();
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.state = 'working';
      setMessage(`${i + 1}/${items.length}개 이미지를 처리하고 있어요…`);
      render();
      try {
        const blob = await convertOne(item, mime, quality, scale);
        item.blob = blob;
        item.outputName = itemOutputName(item.file.name, mime, used);
        item.resultUrl = URL.createObjectURL(blob);
        item.state = 'done';
        success++;
      } catch (error) {
        item.state = 'error';
        item.error = error instanceof Error ? error.message : '변환에 실패했어요.';
        failed++;
      }
      render();
    }
    busy = false;
    render();
    setMessage(`${success}개 변환 완료${failed ? ` · ${failed}개 실패 (실패한 파일을 확인해 주세요)` : '!'}`);
  }

  // ZIP32: 저장(store) 방식으로 아카이브를 만듭니다. 추가 네트워크 요청이나 외부 라이브러리가 필요하지 않습니다.
  const crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let value = n;
    for (let bit = 0; bit < 8; bit++) value = (value & 1) ? (0xedb88320 ^ (value >>> 1)) : (value >>> 1);
    crcTable[n] = value >>> 0;
  }
  async function crc32(blob) {
    let crc = 0xffffffff;
    const reader = blob.stream().getReader();
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        for (const byte of value) crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 0xff];
      }
    } finally { reader.releaseLock(); }
    return (crc ^ 0xffffffff) >>> 0;
  }
  function dosDateTime(date) {
    const year = Math.max(1980, date.getFullYear());
    return {
      date: ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
      time: (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2)
    };
  }
  async function makeZip(completed) {
    const encoder = new TextEncoder();
    const body = [], central = [];
    const { date, time } = dosDateTime(new Date());
    let position = 0, centralSize = 0;
    if (completed.length > 65535 || completed.some((item) => item.blob.size >= 0xffffffff)) throw new Error('ZIP 용량 제한을 초과했어요.');
    for (const item of completed) {
      const filename = encoder.encode(item.outputName);
      const size = item.blob.size;
      const checksum = await crc32(item.blob);
      if (position + size + filename.length + 30 >= 0xffffffff) throw new Error('전체 ZIP 용량이 4GB를 초과할 수 없어요.');
      const local = new Uint8Array(30);
      const lv = new DataView(local.buffer);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true);
      lv.setUint16(6, 0x0800, true);
      lv.setUint16(8, 0, true);
      lv.setUint16(10, time, true);
      lv.setUint16(12, date, true);
      lv.setUint32(14, checksum, true);
      lv.setUint32(18, size, true);
      lv.setUint32(22, size, true);
      lv.setUint16(26, filename.length, true);
      lv.setUint16(28, 0, true);
      body.push(local, filename, item.blob);

      const c = new Uint8Array(46);
      const cv = new DataView(c.buffer);
      cv.setUint32(0, 0x02014b50, true);
      cv.setUint16(4, 20, true);
      cv.setUint16(6, 20, true);
      cv.setUint16(8, 0x0800, true);
      cv.setUint16(10, 0, true);
      cv.setUint16(12, time, true);
      cv.setUint16(14, date, true);
      cv.setUint32(16, checksum, true);
      cv.setUint32(20, size, true);
      cv.setUint32(24, size, true);
      cv.setUint16(28, filename.length, true);
      cv.setUint16(30, 0, true);
      cv.setUint16(32, 0, true);
      cv.setUint16(34, 0, true);
      cv.setUint16(36, 0, true);
      cv.setUint32(38, 0, true);
      cv.setUint32(42, position, true);
      central.push(c, filename);
      position += local.length + filename.length + size;
      centralSize += c.length + filename.length;
    }
    const end = new Uint8Array(22);
    const ev = new DataView(end.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(8, completed.length, true);
    ev.setUint16(10, completed.length, true);
    ev.setUint32(12, centralSize, true);
    ev.setUint32(16, position, true);
    return new Blob([...body, ...central, end], { type: 'application/zip' });
  }
  async function downloadZip() {
    if (busy) return;
    const completed = items.filter((item) => item.state === 'done');
    if (!completed.length) return;
    busy = true;
    render();
    setMessage('ZIP 파일을 준비하고 있어요…');
    try {
      const zip = await makeZip(completed);
      if (archiveUrl) URL.revokeObjectURL(archiveUrl);
      archiveUrl = URL.createObjectURL(zip);
      const link = document.createElement('a');
      link.href = archiveUrl;
      link.download = 'kaor-image-studio.zip';
      document.body.append(link);
      link.click();
      link.remove();
      setMessage(`${completed.length}개 변환 파일을 ZIP으로 준비했어요.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'ZIP 생성에 실패했어요.');
    } finally {
      busy = false;
      render();
    }
  }
  async function checkAvif() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    try {
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/avif', 0.8));
      const supported = blob?.type === 'image/avif';
      refs.avif.dataset.supported = supported ? 'yes' : 'no';
      refs.avifBadge.textContent = supported ? '' : '미지원';
      refs.avif.disabled = !supported;
    } catch {
      refs.avif.dataset.supported = 'no';
      refs.avifBadge.textContent = '미지원';
    }
    render();
  }

  refs.input.addEventListener('change', (event) => {
    addFiles(event.target.files);
    refs.input.value = '';
  });
  refs.drop.addEventListener('dragover', (event) => {
    event.preventDefault();
    if (!busy) refs.drop.classList.add('is-dragging');
  });
  refs.drop.addEventListener('dragleave', (event) => {
    if (!refs.drop.contains(event.relatedTarget)) refs.drop.classList.remove('is-dragging');
  });
  refs.drop.addEventListener('drop', (event) => {
    event.preventDefault();
    refs.drop.classList.remove('is-dragging');
    addFiles(event.dataTransfer.files);
  });
  refs.clear.addEventListener('click', () => {
    if (busy) return;
    releaseAll();
    setMessage('');
    render();
  });
  refs.convert.addEventListener('click', convertAll);
  refs.zip.addEventListener('click', downloadZip);
  refs.quality.addEventListener('input', () => { updateSettingText(); resetResults(); });
  refs.resize.addEventListener('change', () => { resetResults(); });
  document.querySelectorAll('input[name="output-format"]').forEach((input) => {
    input.addEventListener('change', () => { updateSettingText(); resetResults(); });
  });
  window.addEventListener('beforeunload', releaseAll);
  refs.avif.dataset.supported = 'no';
  updateSettingText();
  render();
  checkAvif();
})();
