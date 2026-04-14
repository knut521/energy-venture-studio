MVP Deployment Details:
=========================
Directory: /data/projects/13f06e1d-690a-4876-96e6-ef7eca9c296e
Needs Database: true
Environment Variables: {"ENV": "prod"}
Project Name: automated-venture-building-studio
Deployment Commands:
1. railway login
2. railway init
3. railway add -d postgres
4. railway variables set ENV=prod
5. railway up
6. railway domain
Alternative Platforms:
1. Render.com: Free tier, auto-deploy from GitHub, managed Postgres
2. Fly.io: Free tier, global edge, `flyctl launch` to deploy
3. Coolify: Self-hosted PaaS (if you have a VPS)