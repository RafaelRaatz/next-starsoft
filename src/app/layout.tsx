import '@/styles/GlobalStyles.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Cart, Footer, Header } from '@/components'
import StyledComponentsRegistry from './lib/registry'
import { Providers } from '@/providers/providers'

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Starsoft',
  description: 'NFT gaming site',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en">
        <body className={poppins.variable}>
          <Providers>
            <Cart />
            <Header />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  )
}
