<div align="center">

# 📱 Mo'men Bakr — Mobile Software Engineer Portfolio

<p align="center">
  <strong>Building pixel-perfect, scalable mobile applications with Flutter, Native Android (Kotlin), and iOS (SwiftUI) — engineered on Clean Architecture & BLoC.</strong>
</p>

<p align="center">
  <a href="https://github.com/MomenBakr"><img src="https://img.shields.io/badge/GitHub-MomenBakr-181717?style=for-the-badge&logo=github" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/momenbakr/"><img src="https://img.shields.io/badge/LinkedIn-Mo'men_Bakr-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn" /></a>
  <a href="mailto:momenbakr91@gmail.com"><img src="https://img.shields.io/badge/Email-momenbakr91%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  <a href="https://wa.me/201024137763"><img src="https://img.shields.io/badge/WhatsApp-%2B20_102_413_7763-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white" alt="Flutter" />
  <img src="https://img.shields.io/badge/Dart-0175C2?style=flat-square&logo=dart&logoColor=white" alt="Dart" />
  <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white" alt="Kotlin" />
  <img src="https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white" alt="Android" />
  <img src="https://img.shields.io/badge/Swift-FA7343?style=flat-square&logo=swift&logoColor=white" alt="Swift" />
  <img src="https://img.shields.io/badge/Clean_Architecture-00B4D8?style=flat-square" alt="Clean Architecture" />
  <img src="https://img.shields.io/badge/BLoC_Pattern-00D2FF?style=flat-square" alt="BLoC" />
  <img src="https://img.shields.io/badge/pub.dev-160%2F160%20Points-0175C2?style=flat-square&logo=dart" alt="Pub.dev" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
</p>

</div>

---

## 🌟 Overview

This repository contains the source code for the personal mobile engineering portfolio of **Mo'men Bakr**. Designed with rich aesthetics, oceanic cyber dark mode (`#050811`), and smooth hardware-accelerated animations, this portfolio showcases 14+ live App Store & Google Play applications, open-source packages, and deep engineering competencies.

### 🎯 Key Highlights
- **14+ Production Mobile Applications:** Interactive smartphone frames with real App Store and Google Play screenshots, category filtering, and Grid ⊞ / List ☰ view switcher.
- **Interactive 3D Avatar Guide:** A section-aware 3D roaming companion that points toward relevant content and provides contextual insights.
- **Published Plugin Spotlight:** Featured section for `native_picture_in_picture` on [pub.dev](https://pub.dev/packages/native_picture_in_picture) with a **160/160 maximum score**.
- **Live GitHub Synchronization:** Real-time API integration syncing stars, forks, and repository data.
- **Downloadable CV (PDF):** Integrated 1-click resume download across the Navbar, Hero, About card, and Contact section.
- **Locked 60/120fps Scroll Performance:** Zero layout thrashing, `content-visibility: auto`, and GPU-composited transforms.

---

## 🏗️ Architecture & Project Structure

The project is built using a **Clean Modular Architecture** that strictly decouples data models, custom hooks, and presentation components:

```
src/
├── data/                    # Pure data layer (models, copy & configurations)
│   ├── navigation.js        # Navbar link items
│   ├── skills.js            # 6 tech domains with logos & proficiencies
│   ├── experience.js        # Career timeline (MasDB Soft & Development KW)
│   ├── projects.js          # 14 production apps, stores & pub.dev package
│   ├── repos.js             # Fallback open-source repos & language colors
│   └── mascot.js            # Section guide quotes, badges & tips
│
├── hooks/                   # Custom hooks & side-effect managers
│   ├── useActiveSection.js  # 60fps RAF scroll tracker for active sections
│   ├── useGitHubRepos.js    # Live GitHub API fetching with fallback cache
│   └── useScrollReveal.js   # Pre-rendering IntersectionObserver hook
│
├── components/              # Presentation UI components
│   ├── Navbar.jsx           # Glass header, mobile drawer & CV button
│   ├── HeroSection.jsx      # Waving 3D avatar, headline & CTA buttons
│   ├── AboutSection.jsx     # Profile photo, bio, metrics & CV button
│   ├── SkillsSection.jsx    # Domain filter pills & brand icon tiles
│   ├── ExperienceSection.jsx# Timeline with achievement bullet points
│   ├── ProjectsSection.jsx  # Category tabs, Grid/List views & phone mockups
│   ├── PackagesSection.jsx  # pub.dev 160/160 picture-in-picture spotlight
│   ├── OpenSourceSection.jsx# Live-synced GitHub repository cards
│   ├── ContactSection.jsx   # Email, Call, WhatsApp bento grid & CV banner
│   ├── Footer.jsx           # Copyright & technology stack footer
│   ├── SectionGuideAvatar.jsx # Roaming 3D avatar with speech bubbles
│   └── LightboxModal.jsx    # Fullscreen screenshot lightbox with ESC support
│
├── App.jsx                  # Clean root coordinator (~100 lines)
├── App.css                  # Hardware-accelerated stylesheets
├── index.css                # Design system tokens & base styles
└── main.jsx                 # Application entry point
```

## 👨‍💻 About Mo'men Bakr

**Mobile Software Engineer** based in Giza, Egypt with **3+ years of experience** developing and deploying scalable mobile applications to the Apple App Store and Google Play Store:

- **E-Commerce & Retail:** Engineered 3-sided marketplace ecosystems (Customer × Merchant × Delivery) with real-time order lifecycle tracking and automated dispatching.
- **Cooperative Societies:** Built Gulf cooperative society platforms with secure checkout, inventory synchronization, and price comparison portals.
- **Clean Architecture & Standards:** Core discipline in BLoC state management, SOLID principles, offline-first database synchronization, and reactive streams.
- **Open Source:** Author of `native_picture_in_picture` on [pub.dev](https://pub.dev/packages/native_picture_in_picture) (160/160 points).

---

## 📬 Contact & Connect

- **Email:** [momenbakr91@gmail.com](mailto:momenbakr91@gmail.com)
- **Phone / WhatsApp:** [+20 102 413 7763](https://wa.me/201024137763)
- **LinkedIn:** [linkedin.com/in/momenbakr](https://www.linkedin.com/in/momenbakr/)
- **GitHub:** [github.com/MomenBakr](https://github.com/MomenBakr)
- **Resume:** [Download CV (PDF)](public/Momen_Bakr_CV.pdf)

---

<div align="center">
  <sub>Designed & Built with ❤️ by Mo'men Bakr © 2026. All rights reserved.</sub>
</div>
