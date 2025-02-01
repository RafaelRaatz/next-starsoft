import '@/styles/GlobalStyles.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Cart } from '@/components'
import StyledComponentsRegistry from './lib/registry'
import { Providers } from '@/providers/providers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            <ToastContainer />
          </Providers>
        </body>
      </html>
    </>
  )
}
