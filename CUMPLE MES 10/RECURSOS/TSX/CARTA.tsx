import { useState } from 'react';

export default function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-2xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
        >
          <div className="text-6xl mb-4 animate-pulse-slow">💌</div>
          <p className="text-2xl font-bold mb-2">Haz clic para abrir mi carta</p>
          <p className="text-sm opacity-90">Escrita con todo mi corazón</p>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in border-4 border-rose-200">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-rose-700 mb-2">
              Para el amor de mi vida
            </h3>
            <div className="text-4xl">💕</div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4 leading-relaxed">
            <p className="text-lg">Mi amor,</p>

            <p>
              Han pasado 10 meses desde que nuestras vidas se entrelazaron, y cada día a tu lado
              ha sido un regalo precioso. No existen palabras suficientes para expresar la
              felicidad que traes a mi vida.
            </p>

            <p>
              Tu sonrisa ilumina mis días más oscuros, tu risa es la melodía más hermosa que
              he escuchado, y tu amor es el refugio más cálido que he conocido. Contigo he
              descubierto lo que significa amar de verdad, sin reservas, sin miedos.
            </p>

            <p>
              Cada momento compartido, cada aventura vivida, cada obstáculo superado juntos,
              ha fortalecido este amor que siento por ti. Me haces querer ser mejor persona
              cada día, me inspiras con tu fuerza y me llenas de paz con tu presencia.
            </p>

            <p>
              Estos 10 meses son solo el comienzo de una historia que quiero escribir contigo
              por el resto de mi vida. Gracias por elegirme, por amarme, por ser mi compañera
              en este hermoso viaje.
            </p>

            <p>
              Te amo hoy, te amaré mañana, y te seguiré amando en todos los días que están
              por venir. Eres mi presente más preciado y mi futuro más esperado.
            </p>

            <p className="text-xl font-semibold text-rose-600 mt-8">
              Con todo mi amor,
            </p>
            <p className="text-lg italic text-rose-500">
              Tu persona favorita ❤️
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors duration-300 shadow-lg"
            >
              Cerrar carta
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
