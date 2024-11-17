# Portfolio

This is a portfolio project built using Nuxt 3 and Tailwind CSS. Here you'll find everything about me.

## Table of Contents

- [Installation](#Installation)
- [Running](#Running)
- [Features](#Features)
- [Project Structure](#Project-Structure)
- [Technologies Used](#Technologies-Used)
- [Future Plans](#Future-Plans)

## Installation

First, clone the repository and install the dependencies:

```sh
git clone https://github.com/453254/portfolio.git
cd portfolio
```

```sh
npm install
npx nuxi module add @nuxtjs/tailwindcss
npx tailwindcss init
```

```sh
npm run dev
```

## Running

To run the project in development mode, use:


```sh
npm run dev
```

To build the static project for production:


```sh
npm run build
```

To preview the built project:

```sh
npm run preview
```

## Features

- **Theme Switcher**: Ability to toggle between light and dark themes.
- **Language Switcher**: Interface language selection capability (only the switcher is implemented).
- **Skill Cards**: Display of my skills using icons.
- **Social Media Links**: Quick access to my social media profiles like Telegram and GitHub.


## Project Structure

```
└── 📁portfolio
    └── 📁.git
    └── 📁.nuxt
    └── 📁assets
        └── 📁css
            └── custom.css
            └── main.css
            └── themeswitcher.css
        └── 📁image
            └── cursor.cur
            └── profile-photo.jpg
        ├── sound
    └── 📁components
        └── 📁Custom
            └── 📁SkillList
                └── SkillCard.vue
                └── SkilsList.vue
            └── Button1.vue
            └── GitHubLink.vue
            └── LangSwitcher.vue
            └── TGLink.vue
            └── ThemeSwitcher.vue
        └── 📁Main
            └── Footer.vue
        └── ButtonsCard.vue
        └── ProfileCard.vue
    └── 📁layouts
        └── default.vue
    └── 📁pages
        └── index.vue
    └── 📁public
        └── favicon.ico
        └── robots.txt
    └── 📁server
        └── tsconfig.json
    └── .gitignore
    └── app.vue
    └── nuxt.config.ts
    └── package-lock.json
    └── package.json
    └── README.md
    └── tailwind.config.js
    └── tsconfig.json
```

## Technologies Used

- [Nuxt 3](https://nuxt.com/) - A framework for creating server-side applications with Vue.js.
- [Vue 3](https://vuejs.org/) - A progressive framework for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling.
- [TypeScript](https://www.typescriptlang.org/) - A programming language based on JavaScript.

## Future Plans

Add a card displaying completed projects.
