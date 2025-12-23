import { Sun, Moon, Star, Mountain, Utensils, Users } from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "100% Total Eclipse",
    description:
      "Experience complete totality with the sun's corona visible in all its glory.",
  },
  {
    icon: Mountain,
    title: "1300m Altitude",
    description:
      "No obstacles on the horizon to enjoy unforgettable sunsets and clear skies.",
  },
  {
    icon: Star,
    title: "Bortle 2 Dark Sky",
    description:
      "Near a certified Starlight zone, perfect for astrophotography and stargazing.",
  },
  {
    icon: Utensils,
    title: "All-Inclusive Dining",
    description:
      "Authentic paella, sangria, finest meats and fish, organic garden vegetables.",
  },
  {
    icon: Users,
    title: "Exclusive Groups",
    description:
      "Reserve for your group of up to 12 people or book individual spots.",
  },
  {
    icon: Moon,
    title: "Full Service",
    description:
      "Airport pickup included, all meals, and expert eclipse viewing guidance.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            The <span className="text-gradient-corona">Eclipse</span> of Your
            Life
          </h2>
          <p className="text-muted-foreground text-lg">
            This is my estate, which I offer you to experience the eclipse of
            your life. An all-inclusive service that begins the moment we pick
            you up at the airport.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-gradient rounded-xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
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
      </div>
    </section>
  );
};

export default Experience;
