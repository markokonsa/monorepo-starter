# Template: Modern Monorepo Application

A modern, full-stack web application built with Next.js, Supabase, and a comprehensive design system. This monorepo template provides a solid foundation for building scalable applications with authentication, user management, and a beautiful UI component library.

## 🚀 Features

### Authentication & User Management
- **Multiple Auth Methods**: Email/password, magic link authentication
- **User Registration & Login**: Complete user onboarding flow
- **Password Reset**: Secure password recovery system
- **User Dashboard**: Personalized welcome experience with account information
- **Profile Management**: User settings and preferences

### User Interface
- **Modern Design System**: Built with shadcn/ui components
- **Dark/Light Theme**: System-aware theme switching
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Reusable UI components with Storybook documentation
- **Form Handling**: Robust form validation with React Hook Form and Zod

### Developer Experience
- **Monorepo Architecture**: Organized with Turborepo for optimal performance
- **TypeScript**: Full type safety across the entire codebase
- **Component Documentation**: Interactive Storybook for UI components
- **Code Quality**: ESLint, Prettier, and consistent code formatting
- **Package Management**: PNPM workspace for efficient dependency management

## 🏗️ Architecture

```
├── apps/
│   ├── app/                 # Next.js application
│   └── docs/               # Storybook documentation
├── packages/
│   ├── ui/                 # Shared UI component library
│   ├── eslint-config-custom/ # Shared ESLint configuration
│   ├── tailwind-config/    # Shared Tailwind configuration
│   └── tsconfig/           # Shared TypeScript configurations
└── supabase/              # Database configuration and migrations
```

## ��️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Component library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend & Database
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Database (via Supabase)
- **Row Level Security** - Database security

### Development Tools
- **Turborepo** - Monorepo build system
- **Storybook** - Component documentation
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PNPM** - Package manager

### Analytics & Monitoring
- **Umami** - Privacy-focused analytics

## �� Getting Started

### Prerequisites
- Node.js 18+ 
- PNPM 9+
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thesheet
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp apps/app/.env.example apps/app/.env.local
   ```
   
   Fill in your environment variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   UMAMI_WEBSITE_ID=your_umami_website_id
   ```

4. **Set up Supabase**
   ```bash
   # Start Supabase locally (optional)
   npx supabase start
   
   # Or connect to your remote Supabase project
   npx supabase link --project-ref your-project-ref
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open Storybook** (in another terminal)
   ```bash
   pnpm --filter docs dev
   ```

## 📱 Available Scripts

### Root Level
- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages
- `pnpm format` - Format code with Prettier
- `pnpm clean` - Clean all node_modules and build artifacts

### App Specific
- `pnpm --filter app dev` - Start Next.js app
- `pnpm --filter docs dev` - Start Storybook
- `pnpm --filter ui build` - Build UI package

## 🎨 UI Components

The application includes a comprehensive set of UI components built with shadcn/ui:

- **Form Components**: Input, Select, Label with validation
- **Layout Components**: Card, Dialog, Separator
- **Interactive Components**: Button, Dropdown Menu, Toast
- **Utility Components**: Skeleton, Icons
- **Special Effects**: Border Beam animation

View all components in Storybook at `http://localhost:6006`

## 🔐 Authentication Flow

1. **Landing Page** - Public splash page with call-to-action
2. **Authentication** - Login/register with multiple methods
3. **User Dashboard** - Personalized experience after login
4. **Settings** - User preferences and account management

## 🗄️ Database Schema

The application uses Supabase with the following key features:
- User authentication and profiles
- Row Level Security (RLS) policies
- Real-time subscriptions
- Database migrations

## 📦 Package Structure

### `apps/app`
The main Next.js application with:
- Authentication pages and flows
- User dashboard and settings
- API routes and server actions
- Middleware for route protection

### `packages/ui`
Shared component library with:
- Reusable UI components
- Design system tokens
- TypeScript definitions
- Storybook stories

### `packages/*-config`
Shared configuration packages for:
- ESLint rules
- Tailwind CSS setup
- TypeScript configurations

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## �� License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Supabase](https://supabase.com/) for the backend infrastructure
- [Turborepo](https://turbo.build/) for the monorepo tooling
- [Next.js](https://nextjs.org/) for the React framework

---
```

This comprehensive README provides:

1. **Clear project overview** with features and architecture
2. **Complete tech stack** documentation
3. **Step-by-step setup instructions** with prerequisites
4. **Available scripts** for development and deployment
5. **Component library documentation** with Storybook reference
6. **Authentication flow** explanation
7. **Database and package structure** details
8. **Deployment instructions** for various platforms
9. **Contributing guidelines** and acknowledgments