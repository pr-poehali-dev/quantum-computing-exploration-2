export default function Footer() {
  return (
    <div
      id="contact"
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Организатор</h3>
                <p className="text-white text-sm sm:text-base">Маргарита Абрамович</p>
                <p className="text-neutral-400 text-sm">Тренер по пилатесу</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Контакты</h3>
                <a
                  href="https://t.me/helyfely"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  @helyfely — Telegram
                </a>
                <a
                  href="https://instagram.com/helyfely"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  @helyfely — Instagram
                </a>
                <a
                  href="tel:+79677749016"
                  className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm sm:text-base"
                >
                  +7 967 774 90 16
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm tracking-widest">Тур</h3>
                <p className="text-white text-sm sm:text-base">22 — 31 июля 2025</p>
                <p className="text-neutral-400 text-sm">265 000 ₽</p>
                <p className="text-neutral-400 text-sm">Убуд · Кута · Нуса-Пенида</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[14vw] sm:text-[13vw] lg:text-[11vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
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
