import { useTranslation } from "react-i18next";
import { Sun, Moon, Star, Mountain, Utensils, Users } from "lucide-react";

const Experience = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Sun,
      title: t("experience.features.eclipse.title"),
      description: t("experience.features.eclipse.description"),
    },
    {
      icon: Mountain,
      title: t("experience.features.altitude.title"),
      description: t("experience.features.altitude.description"),
    },
    {
      icon: Star,
      title: t("experience.features.darkSky.title"),
      description: t("experience.features.darkSky.description"),
    },
    {
      icon: Utensils,
      title: t("experience.features.allInclusive.title"),
      description: t("experience.features.allInclusive.description"),
    },
  ];

  return (
    <section id="experience" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            {t("experience.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-gradient rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("experience.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
