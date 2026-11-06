# Drone Hub
Static site for GitHub Pages (all files in the repo root, no build step): Settings > Pages > deploy from the main branch, / (root).

## Turn on team logins (Supabase, free plan)
1. Create a project at supabase.com. In the SQL editor run the contents of `schema.sql`.
2. Project Settings > API: copy the project URL and the anon public key into `config.js`.
3. Authentication > URL Configuration: set the Site URL to your GitHub Pages address.
Without keys the site runs in local mode (no real security, data stays in the browser).

## Files
auth.js login, grades.js and course.js grade and leaderboard, store.js saved data, tasks.js Kanban/calendar/progress, reader.js textbook reader, textbook.js book content, lessons.js exercises, pyrunner.js in-browser Python tests (Pyodide), chapter1.js exercise content, theme.css styling, dom.js small helpers, app.js starts everything.

## Leaderboard
Run the "Team leaderboard" part of `schema.sql` once in the Supabase SQL editor. After your team has signed up, you can switch off new sign-ups in Authentication settings so strangers cannot create accounts and see the leaderboard.
