import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "TrendingUp",
    title: "Привлечение клиентов",
    desc: "Выстраиваем стабильный поток заявок через таргет, контекст и посевы. Без воды — только результат.",
  },
  {
    icon: "Package",
    title: "Упаковка бизнеса",
    desc: "Создаём сайты, лендинги, офферы и позиционирование, которые продают.",
  },
  {
    icon: "Settings",
    title: "Настройка процессов",
    desc: "Помогаем выстроить внутренние процессы так, чтобы команда работала без хаоса.",
  },
  {
    icon: "BarChart3",
    title: "Аналитика и рост",
    desc: "Разбираем цифры, находим точки роста и предлагаем конкретные шаги к масштабированию.",
  },
  {
    icon: "Users",
    title: "Сопровождение клиентов",
    desc: "Берём на себя адаптацию и поддержку новых клиентов — от первого контакта до результата.",
  },
  {
    icon: "Megaphone",
    title: "Продвижение под ключ",
    desc: "От стратегии до запуска: реклама, контент, аналитика — всё в одних руках.",
  },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e8e4dc] min-h-screen font-body">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display text-xl tracking-widest text-white uppercase">
            Advoprom
          </span>
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                  className="text-sm tracking-widest uppercase text-[#888] hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="https://t.me/egoradvo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-black px-5 py-2 text-xs tracking-widest uppercase transition-all duration-200"
          >
            Связаться
          </a>
          {/* Burger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d0d0d] border-t border-[#1f1f1f] px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-sm tracking-widest uppercase text-[#aaa] hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="https://t.me/egoradvo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 border border-[#c9a84c] text-[#c9a84c] px-5 py-2 text-xs tracking-widest uppercase w-fit"
            >
              Написать в Telegram
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6">
            Маркетинг · Рост · Результат
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-none text-white mb-8">
            Делаем так,
            <br />
            <span className="text-[#c9a84c]">чтобы клиенты</span>
            <br />
            приходили сами
          </h1>
          <p className="text-[#888] text-lg md:text-xl max-w-xl leading-relaxed mb-12">
            Advoprom — команда по продвижению бизнеса. Берём проекты под ключ:
            от рекламы до выстраивания стабильного потока заявок.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/egoradvo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c9a84c] text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#e0bb5a] transition-colors duration-200"
            >
              <Icon name="Send" size={16} />
              Написать нам
            </a>
            <button
              onClick={() => scrollTo("#services")}
              className="inline-flex items-center gap-3 border border-[#333] text-[#aaa] hover:text-white hover:border-[#555] px-8 py-4 text-sm tracking-widest uppercase transition-all duration-200"
            >
              Наши услуги
              <Icon name="ArrowDown" size={16} />
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#c9a84c] to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">
                Что мы делаем
              </p>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-white leading-tight">
                Услуги
              </h2>
            </div>
            <div className="w-20 h-[2px] bg-[#1f1f1f] hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] p-8 group hover:bg-[#111] transition-colors duration-300"
              >
                <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center mb-6 group-hover:border-[#c9a84c] transition-colors duration-300">
                  <Icon name={s.icon} size={18} className="text-[#c9a84c]" />
                </div>
                <h3 className="font-display text-lg uppercase text-white tracking-wider mb-3">
                  {s.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">
                Кто мы
              </p>
              <h2 className="font-display text-4xl md:text-5xl uppercase text-white leading-tight mb-8">
                О нас
              </h2>
              <div className="space-y-5 text-[#777] leading-relaxed">
                <p>
                  Advoprom — молодая команда, которая помогает бизнесу расти. Мы не занимаемся пустыми обещаниями — только конкретными инструментами и понятными результатами.
                </p>
                <p>
                  Работаем с проектами из разных ниш и берём на себя полный цикл продвижения: от первой рекламы до выстраивания системы, которая работает без вашего постоянного участия.
                </p>
                <p>
                  Нам важно не просто запустить рекламу — а сделать так, чтобы клиенты возвращались и рекомендовали вас другим.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]">
              {[
                { num: "50+", label: "Проектов запущено" },
                { num: "3×", label: "Средний рост заявок" },
                { num: "100%", label: "Работа под ключ" },
                { num: "0", label: "Лишней бюрократии" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#0a0a0a] p-8 text-center">
                  <div className="font-display text-3xl text-[#c9a84c] mb-2">
                    {stat.num}
                  </div>
                  <div className="text-xs text-[#555] tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="border-t border-b border-[#1a1a1a] bg-[#0d0d0d] py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-display text-2xl md:text-3xl uppercase text-white max-w-md">
            Готовы обсудить ваш проект?
          </h3>
          <a
            href="https://t.me/egoradvo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c9a84c] text-black px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:bg-[#e0bb5a] transition-colors duration-200 whitespace-nowrap"
          >
            <Icon name="MessageCircle" size={16} />
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">
              Напишите нам
            </p>
            <h2 className="font-display text-4xl md:text-5xl uppercase text-white leading-tight">
              Контакты
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
            <div className="bg-[#0a0a0a] p-10">
              <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center mb-6">
                <Icon name="User" size={18} className="text-[#c9a84c]" />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#555] mb-2">
                Контактное лицо
              </p>
              <p className="text-white font-medium text-lg">Гуськов Егор</p>
              <p className="text-[#555] text-sm">Константинович</p>
            </div>

            <div className="bg-[#0a0a0a] p-10">
              <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center mb-6">
                <Icon name="Send" size={18} className="text-[#c9a84c]" />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#555] mb-2">
                Telegram
              </p>
              <a
                href="https://t.me/egoradvo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a84c] text-lg hover:text-[#e0bb5a] transition-colors"
              >
                @egoradvo
              </a>
            </div>

            <div className="bg-[#0a0a0a] p-10">
              <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center mb-6">
                <Icon name="Clock" size={18} className="text-[#c9a84c]" />
              </div>
              <p className="text-xs tracking-widest uppercase text-[#555] mb-2">
                Режим работы
              </p>
              <p className="text-white text-lg">Пн — Пт</p>
              <p className="text-[#555] text-sm">9:00 — 20:00 МСК</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1a1a1a] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-sm tracking-widest uppercase text-[#333]">
            Advoprom
          </span>
          <span className="text-xs text-[#333] tracking-wider">
            © 2024 Advoprom. Все права защищены.
          </span>
        </div>
      </footer>
    </div>
  );
}
