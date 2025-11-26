# How to Run Vegan Junkies Website

## Quick Start

### On Emergent Platform (Current Setup)
Your website is **already running**! 🎉
- Frontend is live and accessible through your browser preview
- No backend server needed

### Running Locally in VSCode Terminal

1. **Open Terminal** (Terminal → New Terminal)

2. **Navigate to frontend folder**
   ```bash
   cd /app/frontend
   ```

3. **Install dependencies** (first time only)
   ```bash
   yarn install
   ```

4. **Start the development server**
   ```bash
   yarn start
   ```

5. **Access the website**
   - Open your browser to: `http://localhost:3000`
   - The app will automatically reload when you make changes

## Available Commands

### Development
```bash
cd /app/frontend
yarn start          # Start development server
```

### Build for Production
```bash
cd /app/frontend
yarn build          # Creates optimized production build in /build folder
```

### Add New Packages
```bash
cd /app/frontend
yarn add package-name       # Always use yarn, never npm
```

## Project Structure
```
/app/
└── frontend/              # React application
    ├── src/
    │   ├── components/    # React components (Header, Hero, Menu, etc.)
    │   ├── mock.js       # Mock data for menu items and forms
    │   ├── App.js        # Main app component
    │   ├── App.css       # App-specific styles
    │   └── index.css     # Global styles with Tailwind
    ├── public/           # Static files
    └── package.json      # Dependencies
```

## Troubleshooting

### Port already in use?
```bash
# Kill the process using port 3000
sudo lsof -ti:3000 | xargs kill -9

# Then restart
cd /app/frontend && yarn start
```

### Dependencies issues?
```bash
# Clean install
cd /app/frontend
rm -rf node_modules yarn.lock
yarn install
```

### Clear cache and restart
```bash
cd /app/frontend
yarn cache clean
yarn start
```

## Notes
- ✅ This is a **frontend-only** project - no backend needed
- ✅ Forms use **mock data** stored in browser localStorage
- ✅ Hot reload is enabled - changes appear automatically
- ⚠️ Always use `yarn` (not `npm`) for package management

---

**Need help?** The website is fully functional with mock data and doesn't require any server setup!
