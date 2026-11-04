export function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) k.startsWith('on') ? e.addEventListener(k.slice(2), v) : e.setAttribute(k, v);
  for (const c of kids.flat()) e.append(c instanceof Node ? c : document.createTextNode(c ?? ''));
  return e;
}
export const bar = pct => h('div', { class: 'bar' }, Object.assign(h('i'), { style: `width:${pct}%` }));
