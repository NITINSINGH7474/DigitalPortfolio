# NitinDev Digital Portfolio 🚀

A modern, highly-responsive, and deeply interactive personal portfolio built with React and Vite. This portfolio is designed with a premium sleek aesthetic, featuring buttery-smooth scroll animations, glassmorphism UI elements, and unique structural layouts.

## 🌟 Live Demo

**[View the Live Portfolio Here](https://NITINSINGH7474.github.io/CSE326-website-ca3/)**

---

## ✨ Key Features

- **Modern Aesthetic**: Clean, dark-themed UI with custom gradient accents, glowing borders, and backdrop blurs (glassmorphism).
- **Unique Skills Architecture**: 
  - *Languages*: Capsule pills with animated gradient progress bars.
  - *Frameworks*: Glass effect cards with circular SVG progress rings.
  - *Tools*: Interactive floating nodes that illuminate on hover.
  - *Soft Skills*: Elegant list with vibrant color gradient tracks.
- **Working Contact Form**: Integrated with [FormSubmit](https://formsubmit.co) to securely forward messages directly to email without requiring a backend server.
- **Seamless Downloads**: Built-in functionality to directly download the user CV/Resume and earned Certificates with dynamic animated glow buttons.
- **Buttery Animations**: Custom `IntersectionObserver` triggers for scroll reveals, `cubic-bezier` bouncy transitions, and CSS keyframe infinite shimmers.

---

## 🛠️ Built With

- **[React 18](https://reactjs.org/)**: Core UI library.
- **[Vite](https://vitejs.dev/)**: Next-generation frontend tooling for ultra-fast HMR and building.
- **Custom CSS3**: Built entirely with plain CSS variables, avoiding bulky external CSS frameworks for maximum performance.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Lightweight scalable vector icons (`Fi` and `Fa` sets).
- **GitHub Pages**: Fast, automated static hosting.

---

## 🚀 Getting Started Locally

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/en/) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NITINSINGH7474/CSE326-website-ca3.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd CSE326-website-ca3
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`.

---

## 📦 Deployment

This project uses `gh-pages` for automated deployment. 
To push changes to the live site, simply make your edits, ensure your base configuration in `vite.config.js` is correct, and run:

```bash
npm run deploy
```

---

## 📝 Configuration (For Developer Use)
- **Data Customization**: All portfolio data (projects, skills, education, contact info) is structurally defined as JSON arrays inside `src/data/data.js` so it acts as a single source of truth—making updates extremely easy!
- **Changing CV**: Swap out the existing `public/resume.pdf` with your actual file!

<br>
<p align="center"><i>Designed and built by Nitin Singh.</i></p>
