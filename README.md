# Sean Vos - Professional CV Website

A modern, professional CV website built with Astro, Tailwind CSS 4, and Decap CMS for Sean Sebastian Vos, Commercial Diver and Marine Professional.

## 🚀 Live Site

- **Production**: https://sean.vos.cv.ferma.in
- **Development**: http://localhost:7008
- **CMS Admin**: http://localhost:7008/admin (local) | https://sean.vos.cv.ferma.in/admin (production)

## 🏗️ Tech Stack

- **[Astro](https://astro.build)** - Static Site Generator
- **[Tailwind CSS 4](https://tailwindcss.com/)** - CSS Framework with CSS-first configuration
- **[Decap CMS](https://decapcms.org/)** - Git-based Content Management System
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[pnpm](https://pnpm.io/)** - Package Manager

## 📁 Project Structure

```
sean.vos.cv/
├── public/
│   ├── admin/              # Decap CMS admin interface
│   │   ├── config.yml      # CMS configuration
│   │   └── index.html      # Admin UI
│   └── uploads/            # Media uploads (certificates, photos)
├── src/
│   ├── content/            # Content collections
│   │   ├── personal/       # Personal information (settings page)
│   │   ├── qualifications/ # Certifications and qualifications
│   │   ├── employment/     # Work history
│   │   ├── education/      # Educational qualifications
│   │   └── certificates/   # Certificate images
│   ├── pages/              # Astro pages
│   │   ├── index.astro     # Main CV page
│   │   └── admin.astro     # CMS admin page
│   └── styles/
│       └── main.css        # Tailwind CSS with custom CV styles
├── src/content.config.ts   # Content collections schema
├── astro.config.mjs        # Astro configuration
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (currently using Node 20)
- pnpm (recommended package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sean.vos
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development servers**
   
   Start the Astro development server:
   ```bash
   pnpm dev
   ```
   
   Start the Decap CMS proxy server (in another terminal):
   ```bash
   npx decap-server
   ```

4. **Access the application**
   - **Website**: http://localhost:7008
   - **CMS Admin**: http://localhost:7008/admin

## 🎨 Features

### ✅ Completed Features

- [x] **Modern CV Layout** - Clean, professional design optimized for both screen and print
- [x] **Tailwind CSS 4** - Latest version with CSS-first configuration and P3 color support
- [x] **Content Management** - Decap CMS integration with settings pages for easy content updates
- [x] **Print Optimization** - Professional print styles with proper page breaks
- [x] **Responsive Design** - Mobile-first approach for all screen sizes
- [x] **TypeScript Support** - Full type safety throughout the project
- [x] **Content Collections** - Structured content with type validation
- [x] **Image Management** - Certificate and photo upload system
- [x] **Professional Typography** - Optimized fonts and spacing for CV presentation
- [x] **Settings Page** - File-based collection for personal information management

### 🚧 In Progress

- [ ] **Dynamic Content Integration** - Connect CMS content to page components
- [ ] **Certificate Gallery** - Interactive certificate viewing
- [ ] **Search & Filtering** - Find qualifications and employment history
- [ ] **PDF Export** - Generate downloadable PDF version

### 📋 Planned Features

- [ ] **GitHub Actions CI/CD** - Automated deployment to GitHub Pages
- [ ] **Custom Domain Setup** - Configure sean.vos.cv.ferma.in
- [ ] **SEO Optimization** - Meta tags, structured data, sitemap
- [ ] **Analytics Integration** - Track site usage and performance
- [ ] **PWA Features** - Offline support and app-like experience
- [ ] **Multi-language Support** - English/Afrikaans translations

## 🎯 Content Management

### Using Decap CMS

1. **Local Development**
   - Ensure both servers are running (Astro + Decap proxy)
   - Navigate to http://localhost:7008/admin
   - No authentication required in local mode

2. **Content Types**

   **Settings Page (File Collection):**
   - **Personal Information**: Contact details, photo, basic info
     - Configured as a settings page using file collections
     - Single file: `src/content/personal/details.md`
     - Delete protection enabled
     - No preview needed

   **Folder Collections:**
   - **Qualifications**: Certifications with expiry dates and categories
   - **Employment History**: Work experience with detailed descriptions
   - **Certificates**: Images of official certificates and documents
   - **Education**: Academic qualifications and training

3. **Content Structure**
   - Settings are stored as a single markdown file with YAML frontmatter
   - Other content is stored as individual markdown files per entry
   - Images are stored in `public/uploads/`
   - Content is automatically committed to Git

4. **Publish**: Changes are automatically saved and deployed

### Local Development Workflow

For developers working on the codebase:

1. **Switch to Local Backend** (temporarily)
   ```yaml
   # In public/admin/config.yml, comment out GitHub and enable local:
   # backend:
   #   name: github
   #   repo: your-username/your-repo-name
   #   branch: main
   
   backend:
     name: git-gateway
     branch: main
   local_backend: true
   ```

2. **Start Development Servers**
   ```bash
   pnpm dev              # Astro server (auto-assigned port)
   npx decap-server      # CMS proxy server (port 8081)
   ```

3. **Access Local CMS**: `http://localhost:XXXX/admin` (no auth required)

4. **Switch Back to Production** before committing changes

## 🎨 Styling & Design

### Design Principles

- **Professional**: Clean, minimalist design suitable for professional contexts
- **Print-First**: Optimized for printing with proper typography and spacing
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML
- **Performance**: Minimal CSS/JS footprint for fast loading

### Color Palette

- **Primary**: `oklch(0.2 0 0)` - Dark text for professional appearance
- **Secondary**: `oklch(0.5 0 0)` - Medium gray for supporting text
- **Background**: `oklch(1 0 0)` - Pure white for clean presentation
- **Accent**: `oklch(0.8 0 0)` - Light gray for subtle elements

### Print Styles

- Optimized font sizes (11pt for print)
- Proper page break handling
- Hidden interactive elements
- Professional black/white color scheme

## 🚀 Deployment

### Authentication Setup

The site is configured to use **GitHub OAuth** for content management access. This means:

- ✅ **CMS Authentication**: Users log in with their GitHub account
- ✅ **Repository Access**: Content editors need push access to the GitHub repository
- ✅ **Simple Setup**: No additional authentication servers required

### Production Deployment Steps

1. **Update Repository Information**
   ```yaml
   # In public/admin/config.yml, update:
   backend:
     name: github
     repo: your-username/your-repo-name  # Update this
     branch: main
   ```

2. **GitHub OAuth Application (if deploying to custom domain)**
   - Only required for non-Netlify hosting
   - For Netlify: OAuth is handled automatically

3. **Deploy to Platform**
   - **Netlify**: Connect GitHub repo, auto-deploy on push
   - **Vercel**: Connect GitHub repo, auto-deploy on push  
   - **GitHub Pages**: Enable in repository settings

4. **Access Control**
   - Content editors need **write access** to the GitHub repository
   - CMS will be accessible at `https://your-domain.com/admin`
   - Authentication is handled via GitHub login

### Content Management Access

- **URL**: `https://your-site-url.com/admin`
- **Authentication**: GitHub account with repository access
- **Permissions**: Users need write/push access to the repository
- **Local Development**: Run `pnpm dev` and use local backend mode

### Quick Deploy Options

**Option 1: Netlify (Recommended)**
1. Connect GitHub repository to Netlify
2. Deploy automatically on every push
3. CMS authentication handled by Netlify + GitHub

**Option 2: Vercel**
1. Connect GitHub repository to Vercel  
2. Deploy automatically on every push
3. May need to configure OAuth app for custom domains

**Option 3: GitHub Pages**
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions for build and deploy
3. Configure OAuth app for github.io domain

## 📝 Content Management

### For Content Editors (like Sean)

1. **Access the CMS**: Go to `https://site-url.com/admin`
2. **Login**: Use GitHub account (must have repository access)
3. **Edit Content**: Use the visual editor to update CV information
4. **Publish**: Changes are automatically saved and deployed

## 📊 Commands

| Command | Action |
|---------|--------|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development server (port 7008) |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `npx decap-server` | Start CMS proxy server |
| `pnpm astro --help` | Show Astro CLI help |

## 🤝 Contributing

This is a personal CV website for Sean Vos. For technical improvements or bug fixes, please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Private repository for Sean Sebastian Vos's professional CV.

## 🆘 Support

For technical issues or questions:
- Check the [Astro documentation](https://docs.astro.build)
- Review [Decap CMS docs](https://decapcms.org/docs/)
- Check [Tailwind CSS 4 documentation](https://tailwindcss.com/docs)
