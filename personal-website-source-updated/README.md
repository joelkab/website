# Getting Started with Your Personal Website

This guide will help you understand the structure of your new personal website and how to customize it as you learn more about web development.

## Project Overview

This is a simple React website template with two tabs: Home and About. The code is intentionally kept minimal and well-commented to help you understand how everything works and build upon it as you learn.

## Project Structure

- `src/App.tsx` - The main component that controls which page is displayed
- `src/components/Navbar.tsx` - The navigation bar with Home and About tabs
- `src/components/HomePage.tsx` - The content for the Home page
- `src/components/AboutPage.tsx` - The content for the About page

## How to Run the Website

1. Open a terminal in the project directory (`my-personal-website`)
2. Run `pnpm run dev` to start the development server
3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## How to Customize

### Changing the Content

1. To modify the Home page content, edit `src/components/HomePage.tsx`
2. To modify the About page content, edit `src/components/AboutPage.tsx`
3. To change the website title or navigation, edit `src/components/Navbar.tsx`

### Adding More Tabs

1. Create a new component file in the `src/components` folder (e.g., `ProjectsPage.tsx`)
2. Add a new button in the `Navbar.tsx` file
3. Update the conditional rendering in `App.tsx` to include your new page

### Styling

The website uses Tailwind CSS for styling. You can modify the appearance by:
1. Changing the CSS classes in the component files
2. Adding custom styles in `src/App.css`

## Learning Resources

As you continue learning, here are some resources to help you:
- [React Documentation](https://react.dev/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Next Steps

Consider adding these features as you learn:
1. Add more tabs (Projects, Contact, etc.)
2. Add images and personal branding
3. Create interactive elements like forms or galleries
4. Deploy your website to a hosting service

Happy coding!
