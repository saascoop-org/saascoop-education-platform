(function () {
  const path = window.location.pathname;
  const isRoot = path.endsWith('/saascoop-education-platform/') || path.endsWith('/saascoop-education-platform/index.html') || path === '/';
  if (!isRoot) return;
  const lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  let target = 'en/';
  if (lang.startsWith('pt')) target = 'pt-BR/';
  else if (lang.startsWith('es')) target = 'es/';
  const base = path.endsWith('index.html') ? path.replace('index.html', '') : path;
  window.location.replace(base + target);
})();
