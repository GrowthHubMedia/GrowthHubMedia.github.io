# Makefile for deploying Vite app to GitHub Pages (user/organization site)

# Build the project
build:
	npm run build

# Clean all files except dist, node_modules, .git, and Makefile
clean:
	rm -rf !(dist|node_modules|.git|Makefile|.gitignore|package.json|package-lock.json|bun.lockb|README.md|postcss.config.js|tailwind.config.ts|tsconfig.app.json|tsconfig.json|tsconfig.node.json|vite.config.ts|public|src|components.json|eslint.config.js|index.html)

# Deploy: build, clean, move dist contents to root, and push
# WARNING: This will overwrite your project files in the repo root with the build output!
deploy: build
	cp -r dist/* .
	git add .
	git commit -m "Deploy to GitHub Pages"
	git push

.PHONY: build clean deploy
