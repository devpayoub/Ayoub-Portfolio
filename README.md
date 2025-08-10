# Ayoub Trabelsi - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack Developer.

## 🚀 Live Demo

[Portfolio Website](https://your-portfolio-url.com)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth scrolling navigation and interactive elements
- **Contact Form**: Functional contact form with email integration
- **Dark Theme**: Beautiful dark theme with gradient accents
- **Type Animation**: Dynamic text animations in the hero section
- **Project Showcase**: Detailed project cards with filtering
- **Experience Timeline**: Professional experience displayed in timeline format
- **Skills Display**: Interactive skills section with icons
- **Downloadable CV**: Direct link to download resume

## 🛠️ Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications
- **Motion** - Animation library
- **React Type Animation** - Typing animations

### Backend & Services
- **Node.js** - Runtime environment
- **Nodemailer** - Email functionality
- **Gmail SMTP** - Email service

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.ts          # Email API endpoint
│   ├── components/
│   │   ├── ui/                   # UI components
│   │   ├── AboutSection.tsx      # Skills, certifications, hobbies
│   │   ├── EmailSection.tsx      # Contact form
│   │   ├── ExperienceSection.tsx # Work experience timeline
│   │   ├── HeroSection.tsx       # Landing section
│   │   ├── Navbar.tsx           # Navigation
│   │   ├── ProjectSection.tsx    # Projects showcase
│   │   └── ...                   # Other components
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── public/
│   └── images/                  # Static images
├── lib/                         # Utility functions
└── package.json                 # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devpayoub/Ayoub-Portfolio.git
   cd ayoub-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   BURNER_EMAIL=your-gmail-address@gmail.com
   BURNER_PASSWORD=your-app-password
   EMAIL=your-receiving-email@example.com
   ```

   **Note**: For Gmail, you'll need to use an App Password instead of your regular password. [Learn how to generate one](https://support.google.com/accounts/answer/185833).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The portfolio includes a functional contact form that sends emails using Gmail SMTP. To set this up:

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → App passwords
   - Generate password for "Mail"
3. Use the generated password in your `.env` file

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `app/components/HeroSection.tsx` - Name, title, and description
- `app/components/AboutSection.tsx` - Skills, certifications, hobbies
- `app/components/ExperienceSection.tsx` - Work experience
- `app/components/ProjectSection.tsx` - Projects
- `public/images/` - Profile photo and project images

### Styling
- Colors and themes can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`

### Content
- Update the hero section text and animations
- Modify project descriptions and links
- Add or remove skills and certifications
- Update experience timeline

## 📱 Sections

### Hero Section
- Animated typing effect with name and title
- Call-to-action buttons (Hire Me, Download CV)
- Profile photo with smooth animations

### About Section
- **Skills**: Interactive grid of technical skills with icons
- **Certifications**: Professional certifications
- **Hobbies**: Personal interests and activities

### Projects Section
- Filterable project cards
- GitHub links and descriptions
- Project screenshots
- Technology tags

### Experience Section
- Timeline layout for work experience
- Company logos and descriptions
- Date ranges and locations

### Contact Section
- Functional contact form
- Email integration
- Form validation and notifications

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: [trabelsi.ayoub1998@gmail.com]
- **GitHub**: [@devpayoub](https://github.com/devpayoub)

---

⭐ If you found this portfolio helpful, please give it a star!
