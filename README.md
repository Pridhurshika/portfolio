# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS for Rathnavel Pridhurshika.

## Features

- Clean, modern design with generous whitespace
- Fully responsive layout (mobile-friendly)
- Smooth scrolling navigation
- Professional academic portfolio layout
- Sections: Home, Skills, Education, Research, Projects, Activities, and Contact

## Tech Stack

- React 18
- Tailwind CSS 3
- Vite (build tool)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── index.html          # Root HTML file (Vite entry point)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Research.jsx
│   │   ├── Projects.jsx
│   │   ├── Activities.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.jsx       # Entry point (renamed from .js to .jsx)
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Customization

All personal information is located in the component files. You can easily update:
- Contact information in `Home.jsx` and `Contact.jsx`
- Profile summary in `Home.jsx`
- Skills in `Skills.jsx`
- Education details in `Education.jsx`
- Research information in `Research.jsx`
- Projects in `Projects.jsx`
- Activities in `Activities.jsx`

## License

All rights reserved.

