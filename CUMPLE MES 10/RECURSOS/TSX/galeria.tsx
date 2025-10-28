import { useState } from 'react';

interface Photo {
  id: number;
  url: string;
  caption: string;
}

// Imágenes placeholder - el usuario puede reemplazarlas con sus propias fotos
const photos: Photo[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop',
    caption: 'Nuestro primer día juntos',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1509421388839-e3e49a39838b?w=600&h=400&fit=crop',
    caption: 'Aventuras inolvidables',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop',
    caption: 'Momentos especiales',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1532635270-c32b0e3e3f2a?w=600&h=400&fit=crop',
    caption: 'Risas compartidas',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop',
    caption: 'Atardeceres juntos',
  },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToPhoto = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Main Photo Display */}
      <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-6 group">
        <img
          src={photos[currentIndex].url}
          alt={photos[currentIndex].caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-2xl font-semibold">{photos[currentIndex].caption}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevPhoto}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg
            className="w-6 h-6 text-rose-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextPhoto}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg
            className="w-6 h-6 text-rose-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 flex-wrap">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            onClick={() => goToPhoto(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
              index === currentIndex
                ? 'ring-4 ring-rose-500 scale-110'
                : 'opacity-60 hover:opacity-100 hover:scale-105'
            }`}
          >
            <img
              src={photo.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      <p className="text-center mt-6 text-rose-500 text-sm">
        💡 Reemplaza estas imágenes con tus propias fotos editando el componente PhotoGallery.tsx
      </p>
    </div>
  );
}
