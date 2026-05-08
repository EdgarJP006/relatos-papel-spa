import { Link, useLocation } from 'react-router-dom'
import { books } from '../data/books'

function getBreadcrumbItems(pathname) {
  if (pathname === '/') {
    return []
  }

  const pathParts = pathname.split('/').filter(Boolean)
  const items = [{ label: 'Inicio', to: '/' }]

  if (pathParts[0] === 'home') {
    items.push({ label: 'Catalogo' })
  } else if (pathParts[0] === 'login') {
    items.push({ label: 'Login' })
  } else if (pathParts[0] === 'profile') {
    items.push({ label: 'Perfil' })
  } else if (pathParts[0] === 'checkout') {
    items.push({ label: 'Checkout' })
  } else if (pathParts[0] === 'book') {
    const currentBook = books.find((book) => book.id === Number(pathParts[1]))
    items.push({ label: 'Catalogo', to: '/home' })
    items.push({ label: currentBook ? currentBook.title : 'Detalle del libro' })
  } else {
    items.push({ label: 'Pagina no encontrada' })
  }
  return items
}

function Breadcrumbs() {
  const { pathname } = useLocation()
  const items = getBreadcrumbItems(pathname)

  if (items.length === 0) {
    return null
  }

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={`${item.label}-${index}`}
              className={`breadcrumb-item${isLast ? ' is-current' : ''}`}
            >
              {item.to && !isLast ? (
                <Link to={item.to}>{item.label}</Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
