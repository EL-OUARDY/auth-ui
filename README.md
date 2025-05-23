# Authentication UI

A sleek and modern authentication interface built with React, TypeScript, and TailwindCSS. The UI features a sliding animation between sign-in and sign-up forms with a dynamic sidebar overlay.
Check it out live: [View Demo](https://auth-ui-zeta.vercel.app/) 🚀

![Auth UI Demo](demo.gif)

## Features

- 🎨 Modern and responsive design
- 🔐 Sign in, sign up and Forgot password forms
- 🔄 Smooth sliding animations using `Framer Motion`
- 🎭 Password visibility toggle
- ✨ Custom UI components
- 🌐 Social media authentication options
- 🎯 Fully TypeScript support
- 🎯 Tailwind CSS for styling

## Performance Insights

This project is optimized for performance and accessibility. Below is a Lighthouse report showcasing the application's excellent scores in key areas such as performance, accessibility, best practices, and SEO.

![Lighthouse Report](lighthouse.svg)

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion (for animations)
- Vite
- Radix UI (for accessible components)

## Project Structure

```
src/
├── components/
│   └── auth/         # Authentication related
│       │── signin/   # Signin components + animation
│       │── signup/   # Signup components
│       └── sidebar/  # Sidebar components + animation
components
│   ├── icons/        # SVG icons components
│   └── ui/           # Reusable UI components
├── lib/
│   └── utils.ts      # Utility functions
└── assets/
    ├── fonts/        # Custom fonts
    └── img/          # Images and background shapes
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/EL-OUARDY/auth-ui.git
cd auth-ui
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
