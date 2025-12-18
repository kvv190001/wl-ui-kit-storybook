# wl-ui-kit-storybook

A React component library built with TypeScript, Tailwind CSS, and Storybook. This repository provides a standardized set of UI primitives for building consistent web applications.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js)

You can verify your installation by running:
```bash
node --version
npm --version
```

## Downloading the Repository

To download and clone this repository from Bitbucket, follow these steps:

1. Open your terminal or command prompt

2. Navigate to the directory where you want to clone the repository:
   ```bash
   cd /path/to/your/projects
   ```

3. Clone the repository using HTTPS:
   ```bash
   git clone https://bitbucket.org/wl-ii/wl-ui-kit-storybook.git
   ```

4. Navigate into the cloned repository:
   ```bash
   cd wl-ui-kit-storybook
   ```

## Running the Project Locally

Once you have cloned the repository, follow these steps to run the project on your local machine:

### 1. Install Dependencies

First, install all the required dependencies:

```bash
npm install
```

This command will download and install all the packages listed in `package.json`.

### 2. Start Angular Storybook

Run this command:

```
npm run storybook:angular
```

This will start the Angular Storybook development server, and it should automatically open in your browser at:
```
http://localhost:7008
```

If it doesn't open automatically, you can manually navigate to `http://localhost:7008` in your web browser.

#### Note: Make sure that the localhost:7008 run first before starting the next step

### 3. Run Both Storybooks Together

To run both the React + Angular component library in development mode with Storybook:

```bash
npm run storybook
```

This will start the Storybook development server, and it should automatically open in your browser at:
```
http://localhost:6006
```

If it doesn't open automatically, you can manually navigate to `http://localhost:6006` in your web browser.

## Available Commands

This project includes several npm scripts for different tasks:

- **`npm run storybook`** - Start React Storybook development server (runs on port 6006)
- **`npm run storybook:Angular`** - Start Angular Storybook development server (runs on port 7008)
- **`npm run dev`** - Start Vite development server
- **`npm run build`** - Build the project for production (TypeScript compilation + Vite build)
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run preview`** - Preview the production build locally
- **`npm run build-storybook`** - Build a static version of Storybook

## Project Structure

This component library includes:

- **Layout Components**: Container, Grid, Stack, Divider
- **Navigation Components**: Navbar, Breadcrumbs, Sidebar
- **Form Components**: Button and other form elements
- **Theme System**: Built-in dark/light mode support
- **TypeScript**: Full type safety throughout the codebase

## Technology Stack

- **React 18** with TypeScript
- **Angular 20** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Storybook** for component documentation
- **Vitest** for testing

## Need Help?

If you encounter any issues or have questions, please contact the repository owner or admin.


## Note for Developers:
- The Storybook GUI is auto deployed once the code is pushed to github
- To update npm packages, run:
```
npm run build:lib
npm version patch
npm publish --registry=https://npm.pkg.github.com
```

## Deploying the Storybook GUI to AWS
1. Build storybook by creating static files:
```
npm run build-storybook
```

2. Create an S3 bucket:
- Block all public access: ✅ ON (recommended)
- CloudFront will access S3 privately via OAC (Origin Access Control)

3. Upload Storybook files to S3
- Do not upload storybook-static folder to S3, only upload the files inside that folders

4. Create a CloudFront distribution
- Origin type: Amazon S3
- Origin access: Enable Origin Access Control (OAC) instead of public bucket access
- Default root object: index.html

5. Attach S3 bucket policy (IMPORTANT)
```
{
    "Version": "2008-10-17",
    "Id": "PolicyForCloudFrontPrivateContent",
    "Statement": [
        {
            "Sid": "AllowCloudFrontServicePrincipal",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::wl-ui-kit-storybook/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "arn:aws:cloudfront::898761058815:distribution/E2Y301L3DZRBPB"
                }
            }
        }
    ]
}
```