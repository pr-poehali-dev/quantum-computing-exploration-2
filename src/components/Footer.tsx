export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[500px] sm:h-[650px] lg:h-[850px] max-h-[850px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+500px)] sm:h-[calc(100vh+650px)] lg:h-[calc(100vh+850px)] -top-[100vh]">
        <div className="h-[500px] sm:h-[650px] lg:h-[850px] sticky top-[calc(100vh-500px)] sm:top-[calc(100vh-650px)] lg:top-[calc(100vh-850px)]">
          <div className="bg-neutral-900 py-6 sm:py-8 lg:py-10 px-5 sm:px-8 h-full w-full flex flex-col justify-between">

            <div className="flex flex-wrap shrink-0 gap-8 sm:gap-12 lg:gap-20">
              {/* Контакты */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs tracking-widest">Забронировать место</h3>
                <p className="text-neutral-400 text-sm mb-3 leading-relaxed">
                  Напишите — и получите подробную информацию о туре:
                </p>
                <a
                  href="tel:+79677749016"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  +7 967 774 90 16
                </a>
                <a
                  href="https://t.me/helyfely"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Telegram
                </a>
                <a
                  href="https://instagram.com/helyfely"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/79677749016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  WhatsApp
                </a>
                <p className="text-neutral-500 text-sm mt-3">До встречи на Бали!</p>
              </div>

              {/* Тур */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-2 uppercase text-neutral-400 text-xs tracking-widest">Тур</h3>
                <p className="text-white text-sm sm:text-base">22 — 31 июля 2025</p>
                <p className="text-neutral-400 text-sm">265 000 ₽</p>
                <p className="text-neutral-400 text-sm">Убуд · Кута · Нуса-Пенида</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[13vw] lg:text-[11vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-8 text-white font-bold tracking-tight">
                SHE BALI
              </h1>
              <p className="text-neutral-500 text-sm">2025 · @helyfely</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}