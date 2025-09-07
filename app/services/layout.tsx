import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { FloatingContact } from '../components/FloatingContact'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
    </>
  )
}