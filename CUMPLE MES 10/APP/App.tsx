import { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import CountdownTimer from './components/CountdownTimer';
import ReasonCards from './components/ReasonCards';
import PhotoGallery from './components/PhotoGallery';
import Timeline from './components/Timeline';
import LoveLetter from './components/LoveLetter';
import SurpriseButton from './components/SurpriseButton';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  // Fecha de inicio de la relación (ajustar según corresponda)
  const startDate = new Date('2024-01-01T00:00:00');

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 overflow-x-hidden">
      {/* Partículas de corazones flotantes */}
      <FloatingHearts />
      
      {/* Reproductor de música */}
      <MusicPlayer />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-red-500 to-rose-600 bg-clip-text text-transparent animate-fade-in">
            10 Meses Juntos ❤️
          </h1>
          <p className="text-2xl md:text-3xl text-rose-700 font-light mb-12 animate-slide-up">
            Celebrando nuestro amor
          </p>
          <CountdownTimer startDate={startDate} />
        </div>
      </section>

      {/* 10 Razones Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-rose-800">
            10 Razones Por Las Que Te Amo
          </h2>
          <ReasonCards />
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-rose-800">
            Nuestros Momentos Especiales
          </h2>
          <PhotoGallery />
        </div>
      </section>

      {/* Línea de Tiempo */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-rose-800">
            Nuestra Historia
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Carta de Amor */}
      <section className="py-20 px-4 bg-gradient-to-br from-rose-100/50 to-pink-100/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-rose-800">
            Una Carta Para Ti
          </h2>
          <LoveLetter />
        </div>
      </section>

      {/* Botón Sorpresa */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <SurpriseButton onActivate={() => setShowConfetti(true)} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-rose-600">
        <p className="text-lg">Con todo mi amor ❤️</p>
        <p className="text-sm mt-2">Hecho especialmente para ti</p>
      </footer>
    </div>
  );
}

export default App;
