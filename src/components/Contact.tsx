import { Mail, Instagram, Youtube, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 star-bg opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Reserve Your <span className="text-gradient-corona">Eclipse</span>{" "}
            Experience
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Reserve the entire property exclusively for your 12-person group, or
            reserve your place individually. Contact Carlos Espada to begin your
            celestial journey.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:carlos_espada@yahoo.com"
              className="group card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">
                carlos_espada@yahoo.com
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/carlosespadaapo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">Instagram</h3>
              <p className="text-muted-foreground text-sm">@carlosespadaapo</p>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@carlosespada6202"
              target="_blank"
              rel="noopener noreferrer"
              className="group card-gradient rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Youtube className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium mb-1">YouTube</h3>
              <p className="text-muted-foreground text-sm">Carlos Espada</p>
            </a>
          </div>

          {/* CTA */}
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl card-gradient border border-border/50">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">
                  August 12, 2026
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">
                  Anquela del Pedregal, Spain
                </span>
              </div>
            </div>
            <Button variant="glow" size="xl" asChild>
              <a href="mailto:carlos_espada@yahoo.com">Contact to Reserve</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
