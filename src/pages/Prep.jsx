import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowIcon,
  AtomIcon,
  BookIcon,
  BrainIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  DnaIcon,
  FlaskIcon,
  LayersIcon,
  PenIcon,
  SparkIcon,
} from '../components/Icons.jsx'

const startSteps = [
  {
    icon: <CompassIcon />,
    number: 'Шаг 01',
    title: 'Проверь себя',
    text: 'Реши демонстрационный вариант по каждому предмету. Не для оценки — чтобы увидеть реальную точку старта и список пробелов.',
  },
  {
    icon: <PenIcon />,
    number: 'Шаг 02',
    title: 'Собери план',
    text: 'Выбери дату экзамена и отметь в календаре 12 недель. Распредели темы так, чтобы сложные шли первыми, а повторение — последним.',
  },
  {
    icon: <LayersIcon />,
    number: 'Шаг 03',
    title: 'Иди от базы',
    text: 'Сначала теория и простые задания, затем формат экзамена и скорость. Не перескакивай к вариантам, пока не понял основу.',
  },
]

const chemistryTopics = [
  {
    title: 'Строение атома и периодический закон',
    text: 'Электронные конфигурации, изотопы, закономерности изменения свойств элементов.',
  },
  {
    title: 'Химическая связь и строение веществ',
    text: 'Ковалентная, ионная и металлическая связь, кристаллические решётки.',
  },
  {
    title: 'Основные классы неорганических соединений',
    text: 'Оксиды, основания, кислоты и соли: свойства и генетическая связь.',
  },
  {
    title: 'Химические реакции',
    text: 'Классификация, скорость, катализ, обратимость и электролитическая диссоциация.',
  },
  {
    title: 'Органическая химия',
    text: 'От алканов до полимеров: строение, изомерия, свойства и реакции.',
  },
  {
    title: 'Расчётные задачи',
    text: 'Масса, количество вещества, растворы, выход продукта и тепловой эффект.',
  },
]

const biologyTopics = [
  {
    title: 'Клетка и её органоиды',
    text: 'Строение клетки, мембраны, обмен веществ, фотосинтез и биосинтез белка.',
  },
  {
    title: 'Организм и его системы',
    text: 'Ткани, органы, системы органов, регуляция и поддержание гомеостаза.',
  },
  {
    title: 'Генетика',
    text: 'Законы Менделя, сцепленное наследование, изменчивость и решение задач.',
  },
  {
    title: 'Селекция и биотехнологии',
    text: 'Методы селекции, генная инженерия, клонирование и клеточные технологии.',
  },
  {
    title: 'Эволюция',
    text: 'Движущие силы, естественный отбор, микро- и макроэволюция, антропогенез.',
  },
  {
    title: 'Экология и биосфера',
    text: 'Экосистемы, цепи питания, круговорот веществ и влияние человека.',
  },
]

const timeline = [
  {
    number: '01',
    weeks: 'Недели 1–2',
    title: 'Диагностика и карта пробелов',
    text: 'Реши по одному варианту каждого предмета, проверь ответы и выпиши темы, в которых ошибок больше всего.',
  },
  {
    number: '02',
    weeks: 'Недели 3–5',
    title: 'База по химии',
    text: 'Атом, связь, основные классы соединений и реакции. После каждой темы — 10–15 тренировочных заданий.',
  },
  {
    number: '03',
    weeks: 'Недели 6–8',
    title: 'База по биологии',
    text: 'Клетка, обмен веществ и генетика. Заведи карточки с терминами и возвращайся к ним каждый день.',
  },
  {
    number: '04',
    weeks: 'Недели 9–10',
    title: 'Практика формата',
    text: 'Решай задания на время, веди журнал ошибок и каждую неделю закрывай по одной слабой теме.',
  },
  {
    number: '05',
    weeks: 'Недели 11–12',
    title: 'Репетиция и отдых',
    text: 'Два полных пробных экзамена, разбор ошибок, повторение формул и нормальный сон. Ночь перед экзаменом — для отдыха.',
  },
]

const checklist = [
  { id: 'chem-diagnostic', subject: 'Химия', text: 'Пройти диагностический вариант по химии' },
  { id: 'bio-diagnostic', subject: 'Биология', text: 'Пройти диагностический вариант по биологии' },
  { id: 'weak-topics', subject: 'План', text: 'Выписать темы, которые вызывают больше всего вопросов' },
  { id: 'formula-sheet', subject: 'Химия', text: 'Собрать таблицу формул и величин' },
  { id: 'biology-cards', subject: 'Биология', text: 'Сделать карточки с ключевыми терминами' },
  { id: 'daily-practice', subject: 'Практика', text: 'Решать по 5 заданий каждый день в течение недели' },
  { id: 'genetics', subject: 'Биология', text: 'Повторить генетику и задачи на наследование' },
  { id: 'chem-mock', subject: 'Практика', text: 'Решить полный вариант по химии на время' },
  { id: 'bio-mock', subject: 'Практика', text: 'Решить полный вариант по биологии на время' },
  { id: 'error-log', subject: 'Перед экзаменом', text: 'Перечитать журнал ошибок и повторить слабые темы' },
]

