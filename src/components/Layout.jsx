import Header from './Header'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs'

function Layout({ children }) {
  return (
    <>
      <Header />

      <main className="main-content">
        <Breadcrumbs />
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout
