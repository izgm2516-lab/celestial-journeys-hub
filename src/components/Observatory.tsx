import { Telescope, Camera, Star, Eye } from "lucide-react";
import observatoryImage from "@/assets/observatory.jpg";

const features = [
  {
    icon: Telescope,
    title: "State-of-the-Art Equipment",
    description: "Professional astrophotography observatory with top-tier telescopes",
  },
  {
    icon: Camera,
    title: "Astrophotography",
    description: "Capture nebulae, galaxies, and celestial wonders",
  },
  {
    icon: Star,
    title: "Dark & Stable Sky",
    description: "High transparency and excellent seeing conditions",
  },
  {
    icon: Eye,
    title: "Expert Guidance",
    description: "Learn from experienced astrophotographer Carlos Espada",
  },
];

const Observatory = () => {
  return (
    <section id="observatory" className="py-24 section-gradient relative overflow-hidden">
      {/* Subtle star background */}
      <div className="absolute inset-0 star-bg opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              The <span className="text-gradient-corona">Observatory</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              The farm is located in a Bortle 2 area according to{" "}
              <a
                href="http://www.lightpollutionmap.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                lightpollutionmap.com
              </a>
              , in the vicinity of a certified Starlight zone. It features a
              state-of-the-art astrophotography observatory with truly dark and
              stable skies.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Instagram Link */}
            <div className="mt-8 p-4 rounded-xl bg-card/50 border border-border/50 inline-flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-corona-glow flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">See my astrophotos on</p>
                <a
                  href="https://www.instagram.com/carlosespadaapo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  @carlosespadaAPO
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-corona">
              <img
                src={observatoryImage}
                alt="Astrophotography observatory under the Milky Way"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border/50 rounded-xl p-4 shadow-lg">
              <p className="text-3xl font-serif text-gradient-corona font-medium">Bortle 2</p>
              <p className="text-sm text-muted-foreground">Dark Sky Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Observatory;
