import { h, bar } from './dom.js';
import * as auth from './auth.js';
import { pull } from './store.js';
import { mount as board } from './tasks.js';
import { mount as lessons, summary } from './lessons.js';
const view = document.getElementById('view');
function account() {
  const email = h('input', { type: 'email', placeholder: 'Email', 'aria-label': 'Email' }), pw = h('input', { type: 'password', placeholder: 'Password', 'aria-label': 'Password' }), note = h('div', { class: 'muted' });
  const go = fn => async () => { const r = await fn(email.value.trim(), pw.value); if (r && r.error) note.textContent = r.error.message; else { await pull(); route(); } };
  view.append(h('h2', {}, 'Account'));
  if (auth.mode() === 'local') view.append(h('div', { class: 'banner' }, 'Local mode: no real login yet. Add your Supabase keys in config.js so teammates get secure accounts. See README.'));
  if (auth.user()) view.append(h('div', { class: 'card' }, 'Signed in as ' + auth.user().email, h('div', { class: 'row' }, h('button', { onclick: () => auth.signOut().then(route) }, 'Sign out'))));
  else view.append(h('div', { class: 'card row' }, email, pw, h('button', { onclick: go(auth.signIn) }, 'Sign in'), h('button', { class: 'ghost', onclick: go(auth.signUp) }, 'Create account'), note));
}
function dash() {
  const s = summary(); view.append(h('h2', {}, 'Dashboard'), h('p', { class: 'muted' }, 'Drone build tasks and textbook progress'));
  view.append(h('div', { class: 'stats' }, h('div', { class: 'card' }, h('b', {}, 'Chapter 1 exercises'), h('div', {}, `${s.done} of ${s.total}`), bar(Math.round(100 * s.done / s.total)))));
  const el = h('div'); view.append(h('h3', {}, 'Project board'), el); board(el);
}
function route() {
  const r = location.hash.slice(2) || 'dashboard'; view.replaceChildren();
  document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#/' + r));
  document.getElementById('who').textContent = auth.user() ? auth.user().email : 'Not signed in';
  if (!auth.user() && r !== 'account') { location.hash = '#/account'; return; }
  if (r === 'account') account(); else if (r.startsWith('chapter')) lessons(view); else dash();
}
await auth.init(); await pull(); auth.onChange(route); addEventListener('hashchange', route); route();
