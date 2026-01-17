import { useTranslation } from "react-i18next";
import { Telescope, Moon, Users, Camera } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const Observatory = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Telescope,
      title: t("observatory.features.proEquipment"),
      description: t("observatory.features.proEquipmentDesc"),
    },
    {
      icon: Moon,
      title: t("observatory.features.darkSky"),
      description: t("observatory.features.darkSkyDesc"),
    },
    {
      icon: Users,
      title: t("observatory.features.expertGuide"),
      description: t("observatory.features.expertGuideDesc"),
    },
  ];

  const astroImages = [
    { 
      src: "https://static.wixstatic.com/media/322ca7_63165ca5876f4683b3c7f8b6e689b65d~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_63165ca5876f4683b3c7f8b6e689b65d~mv2.jpg", 
      alt: "Astrophotography Sample",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_0d673569cd5d4821a0a98375ea581c37~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_0d673569cd5d4821a0a98375ea581c37~mv2.jpg", 
      alt: "Observatory and Farm Tour Video",
      type: "video" as const,
      videoUrl: "https://www.dropbox.com/scl/fi/3151o5jlgv6a7ya1jggcj/This-is-my-astrophotographic-observatory-and-my-little-organic-farm.mp4?rlkey=i0iwcjvl4ehl4r4q8gp7xw04x&st=vovcs6hb&dl=0"
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_4e626e07748243b18b67d97632923677~mv2.png/v1/fill/w_400,h_600,al_c,q_85,enc_avif,quality_auto/322ca7_4e626e07748243b18b67d97632923677~mv2.png", 
      alt: "Night Sky Timelapse Video",
      type: "video" as const,
      videoUrl: "https://www.dropbox.com/scl/fi/6rdq2ujdvihksp39wdfz4/WhatsApp-Video-2025-10-24-at-00.17.57_431fe808.mp4?rlkey=tm5srstvzt439ccwqjci8ebhy&st=x8inlme6&dl=0"
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_8a4d8d70e96c43f2adc295bc5fd64a0e~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-24%20at%2000_22_46_7dafaa8a.jpg", 
      alt: "Observatory Equipment",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_121a52ee951d44a1bda21f11887eb59d~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_121a52ee951d44a1bda21f11887eb59d~mv2.jpg", 
      alt: "Telescope Setup",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_c6551872607b4962aa508ab49b567a88~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/WhatsApp%20Image%202025-10-24%20at%2000_22_46_68ec8550.jpg", 
      alt: "Deep Sky Object",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_3c7f22c4579744568f27cf9cf79814db~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_3c7f22c4579744568f27cf9cf79814db~mv2.jpg", 
      alt: "Nebula Capture",
      type: "image" as const
    },
    { 
      src: "https://static.wixstatic.com/media/322ca7_ceca07714567481083342f49b9cf6d5d~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,enc_avif,quality_auto/322ca7_ceca07714567481083342f49b9cf6d5d~mv2.jpg", 
      alt: "Galaxy Image",
      type: "image" as const
    },
    { 
      src: "/images/astro-image1.jpg", 
      alt: "Astrophotography Capture",
      type: "image" as const
    },
    { 
      src: "/images/astro-image2.jpg", 
      alt: "Deep Space Object",
      type: "image" as const
    },
    { 
      src: "/images/astro-image3.jpg", 
      alt: "Celestial Photography",
      type: "image" as const
    },
  ];

 

  return (
    <section id="observatory" className="py-24 section-gradient relative overflow-hidden">
      <div className="absolute inset-0 star-bg opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            {t("observatory.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("observatory.subtitle")}
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-6 border border-border/50 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("observatory.description")}
          </p>
          
          {/* Instagram Link */}
          <div className="mt-8 p-4 rounded-xl bg-card/50 border border-border/50 inline-flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-corona-glow flex items-center justify-center">
              <Camera className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">See astrophotos on</p>
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

        {/* Astrophotography Gallery */}
        <h3 className="text-2xl font-serif text-center mb-8">{t("observatory.astroGallery")}</h3>
        <ImageLightbox images={astroImages} className="mb-12" />

        
      </div>
    </section>
  );
};

export default Observatory;