const resources = [
  {
    tag: 'Задания',
    name: 'ФИПИ',
    description: 'Открытый банк заданий, демоверсии и спецификации экзаменов.',
    href: 'https://fipi.ru',
  },
  {
    tag: 'Теория',
    name: 'ЯКласс',
    description: 'Короткая теория, тренажёры и проверочные работы по школьной программе.',
    href: 'https://www.yaklass.ru',
  },
  {
    tag: 'Видео',
    name: 'InternetUrok',
    description: 'Видеоуроки по химии и биологии для повторения сложных тем.',
    href: 'https://interneturok.ru',
  },
]

const examTips = [
  {
    icon: <BrainIcon />,
    title: 'Выспись',
    text: 'Мозг, который отдохнул, решает задачи быстрее. Последняя ночь за учебником почти не помогает.',
  },
  {
    icon: <BookIcon />,
    title: 'Читай до конца',
    text: 'Многие ошибки появляются из-за пропущенного «не», «кроме» или второго условия в задании.',
  },
  {
    icon: <ClockIcon />,
    title: 'Следи за временем',
    text: 'Раздели время на блоки и оставь 10–15 минут на проверку. Не зависай на одном сложном задании.',
  },
  {
    icon: <SparkIcon />,
    title: 'Начни с лёгкого',
    text: 'Сначала задания, в которых уверен. Это даёт баллы и спокойный настрой для более сложной части.',
  },
]

