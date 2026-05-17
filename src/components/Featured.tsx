export default function Featured() {
  const days = [
    {
      date: "22 июля, День 1",
      title: "БАЛИ ВСТРЕЧАЕТ",
      location: "Прибытие на Бали — Убуд",
      items: [
        "Встреча в аэропорту (Денпасар).",
        "Трансфер на виллу.",
        "Заселение и отдых.",
        "Восстановительная тренировка на закате.",
        "Общий ужин и знакомство.",
      ],
    },
    {
      date: "23 июля, День 2",
      title: "ИЗУМРУДНЫЕ ТЕРРАСЫ",
      location: "Убуд",
      items: [
        "Завтрак.",
        "Рисовые плантации Tegallalang.",
        "Водопады Tegenungan и Kanto Lampo.",
        "Свободное время в Убуде.",
      ],
    },
    {
      date: "24 июля, День 3",
      title: "ДРАЙВ НА ВОДЕ",
      location: "Убуд",
      items: [
        "Завтрак.",
        "Рафтинг по горной реке.",
        "Лес обезьян.",
        "Отдых на вилле.",
      ],
    },
    {
      date: "25 июля, День 4",
      title: "ДЕНЬ БЕЗ БУДИЛЬНИКА",
      location: "Убуд",
      items: [
        "Завтрак.",
        "Дневная тренировка.",
        "Свободное время: спа, рынки, рестораны.",
      ],
    },
    {
      date: "26 июля, День 5",
      title: "ЗАКАТ И ТАНЕЦ КЕЧАК",
      location: "Убуд → Кута",
      items: [
        "Завтрак.",
        "Утренняя тренировка.",
        "Трансфер на юг острова и заселение на виллу.",
        "Храм Uluwatu и закат.",
        "Балийский танец «Кечак».",
      ],
    },
    {
      date: "27 июля, День 6",
      title: "ШОПИНГ И РАССЛАБЛЕНИЕ",
      location: "Южная Кута",
      items: [
        "Завтрак.",
        "Дневная тренировка.",
        "Свободное время.",
      ],
    },
    {
      date: "28 июля, День 7",
      title: "В ГОСТЯХ У МАНТОВ",
      location: "Нуса-Пенида",
      items: [
        "Ранний завтрак.",
        "Трансфер на остров.",
        "Снорклинг с мантами.",
        "Панорамы Нуса-Пениды.",
      ],
    },
    {
      date: "29 июля, День 8",
      title: "ПЕРВАЯ ВОЛНА",
      location: "Кута",
      items: [
        "Завтрак.",
        "Утренняя тренировка.",
        "Урок серфинга с инструктором.",
        "Свободное время у океана.",
      ],
    },
    {
      date: "30 июля, День 9",
      title: "ПРОЩАЛЬНЫЙ ЗАКАТ",
      location: "Кута",
      items: [
        "Завтрак.",
        "Утренняя тренировка.",
        "Свободное время (повторный серфинг / спа / магазины).",
        "Прощальный ужин с командой.",
      ],
    },
    {
      date: "31 июля, День 10",
      title: "ДО НОВЫХ ВСТРЕЧ!",
      location: "Трансфер в аэропорт Денпасар",
      items: [
        "Трансфер в аэропорт Денпасар.",
      ],
    },
  ];

  return (
    <>
      {/* О туре + Для кого */}
      <div className="bg-white px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-8">О туре</h2>
        <p className="text-lg text-neutral-600 font-light leading-relaxed mb-16">
          Вас ждут 10 дней вне времени и суеты. Пилатес, приключения, круг единомышленниц и полная свобода быть собой. Программа составлена так, чтобы вы вернулись обновлёнными — влюбленными в себя и этот мир!
        </p>

        <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-8">Этот тур для тебя, если...</h2>
        <div className="flex flex-col gap-0">
          {[
            { emoji: "🌿", text: "Устала от городского ритма и хочешь наконец выдохнуть" },
            { emoji: "🤍", text: "Едешь одна, но хочешь тепла, компании и новых подруг" },
            { emoji: "🧘‍♀️", text: "Мечтаешь совместить отдых с движением для тела и души" },
            { emoji: "🌊", text: "Хочешь увезти с Бали не только загар, но и внутренний покой" },
            { emoji: "📸", text: "Пора обновить Instagram-ленту — и саму себя" },
          ].map((item, i) => (
            <div key={i} className="border-t border-neutral-200 py-5 flex items-start gap-4">
              <span className="text-2xl leading-none mt-0.5">{item.emoji}</span>
              <p className="text-base text-neutral-800 font-light leading-relaxed">{item.text}</p>
            </div>
          ))}
          <div className="border-t border-neutral-200" />
        </div>
      </div>

      {/* Программа тура */}
      <div id="program" className="flex flex-col lg:flex-row lg:justify-between min-h-screen bg-white">
        <div className="flex-1 h-[400px] lg:h-auto lg:sticky lg:top-0 lg:self-start">
          <img
            src="https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/3bf2780d-fc03-407c-b1c9-1bed020d01ec.jpg"
            alt="Пилатес на Бали"
            className="w-full h-full object-cover lg:h-screen"
          />
        </div>
        <div className="flex-1 px-6 py-12 lg:py-16 lg:px-12">
          <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-8">Что нас ожидает (Программа тура)</h2>
          <div className="flex flex-col gap-6">
            {days.map((item, i) => (
              <div key={i} className="border-t border-neutral-200 pt-5">
                <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{item.date} | {item.location}</p>
                <p className="text-base font-semibold text-neutral-900 mb-3 tracking-wide">{item.title}</p>
                <ul className="flex flex-col gap-1">
                  {item.items.map((point, j) => (
                    <li key={j} className="text-sm text-neutral-500 leading-relaxed">• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer inline-block uppercase tracking-widest"
            >
              Хочу на тур
            </a>
          </div>
        </div>
      </div>
    </>
  );
}