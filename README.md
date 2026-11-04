# Drone Hub
Static site for GitHub Pages: Settings > Pages > deploy from the main branch, root folder. No build step.

## Turn on team logins (Supabase)
1. Create a free project at supabase.com. In the SQL editor run `supabase/schema.sql`.
2. In Project Settings > API copy the project URL and the anon public key into `config.js`.
3. Authentication > URL configuration: add your GitHub Pages URL as the Site URL.
Without keys the site runs in local mode (no real security, data stays in the browser).

## Layout
`js/auth.js` login, `js/store.js` saved data (local plus Supabase sync), `js/tasks.js` Kanban and progress, `js/lessons.js` exercises, `js/pyrunner.js` in-browser Python tests (Pyodide), `data/chapter1.js` exercise content.
