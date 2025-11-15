# 🚀 Quick Deploy Your Portfolio

## Fastest Way: Deploy to Vercel (2 minutes)

### Method 1: Using Command Line

1. **Run this command in your project folder**:
   ```bash
   npx vercel --prod
   ```

2. **Follow the prompts**:
   - Login to Vercel (or create account)
   - Confirm deployment settings
   - Done! ✅

3. **Your portfolio URL will be**: `https://portfolio-xxxxx.vercel.app`

---

### Method 2: Using Vercel Website (No CLI needed)

1. **Go to**: https://vercel.com
2. **Sign up/Login** (use GitHub for easiest setup)
3. **Click "Add New Project"**
4. **Import your project**:
   - If on GitHub: Connect repository
   - If local: Drag and drop your project folder
5. **Vercel auto-detects Vite** - just click "Deploy"
6. **Done!** Your site is live in ~30 seconds

---

## Alternative: Deploy to Netlify

### Using Netlify Drop (Easiest - No account needed)

1. **Build your project first**:
   ```bash
   npm run build
   ```

2. **Go to**: https://app.netlify.com/drop
3. **Drag and drop** the `dist` folder
4. **Your site is live instantly!**

### Using Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## Your Portfolio Will Be Live At:

After deployment, you'll get a URL like:
- **Vercel**: `https://your-project.vercel.app`
- **Netlify**: `https://random-name-123.netlify.app`

**Share this URL with anyone!** 🌐

---

## Pro Tips:

1. **Vercel** is recommended for React/Vite projects (fastest setup)
2. Both services are **100% FREE** for personal projects
3. **Automatic HTTPS** included
4. **Custom domains** available (e.g., yourname.com)
5. **Auto-deploy** on Git push (if connected to GitHub)

---

## Need Help?

- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com

