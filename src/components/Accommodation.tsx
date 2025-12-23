import { Bed, Bath, Home, Flame, Leaf } from "lucide-react";
import fincaNight from "@/assets/finca-night.jpg";
import diningImage from "@/assets/dining.jpg";

const amenities = [
  { icon: Home, text: "Two charming cottages" },
  { icon: Bed, text: "8 double/triple bedrooms" },
  { icon: Bath, text: "4 full bathrooms" },
  { icon: Flame, text: "BBQ & outdoor gazebo" },
  { icon: Leaf, text: "Organic garden" },
];

const Accommodation = () => {
  return (
    <section id="accommodation" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Your <span className="text-gradient-corona">Retreat</span> in the
            Stars
          </h2>
          <p className="text-muted-foreground text-lg">
            Imagine a country estate with two charming cottages, living rooms,
            kitchens, and a fantastic outdoor gazebo. All meals included with
            authentic Spanish cuisine.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={fincaNight}
              alt="Finca Invernalia estate at night under the stars"
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-2xl mb-2">The Estate</h3>
              <p className="text-muted-foreground text-sm">
                Stone cottages under the Milky Way, 1300m altitude
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={diningImage}
              alt="Outdoor dining with paella and sangria at sunset"
              className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-2xl mb-2">Al Fresco Dining</h3>
              <p className="text-muted-foreground text-sm">
                Authentic paella, sangria, and organic garden produce
              </p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {amenities.map((amenity) => (
            <div
              key={amenity.text}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-card/50"
            >
              <amenity.icon className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                {amenity.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