function readSavedChecklist() {
  try {
    const saved = JSON.parse(localStorage.getItem('himbio-checklist') || '[]')
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export default function Prep() {
  const [done, setDone] = useState(readSavedChecklist)

  useEffect(() => {
    try {
      localStorage.setItem('himbio-checklist', JSON.stringify(done))
    } catch {
      // Если хранилище недоступно, чек-лист продолжит работать без сохранения.
    }
  }, [done])

  const doneCount = checklist.filter((item) => done.includes(item.id)).length
  const progress = Math.round((doneCount / checklist.length) * 100)

  const toggleItem = (id) => {
    setDone((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id],
    )
  }

  return (
    <>
      <section className="page-hero">
        <div className="hero-halo hero-halo-one" />
        <div className="container page-hero-grid">
          <div>
            <span className="eyebrow">Страница 2 · маршрут</span>
            <h1>Подготовка без хаоса</h1>
            <p>
              Ключевые темы по химии и биологии, план на 12 недель и
              интерактивный чек-лист. Всё, чтобы превратить большую цель
              в понятную последовательность шагов.
            </p>
            <div className="chips">
              <span className="chip chip-accent">Химия</span>
              <span className="chip">Биология</span>
              <span className="chip">12 недель</span>
              <span className="chip">5 этапов</span>
            </div>
          </div>

          <div className="page-hero-art" aria-hidden="true">
            <div className="art-blob">
              <AtomIcon size={130} />
            </div>
            <span className="art-chip art-chip-a">
              <FlaskIcon size={15} />
              Химия
            </span>
            <span className="art-chip art-chip-b">
              <DnaIcon size={15} />
              Биология
            </span>
            <span className="art-chip art-chip-c">цель: сдать уверенно</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow eyebrow-dark">Старт</span>
            <h2>С чего начать</h2>
            <p>Три шага, которые превращают подготовку из тревоги в план.</p>
          </div>

          <div className="start-grid">
            {startSteps.map((step) => (
              <article className="start-card" key={step.title}>
                <span className="rule-icon">{step.icon}</span>
                <span className="start-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint" id="topics">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-dark">Содержание</span>
            <h2>Ключевые темы</h2>
            <p>
              Это каркас, вокруг которого удобно собирать знания. Сначала
              закрой базу, затем добавляй детали и тренируй форматы заданий.
            </p>
          </div>

          <div className="subject-panels">
            <article className="panel panel-chem">
              <div className="panel-head">
                <span className="subject-icon">
                  <FlaskIcon size={28} />
                </span>
                <div>
                  <h2>Химия</h2>
                  <span>вещества · реакции · расчёты</span>
                </div>
              </div>
              <p>
                Химия держится на трёх опорах: строение вещества, превращения
                и количественные расчёты. Если понять связи между ними, формулы
                перестают быть набором символов.
              </p>

              <ol className="topic-list">
                {chemistryTopics.map((topic, index) => (
                  <li className="topic-item" key={topic.title}>
                    <span className="topic-index">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{topic.title}</h3>
                      <p>{topic.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="memo">
                <h4>Мини-шпаргалка</h4>
                <div className="memo-row">
                  <code className="formula">n = m / M</code>
                  <code className="formula">V = n × Vm</code>
                  <code className="formula">ω = m(в-ва) / m(р-ра) × 100%</code>
                  <code className="formula">pH = −lg[H⁺]</code>
                </div>
              </div>
            </article>

            <article className="panel panel-bio">
              <div className="panel-head">
                <span className="subject-icon">
                  <DnaIcon size={28} />
                </span>
                <div>
                  <h2>Биология</h2>
                  <span>клетка · организм · экосистема</span>
                </div>
              </div>
              <p>
                Биология удобнее запоминается как система уровней: от молекул
                и клеток до популяций и биосферы. На каждом уровне — свои законы
                и ключевые термины.
              </p>

              <ol className="topic-list">
                {biologyTopics.map((topic, index) => (
                  <li className="topic-item" key={topic.title}>
                    <span className="topic-index">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{topic.title}</h3>
                      <p>{topic.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="memo">
                <h4>Мини-шпаргалка</h4>
                <div className="memo-row">
                  <code className="formula">ДНК → РНК → белок</code>
                  <code className="formula">A = T, G ≡ C</code>
                  <code className="formula">F₂: 3 : 1</code>
                  <code className="formula">энергия клетки — АТФ</code>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-dark">Календарь</span>
            <h2>План на 12 недель</h2>
            <p>
              Пять этапов от диагностики до репетиции. Темп можно подстроить
              под себя, но последовательность лучше сохранить.
            </p>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div className="timeline-item" key={item.number}>
                <span className="timeline-marker">{item.number}</span>
                <div className="timeline-card">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <span className="timeline-weeks">{item.weeks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-dark">Ресурсы</span>
            <h2>Где брать материал</h2>
            <p>
              Три источника, которые удобно совмещать: официальные задания,
              теорию и видеоразборы.
            </p>
          </div>

          <div className="resources-grid">
            {resources.map((resource) => (
              <a
                className="resource-card"
                key={resource.name}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="resource-tag">{resource.tag}</span>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
                <span className="resource-arrow">
                  <ArrowIcon size={18} />
                </span>
              </a>
            ))}
          </div>
          <p className="resources-note">Ссылки ведут на внешние образовательные ресурсы.</p>
        </div>
      </section>

      <section className="section" id="checklist">
        <div className="container checklist-layout">
          <div className="checklist-intro">
            <span className="eyebrow eyebrow-dark">Интерактив</span>
            <h2>
              Личный <span className="nowrap">чек-лист</span>
            </h2>
            <p>
              Отмечай выполненные шаги. Прогресс сохраняется в браузере,
              поэтому можно вернуться к списку позже и продолжить с того же места.
            </p>

            <div className="progress-card">
              <div className="progress-top">
                <strong>{doneCount}</strong>
                <span>из {checklist.length} шагов</span>
              </div>
              <div
                className="progress-bar"
                role="progressbar"
                aria-label="Прогресс подготовки"
                aria-valuemin={0}
                aria-valuemax={checklist.length}
                aria-valuenow={doneCount}
              >
                <span className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="progress-percent">{progress}% готово</span>
            </div>
          </div>

          <div>
            <div className="check-list">
              {checklist.map((item) => {
                const isDone = done.includes(item.id)
                return (
                  <label className={`check-item ${isDone ? 'done' : ''}`} key={item.id}>
                    <input
                      type="checkbox"
                      className="check-box"
                      checked={isDone}
                      onChange={() => toggleItem(item.id)}
                    />
                    <span className="check-text">
                      {item.text}
                      <span className="check-subject">{item.subject}</span>
                    </span>
                  </label>
                )
              })}
            </div>
            <button
              type="button"
              className="reset-progress"
              onClick={() => setDone([])}
              disabled={doneCount === 0}
            >
              Сбросить прогресс
            </button>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow eyebrow-dark">День экзамена</span>
            <h2>Сохранить спокойствие</h2>
            <p>Четыре привычки, которые помогают показать свой реальный уровень.</p>
          </div>

          <div className="tips-grid">
            {examTips.map((tip) => (
              <article className="tip-card" key={tip.title}>
                <span className="rule-icon">{tip.icon}</span>
                <h3>{tip.title}</h3>
                <p>{tip.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-inner">
            <div>
              <span className="eyebrow eyebrow-dark">Главное — начать</span>
              <h2>Первый шаг занимает 40 минут</h2>
              <p>
                Выбери один блок из чек-листа и сделай его сегодня. Завтра
                будет проще, потому что маршрут уже начат.
              </p>
            </div>
            <Link to="/" className="btn btn-dark">
              Вернуться на главную
              <ArrowIcon size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
