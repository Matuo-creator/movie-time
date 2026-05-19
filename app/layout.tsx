import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MovieTime - منصة أفلام عربية',
  description: 'تابع أحدث الأفلام القادمة والتريلرات',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}