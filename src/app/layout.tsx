import StyledComponentsRegistry from './lib/registry';
import { Cart, Footer, Header } from '@/components';
import { Providers } from '@/providers/providers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import '@/styles/GlobalStyles.css';

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Starsoft',
  description: 'NFT gaming site',
  keywords: ['games', 'jogos', 'NFT'],
  metadataBase: new URL('http://172.27.144.1:3001/'),
  openGraph: {
    images: [
      {
        url: '/images/logo.png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang='en'>
        <body className={poppins.variable}>
          <Providers>
            <Cart />
            <Header />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            <Footer />
            <ToastContainer />
          </Providers>
        </body>
      </html>
    </>
  );
}
