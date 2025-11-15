# Push to GitHub - Authentication Required

Your project is ready to push, but you need to authenticate with GitHub first.

## Option 1: Using Personal Access Token (Recommended)

1. **Create a Personal Access Token**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name like "Portfolio Push"
   - Select scopes: Check `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you'll only see it once!)

2. **Push using the token**:
   ```bash
   git push -u origin main
   ```
   - When asked for username: Enter `Pridhurshika`
   - When asked for password: Paste your **Personal Access Token** (not your password)

---

## Option 2: Using GitHub CLI (Easiest)

1. **Install GitHub CLI** (if not installed):
   ```bash
   winget install GitHub.cli
   ```

2. **Login**:
   ```bash
   gh auth login
   ```
   - Follow the prompts
   - Select GitHub.com
   - Select HTTPS
   - Authenticate in browser

3. **Push**:
   ```bash
   git push -u origin main
   ```

---

## Option 3: Use SSH (Alternative)

1. **Change remote to SSH**:
   ```bash
   git remote set-url origin git@github.com:Pridhurshika/portfolio.git
   ```

2. **Set up SSH key** (if you don't have one):
   - Follow: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

3. **Push**:
   ```bash
   git push -u origin main
   ```

---

## Quick Command (After Authentication)

Once authenticated, just run:
```bash
git push -u origin main
```

Your code will be pushed to: https://github.com/Pridhurshika/portfolio

