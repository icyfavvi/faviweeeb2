import { useState } from 'react';

interface Reason {
  id: number;
  front: string;
  back: string;
  icon: string;
}

const reasons: Reason[] = [
  {
    id: 1,
    front: 'Razón #1',
    back: 'Tu sonrisa ilumina mis días más oscuros',
    icon: '😊',
  },
  {
    id: 2,
    front: 'Razón #2',
    back: 'Me haces sentir especial cada día',
    icon: '✨',
  },
  {
    id: 3,
    front: 'Razón #3',
    back: 'Tu risa es mi melodía favorita',
    icon: '🎵',
  },
  {
    id: 4,
    front: 'Razón #4',
    back: 'Eres mi mejor amiga y mi amor',
    icon: '👫',
  },
  {
    id: 5,
    front: 'Razón #5',
    back: 'Tu abrazo es mi lugar favorito',
    icon: '🤗',
  },
  {
    id: 6,
    front: 'Razón #6',
    back: 'Me inspiras a ser mejor cada día',
    icon: '🌟',
  },
  {
    id: 7,
    front: 'Razón #7',
    back: 'Tus ojos cuentan historias hermosas',
    icon: '👀',
  },
  {
    id: 8,
    front: 'Razón #8',
    back: 'Contigo el tiempo se detiene',
    icon: '⏰',
  },
  {
    id: 9,
    front: 'Razón #9',
    back: 'Eres mi sueño hecho realidad',
    icon: '💭',
  },
  {
    id: 10,
    front: 'Razón #10',
    back: 'Te amo sin medida, sin fin',
    icon: '♾️',
  },
];

export default function ReasonCards() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleCard = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reasons.map((reason) => (
        <div
          key={reason.id}
          className={`flip-card cursor-pointer ${
            flippedCards.has(reason.id) ? 'flipped' : ''
          }`}
          onClick={() => toggleCard(reason.id)}
        >
          <div className="flip-card-inner relative h-64">
            {/* Front */}
            <div className="flip-card-front absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 text-white">
              <span className="text-6xl mb-4">{reason.icon}</span>
              <h3 className="text-2xl font-bold">{reason.front}</h3>
              <p className="text-sm mt-4 opacity-80">Toca para revelar</p>
            </div>
            
            {/* Back */}
            <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-rose-500 to-red-500 rounded-2xl shadow-xl flex items-center justify-center p-6 text-white">
              <p className="text-xl text-center font-medium leading-relaxed">
                {reason.back}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
