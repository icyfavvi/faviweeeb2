import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  startDate: Date;
}

interface TimeRemaining {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

export default function CountdownTimer({ startDate }: CountdownTimerProps) {
  const [timeElapsed, setTimeElapsed] = useState<TimeRemaining>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      
      const months = Math.floor(totalDays / 30);
      const days = totalDays % 30;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTimeElapsed({
        months,
        days,
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        <TimeUnit value={timeElapsed.months} label="Meses" />
        <TimeUnit value={timeElapsed.days} label="Días" />
        <TimeUnit value={timeElapsed.hours} label="Horas" />
        <TimeUnit value={timeElapsed.minutes} label="Minutos" />
        <TimeUnit value={timeElapsed.seconds} label="Segundos" />
      </div>
      <p className="text-lg md:text-xl text-rose-600 font-medium">
        ¡{timeElapsed.totalDays} días juntos! 💕
      </p>
    </div>
  );
}

interface TimeUnitProps {
  value: number;
  label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <span className="text-3xl md:text-5xl font-bold text-rose-600 mb-2">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm text-rose-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
