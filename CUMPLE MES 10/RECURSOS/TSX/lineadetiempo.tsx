interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: string;
}

const events: TimelineEvent[] = [
  {
    id: 1,
    date: 'Enero 2024',
    title: 'Nuestro Primer Encuentro',
    description: 'El día que nuestras miradas se cruzaron por primera vez',
    icon: '👀',
  },
  {
    id: 2,
    date: 'Febrero 2024',
    title: 'Primera Cita',
    description: 'Una noche mágica que nunca olvidaré',
    icon: '🌙',
  },
  {
    id: 3,
    date: 'Marzo 2024',
    title: 'Primer Te Amo',
    description: 'Las palabras más hermosas que he pronunciado',
    icon: '💕',
  },
  {
    id: 4,
    date: 'Abril 2024',
    title: 'Aventura Juntos',
    description: 'Nuestro primer viaje, creando recuerdos inolvidables',
    icon: '✈️',
  },
  {
    id: 5,
    date: 'Mayo 2024',
    title: 'Momento Especial',
    description: 'Ese día que reímos hasta que nos dolió el estómago',
    icon: '😂',
  },
  {
    id: 6,
    date: 'Junio 2024',
    title: 'Superando Juntos',
    description: 'Enfrentamos desafíos y salimos más fuertes',
    icon: '💪',
  },
  {
    id: 7,
    date: 'Julio 2024',
    title: 'Celebración',
    description: 'Festejando nuestros logros y sueños',
    icon: '🎉',
  },
  {
    id: 8,
    date: 'Agosto 2024',
    title: 'Planes Futuros',
    description: 'Soñando con todo lo que construiremos juntos',
    icon: '🌟',
  },
  {
    id: 9,
    date: 'Septiembre 2024',
    title: 'Creciendo Juntos',
    description: 'Aprendiendo y evolucionando como pareja',
    icon: '🌱',
  },
  {
    id: 10,
    date: 'Octubre 2024',
    title: '10 Meses de Amor',
    description: 'Hoy celebramos nuestro amor y todo lo que vendrá',
    icon: '🎊',
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      {/* Línea vertical central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-rose-400 to-red-400" />

      {/* Eventos */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            {/* Contenedor del evento */}
            <div
              className={`w-5/12 ${
                index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform transition-transform">
                <div className="flex items-center gap-3 mb-3">
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1">
                        <p className="text-sm text-rose-400 font-medium">
                          {event.date}
                        </p>
                        <h3 className="text-xl font-bold text-rose-700">
                          {event.title}
                        </h3>
                      </div>
                      <span className="text-4xl">{event.icon}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl">{event.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm text-rose-400 font-medium">
                          {event.date}
                        </p>
                        <h3 className="text-xl font-bold text-rose-700">
                          {event.title}
                        </h3>
                      </div>
                    </>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Punto en la línea */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rose-500 rounded-full border-4 border-white shadow-lg z-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
