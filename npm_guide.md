# WL UI Kit Storybook - Installation & Usage Guide

## Quick Installation

### 1. Set up authentication
Create a .npmrc file in your project root:
```
@kvv190001:registry=https://npm.pkg.github.com/  
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN} 
```
If you need a GitHub token, reach out to Steven Vu.

### 2. Install the package
```
npm install @kvv190001/wl-ui-kit-storybook
```

### 3. Import styling from Tailwind
All components use Tailwind CSS, so projects must have Tailwind configured. 
If you haven't set it up yet, follow the guide below:

Tailwind installation guide (Vite):
```
https://tailwindcss.com/docs/installation/using-vite
```

Add this to your main CSS file:
```
@import "tailwindcss";
@source "../node_modules/@kvv190001/wl-ui-kit-storybook";
/* Adjust the path depending on your project structure */
```

### Docker Warning
If your project runs inside Docker, make sure to copy the .npmrc file before installing dependencies.

Add this line in your Dockerfile:
```
COPY .npmrc ./
```
right before:
```
RUN npm ci --production=false 
```