<!-- README.md -->
<!-- LOGO & TITLE -->
<div align="center">
  <a href="https://github.com/mabaan/Company-Website">
    <img src="https://github.com/user-attachments/assets/5e8f247f-55bf-448b-a281-60ca7e394a6f" alt="Logo" width="350">
  </a>
  <h3 align="center">Company Website</h3>

  <p align="center">
    A public-facing, SEO-optimized website for GC International, built with Astro, React, Airtable and Sanity.  
    <br />
    <strong>Initial hosting:</strong> AWS Amplify → <strong>Now deployed on Vercel</strong> for improved performance.  
    <br />
    <br />
    <a href="https://github.com/mabaan/Company-Website"><strong>Explore the code</strong></a><br><br>
    <a href="https://github.com/mabaan/Company-Website/tree/main/Documentation"><strong>View Detailed Documentation »</strong></a>
    <br />
    <br />
  </p>
</div>

<!-- SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#seo-features">SEO Features</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#to-run">To Run</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project
This repository holds the **public facing website** for **GC International FZCO**. It is built with **Astro** for lightning-fast static pages, **React** for interactive components, and **Airtable** as a simple CMS. The site provides a clear overview of **services** and **locations**, and features a comprehensive **Careers Portal** that enables applicants to apply and hiring managers to view and organize applications directly in their email inbox via **APIs**, eliminating the need to learn a separate dashboard or access a database. All forms, API calls, and data fetches run on **serverless functions**, so no dedicated backend servers are required. We initially used **AWS Amplify** for CI/CD and hosting, and later migrated to **Vercel** to benefit from global edge caching, faster load times, and smooth deployments with each code update. We also manage **cloud storage** for long-term asset retention and leverage a **CDN** for website resources, ensuring reliability and improved performance. A separate pipeline was built using **Sanity CMS** so employees can easily update and publish content to the **blog page** without touching code.

## SEO Features
- Meta tags & Open Graph for social sharing  
- JSON-LD LocalBusiness structured data  
- `robots.txt` + `sitemap.xml` for crawler discovery  
- Fast Core Web Vitals (LCP, FID, CLS) via Vercel Speed Insights  
- Mobile-first, accessible HTML & optimized images

## Built With
- **Astro** — Static site framework  
- **React** — Interactive UI components  
- **Three.js** — Animation for GLB object  
- **Airtable** — Headless CMS for content management  
- **Vercel** — Hosting and edge deployment  

## Getting Started
Follow these steps to get a local copy up and running.

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation
```sh
# Clone the repository
git clone https://github.com/mabaan/Company-Website.git
cd Company-Website
# Install dependencies
npm install
# or
# yarn install
```

### Environment Variables

Copy `.env.example` to `.env` and provide your configuration values (API keys, mail tokens, etc.).

## To Run
<div align="center">
  <!-- Image 1 -->
<img width="1917" height="901" alt="image" src="https://github.com/user-attachments/assets/79007da8-99ad-4b9c-9648-ea1b03ec7210" />
  &nbsp;&nbsp;
  <!-- Image 2 -->
<img width="1916" height="1036" alt="image" src="https://github.com/user-attachments/assets/4b242aa6-8f23-4692-b2ac-82e382e7466c" />
  &nbsp;&nbsp;
  <!-- Image 3 -->
  <img width="1916" height="1065" alt="image" src="https://github.com/user-attachments/assets/d70cb132-aa76-403b-9f47-4eff57b4e535" />
    &nbsp;&nbsp;
  <!-- Image 4 -->
<img width="1918" height="1157" alt="image" src="https://github.com/user-attachments/assets/7821e341-b668-4f63-9828-305b1b078a00" />
    &nbsp;&nbsp;
</div>

**Development Server**
```sh
# Start local development server
npm run dev
```

**Build for Production**
```sh
npm run build
```

The output static files will be generated in the `dist/` directory, ready for deployment.

## Deployment
- Initial: AWS Amplify (CI/CD + hosting)
- Current: Vercel (Edge CDN, speed optimizations)

## Contributing
1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for details.

## Contact
Mohammed Abaan: <br>
<a href="mailto:abaan7500@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-d5d5d5?style=for-the-badge&logo=gmail&logoColor=0A0209" alt="Email Abaan" />
</a>
<br>
Haider Raza: <br>
<a href="mailto:b00096026@aus.edu">
  <img src="https://img.shields.io/badge/Gmail-d5d5d5?style=for-the-badge&logo=gmail&logoColor=0A0209" alt="Email Abaan" />
</a>

Project Link: [https://github.com/mabaan/Company-Website](https://github.com/mabaan/Company-Website)

## Acknowledgements
- [Astro Documentation](https://docs.astro.build/)
- [React Official Docs](https://reactjs.org/docs/getting-started.html)
- [Airtable API](https://airtable.com/api)
- [AWS Amplify Docs](https://docs.amplify.aws/)
- [Vercel Docs](https://vercel.com/docs)

<!-- SHIELDS & LINKS -->
[contributors-shield]: https://img.shields.io/github/contributors/mabaan/Company-Website.svg?style=for-the-badge
[contributors-url]: https://github.com/mabaan/Company-Website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mabaan/Company-Website.svg?style=for-the-badge
[forks-url]: https://github.com/mabaan/Company-Website/network/members
[stars-shield]: https://img.shields.io/github/stars/mabaan/Company-Website.svg?style=for-the-badge
[stars-url]: https://github.com/mabaan/Company-Website/stargazers
[issues-shield]: https://img.shields.io/github/issues/mabaan/Company-Website.svg?style=for-the-badge
[issues-url]: https://github.com/mabaan/Company-Website/issues
