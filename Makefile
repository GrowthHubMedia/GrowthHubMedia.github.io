# Makefile for deploying Vite app to GitHub Pages (user/organization site)

# Build the project to docs folder
build: clean
	npm run build

# Clean docs folder
clean:
	rm -rf docs/*

# Deploy: build and push docs folder
deploy: build
	git add docs
	git commit -m "Deploy to GitHub Pages (docs folder)"
	git push

run-local:
	npx serve docs

.PHONY: build clean deploy
