import { h, bar } from './dom.js';
import * as auth from './auth.js';
import { pull } from './store.js';
import { initTheme } from './theme.js';
import { mount as board } from './tasks.js';
import { mount as exercises, summary } from './lessons.js';
import { mount as reader, printAll, sectionsDone, sectionCount } from './reader.js';
const view = document.getElementById('view');
function account() {
  const email = h('input', { type: 'email', placeholder: 'Email', 'aria-label': 'Email' }), pw = h('input', { type: 'password', placeholder: 'Password', 'aria-label': 'Password' }), note = h('div', { class: 'muted' });
  const go = fn => async () => { const r = await fn(email.value.trim(), pw.value); if (r && r.error) note.textContent = r.error.message; else { await pull(); route(); } };
  view.append(h('h2', {}, 'Account'));
  if (auth.mode() === 'local') view.append(h('div', { class: 'banner' }, 'Local mode: no real login yet. Add your Supabase keys in config.js so teammates get secure accounts. See the README.'));
  if (auth.user()) view.append(h('div', { class: 'card' }, 'Signed in as ' + auth.user().email, h('div', { class: 'row' }, h('button', { onclick: () => auth.signOut().then(route) }, 'Sign out'))));
  else view.append(h('div', { class: 'card row' }, email, pw, h('button', { onclick: go(auth.signIn) }, 'Sign in'), h('button', { class: 'ghost', onclick: go(auth.signUp) }, 'Create account'), note));
}
function dash() {
  const s = summary(), sd = sectionsDone();
  view.append(h('h2', {}, 'Dashboard'), h('p', { class: 'muted' }, 'Drone build tasks and textbook progress'));
  view.append(h('div', { class: 'stats' }, h('div', { class: 'card' }, h('b', {}, 'Textbook'), h('div', { class: 'big' }, `${sd} of ${sectionCount}`), bar(Math.round(100 * sd / sectionCount)), h('a', { href: '#/read' }, 'Continue reading')), h('div', { class: 'card' }, h('b', {}, 'Exercises'), h('div', { class: 'big' }, `${s.done} of ${s.total}`), bar(Math.round(100 * s.done / s.total)), h('a', { href: '#/chapter/ch1' }, 'Open exercises'))));
  const el = h('div'); view.append(el); board(el);
}
function route() {
  const r = location.hash.slice(2) || 'dashboard'; view.replaceChildren();
  document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#/' + r));
  document.getElementById('who').textContent = auth.user() ? auth.user().email : 'Not signed in';
  if (!auth.user() && r !== 'account') { location.hash = '#/account'; return; }
  if (r === 'account') account(); else if (r === 'read') reader(view); else if (r === 'print') printAll(view); else if (r.startsWith('chapter')) exercises(view); else dash();
}
initTheme(); await auth.init(); await pull(); auth.onChange(route); addEventListener('hashchange', route); route();
