import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shoyaib Islam - Front-end Developer ',
  description: 'Front-end Developer Portfolio of Shoyaib Islam. MERN-stack developer building responsive web applications.',
  icons: {
    icon: '/favicon.png',      
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  themeColor: '#ffffff',    
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${poppins.variable} font-display bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-300 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
