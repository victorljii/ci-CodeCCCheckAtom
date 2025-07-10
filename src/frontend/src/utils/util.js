export function urlJoin(...args) {
  return args.filter(arg => arg).join('/')
    .replace(/([^:]\/)\/+/g, '$1');
}

export function getQueryParams(urlStr = window.location.href) {
  let search = '';
  try {
    // 优先用 URL API 解析
    const url = new URL(urlStr, window.location.origin);
    search = url.search;
  } catch (e) {
    // fallback: 兼容非标准 URL 字符串
    const idx = urlStr.indexOf('?');
    search = idx !== -1 ? urlStr.slice(idx) : '';
  }
  const params = {};
  if (search) {
    const usp = new URLSearchParams(search);
    for (const [key, value] of usp.entries()) {
      params[key] = value;
    }
  }
  return params;
}

