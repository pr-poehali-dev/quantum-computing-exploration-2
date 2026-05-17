import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";

const placeholder = [
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/e75878f3-fb52-4a99-8c89-4e48de425645.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/cac78718-36ce-412f-a890-475002be0b27.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/5b04c2d8-1ef8-4069-895d-5f9205d6217a.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/5e2bcd7a-fb51-4b4c-a1da-fd95292a20f2.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/c900b4da-a39a-46c0-8dbb-edaee16668d2.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/ee653695-c6fa-4d35-ad8d-96f16fc854fe.jpg",
  "https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/b081adc9-87a1-4705-83c2-847759ba6f63.jpg",
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
    photos: [placeholder[0], placeholder[2]],
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
    photos: [placeholder[1], placeholder[3]],
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
    photos: [placeholder[2], placeholder[5]],
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
    photos: [placeholder[4], placeholder[1]],
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
    photos: [placeholder[3], placeholder[0], placeholder[6]],
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
    photos: [placeholder[2], placeholder[4]],
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
    photos: [placeholder[4], placeholder[6], placeholder[1]],
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
    photos: [placeholder[5], placeholder[3]],
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
    photos: [placeholder[6], placeholder[0], placeholder[2]],
  },
  {
    date: "31 июля, День 10",
    title: "ДО НОВЫХ ВСТРЕЧ!",
    location: "Трансфер в аэропорт Денпасар",
    items: [
      "Трансфер в аэропорт Денпасар.",
    ],
    photos: [placeholder[0], placeholder[5]],
  },
];

function PhotoStrip({ photos }: { photos: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="relative mt-4 mb-2">
      <div
        ref={ref}
        className="flex gap-2 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {photos.map((src, i) => (
          <div key={i} className="shrink-0 w-[180px] sm:w-[220px] h-[130px] sm:h-[160px] overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="shrink-0 w-[180px] sm:w-[220px] h-[130px] sm:h-[160px] bg-neutral-100 flex items-center justify-center border border-dashed border-neutral-300">
          <p className="text-xs text-neutral-400 uppercase tracking-widest text-center px-3">Ваше фото</p>
        </div>
      </div>
    </div>
  );
}

export default function Featured() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  return (
    <>
      {/* О туре + Для кого */}
      <div className="bg-white px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-1/2">
            <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">О туре</h2>
            <p className="text-base text-neutral-600 font-light leading-relaxed">
              Вас ждут 10 дней вне времени и суеты. Пилатес, приключения, круг единомышленниц и полная свобода быть собой. Программа составлена так, чтобы вы вернулись обновлёнными — влюбленными в себя и этот мир!
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Этот тур для тебя, если...</h2>
            <ul className="flex flex-col gap-2">
              {[
                { emoji: "🌿", text: "Устала от городского ритма и хочешь выдохнуть" },
                { emoji: "🤍", text: "Едешь одна, но хочешь тепла и новых подруг" },
                { emoji: "🧘‍♀️", text: "Хочешь совместить отдых с движением для тела и души" },
                { emoji: "🌊", text: "Хочешь увезти с Бали не только загар, но и покой" },
                { emoji: "📸", text: "Пора обновить Instagram-ленту — и саму себя" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-neutral-700 font-light">
                  <span>{item.emoji}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-xs uppercase tracking-widest text-neutral-300 shrink-0">{item.date}</span>
                  <span className="text-sm font-semibold text-neutral-900 tracking-wide">{item.title}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-neutral-400 hidden sm:block">{item.location}</span>
                  <Icon name={openDay === i ? "Minus" : "Plus"} size={16} className="text-neutral-400" />
                </div>
              </button>
              {openDay === i && (
                <div className="pb-6">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4 sm:hidden">{item.location}</p>
                  <ul className="flex flex-col gap-1.5 mb-4">
                    {item.items.map((point, j) => (
                      <li key={j} className="text-sm text-neutral-500 leading-relaxed">• {point}</li>
                    ))}
                  </ul>
                  <PhotoStrip photos={item.photos} />
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
            Хочу в тур
          </a>
        </div>
      </div>
    </>
  );
}