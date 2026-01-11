import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const EclipseCountdown = () => {
  const { t } = useTranslation();
  const eclipseDate = new Date('2026-08-12T00:00:00');
  
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eclipseDate.getTime() - now.getTime();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: t('countdown.days'), value: timeLeft.days },
    { label: t('countdown.hours'), value: timeLeft.hours },
    { label: t('countdown.minutes'), value: timeLeft.minutes },
    { label: t('countdown.seconds'), value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t('countdown.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('countdown.subtitle')}
          </p>
        </div>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[140px] text-center shadow-lg shadow-primary/5"
            >
              <div className="text-4xl md:text-6xl font-display font-bold text-primary mb-2 tabular-nums">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-muted-foreground max-w-2xl mx-auto">
          {t('countdown.description')}
        </p>
      </div>
    </section>
  );
};

export default EclipseCountdown;
