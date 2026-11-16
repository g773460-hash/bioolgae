import { Link } from 'react-router-dom'
import {
  ArrowIcon,
  BrainIcon,
  CheckIcon,
  ClockIcon,
  DnaIcon,
  FlaskIcon,
  LayersIcon,
  SparkIcon,
  TargetIcon,
} from '../components/Icons.jsx'

const tickerItems = [
  'органическая химия',
  'клетка',
  'генетика',
  'химические реакции',
  'экология',
  'расчётные задачи',
  'эволюция',
  'обмен веществ',
]

const rules = [
  {
    icon: <TargetIcon />,
    title: 'Сначала — диагностика',
    text: 'Реши один вариант без подготовки. Так сразу видно, где ты уже силён, а какие темы нужно подтянуть.',
  },
  {
    icon: <LayersIcon />,
    title: 'Разбей большую цель',
    text: 'Две недели на сложную тему надёжнее, чем одна ночь перед экзаменом. Маленькие шаги дают большой результат.',
  },
  {
    icon: <BrainIcon />,
    title: 'Понимай, а не зубри',
    text: 'Связывай формулы и термины с примерами. То, что понятно, вспоминается даже в стрессовый день.',
  },
  {
    icon: <ClockIcon />,
    title: 'Тренируй формат',
    text: 'Решай задания на время и обязательно разбирай ошибки. Экзамен — это навык, и он тоже тренируется.',
  },
]

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-card">
        <svg className="visual-svg" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="154" stroke="rgba(14,59,43,.16)" />
          <circle
            cx="200"
            cy="200"
            r="118"
            stroke="rgba(14,59,43,.28)"
            strokeDasharray="3 9"
            strokeLinecap="round"
          />

          <g stroke="#0e3b2b" strokeWidth="2.6">
            <ellipse cx="200" cy="200" rx="152" ry="57" transform="rotate(28 200 200)" />
            <ellipse cx="200" cy="200" rx="152" ry="57" transform="rotate(-28 200 200)" />
            <ellipse cx="200" cy="200" rx="57" ry="152" />
          </g>

          <circle cx="200" cy="200" r="30" fill="#0e3b2b" />
          <circle cx="200" cy="200" r="10" fill="#c9f26b" />

          <circle cx="316" cy="129" r="8" fill="#6b5bd2" />
          <circle cx="86" cy="267" r="8" fill="#0e3b2b" />
          <circle cx="288" cy="312" r="8" fill="#0e3b2b" />
          <circle cx="111" cy="115" r="5" fill="#6b5bd2" />

          <g stroke="#0e3b2b" strokeWidth="2" opacity=".8">
            <path d="M55 55 67 48l12 7v14l-12 7-12-7V55Z" />
            <path d="M67 48v14M55 55l12 7 12-7" opacity=".45" />
            <path d="M320 55h20M330 45v20" opacity=".7" />
          </g>

          <path
            d="M75 330c14-18 28 18 42 0s28 18 42 0"
            stroke="#0e3b2b"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity=".5"
          />
          <text
            x="318"
            y="338"
            fill="#0e3b2b"
            fontFamily="Unbounded, sans-serif"
            fontSize="16"
            fontWeight="600"
            opacity=".65"
          >
            H₂O
          </text>
        </svg>
      </div>

      <span className="floating-tag tag-chem">
        <FlaskIcon size={17} />
        Химия
      </span>
      <span className="floating-tag tag-bio">
        <DnaIcon size={17} />
        Биология
      </span>
      <span className="floating-tag tag-plan">12 недель · 5 этапов</span>
      <span className="floating-tag tag-goal">цель: отлично</span>
    </div>
  )
}

