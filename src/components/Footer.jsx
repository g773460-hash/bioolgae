import { Link } from 'react-router-dom'
import { AtomIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark">
                <AtomIcon size={26} />
              </span>
              <span className="brand-copy">
                <strong>ХимБио</strong>
                <small>сдать на отлично</small>
              </span>
            </Link>
            <p>
              Учебный проект о спокойной и системной подготовке к экзаменам
              по химии и биологии.
            </p>
          </div>

          <div className="footer-col">
            <h3>Разделы</h3>
            <Link to="/">Главная</Link>
            <Link to="/prep">Подготовка</Link>
          </div>

          <div className="footer-col">
            <h3>Автор</h3>
            <span className="footer-author">Хоменко Георгий</span>
            <span>создатель сайта</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ХимБио. Учебный проект.</span>
          <span>Химия + биология = понятный маршрут</span>
        </div>
      </div>
    </footer>
  )
}
