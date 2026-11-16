import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AtomIcon, ArrowIcon } from './Icons.jsx'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/prep', label: 'Подготовка' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-locked', open)
    return () => document.body.classList.remove('menu-locked')
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <AtomIcon size={26} />
          </span>
          <span className="brand-copy">
            <strong>ХимБио</strong>
            <small>сдать на отлично</small>
          </span>
        </Link>

        <nav className={`header-nav ${open ? 'open' : ''}`} aria-label="Основная навигация">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/prep" className="header-cta" onClick={() => setOpen(false)}>
            План на 12 недель
            <ArrowIcon size={16} />
          </Link>
        </nav>

        <button
          type="button"
          className={`burger ${open ? 'open' : ''}`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
