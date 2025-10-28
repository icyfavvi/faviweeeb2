import { useState, useEffect } from 'react';

interface SurpriseButtonProps {
  onActivate: () => void;
}

export default function SurpriseButton({ onActivate }: SurpriseButtonProps) {
  const [showSurprise, setShowSurprise] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  const handleClick = () => {
    setShowSurprise(true);
    onActivate();
    
    // Generar confeti
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setConfetti(newConfetti);

    // Limpiar confeti después de la animación
    setTimeout(() => setConfetti([]), 3000);
  };

  const handleClose = () => {
    setShowSurprise(false);
  };

  return (
    <div className="relative">
      {!showSurprise ? (
        <button
          onClick={handleClick}
          className="relative px-12 py-6 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
        >
          <span className="mr-3">🎁</span>
          ¡Presiona para tu sorpresa!
          <span className="ml-3">🎁</span>
        </button>
      ) : (
        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-12 shadow-2xl border-4 border-rose-300">
            <div className="text-center space-y-6">
              <div className="text-7xl animate-bounce">💝</div>
              <h3 className="text-4xl font-bold text-rose-700">
                ¡Mi Promesa Para Ti!
              </h3>
              <div className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto space-y-4">
                <p className="font-semibold text-rose-600">
                  Prometo amarte cada día más que el anterior
                </p>
                <p>Prometo estar a tu lado en las buenas y en las malas</p>
                <p>Prometo hacerte sonreír cuando estés triste</p>
                <p>Prometo celebrar tus victorias como si fueran mías</p>
                <p>Prometo construir contigo los sueños más hermosos</p>
                <p className="text-2xl font-bold text-rose-700 mt-6">
                  ¡Prometo amarte por siempre! 💕
                </p>
              </div>
              <button
                onClick={handleClose}
                className="mt-6 px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-colors duration-300 shadow-lg"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confeti */}
      {confetti.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="absolute text-2xl"
              style={{
                left: `${piece.left}%`,
                top: '-50px',
                animation: `fall 3s ease-in forwards`,
                animationDelay: `${piece.delay}s`,
              }}
            >
              {['❤️', '💕', '💖', '💗', '💝', '🌹', '⭐', '✨'][
                Math.floor(Math.random() * 8)
              ]}
            </div>
          ))}
          <style>{`
            @keyframes fall {
              0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
