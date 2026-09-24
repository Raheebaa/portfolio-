# Raheeba M — Premium DevOps & Cloud Engineer Portfolio

A production-grade personal portfolio website for **Raheeba M**, Cloud & DevOps Engineer. Inspired by the editorial typography, spacious layouts, dark developer aesthetics, and subtle motion design of high-end engineering portfolios (such as `akhisham.com`), this site showcases real-world cloud architecture, infrastructure automation, Kubernetes orchestration, and continuous delivery systems.

---

## ✨ Features & Engineering Highlights

* **Enterprise Cloud Topology Visualizer**: Interactive SVG architecture graph mapping AWS, OCI, Kubernetes (OKE), Docker, Terraform, CI/CD, and Linux with live telemetry inspection.
* **Animated Pipeline ("From Code to Production")**: Interactive 7-stage walkthrough (Developer → Git → CI/CD → Docker → Kubernetes → Cloud Infrastructure → Monitoring) with automated progression and stage-specific telemetry.
* **Separated Modular Data Layer**: All profile data, projects, experience, skills, certifications, and notes live in `src/data/profile.ts` for clean maintenance without modifying UI code.
* **Performance & Polish**: Spring-based Framer Motion micro-interactions, magnetic buttons, custom follower cursor (desktop only), and full respect for `prefers-reduced-motion`.
* **Zero Fictional Data**: Honest, verified technical competencies with modular placeholders for future roles, certifications, and project links.
* **Full Accessibility & SEO**: Semantic HTML5, ARIA labels, responsive navigation drawer, OpenGraph / Twitter metadata, and structured sitemap.

---

## 🛠️ Tech Stack

* **Framework**: React 18 with TypeScript
* **Bundler & Dev Server**: Vite
* **Styling**: Tailwind CSS with custom dark luxury palette
* **Animation Engine**: Framer Motion
* **Iconography**: Lucide React
* **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 📂 Project Structure

```
src/
├── assets/          # Static icons & badge assets
├── components/      # Reusable UI primitives
│   ├── CustomCursor.tsx          # Smooth trailing desktop cursor
│   ├── InfrastructureVisual.tsx  # Interactive cloud topology graph
│   ├── MagneticButton.tsx        # Spring physics magnetic button
│   ├── Navbar.tsx                # Sticky nav with live status indicator
│   ├── ProjectCard.tsx           # Premium card with architecture specs
│   └── SectionHeading.tsx        # Numbered editorial heading
├── data/
│   └── profile.ts                # Single source of truth for all content
├── hooks/           # Custom React hooks
├── sections/        # Major page sections
│   ├── Hero.tsx                  # Split-screen editorial hero
│   ├── About.tsx                 # Mission & core architecture pillars
│   ├── Experience.tsx            # Vertical interactive timeline
│   ├── Projects.tsx              # Filterable selected work
│   ├── Skills.tsx                # Interactive categorized tech grid
│   ├── ArchitecturePipeline.tsx  # Code-to-production interactive pipeline
│   ├── Certifications.tsx        # AWS Solutions Architect credential
│   ├── CareerJourney.tsx         # Software -> Cloud & DevOps evolution
│   ├── EngineeringNotes.tsx      # Topics exploring & takeaways
│   ├── Contact.tsx               # Minimal contact form with mailto fallback
│   └── Footer.tsx                # Systems operational footer & back-to-top
├── styles/
│   └── globals.css               # Architectural grid, scrollbars, resets
├── utils/
│   └── cn.ts                     # Class merge utility
├── App.tsx          # Application shell
└── main.tsx         # React root mount
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Customizing Content

To update Raheeba's experience, certifications, projects, or links, simply edit:

`src/data/profile.ts`

Example modifications:
* **Contact & Socials**: Update `profile.social.linkedin`, `github`, and `email`.
* **Projects**: Add new projects under `profile.projects` with custom architecture bullet points and repository links.
* **Experience**: Update job titles, dates, or company accomplishments in `profile.experience`.
* **Certifications**: Add new verified credentials in `profile.certifications`.

### Saving contact messages to Google Sheets

The contact form sends `timestamp`, `name`, `email`, `category`, and `message` to a Google Apps Script Web App. The script appends one row to the first sheet in the configured spreadsheet.

1. Open the target spreadsheet and choose **Extensions → Apps Script**.
2. Copy the code from [`scripts/google-sheets-contact.gs`](./scripts/google-sheets-contact.gs) into the Apps Script editor.
3. Deploy it as a **Web app**, executing as you and allowing access to **Anyone**.
4. Copy the deployment `/exec` URL into `.env.local`:

   ```bash
   VITE_GOOGLE_SHEET_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
   ```

The spreadsheet edit URL is not used by the browser; only the deployed Web App URL can securely append rows.

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository (`raheeba-portfolio`).
4. Framework Preset will automatically detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

### Deploying to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set Build Command to `npm run build`.
3. Set Publish Directory to `dist`.
4. Deploy site.

---

## 📄 License

MIT © 2026 Raheeba M.
