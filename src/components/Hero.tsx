import { ChevronDown, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://static.wixstatic.com/media/322ca7_1010363dcc4048c79a3d09286d784890~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/Fondo%20Site%20web%202_edited.jpg"
          alt="Total Solar Eclipse with golden corona"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Star overlay */}
      <div className="absolute inset-0 star-bg opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-up">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              August 12, 2026
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Live the{" "}
            <span className="text-gradient-corona glow-text">Total Eclipse</span>
            <br />
            Experience
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Imagine experiencing the next total solar eclipse in one of the best
            locations on the planet, in Spain, 100% total eclipse, on a private
            estate at 1300m altitude.
          </p>

          {/* Location */}
          <div
            className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span>Anquela del Pedregal, Guadalajara, Spain</span>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="glow" size="xl">
              Reserve Your Experience
            </Button>
            <Button variant="heroOutline" size="xl">
              <a
                href="https://www.google.com/maps/search/Anquela+del+Pedregal"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>
            </Button>
          </div>

          {/* Eclipse Map Link */}
          <div
            className="mt-8 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="http://xjubier.free.fr/en/site_pages/solar_eclipses/TSE_2026_GoogleMapFull.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              View Eclipse Path Map →
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
