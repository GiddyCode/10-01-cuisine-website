"use client";

import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/images/gallery/gallery-1.jpg", alt: "Delicious jollof rice" },
  { id: 2, src: "/images/gallery/gallery-2.jpg", alt: "Peppered chicken" },
  { id: 3, src: "/images/gallery/gallery-3.jpg", alt: "Fried rice platter" },
  { id: 4, src: "/images/gallery/gallery-4.jpg", alt: "Fresh smoothie" },
  { id: 5, src: "/images/gallery/gallery-5.jpg", alt: "Egusi soup" },
  { id: 6, src: "/images/gallery/gallery-6.jpg", alt: "Grilled fish" },
];

export function PhotoGallery() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl lg:text-5xl">
              Taste Through the Lens
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              From sizzling dishes to happy faces, {"here's"} a glimpse into the world of 10:01 Cuisine. 
              Browse our gallery and see why {"we're"} more than just a meal - {"we're"} a full-on food experience.
            </p>
          </div>
          
          {/* Photo Count Badge */}
          <div className="flex flex-col items-center rounded-2xl bg-primary/10 px-6 py-4">
            <span className="font-serif text-3xl font-bold text-primary">200+</span>
            <span className="text-sm text-muted-foreground">Food Photos Shared</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-colors group-hover:bg-primary/20">
                  <div className="scale-0 rounded-full bg-white p-3 shadow-lg transition-transform group-hover:scale-100">
                    <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