export default function Home() {
  const scrollToSubjects = () => {
    document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <section className="hero">
        <div className="hero-halo hero-halo-one" />
        <div className="hero-halo hero-halo-two" />

        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Учебный проект · 2026</span>
            <h1>
              Химия и биология
              <span className="accent-word">без паники</span>
            </h1>
            <p className="hero-lead">
              Две науки, один понятный маршрут. Учебный проект Хоменко Георгия:
              ключевые темы, план подготовки и инструменты, которые помогают
              идти к экзамену спокойно — шаг за шагом.
            </p>

            <div className="hero-actions">
              <Link to="/prep" className="btn btn-lime">
                Начать подготовку
                <ArrowIcon size={18} />
              </Link>
              <button type="button" className="btn btn-ghost" onClick={scrollToSubjects}>
                С чего начать
              </button>
            </div>

            <div className="creator-card">
              <span className="creator-avatar">ХГ</span>
              <div>
                <span className="creator-label">Создатель сайта</span>
                <strong>Хоменко Георгий</strong>
                <p>собрал темы, план и чек-лист для подготовки</p>
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>

        <div className="container">
          <div className="hero-facts">
            <div>
              <strong>2</strong>
              <span>предмета</span>
            </div>
            <div>
              <strong>12</strong>
              <span>недель плана</span>
            </div>
            <div>
              <strong>40+</strong>
              <span>ключевых тем</span>
            </div>
            <div>
              <strong>1</strong>
              <span>личный чек-лист</span>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section" id="subjects">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-dark">Два предмета</span>
            <h2>Одна цель — уверенная сдача</h2>
            <p>
              Химия учит видеть связи между веществами, биология — между живыми
              системами. Вместе они дают широкую картину мира и требуют похожего
              подхода: понимания, практики и регулярности.
            </p>
          </div>

          <div className="subjects-grid">
            <article className="subject-card subject-chem">
              <div className="subject-top">
                <span className="subject-icon">
                  <FlaskIcon size={30} />
                </span>
                <span className="subject-num">01</span>
              </div>
              <span className="subject-kicker">Химия</span>
              <h3>Понять реакции, а не выучить всё подряд</h3>
              <p>
                От строения атома до органики и расчётных задач. Главное — увидеть
                логику, по которой вещества вступают в реакции.
              </p>
              <div className="tags">
                <span className="tag">Органика</span>
                <span className="tag">Неорганика</span>
                <span className="tag">Задачи</span>
                <span className="tag">Формулы</span>
              </div>
              <ul className="subject-list">
                <li>
                  <span className="check-bullet">
                    <CheckIcon size={12} />
                  </span>
                  Ключевые классы соединений и их свойства
                </li>
                <li>
                  <span className="check-bullet">
                    <CheckIcon size={12} />
                  </span>
                  Механизмы и признаки химических реакций
                </li>
                <li>
                  <span className="check-bullet">
                    <CheckIcon size={12} />
                  </span>
                  Расчёты по уравнениям и растворам
                </li>
              </ul>
              <Link to="/prep" className="text-link">
                Темы и формулы
                <ArrowIcon size={18} />
              </Link>
            </article>

            <article className="subject-card subject-bio">
              <div className="subject-top">
                <span className="subject-icon">
                  <DnaIcon size={30} />
                </span>
                <span className="subject-num">02</span>
              </div>
              <span className="subject-kicker">Биология</span>
              <h3>Увидеть систему в живой природе</h3>
              <p>
                Клетка, организм, популяция, биосфера — четыре уровня, на которых
                работает жизнь. Понимая их, проще запоминать детали.
              </p>
              <div className="tags">
                <span className="tag">Клетка</span>
                <span className="tag">Генетика</span>
                <span className="tag">Эволюция</span>
                <span className="tag">Экология</span>
              </div>
              <ul className="subject-list">
                <li>
                  <span className="check-bullet">
                    <CheckIcon size={12} />
                  </span>
                  Строение клетки и обмен веществ
                </li>
                <li>
                  <span className="check-bullet">
                    <CheckIcon size={12} />
                  </span>
                  Законы наследственности и задачи
                </li>
                <li>
                  <span className="check-bullet">
                    <CheckIcon size={12} />
                  </span>
                  Эволюция, экология и биосфера
                </li>
              </ul>
              <Link to="/prep" className="text-link">
                Темы и термины
                <ArrowIcon size={18} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow eyebrow-dark">Метод</span>
            <h2>Подготовка, которая работает</h2>
            <p>Четыре принципа, на которых построен весь маршрут на сайте.</p>
          </div>

          <div className="rules-grid">
            {rules.map((rule, index) => (
              <article className="rule-card" key={rule.title}>
                <span className="rule-icon">{rule.icon}</span>
                <span className="rule-number">0{index + 1}</span>
                <h3>{rule.title}</h3>
                <p>{rule.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-copy">
            <span className="eyebrow eyebrow-dark">Главная мысль</span>
            <h2>
              Не «выучить всё», а <em>понять главное</em>
            </h2>
            <p>
              Объём информации по двум предметам кажется бесконечным. Но экзамен
              проверяет не количество зазубренных строк, а умение применять
              знания: объяснять, сравнивать, считать и делать выводы.
            </p>
            <p>
              Поэтому на этом сайте сначала — структура, потом — детали.
              А ещё регулярность: лучше 40 минут каждый день, чем шесть часов
              раз в неделю.
            </p>
            <Link to="/prep" className="text-link text-link-large">
              Посмотреть маршрут подготовки
              <ArrowIcon size={20} />
            </Link>
          </div>

          <aside className="quote-card">
            <SparkIcon size={28} />
            <p>
              «Экзамен проверяет не память, а умение думать. Память просто
              помогает».
            </p>
            <span>принцип проекта ХимБио</span>
          </aside>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-inner">
            <div>
              <span className="eyebrow eyebrow-dark">Готов?</span>
              <h2>Маршрут уже собран. Осталось пройти его.</h2>
              <p>
                Темы, план на 12 недель, полезные ресурсы и интерактивный
                чек-лист — всё на второй странице.
              </p>
            </div>
            <Link to="/prep" className="btn btn-dark">
              Перейти к подготовке
              <ArrowIcon size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
