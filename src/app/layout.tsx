import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import AuthGuard from '@/components/AuthGuard';
import LayoutWithSidebar from '@/components/LayoutWithSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Healthcare Admin Panel',
  description: 'Comprehensive healthcare administration system',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AuthGuard>
            <LayoutWithSidebar>
              {children}
            </LayoutWithSidebar>
          </AuthGuard>
        </AuthProvider>
      </body>
    </html>
  );
}
