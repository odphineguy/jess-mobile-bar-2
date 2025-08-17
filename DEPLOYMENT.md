# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name the repository: `jess-mobile-bar-2`
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Set Up Formspree (for Contact Form)

1. Go to [Formspree](https://formspree.io) and create a free account
2. Create a new form
3. After creating the form, you'll see a form ID that looks like `xrgjqkqr` or `abc123def`
4. Open `client/src/components/contact-section.tsx` in your code editor
5. Find line 52 that says: `const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {`
6. Replace `YOUR_FORM_ID` with your actual form ID from Formspree
7. The line should look like: `const response = await fetch("https://formspree.io/f/xrgjqkqr", {`

## Step 3: Update Repository URL

1. In `package.json`, replace `yourusername` in the homepage URL with your actual GitHub username
2. In `README.md`, replace `yourusername` in the clone URL with your actual GitHub username

## Step 4: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Jess Mobile Bar website"

# Add remote repository
git remote add origin https://github.com/odphineguy/jess-mobile-bar-2.git

# Push to GitHub
git push -u origin main
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"
5. The GitHub Actions workflow will automatically deploy your site

## Step 6: Access Your Site

Your site will be available at:
`https://odphineguy.github.io/jess-mobile-bar-2/`

## Important Notes

- The site will automatically rebuild and deploy whenever you push changes to the main branch
- Make sure to replace `YOUR_FORM_ID` in the contact form with your actual Formspree form ID
- The repository must be public for free GitHub Pages hosting
- The first deployment may take a few minutes to complete

## Troubleshooting

If the site doesn't load:
1. Check that the repository is public
2. Verify the GitHub Actions workflow completed successfully
3. Ensure the homepage URL in package.json matches your repository name
4. Check that the base path in vite.config.ts matches your repository name
