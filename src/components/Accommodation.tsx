import { Bed, Bath, Home, Flame, Leaf } from "lucide-react";

const amenities = [
  { icon: Home, text: "Two charming cottages" },
  { icon: Bed, text: "8 double/triple bedrooms" },
  { icon: Bath, text: "4 full bathrooms" },
  { icon: Flame, text: "BBQ & outdoor gazebo" },
  { icon: Leaf, text: "Organic garden" },
];

const galleryImages = [
  {
    src: "https://static.wixstatic.com/media/322ca7_c8fc21865ab747b38889764dc4758f72~mv2.jpg/v1/fill/w_400,h_250,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2022_40_56_200c89f4.jpg",
    alt: "Estate exterior view",
  },
  {
    src: "https://static.wixstatic.com/media/322ca7_89a3e1eb087d44e690d52159aee7722c~mv2.jpg/v1/fill/w_400,h_250,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2023_07_09_5122dc5f.jpg",
    alt: "Property grounds",
  },
  {
    src: "https://static.wixstatic.com/media/322ca7_96cec5a51b4349e490eb3fb1370e6e3f~mv2.jpg/v1/fill/w_400,h_250,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2023_15_47_0da425cf.jpg",
    alt: "Cottage bedroom",
  },
  {
    src: "https://static.wixstatic.com/media/322ca7_9031c9a5f7734fb1be095ac824aefd41~mv2.jpg/v1/fill/w_400,h_250,al_c,q_80,enc_avif,quality_auto/322ca7_9031c9a5f7734fb1be095ac824aefd41~mv2.jpg",
    alt: "Living space",
  },
  {
    src: "https://static.wixstatic.com/media/322ca7_4458fc6e4b824cc7a6da3fe66eabb8ed~mv2.jpg/v1/fill/w_400,h_250,al_c,q_80,enc_avif,quality_auto/322ca7_4458fc6e4b824cc7a6da3fe66eabb8ed~mv2.jpg",
    alt: "Interior view",
  },
  {
    src: "https://static.wixstatic.com/media/322ca7_fbbe562b73c54da49f01ee6c39ae0659~mv2.jpg/v1/fill/w_400,h_250,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2023_26_45_9d665a76.jpg",
    alt: "Outdoor area",
  },
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-video"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
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
