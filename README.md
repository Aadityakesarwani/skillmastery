# SkillMastery

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview

SkillMastery is an online learning platform similar to Udemy. It allows users to browse, enroll in, and track their progress in various courses. Admins can upload and manage courses, providing a comprehensive learning experience. The project is built using Next.js and various other modern web technologies for a seamless and interactive user experience.

- **Live Site**: [SkillMastery](https://skillmastery.vercel.app/search)

## Features

- **User Authentication**: Secure user sign-up and login using Clerk.
- **Course Management**: Admins can upload, edit, and manage courses.
- **Progress Tracking**: Users can track their progress through courses.
- **Media Uploads**: Upload videos and other media files using UploadThing.
- **Payment Integration**: Integrated with Stripe for secure payments.
- **Responsive Design**: Mobile-friendly, responsive UI built with TailwindCSS.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database instance running.

### Steps

1. **Clone the repository**
    ```bash
    git clone https://github.com/Aadityakesarwani/skillmastery.git
    cd skillmastery
    ```

2. **Set up the server**
    - Navigate to the root directory and install dependencies.
    ```bash
    npm install
    ```

    - Create a `.env` file in the root directory and add your environment variables.
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

    DATABASE_URL="your_postgresql_database_url"
    DIRECT_URL="your_postgresql_direct_url"

    UPLOADTHING_SECRET=your_uploadthing_secret
    UPLOADTHING_APP_ID=your_uploadthing_app_id

    MUX_TOKEN_ID=your_mux_token_id
    MUX_TOKEN_SECRET=your_mux_token_secret

    STRIPE_API_KEY=your_stripe_api_key
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

    NEXT_PUBLIC_TEACHER_ID=your_teacher_id
    ```

3. **Run the development server**
    - In the root directory, run the following command to start the development server.
    ```bash
    npm run dev
    ```

## Usage

- **Browse Courses**: Visit the homepage to browse available courses.
- **Enroll in Courses**: Sign up or log in to enroll in courses.
- **Track Progress**: View your enrolled courses and track your progress.
- **Admin Dashboard**: Admins can access the dashboard to upload and manage courses.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements, bug fixes, or feature additions.

1. **Fork the repository**
2. **Create your feature branch**
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Commit your changes**
    ```bash
    git commit -m 'Add some feature'
    ```
4. **Push to the branch**
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Create a new Pull Request**
