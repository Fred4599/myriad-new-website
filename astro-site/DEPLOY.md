# Deploy Myriad Site to GitHub & Vercel

## 1. Push to GitHub

The repo [Fred4599/myriad-new-website](https://github.com/Fred4599/myriad-new-website) should contain **this Astro project at the root** (this folder’s contents).

From this directory (`astro-site`):

```bash
cd "/Users/braydoncarter/John New Website/astro-site"

# If this folder isn’t a git repo yet:
git init
git add .
git commit -m "Initial commit: Myriad small business community site (Astro + Tailwind)"

# Point at the GitHub repo (use main branch)
git branch -M main
git remote add origin https://github.com/Fred4599/myriad-new-website.git

# Push (you may need to pull first if the repo has a README/license)
git push -u origin main
```

If the GitHub repo already has commits (e.g. README or license), do a pull first:

```bash
git remote add origin https://github.com/Fred4599/myriad-new-website.git
git branch -M main
git pull origin main --allow-unrelated-histories
git add .
git commit -m "Initial commit: Myriad small business community site (Astro + Tailwind)"
git push -u origin main
```

---

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
2. **Add New Project** → **Import** the repo `Fred4599/myriad-new-website`.
3. Vercel will detect **Astro** and set:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. No need to set a “Root Directory” if the repo root is this Astro app.
5. After deploy, you’ll get a URL like `myriad-new-website.vercel.app`. You can add a custom domain in the project’s **Settings → Domains**.

### Optional: custom domain

- In the Vercel project: **Settings → Domains** → add your domain.
- Follow Vercel’s DNS instructions (e.g. A/CNAME records at your registrar).

---

## 3. After going live

- **Calendar link:** In `src/pages/index.astro`, set `CALENDAR_URL` to your real scheduling link (e.g. Calendly) so “Sign Me Up”, “Getting Started”, and “Schedule NOW” point to your calendar.
- **Env / secrets:** If you add env vars later, set them in Vercel under **Settings → Environment Variables**, then redeploy.
