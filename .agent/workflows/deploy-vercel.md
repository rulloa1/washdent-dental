---
description: How to deploy the Washington Dental website to Vercel
---

# Deploy to Vercel

Vercel is the recommended hosting platform for Next.js applications.

## Prerequisites
- A Vercel account (https://vercel.com)
- Vercel CLI installed (optional, but recommended): `npm i -g vercel`

## Option 1: Deploy using Git (Recommended)
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2. Log in to Vercel and click "Add New... > Project".
3. Import your Git repository.
4. Vercel will automatically detect that it's a Next.js project.
5. Click **Deploy**. Vercel will build and deploy your site automatically.

## Option 2: Deploy using Vercel CLI
If you don't want to use Git integration or want to deploy from your local machine:

1. Open a terminal in your project root.
2. Run the deployment command:
   ```bash
   npx vercel
   ```
3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - Project name? **washdent-dental** (or press Enter)
   - In which directory? **./** (press Enter)
   - Want to modify settings? **N**

4. Vercel will build your project and provide a `Production` URL when finished.

## Option 3: Deploy using Netlify (Alternative)
1. Push code to Git.
2. Log in to Netlify.
3. "Add new site" > "Import an existing project".
4. Select your repo.
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click **Deploy**.
