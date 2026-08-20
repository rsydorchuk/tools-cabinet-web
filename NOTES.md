<!--
React + Vite + TypeScript, react-router-dom for routing, MUI (@mui/material) for
components. No Dockerfile — this repo
builds (`npm run build`) to static files and deploys to Static Web Apps directly,
per CLAUDE.md.

Currently: login/register + a protected apps dashboard with one disabled stub tile
(png-to-webp), talking to the api repo's interim JWT /auth endpoints (see CLAUDE.md
"custom JWT now, Entra External ID later"). When the api's /uploads and /jobs/{id}
endpoints exist, TS request/response types should come from the api's OpenAPI schema
(openapi-typescript against /openapi.json), not be hand-written — auth types here are
hand-written only because there's no OpenAPI-typescript step wired up yet.
-->
