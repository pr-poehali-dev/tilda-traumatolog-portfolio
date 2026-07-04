import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const CLINIC_IMG =
  'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/5f2208d8-fbe0-4b7b-9bc2-17d2666ed676.jpg';

const NAV = [
  { label: 'Главная', href: '#top' },
  { label: 'О враче', href: '#about' },
  { label: 'Статьи', href: '#science' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Контакты', href: '#contacts' },
];

const CLINICS = [
  { name: 'Клиника «Ортоцентр»', addr: 'г. Москва, ул. Ленина, 15', hours: 'Пн–Пт 09:00–18:00' },
  { name: 'Медицинский центр «Здоровье+»', addr: 'г. Москва, пр-т Мира, 84', hours: 'Сб 10:00–15:00' },
];

const SERVICES = [
  { icon: 'Bone', title: 'Травмы конечностей', text: 'Диагностика и лечение переломов, вывихов и растяжений.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/c5164f2c-2f72-4736-89fd-6e830eed1a6b.jpg' },
  { icon: 'Activity', title: 'Заболевания суставов', text: 'Артроз, артрит, восстановление подвижности суставов.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/fa3ff63c-4f92-4aa7-8f84-d06075ea0df9.jpg' },
  { icon: 'Stethoscope', title: 'Спортивные травмы', text: 'Реабилитация после травм у спортсменов и активных людей.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/fe288d6b-19af-44cd-8c83-8d34bce88111.jpg' },
  { icon: 'Scissors', title: 'Артроскопия', text: 'Малоинвазивные операции на коленном и плечевом суставах.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/520bf7e7-0687-44e1-9e8a-b79dc5b4f243.jpg' },
  { icon: 'PersonStanding', title: 'Патологии стопы', text: 'Лечение плоскостопия, вальгусной деформации, hallux valgus.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/d74a6ab8-5570-44ea-847b-9211be9637dc.jpg' },
  { icon: 'HeartPulse', title: 'Реабилитация', text: 'Индивидуальные программы восстановления после операций.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/0f977cfa-85b4-4d10-b8b2-5d96de8181d1.jpg' },
];

const REVIEWS = [
  { name: 'Анна К.', text: 'Роман Юрьевич вернул мне радость движения после сложного перелома. Внимательный и профессиональный врач.', rating: 5 },
  { name: 'Дмитрий С.', text: 'Провёл артроскопию колена — уже через месяц вернулся в спорт. Огромная благодарность!', rating: 5 },
  { name: 'Елена М.', text: 'Долго искала грамотного ортопеда. Здесь получила чёткий план лечения и результат.', rating: 5 },
];

const CASES = [
  { tag: 'Артроскопия', title: 'Восстановление колена спортсмена', text: 'Полный возврат к тренировкам за 6 недель после операции.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/252e0ee0-1e95-44c4-aa73-ffc74981d399.jpg' },
  { tag: 'Эндопротезирование', title: 'Замена тазобедренного сустава', text: 'Пациент 68 лет вернулся к активной жизни без боли.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/3f10ae2f-070f-42d1-a281-5eff6ee35e03.jpg' },
  { tag: 'Травма', title: 'Сложный перелом голени', text: 'Остеосинтез и полное сращение кости за 3 месяца.', img: 'https://cdn.poehali.dev/projects/09fdc0d5-902f-40ea-8218-400557dd8829/files/95cf50b4-5d7d-4bec-9e6e-7ec6bf982f31.jpg' },
];

const EDUCATION = [
  { year: '2008', title: 'РНИМУ им. Н. И. Пирогова', text: 'Лечебное дело, красный диплом' },
  { year: '2010', title: 'Ординатура по травматологии', text: 'Кафедра травматологии и ортопедии' },
  { year: '2015', title: 'Стажировка в Германии', text: 'Клиника Шарите, артроскопическая хирургия' },
  { year: '2021', title: 'Кандидат медицинских наук', text: 'Защита диссертации по эндопротезированию' },
];

const PAPERS = [
  { j: 'Вестник травматологии, 2023', t: 'Современные подходы к эндопротезированию коленного сустава' },
  { j: 'Journal of Orthopaedics, 2022', t: 'Малоинвазивная артроскопия: результаты 5-летнего наблюдения' },
  { j: 'Ортопедия сегодня, 2021', t: 'Реабилитация пациентов после спортивных травм' },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-14 max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{kicker}</span>
      <h2 className="mt-3 font-serif text-4xl font-600 leading-tight text-foreground sm:text-5xl">{title}</h2>
    </div>
  );
}

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-soft/60 bg-white/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky text-white">
              <Icon name="Plus" size={22} />
            </span>
            <span className="font-serif text-xl font-600 leading-none">
              Мыцыков Р. Ю.
              <span className="block font-sans text-[11px] font-500 uppercase tracking-widest text-muted-foreground">
                травматолог-ортопед
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-500 text-foreground/70 transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="rounded-full bg-sky px-6 hover:bg-sky-dark">Записаться</Button>
          </div>

          <button className="lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Меню">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-sky-soft/60 bg-white lg:hidden">
            <div className="container flex flex-col gap-1 py-4">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-500 text-foreground/80 hover:bg-sky-light">
                  {n.label}
                </a>
              ))}
              <Button className="mt-2 rounded-full bg-sky hover:bg-sky-dark">Записаться</Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden pt-20">
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-500 text-primary shadow-sm ring-1 ring-sky-soft">
              <Icon name="ShieldCheck" size={16} /> Более 15 лет практики
            </span>
            <h1 className="mt-6 font-serif text-5xl font-600 leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
              Здоровье ваших
              <span className="text-sky"> суставов</span> и костей
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Мыцыков Роман Юрьевич — врач травматолог-ортопед. Точная диагностика,
              современные методы лечения и внимательный подход к каждому пациенту.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-sky px-8 text-base hover:bg-sky-dark">
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-sky/40 px-8 text-base text-primary hover:bg-sky-light">
                <Icon name="Play" size={18} className="mr-2" /> О враче
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-sky/10 animate-float" />
            <img
              src={CLINIC_IMG}
              alt="Клиника"
              className="relative z-10 h-[460px] w-full rounded-[2rem] object-cover shadow-2xl shadow-sky/20 ring-1 ring-white"
            />
            <div className="absolute -bottom-6 -right-4 z-20 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl ring-1 ring-sky-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-light text-sky">
                <Icon name="Users" size={22} />
              </span>
              <div>
                <p className="font-serif text-2xl font-600 leading-none">5000+</p>
                <p className="text-xs text-muted-foreground">пациентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionTitle kicker="О враче" title="Профессионализм, которому доверяют" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Роман Юрьевич специализируется на диагностике и лечении заболеваний
              опорно-двигательного аппарата. Владеет современными методиками
              артроскопической и эндопротезной хирургии, регулярно проходит
              стажировки в ведущих клиниках Европы.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: '15+', t: 'лет опыта' },
                { n: '1200+', t: 'операций' },
                { n: '30+', t: 'публикаций' },
              ].map((s) => (
                <div key={s.t} className="rounded-2xl bg-sky-light px-5 py-6 text-center">
                  <p className="font-serif text-3xl font-600 text-sky-dark">{s.n}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.t}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="mb-3 text-sm font-600 uppercase tracking-widest text-primary">Клиники приёма</p>
            {CLINICS.map((c) => (
              <div key={c.name} className="flex gap-4 rounded-2xl border border-sky-soft bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-light text-sky">
                  <Icon name="MapPin" size={22} />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-600">{c.name}</h3>
                  <p className="mt-1 text-muted-foreground">{c.addr}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-sky-dark">
                    <Icon name="Clock" size={14} /> {c.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="soft-gradient py-24">
        <div className="container">
          <SectionTitle kicker="Направления" title="Направления деятельности" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="group overflow-hidden rounded-3xl border border-sky-soft bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky/10">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-sky backdrop-blur-sm">
                    <Icon name={s.icon} size={24} />
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-600">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24">
        <div className="container">
          <SectionTitle kicker="Отзывы" title="Что говорят пациенты" />
          <div className="grid gap-6 lg:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="flex flex-col rounded-3xl bg-sky-light p-8">
                <div className="flex gap-1 text-sky">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-sky" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-lg leading-relaxed text-foreground/80">«{r.text}»</p>
                <p className="mt-6 font-600 text-sky-dark">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="soft-gradient py-24">
        <div className="container">
          <SectionTitle kicker="Кейсы" title="Примеры работ" />
          <div className="grid gap-6 lg:grid-cols-3">
            {CASES.map((c) => (
              <div key={c.title} className="group overflow-hidden rounded-3xl border border-sky-soft bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-sky/10">
                <div className="h-48 overflow-hidden">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <span className="inline-block rounded-full bg-sky-light px-3 py-1 text-xs font-600 uppercase tracking-wide text-sky-dark">
                    {c.tag}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-600">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24">
        <div className="container">
          <SectionTitle kicker="Образование" title="Образование и дипломы" />
          <div className="relative border-l-2 border-sky-soft pl-8">
            {EDUCATION.map((e) => (
              <div key={e.year} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-sky ring-4 ring-white">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <span className="font-serif text-lg font-600 text-sky">{e.year}</span>
                <h3 className="mt-1 font-serif text-2xl font-600">{e.title}</h3>
                <p className="mt-1 text-muted-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section id="science" className="soft-gradient py-24">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle kicker="Наука" title="Научная деятельность" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              Автор более 30 научных публикаций в российских и международных
              журналах. Регулярный участник конференций по травматологии и
              ортопедии, докладчик на профильных симпозиумах.
            </p>
            <Button className="mt-8 rounded-full bg-sky px-7 hover:bg-sky-dark">
              <Icon name="FileText" size={18} className="mr-2" /> Читать статьи
            </Button>
          </div>
          <div className="space-y-4">
            {PAPERS.map((p) => (
              <div key={p.t} className="flex gap-4 rounded-2xl border border-sky-soft bg-white p-6">
                <Icon name="BookOpen" size={22} className="mt-1 shrink-0 text-sky" />
                <div>
                  <p className="text-xs font-600 uppercase tracking-wide text-sky-dark">{p.j}</p>
                  <p className="mt-1 font-500 leading-snug">{p.t}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24">
        <div className="container">
          <div className="overflow-hidden rounded-[2.5rem] bg-sky p-10 text-white sm:p-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-4xl font-600 sm:text-5xl">Запишитесь на консультацию</h2>
                <p className="mt-4 max-w-md text-lg text-white/85">
                  Оставьте заявку удобным способом — и мы подберём время приёма.
                </p>
                <div className="mt-9 space-y-4">
                  <a href="tel:+70000000000" className="flex items-center gap-3 text-lg font-500 hover:text-white/80">
                    <Icon name="Phone" size={20} /> +7 (000) 000-00-00
                  </a>
                  <a href="mailto:doctor@example.ru" className="flex items-center gap-3 text-lg font-500 hover:text-white/80">
                    <Icon name="Mail" size={20} /> doctor@example.ru
                  </a>
                  <p className="flex items-center gap-3 text-lg font-500">
                    <Icon name="MapPin" size={20} /> г. Москва, ул. Ленина, 15
                  </p>
                </div>
                <div className="mt-9 flex gap-3">
                  {['Send', 'Phone', 'Instagram', 'Youtube'].map((s) => (
                    <a key={s} href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/30">
                      <Icon name={s} size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-8 text-foreground">
                <h3 className="font-serif text-2xl font-600">Быстрая заявка</h3>
                <div className="mt-6 space-y-4">
                  <input className="w-full rounded-xl border border-sky-soft bg-sky-light/40 px-4 py-3 outline-none focus:ring-2 focus:ring-sky" placeholder="Ваше имя" />
                  <input className="w-full rounded-xl border border-sky-soft bg-sky-light/40 px-4 py-3 outline-none focus:ring-2 focus:ring-sky" placeholder="Телефон" />
                  <textarea rows={3} className="w-full resize-none rounded-xl border border-sky-soft bg-sky-light/40 px-4 py-3 outline-none focus:ring-2 focus:ring-sky" placeholder="Опишите ваш вопрос" />
                  <Button className="w-full rounded-xl bg-sky py-6 text-base hover:bg-sky-dark">Отправить заявку</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sky-soft py-10">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-serif text-lg font-600">Мыцыков Роман Юрьевич</p>
          <p className="text-sm text-muted-foreground">© 2026 · Травматолог-ортопед</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;