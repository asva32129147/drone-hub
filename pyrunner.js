let py;
async function get() {
  if (py) return py;
  await new Promise((ok, bad) => { const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js'; s.onload = ok; s.onerror = bad; document.head.appendChild(s); });
  return (py = await loadPyodide());
}
const PY = `
import json, math
ns = {}
try:
    exec(USER_CODE, ns)
    res = []
    for args, exp in json.loads(CASES):
        try:
            got = ns[FN](*args)
            num = isinstance(exp, (int, float)) and not isinstance(exp, bool)
            ok = math.isclose(got, exp, rel_tol=1e-6, abs_tol=1e-9) if num else got == exp
        except Exception as e:
            got, ok = repr(e), False
        res.append({'args': args, 'exp': exp, 'got': got if isinstance(got, (int, float, str, list, dict)) else repr(got), 'ok': ok})
    out = json.dumps({'results': res})
except BaseException as e:
    out = json.dumps({'error': repr(e)})
out`;
export async function run(code, fn, cases) {
  const p = await get();
  p.globals.set('USER_CODE', code); p.globals.set('FN', fn); p.globals.set('CASES', JSON.stringify(cases));
  return JSON.parse(await p.runPythonAsync(PY));
}
