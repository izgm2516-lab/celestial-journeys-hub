import { useState } from "react";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface MediaItem {
  src: string;
  alt: string;
  type: "image" | "video";
  videoUrl?: string;
}

interface ImageLightboxProps {
  images: MediaItem[];
  className?: string;
}

const ImageLightbox = ({ images, className = "" }: ImageLightboxProps) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
  };

  const currentItem = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      {/* Thumbnail Grid */}
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video"
            onClick={() => item.type === "video" && item.videoUrl ? window.open(item.videoUrl, "_blank") : openLightbox(index)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              {item.type === "video" ? (
                <div className="flex flex-col items-center gap-2">
                  <Play className="w-10 h-10 text-primary" />
                  <span className="text-sm text-foreground">{t("lightbox.video")}</span>
                </div>
              ) : (
                <span className="text-sm text-foreground">Click to expand</span>
              )}
            </div>
            {item.type === "video" && (
              <div className="absolute bottom-2 right-2 bg-primary/80 rounded-full p-1.5">
                <Play className="w-4 h-4 text-primary-foreground" fill="currentColor" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && currentItem && currentItem.type === "image" && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
            aria-label={t("lightbox.close")}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>

          {/* Navigation */}
          {images.filter(i => i.type === "image").length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 z-50 p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-8 h-8 text-foreground" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 z-50 p-2 rounded-full bg-card/50 hover:bg-card transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8 text-foreground" />
              </button>
            </>
          )}

          {/* Image */}
          <div className="max-w-[90vw] max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <p className="text-center mt-4 text-muted-foreground">{currentItem.alt}</p>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
