# Portfolio Deployment Guide

This guide will help you deploy your portfolio website so everyone can access it via a public URL.

## Option 1: Deploy to Vercel (Recommended - Easiest)

Vercel is the easiest and fastest way to deploy your portfolio.

### Steps:

1. **Install Vercel CLI** (if you don't have it):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from your project directory**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - It will ask if you want to deploy to production (type `Y`)
   - Your site will be live in seconds!

4. **Your portfolio will be available at**: `https://your-project-name.vercel.app`

### Alternative: Deploy via Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository (or drag and drop your project folder)
5. Vercel will automatically detect Vite and deploy
6. Your site will be live!

---

## Option 2: Deploy to Netlify

### Steps:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project** (already done):
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Follow the prompts** to create an account or login

### Alternative: Deploy via Netlify Website

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop your `dist` folder to the Netlify dashboard
4. Your site will be live instantly!

---

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js** to include base path:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages** in your repository settings

---

## Quick Deploy Commands

### Vercel (Fastest):
```bash
npx vercel --prod
```

### Netlify:
```bash
npx netlify-cli deploy --prod --dir=dist
```

---

## After Deployment

Once deployed, you'll get a URL like:
- Vercel: `https://your-portfolio.vercel.app`
- Netlify: `https://your-portfolio.netlify.app`
- GitHub Pages: `https://yourusername.github.io/portfolio`

Share this URL with anyone to view your portfolio!

---

## Custom Domain (Optional)

Both Vercel and Netlify allow you to add a custom domain:
- Vercel: Go to Project Settings → Domains
- Netlify: Go to Site Settings → Domain Management

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- GitHub Pages Docs: https://pages.github.com

