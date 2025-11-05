"use client";

import { useState } from "react";
import Lightbox from "react-image-lightbox"; 
import "react-image-lightbox/style.css";
import Image from "next/image";

// ✅ UI Assets
interface UIPic {
  type: "image" | "video";
  src: string;
  alt: string;
}

const uiMediaData: UIPic[] = [
  { type: "image", src: "/png/proj4.png", alt: "POS Dashboard — Sales & Metrics" },
  { type: "image", src: "/png/proj5.png", alt: "POS Inventory & Product Listings" },
  { type: "image", src: "/png/proj1.png", alt: "Salon Platform Landing Page" },
  { type: "image", src: "/png/proj2.png", alt: "Appointment Scheduling — Time Slots " },
];

const uiDemoData: UIPic[] = [
  { type: "video", src: "/image/glam_demo.mp4", alt: "Glamora Appointment System — Demo" },
];

export default function UIGallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = uiMediaData.filter((item) => item.type === "image");
  const imageSources = images.map((pic) => pic.src);
  const totalImages = imageSources.length;

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="ui-gallery" className="relative my-12 lg:my-20 px-6">
      
      {/* ✅ Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide">
          Project Showcase
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2 text-sm">
          A curated gallery of full-stack booking platforms, dashboards, AI interfaces, and POS Systems
        </p>
      </div>

      {/* ✅ Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        {/* IMAGE CARDS */}
        {uiMediaData.map((media, index) => (
          <div
            key={index}
            className="group bg-[#0d1224] rounded-xl border border-white/10 shadow-lg overflow-hidden cursor-pointer hover:-translate-y-1 transition-all hover:shadow-purple-500/20"
            onClick={() => openLightbox(images.findIndex((img) => img.src === media.src))}
          >
            <Image
              src={media.src}
              alt={media.alt}
              width={600}
              height={400}
              className="w-full h-44 object-cover rounded-t-xl group-hover:opacity-80 transition"
            />

            <div className="p-3">
              <p className="text-white text-sm font-semibold">{media.alt}</p>
            </div>
          </div>
        ))}

        {/* ✅ VIDEO CARD */}
        {uiDemoData.map((media, idx) => (
          <div
            key={idx}
            className="bg-[#0f0b24] rounded-xl border border-white/10 shadow-lg flex flex-col p-4"
          >
            <p className="text-[#16f2b3] text-sm font-semibold text-center mb-2">
              {media.alt}
            </p>
            <video
              src={media.src}
              controls
              className="rounded-lg w-full h-44 object-cover"
            />
            <p className="text-gray-400 text-xs text-center mt-1">
              End-to-end appointment booking flow
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Lightbox Component */}
      {isOpen && totalImages > 0 && (
        <Lightbox
          mainSrc={imageSources[photoIndex]}
          nextSrc={imageSources[(photoIndex + 1) % totalImages]}
          prevSrc={imageSources[(photoIndex + totalImages - 1) % totalImages]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + totalImages - 1) % totalImages)
          }
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % totalImages)}
          imageTitle={images[photoIndex].alt}
        />
      )}
    </section>
  );
}
