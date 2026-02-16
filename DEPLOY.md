# Deploy Myriad Site to GitHub & Vercel

## 1. Push to GitHub

Repo: **[Fred4599/myriad-new-website](https://github.com/Fred4599/myriad-new-website)**. The Astro app is at the repo root.

From this directory:

```bash
cd "/Users/braydoncarter/John New Website"

# Push (use your GitHub auth: SSH key or Personal Access Token)
git push -u origin main
```

If the remote isn't set:

```bash
git remote add origin https://github.com/Fred4599/myriad-new-website.git
git branch -M main
git push -u origin main
```

---

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (e.g. with GitHub).
2. **Add New Project** → **Import** the repo `Fred4599/myriad-new-website`.
3. Vercel will detect **Astro** and use `vercel.json`:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. No Root Directory change needed.
5. You’ll get a URL like `myriad-new-website.vercel.app`. Add a custom domain under **Settings → Domains** if you want.

### Optional: custom domain

- In the Vercel project: **Settings → Domains** → add your domain and follow the DNS steps (A/CNAME at your registrar).

---

## 3. After going live

- **Calendar link:** In `src/pages/index.astro`, set `CALENDAR_URL` to your real scheduling link (e.g. Calendly).
- **Env / secrets:** Add any env vars in Vercel under **Settings → Environment Variables**, then redeploy.
