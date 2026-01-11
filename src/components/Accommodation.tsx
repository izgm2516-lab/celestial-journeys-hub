import { useTranslation } from "react-i18next";
import { Bed, Bath, Utensils, Leaf, Wifi, Car } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const Accommodation = () => {
  const { t } = useTranslation();

  const amenityIcons = [Bed, Bath, Utensils, Leaf, Wifi, Car];
  const amenityKeys = ["bedrooms", "bathrooms", "meals", "organic", "wifi", "parking"] as const;

  const galleryImages = [
    { 
      src: "https://static.wixstatic.com/media/322ca7_f3c77018f7af44b0a4bcc35734dadcc8~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2001_21_03_ed87bdd8.jpg", 
      alt: "Country Estate Exterior",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_dacf6da994cf42d3a3c6b4fa3087543d~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2002_15_40_5af13e7e.jpg", 
      alt: "Rustic Interior",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_28e18295a9004112a4fff5a286b2334d~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2006_05_40_71d80e98.jpg", 
      alt: "Night Sky View",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_75387a2a4da04a0b8780de1600d4f238~mv2.png/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/322ca7_75387a2a4da04a0b8780de1600d4f238~mv2.png", 
      alt: "Property Video Tour",
      type: "video" as const,
      videoUrl: "https://www.dropbox.com/scl/fi/khwu6g1xm22szo1x38vos/WhatsApp-Video-2025-10-23-at-06.01.02_49611678.mp4?rlkey=72i02vrch9km06qlojvhi6c42&st=5fcrq3yn&dl=0"
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_4910e04a4da944b6809ca526392392bc~mv2.png/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/322ca7_4910e04a4da944b6809ca526392392bc~mv2.png", 
      alt: "Sunset Video",
      type: "video" as const,
      videoUrl: "https://www.dropbox.com/scl/fi/ek1y78dobwtk2afzp384w/WhatsApp-Video-2025-10-23-at-00.21.40_b37412fe.mp4?rlkey=k65trx8440id7evnd8wvljfw8&st=5cf0w8kp&dl=0"
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_c8fc21865ab747b38889764dc4758f72~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2022_40_56_200c89f4.jpg", 
      alt: "Garden View",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_89a3e1eb087d44e690d52159aee7722c~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2023_07_09_5122dc5f.jpg", 
      alt: "Living Space",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_96cec5a51b4349e490eb3fb1370e6e3f~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-23%20at%2023_15_47_0da425cf.jpg", 
      alt: "Outdoor Dining Area",
      type: "image" as const
    },
  ];
  const additionalImages = [
    { 
      src: "https://static.wixstatic.com/media/322ca7_9031c9a5f7734fb1be095ac824aefd41~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_9031c9a5f7734fb1be095ac824aefd41~mv2.jpg", 
      alt: "Telescope Close-up",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_4458fc6e4b824cc7a6da3fe66eabb8ed~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_4458fc6e4b824cc7a6da3fe66eabb8ed~mv2.jpg", 
      alt: "Night Session",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_fbbe562b73c54da49f01ee6c39ae0659~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_fbbe562b73c54da49f01ee6c39ae0659~mv2.jpg", 
      alt: "Observatory at Dusk",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_f65c24256d3a4207b686370f4eb4be68~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_f65c24256d3a4207b686370f4eb4be68~mv2.jpg", 
      alt: "Star Trail",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_5a005d4995ff46a2b41a0b68fc000906~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_5a005d4995ff46a2b41a0b68fc000906~mv2.jpg", 
      alt: "Milky Way View",
      type: "image" as const
    },
  ];

  return (
    <section id="accommodation" className="py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 star-bg opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            {t("accommodation.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("accommodation.subtitle")}
          </p>
        </div>

        {/* Lightbox Gallery */}
        <ImageLightbox images={galleryImages} className="mb-16" />

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("accommodation.description")}
          </p>
        </div>

        {/* Amenities */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {amenityKeys.map((key, index) => {
            const Icon = amenityIcons[index];
            return (
              <div
                key={key}
                className="card-gradient rounded-xl p-4 border border-border/50 text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm text-muted-foreground">
                  {t(`accommodation.amenities.${key}`)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
