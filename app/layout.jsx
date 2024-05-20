import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Biblio-app',
  description: 'Demo Cours Programmation web avancé',
};
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}