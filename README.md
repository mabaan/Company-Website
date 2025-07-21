# GC International Website

This repository contains the source code for the [GC International](https://gcintle.com) website. The site is built with **Astro** and integrates **React** components styled with **Tailwind CSS**. Data such as job openings and network map locations are pulled from **Airtable** via custom TypeScript helpers.

GC International uses **Cloudflare** for DNS management and SSL/TLS, while the site itself is hosted on **Amazon Amplify** with additional services including **Route 53**, **SES**, and **S3**.

## Table of Contents
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Built With
- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Airtable](https://airtable.com/)
- [GSAP](https://greensock.com/gsap/), [animejs](https://animejs.com/)
- [Leaflet](https://leafletjs.com/) and [react-leaflet](https://react-leaflet.js.org/)
- [Three.js](https://threejs.org/)

## Getting Started
1. Clone the repository
   ```bash
   git clone https://github.com/your-org/company-website.git
   cd company-website
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.
4. Build for production
   ```bash
   npm run build
   ```

## Environment Variables
Create a `.env` file (there is a `.env.example` template in the repo) and supply the following values required for Airtable integration:

- `AIRTABLE_TOKEN` – API key
- `AIRTABLE_BASE_ID` – Base ID containing project tables
- `AIRTABLE_APPLICATIONS_TABLE` – Table name for job applications
- `AIRTABLE_JOBS_TABLE` – Table name for job listings
- `AIRTABLE_NETWORKMAP_NAME` – Table name for location data

## Deployment
The live site is available at **[gcintle.com](https://gcintle.com)**.

- **Cloudflare** manages the DNS records and provides SSL/TLS.
- **Amazon Amplify** builds and hosts the application.
- **Route 53**, **SES**, and **S3** are used alongside Amplify for domain management, email services, and asset storage.

To deploy your own version, configure these services and run `npm run build`. The generated `dist/` folder can be uploaded to Amplify.

## Contact
Mohammed Abaan: <br>
<a href="mailto:abaan7500@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-d5d5d5?style=for-the-badge&logo=gmail&logoColor=0A0209" alt="Email Abaan" />
</a>
<br><br>
Haider Raza: <br>
<a href="mailto:b00096026@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-d5d5d5?style=for-the-badge&logo=gmail&logoColor=0A0209" alt="Email Haider" />
</a>
<br><br>
Project Link: [https://github.com/mabaan/Anime-Recommendation-Model](https://github.com/mabaan/Company-Website)

## Acknowledgments
