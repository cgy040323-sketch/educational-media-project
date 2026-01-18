import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with center image

  // Placeholder images - these would be replaced with actual photos
  const images = [
    { id: 1, alt: "Photo 1" },
    { id: 2, alt: "Photo 2" },
    { id: 3, alt: "Photo 3" },
    { id: 4, alt: "Photo 4" },
    { id: 5, alt: "Photo 5" },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative mx-auto mt-24 w-full max-w-[1460px] px-6 md:mt-32 lg:mt-40 xl:mt-52">
      <div className="relative flex h-[400px] items-center justify-center md:h-[500px] xl:h-[539px]">
        {/* Navigation Buttons - Removed as per user request */}

        {/* Image Stack - Responsive Layout */}
        <div className="relative h-full w-full">
          {/* Far Left Card - Always visible */}
          <div 
            onClick={() => setCurrentIndex(0)}
            className="absolute left-0 top-1/2 h-[250px] w-[300px] -translate-y-1/2 rounded-3xl border-8 border-brand-blue bg-gray-100 shadow-lg xl:h-[344px] xl:w-[459px] cursor-pointer" 
          />

          {/* Left Card */}
          <div 
            onClick={() => setCurrentIndex(1)}
            className="absolute left-[5%] top-1/2 z-[2] h-[280px] w-[320px] -translate-y-1/2 rounded-3xl border-8 border-brand-blue bg-gray-100 shadow-lg md:left-[8%] md:h-[350px] md:w-[400px] xl:left-[10.6%] xl:h-[431px] xl:w-[575px] cursor-pointer" 
          />

          {/* Center Card (Main Focus) */}
          <div 
            onClick={() => setCurrentIndex(2)}
            className="absolute left-1/2 top-1/2 z-[3] h-[320px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border-8 border-brand-blue bg-gray-100 shadow-2xl md:h-[420px] md:w-[480px] xl:h-[539px] xl:w-[719px] cursor-pointer" 
          />

          {/* Right Card */}
          <div 
            onClick={() => setCurrentIndex(3)}
            className="absolute right-[5%] top-1/2 z-[2] h-[280px] w-[320px] -translate-y-1/2 rounded-3xl border-8 border-brand-blue bg-gray-100 shadow-lg md:right-[8%] md:h-[350px] md:w-[400px] xl:right-[10.6%] xl:h-[431px] xl:w-[575px] cursor-pointer" 
          />

          {/* Far Right Card - Always visible */}
          <div 
            onClick={() => setCurrentIndex(4)}
            className="absolute right-0 top-1/2 h-[250px] w-[300px] -translate-y-1/2 rounded-3xl border-8 border-brand-blue bg-gray-100 shadow-lg xl:h-[344px] xl:w-[459px] cursor-pointer" 
          />
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all md:h-3 md:w-3 ${
                index === currentIndex ? "bg-brand-lightblue" : "bg-brand-lightblue/30"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
