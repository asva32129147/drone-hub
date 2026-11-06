const root = document.documentElement, ls = localStorage;
export function initTheme() {
  const sel = document.getElementById('theme'), btn = document.getElementById('mode');
  const dark0 = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.dataset.theme = ls.getItem('hub:theme') || 'gradio'; root.dataset.mode = ls.getItem('hub:mode') || dark0; sel.value = root.dataset.theme;
  const paint = () => { btn.textContent = root.dataset.mode === 'dark' ? 'Light mode' : 'Dark mode'; btn.hidden = root.dataset.theme !== 'gradio'; };
  sel.onchange = () => { root.dataset.theme = sel.value; ls.setItem('hub:theme', sel.value); paint(); };
  btn.onclick = () => { root.dataset.mode = root.dataset.mode === 'dark' ? 'light' : 'dark'; ls.setItem('hub:mode', root.dataset.mode); paint(); };
  paint();
}
