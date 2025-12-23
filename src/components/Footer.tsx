import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary" />
            </div>
            <span className="font-serif text-lg text-gradient-corona">
              Finca Invernalia
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/carlosespadaapo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@carlosespada6202"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="mailto:carlos_espada@yahoo.com"
              className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Finca Invernalia. All rights reserved.
          </p>
        </div>

        {/* External Links */}
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a
            href="http://xjubier.free.fr/en/site_pages/solar_eclipses/TSE_2026_GoogleMapFull.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Eclipse Path Map
          </a>
          <a
            href="http://www.lightpollutionmap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Light Pollution Map
          </a>
          <a
            href="https://www.google.com/maps/search/Anquela+del+Pedregal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
