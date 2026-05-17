export default function Featured() {
  const days = [
    { day: "День 1", date: "22 июля", title: "БАЛИ ВСТРЕЧАЕТ", desc: "Встреча в аэропорту, трансфер на виллу в Убуде. Восстановительная тренировка на закате и общий ужин." },
    { day: "День 2–4", date: "23–25 июля", title: "УБУД", desc: "Рисовые террасы Тегаллаланг, водопады Тегенунган, рафтинг по горной реке, лес обезьян и свободное время." },
    { day: "День 5–6", date: "26–27 июля", title: "КУТА И УЛУВАТУ", desc: "Трансфер на юг острова. Храм Улувату, закат и балийский танец Кечак. Шопинг и расслабление." },
    { day: "День 7", date: "28 июля", title: "НУСА-ПЕНИДА", desc: "Снорклинг с мантами, панорамы острова. Это день, который останется с тобой навсегда." },
    { day: "День 8–9", date: "29–30 июля", title: "ПЕРВАЯ ВОЛНА", desc: "Урок серфинга с инструктором, утренние тренировки, свободное время у океана и прощальный ужин." },
    { day: "День 10", date: "31 июля", title: "ДО НОВЫХ ВСТРЕЧ", desc: "Трансфер в аэропорт Денпасар. Ты уезжаешь другой — обновлённой и влюблённой в себя." },
  ];

  return (
    <div id="program" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/3bf2780d-fc03-407c-b1c9-1bed020d01ec.jpg"
          alt="Пилатес на Бали"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1 lg:overflow-y-auto">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-400">Программа тура · 10 дней</h3>
        <p className="text-2xl lg:text-3xl mb-8 text-neutral-900 leading-tight font-light">
          Пилатес, приключения, круг единомышленниц —<br/>и полная свобода быть собой.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          {days.map((item, i) => (
            <div key={i} className="border-t border-neutral-200 pt-4">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-xs uppercase tracking-widest text-neutral-400">{item.day} · {item.date}</span>
              </div>
              <p className="text-sm font-semibold tracking-wide text-neutral-900 mb-1">{item.title}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest"
        >
          Хочу на тур
        </a>
      </div>
    </div>
  );
}
