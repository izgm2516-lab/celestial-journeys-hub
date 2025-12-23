import { Telescope, Camera, Star, Eye } from "lucide-react";

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

const astroImages = [
  {
    src: "https://static.wixstatic.com/media/322ca7_8a4d8d70e96c43f2adc295bc5fd64a0e~mv2.jpg/v1/fill/w_300,h_280,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-24%20at%2000_22_46_7dafaa8a.jpg",
    alt: "Nebula astrophotography",
  },
  {
    src: "https://static.wixstatic.com/media/322ca7_121a52ee951d44a1bda21f11887eb59d~mv2.jpg/v1/fill/w_300,h_280,al_c,q_80,enc_avif,quality_auto/322ca7_121a52ee951d44a1bda21f11887eb59d~mv2.jpg",
    alt: "Galaxy photo",
  },
  {
    src: "https://static.wixstatic.com/media/322ca7_c6551872607b4962aa508ab49b567a88~mv2.jpg/v1/fill/w_300,h_280,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-24%20at%2000_22_46_68ec8550.jpg",
    alt: "Deep space object",
  },
  {
    src: "https://static.wixstatic.com/media/322ca7_3c7f22c4579744568f27cf9cf79814db~mv2.jpg/v1/fill/w_300,h_280,al_c,q_80,enc_avif,quality_auto/322ca7_3c7f22c4579744568f27cf9cf79814db~mv2.jpg",
    alt: "Celestial photography",
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

          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {astroImages.map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              ))}
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border/50 rounded-xl p-4 shadow-lg">
              <p className="text-3xl font-serif text-gradient-corona font-medium">Bortle 2</p>
              <p className="text-sm text-muted-foreground">Dark Sky Rating</p>
            </div>
          </div>
        </div>

        {/* Telescope Images Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/322ca7_f3c77018f7af44b0a4bcc35734dadcc8~mv2.jpg/v1/fill/w_350,h_200,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2001_21_03_ed87bdd8.jpg"
              alt="Telescope setup"
              className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/322ca7_dacf6da994cf42d3a3c6b4fa3087543d~mv2.jpg/v1/fill/w_350,h_200,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2002_15_40_5af13e7e.jpg"
              alt="Observatory equipment"
              className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/322ca7_28e18295a9004112a4fff5a286b2334d~mv2.jpg/v1/fill/w_350,h_200,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2006_05_40_71d80e98.jpg"
              alt="Night sky observation"
              className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://static.wixstatic.com/media/322ca7_ceca07714567481083342f49b9cf6d5d~mv2.jpg/v1/fill/w_350,h_200,al_c,q_80,enc_avif,quality_auto/322ca7_ceca07714567481083342f49b9cf6d5d~mv2.jpg"
              alt="Astrophotography session"
              className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Observatory;
