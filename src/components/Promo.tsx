import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import Icon from "@/components/ui/icon";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const included = [
    "Две роскошные виллы в самых красивых локациях (Убуд и Кута).",
    "Ежедневные пилатес-практики",
    "Завтраки",
    "Программа тура и длительные трансферы по программе",
    "Трансфер из аэропорта в отель и обратно",
    "Входные билеты на локациях",
  ];

  const notIncluded = [
    "Авиабилеты",
    "Виза: оформляется онлайн или по прибытии в аэропорту, стоимость – 35 долларов.",
    "Страховка",
    "Обеды и ужины",
    "Самостоятельный трансфер по острову",
    "Спа и массаж",
    "Личные расходы",
  ];

  const faq = [
    {
      q: "Какой уровень подготовки нужен?",
      a: "Подойдет и новичкам, и продвинутым.",
    },
    {
      q: "Я лечу одна, с кем я буду жить?",
      a: "У каждой участницы будет своё личное пространство. Если хочешь жить одна — выбираешь отдельную спальню. Если уже знаешь, с кем хочешь делить комнату — можно заселиться вдвоём.",
    },
    {
      q: "Как мы будем передвигаться по острову?",
      a: "Основные переезды будут на трансфере (минивен) — из аэропорта, между Нуса Дуа и Убудом, между Убудом и Кутой. На многие локации, которые будут в свободное время — новые пляжи, вечеринки, серфинг и т. д. — будем перемещаться на мототакси (оно там распространено и недорогое), если боитесь мототакси — тогда обычное авто.",
    },
    {
      q: "Какая погода в июле?",
      a: "Июль — разгар сухого сезона, лучшее время на Бали. Дождей почти нет, влажность низкая, небо ясное. Температура днем — 28–30°C, ночью — 24–25°C. Океан — 26–27°C, идеален для серфинга и снорклинга. Солнечного света — 10–11 часов в день, закаты — медные и фиолетовые. Идеальное время для пляжного сезона.",
    },
  ];

  return (
    <>
      {/* Параллакс-секция со стоимостью */}
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="https://cdn.poehali.dev/projects/dbd48d9d-1a2d-4473-87e5-057fc5139c0d/files/b081adc9-87a1-4705-83c2-847759ba6f63.jpg"
              alt="Бали. Океан на закате"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
          </motion.div>
        </div>

        <h3 className="absolute top-12 left-6 text-white uppercase z-10 text-sm tracking-widest opacity-60">
          Стоимость тура
        </h3>

        <div className="relative z-10 text-center text-white">
          <p className="text-sm uppercase tracking-widest opacity-60 mb-4">Всё включено</p>
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
            265 000 ₽
          </p>
          <p className="text-base md:text-lg font-light opacity-80 mt-6">
            Виллы · Пилатес · Завтраки · Трансферы · Программа
          </p>
        </div>
      </div>

      {/* Что входит / не входит */}
      <div className="bg-white px-6 py-16 md:py-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-8">Что входит в стоимость</h2>
            <ul className="flex flex-col gap-3">
              {included.map((item, i) => (
                <li key={i} className="border-t border-neutral-200 pt-3 text-sm text-neutral-800 leading-relaxed">
                  — {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-8">Что не входит в стоимость</h2>
            <ul className="flex flex-col gap-3">
              {notIncluded.map((item, i) => (
                <li key={i} className="border-t border-neutral-200 pt-3 text-sm text-neutral-500 leading-relaxed">
                  — {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Рекомендованные рейсы */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-24">
          <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-8">Рекомендованные рейсы</h2>
          <p className="text-lg text-neutral-700 font-light leading-relaxed max-w-2xl">
            Предлагаю вам удобные прямые авиарейсы с вылетом из Москвы. По-возможности объединим всю группу на один рейс, чтобы вы могли познакомиться и сблизиться уже в пути.
          </p>
          <p className="text-lg text-neutral-700 font-light leading-relaxed max-w-2xl mt-4">
            По прибытии вас встретят в аэропорту, а далее будет организован групповой трансфер до виллы.
          </p>
          <p className="text-lg text-neutral-700 font-light leading-relaxed max-w-2xl mt-4">
            Если вам удобнее другой вариант перелёта, вы можете выбрать любой подходящий рейс — вас также встретят и сопроводят до виллы.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-24">
          <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-8">Вопросы и ответы</h2>
          <div className="flex flex-col">
            {faq.map((item, i) => (
              <div key={i} className="border-t border-neutral-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left gap-4 cursor-pointer"
                >
                  <p className="text-base font-medium text-neutral-900">{item.q}</p>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={18}
                    className="shrink-0 text-neutral-400"
                  />
                </button>
                {openFaq === i && (
                  <p className="text-sm text-neutral-500 leading-relaxed pb-5 pr-8">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
            <div className="border-t border-neutral-200" />
          </div>
        </div>
      </div>
    </>
  );
}