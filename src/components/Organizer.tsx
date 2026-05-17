export default function Organizer() {
  return (
    <div className="bg-neutral-50 px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="uppercase text-xs tracking-widest text-neutral-400 mb-12">Организатор</h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Фото */}
          <div className="w-full md:w-[320px] shrink-0">
            <div className="w-full aspect-[3/4] bg-neutral-200 flex items-center justify-center overflow-hidden">
              <p className="text-neutral-400 text-sm uppercase tracking-widest text-center px-4">
                Фото организатора
              </p>
            </div>
          </div>

          {/* Текст */}
          <div className="flex flex-col justify-center">
            <p className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-1">
              Маргарита Абрамович
            </p>
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-8">
              @helyfely
            </p>
            <p className="text-base text-neutral-700 font-light leading-relaxed mb-4">
              Тренер по пилатесу, растяжке и функциональному тренингу. Ваш друг, наставник и проводник в мир осознанного движения и идеального тела. Глубоко верю, что каждое тело уникально.
            </p>
            <p className="text-base text-neutral-700 font-light leading-relaxed mb-10">
              Моя миссия — помочь увидеть в теле скрытый ресурс и раскрыть его потенциал. На своих тренировках не просто учу двигаться, а чувствовать и слышать тело, успокаивать ум и раскрывать свою внутреннюю силу.
            </p>
            <a
              href="https://t.me/helyfely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white uppercase text-sm tracking-widest px-8 py-3 hover:bg-neutral-800 transition-all duration-300 w-fit"
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
