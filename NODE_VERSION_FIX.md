# 🔧 Node.js Version Fix

## Problem
You're getting a build error because your Node.js version is outdated.

## ✅ Solution Options

### Option 1: Update Node.js (Recommended)

#### Windows
1. Download latest Node.js from: https://nodejs.org/
2. Run the installer
3. Restart your terminal
4. Verify: `node --version` (should show v18+ or v20+)

#### Mac (using Homebrew)
```bash
brew update
brew upgrade node
```

#### Mac/Linux (using nvm)
```bash
# Install nvm if you don't have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install latest Node.js
nvm install node
nvm use node
```

#### Linux (using apt)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Option 2: Use Compatible Versions (Already Done)

I've updated `package.json` to use older, compatible versions:
- Next.js: 14.2.0 → 13.5.6
- React: 18.3.0 → 18.2.0
- Other packages downgraded for compatibility

Now run:
```bash
# Remove old dependencies
rm -rf node_modules package-lock.json

# Install compatible versions
npm install

# Start dev server
npm run dev
```

## Check Your Node.js Version

```bash
node --version
```

### Version Requirements
- **Minimum**: Node.js 16.14.0
- **Recommended**: Node.js 18.x or 20.x
- **Current Latest**: Node.js 20.x

## After Updating Node.js

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Still Having Issues?

### Clear npm cache
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Use specific Node version with nvm
```bash
nvm install 18
nvm use 18
npm install
npm run dev
```

## Verify Installation

```bash
# Check versions
node --version    # Should be 16.14.0 or higher
npm --version     # Should be 8.0.0 or higher

# Test the app
npm run dev
```

## Quick Fix Commands

```bash
# Full clean reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run dev
```

## Need Help?

1. Check your Node.js version: `node --version`
2. If below 16.14.0, update Node.js
3. Clean install: `rm -rf node_modules package-lock.json && npm install`
4. Try again: `npm run dev`

---

**After fixing, you should see:**
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

Then visit http://localhost:3000 🎉
