"use client";

import { ContentImage } from "@/components/shared/content-image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function TaskImageGallery({ images }: { images: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images.length) return null;

  // Unique masonry layout - different sizes for visual interest
  const getItemClass = (index: number, total: number) => {
    // First image is featured (large)
    if (index === 0) return "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto";
    
    // For 2-4 images, create interesting patterns
    if (total === 2) return "aspect-square";
    if (total === 3 && index === 1) return "md:col-span-1 aspect-[4/3]";
    if (total === 3 && index === 2) return "md:col-span-1 aspect-[4/3]";
    
    // For 4+ images
    if (index === 1) return "aspect-[4/3]";
    if (index === 2) return "aspect-square";
    if (index === 3) return "md:col-span-2 aspect-[21/9]";
    
    // Rest follow alternating pattern
    if (index % 5 === 4) return "aspect-square";
    if (index % 5 === 0) return "aspect-[4/3]";
    return "aspect-square";
  };

  return (
    <div className="space-y-4">
      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((src, index) => (
          <button
            key={`${src}-${index}`}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer",
              "border border-white/10 bg-[#0a0f1a]",
              "transition-all duration-300 hover:scale-[1.02] hover:border-[#3ee0c2]/30",
              getItemClass(index, images.length)
            )}
          >
            <ContentImage
              src={src}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              quality={85}
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              intrinsicWidth={800}
              intrinsicHeight={600}
              priority={index < 4}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs font-medium text-white/80">
                  {index === 0 ? "Featured" : `Image ${index + 1}`}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-white/10">
          {selectedIndex !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-[80vh]">
                <ContentImage
                  src={images[selectedIndex]}
                  alt={`Gallery image ${selectedIndex + 1} of ${images.length}`}
                  fill
                  sizes="95vw"
                  quality={95}
                  className="object-contain"
                  intrinsicWidth={1600}
                  intrinsicHeight={1200}
                />
              </div>
              
              {/* Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedIndex((prev) => (prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setSelectedIndex((prev) => (prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                  >
                    →
                  </button>
                </>
              )}
              
              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
