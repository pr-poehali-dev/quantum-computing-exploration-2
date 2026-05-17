import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

const photos = [
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/cac78718-36ce-412f-a890-475002be0b27.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/5b04c2d8-1ef8-4069-895d-5f9205d6217a.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/5e2bcd7a-fb51-4b4c-a1da-fd95292a20f2.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/c900b4da-a39a-46c0-8dbb-edaee16668d2.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/ee653695-c6fa-4d35-ad8d-96f16fc854fe.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/e75878f3-fb52-4a99-8c89-4e48de425645.jpg",
];

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

export default function Featured() {
  const [openDay, setOpenDay] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

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

      {/* Фотолента */}
      <div className="bg-white py-6 relative">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-6 scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {photos.map((src, i) => (
            <div key={i} className="shrink-0 w-[260px] sm:w-[300px] h-[380px] sm:h-[420px] overflow-hidden">
              <img src={src} alt={`Бали ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Стрелки */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 transition z-10"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 transition z-10"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
        <p className="text-center text-xs uppercase tracking-widest text-neutral-300 mt-4">
          Здесь будут ваши фотографии
        </p>
      </div>

      {/* Программа тура */}
      <div id="program" className="bg-white px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-10">Что нас ожидает · Программа тура</h2>
        <div className="flex flex-col">
          {days.map((item, i) => (
            <div key={i} className="border-t border-neutral-200">
              <button
                onClick={() => setOpenDay(openDay === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left gap-4 cursor-pointer"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs uppercase tracking-widest text-neutral-300 shrink-0">{item.date}</span>
                  <span className="text-sm font-semibold text-neutral-900 tracking-wide">{item.title}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-neutral-400 hidden sm:block">{item.location}</span>
                  <Icon name={openDay === i ? "Minus" : "Plus"} size={16} className="text-neutral-400" />
                </div>
              </button>
              {openDay === i && (
                <div className="pb-5 pl-0 sm:pl-2">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3 sm:hidden">{item.location}</p>
                  <ul className="flex flex-col gap-1.5">
                    {item.items.map((point, j) => (
                      <li key={j} className="text-sm text-neutral-500 leading-relaxed">• {point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <div className="border-t border-neutral-200" />
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
    </>
  );
}
