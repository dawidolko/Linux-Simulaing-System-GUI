# 🐧 linux.dawidolko.pl  
_A Vue-powered blog & desktop simulator that looks just like Deepin Linux_

[![Build](https://img.shields.io/github/actions/workflow/status/dawidolko/Linux-Simulaing-System-GUI/Build.yml?label=build&logo=github)](https://github.com/dawidolko/Linux-Simulaing-System-GUI/actions)
[![Website Status](https://img.shields.io/website?down_color=red&down_message=offline&up_message=online&url=https%3A%2F%2Flinux.dawidolko.pl)](https://linux.dawidolko.pl)
[![Stars](https://img.shields.io/github/stars/dawidolko/Simulaing-Linux-System-GUI?style=social)](https://github.com/dawidolko/Simulaing-Linux-System-GUI/stargazers)

> **Live Demo:** <https://linux.dawidolko.pl>

---

## 📑 Table of Contents
1. [About](#about)
2. [Project Structure](#project-structure)
3. [Star History](#star-history)
4. [Quick Start](#quick-start)
5. [Blog & Content Management](#blog--content-management)
6. [Feature Highlights](#feature-highlights)
7. [Contributing](#contributing)
8. [License & Author](#license--author)

---

## About
`linux.dawidolko.pl` is an **open-source portfolio and blogging platform** that perfectly imitates the Deepin Linux desktop inside the browser.  
Windows can be opened, moved, resized and layered just like on the real OS; a toy terminal, music player, recursive file system and markdown-powered blog come built-in. All pages are pre-rendered to static files so the whole site can be hosted for free on **GitHub Pages**. 🐧🖥️

Tech stack:

- **Vue 2** + **Vuetify** UI  
- **Tailwind CSS** & **PostCSS** for styling  
- **Vue Router** + **Vuex** + **Axios**  
- **Markdown-it** for article rendering  
- Fully static **/docs** output for easy deployment

---

## Project Structure
```text
.
├── .github/            # GitHub Actions & issue templates
├── docs/               # Pre-built static files (deployment target)
├── misc/               # Dev guidelines & helper scripts
├── public/             # Static assets served at /
├── src/                # Vue application source
│   ├── .env*           # Environment configs
│   ├── components/     # Re-usable Vue components
│   ├── router/         # Vue-Router setup
│   ├── store/          # Vuex modules
│   ├── views/          # Page-level components
│   └── assets/         # Images, icons, sounds
├── blog/               # 💡 Your markdown posts live here
├── generate.py         # Converts blog → static markdown JSON
├── tailwind.config.js
├── vue.config.js
├── package*.json       # NPM metadata & scripts
├── LICENSE             # AGPL-3.0
└── README.md           # You are here!
````

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=dawidolko/Linux-Simulaing-System-GUI\&type=Date)](https://star-history.com/#dawidolko/Linux-Simulaing-System-GUI&Date)

---

## Quick Start

> Tested with **Node 16+** and **@vue/cli 4.5.11**

```bash
# 1 – Clone the repo
git clone https://github.com/dawidolko/Linux-Simulaing-System-GUI
cd Linux-Simulaing-System-GUI

# 2 – Install dependencies
npm install     # or yarn / pnpm

# 3 – Run a local dev server (hot-reload)
npm run serve
```

### Build for Production

```bash
# Generate static markdown metadata
python3 generate.py

# Compile & minify to /docs
npm run build
```

`vue.config.js` is already configured so that GitHub Pages serves `docs/` as the site root.

---

## Blog & Content Management

| Task                            | How-to                                                                                                                           |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Add / edit articles**         | Place `.md` files anywhere under `/blog`. The first `# Heading` is used as the title; the first normal line becomes the excerpt. |
| **Direct-link to an article**   | `https://linux.dawidolko.pl/#/desktop/post/<FILENAME>.md`                                                                        |
| **Update playlist**             | Edit `public/musics.json` *(see existing format)* and store album art in `public/musiccovers/`.                                  |
| **Customise terminal commands** | Look inside `src/components/Terminal/commands.js`.                                                                               |
| **Static rebuild**              | After changing blog posts or music list, re-run `python3 generate.py && npm run build`.                                          |

---

## Feature Highlights

* 💻 **Deepin-inspired window system** – drag, resize, minimise, z-index management
* 📝 **Markdown-driven blog** – write posts in plain `.md`, no CMS required
* 🎵 **Mini music player** – powered by `vue-aplayer`; playlist is JSON-based
* 🖼️ **Theming** – Tailwind utility classes + Vuetify make style tweaks trivial
* ✨ **Zero-backend deployment** – everything compiles to static files for GitHub Pages

---

## Contributing

Whether you want to squash a bug 🐞, add a feature ✨ or fix a typo ✍️—PRs are welcome!

```bash
# Fork → clone
git checkout -b feat/amazing-feature

# Make your changes
npm run lint   # please keep the linter happy!

# Commit & push
git commit -m "Add amazing feature"
git push origin feat/amazing-feature

# Open a Pull Request 🚀
```

Because there are no automated GUI tests, **please describe what you changed and include screenshots or GIFs** when your PR touches the UI.

---

## License & Author

* **License:** GNU **AGPL v3** – free as in freedom 🆓
* **Author:** **Dawid Olko**

  * Portfolio: [https://dawidolko.pl](https://dawidolko.pl)
  * GitHub: [https://github.com/dawidolko](https://github.com/dawidolko)
  * LinkedIn: [https://www.linkedin.com/in/dawidolko/](https://www.linkedin.com/in/dawidolko/)

> Built in three caffeine-fuelled nights ☕ with Vue, Tailwind and tons of penguin love.
