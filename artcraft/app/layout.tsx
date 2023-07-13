import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import RegisterModal from './components/modals/RegisterModal'
import getCurrentUser from './actions/getCurrentUser'
import ClientOnly from './components/ClientOnly'
import SellModal from './components/modals/SellModal'
const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'ArtCraft',
  description: 'ArtCraft clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <SellModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />

        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>

      </body>
    </html>
  )
}