import { useState } from "react"

interface GalleryProps {
  language: "en" | "de" | "ru"
}

const translations = {
  en: {
    heading: "Gallery",
  },
  de: {
    heading: "Galerie",
  },
  ru: {
    heading: "Галерея",
  },
}

const photos = [
  {
    id: 1,
    image: "https://cdn.poehali.dev/projects/695ae91f-185b-4364-948f-4bce9bcfb525/files/0b6cd734-bacb-414e-8ca5-432f009769d1.jpg",
    en: "On Stage",
    de: "Auf der Bühne",
    ru: "На сцене",
  },
  {
    id: 2,
    image: "https://cdn.poehali.dev/projects/695ae91f-185b-4364-948f-4bce9bcfb525/files/4e79bc58-1fbc-4120-bfc1-3cd27a44b00f.jpg",
    en: "Studio Portrait",
    de: "Studioporträt",
    ru: "Студийный портрет",
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/projects/695ae91f-185b-4364-948f-4bce9bcfb525/files/d1aeb9a7-cc0f-4262-a047-0e3e10b5b5d0.jpg",
    en: "With Guitar",
    de: "Mit Gitarre",
    ru: "С гитарой",
  },
  {
    id: 4,
    image: "https://cdn.poehali.dev/projects/695ae91f-185b-4364-948f-4bce9bcfb525/files/8eb339c4-f275-4ab8-b4bc-29b9fd153377.jpg",
    en: "Backstage",
    de: "Backstage",
    ru: "За кулисами",
  },
  {
    id: 5,
    image: "https://cdn.poehali.dev/projects/695ae91f-185b-4364-948f-4bce9bcfb525/files/8131475a-368a-44a9-93ec-b6314b300823.jpg",
    en: "Urban Session",
    de: "Urbane Session",
    ru: "Городская съёмка",
  },
]

const galleryItems = {
  en: photos.map((p) => ({ id: p.id, image: p.image, title: p.en })),
  de: photos.map((p) => ({ id: p.id, image: p.image, title: p.de })),
  ru: photos.map((p) => ({ id: p.id, image: p.image, title: p.ru })),
}

export default function Gallery({ language }: GalleryProps) {
  const t = translations[language]
  const items = galleryItems[language]
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selectedItem = items.find((item) => item.id === selectedId)
  const selectedIndex = items.findIndex((item) => item.id === selectedId)

  const goToNext = () => {
    if (selectedId !== null) {
      const nextIndex = (selectedIndex + 1) % items.length
      setSelectedId(items[nextIndex].id)
    }
  }

  const goToPrev = () => {
    if (selectedId !== null) {
      const prevIndex = (selectedIndex - 1 + items.length) % items.length
      setSelectedId(items[prevIndex].id)
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-36 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-charcoal mb-4">{t.heading}</h2>
          <div className="line-accent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group overflow-hidden bg-charcoal/5 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <small className="text-charcoal/70 font-medium">{item.title}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Close button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={goToPrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Previous"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gold transition-colors"
              aria-label="Next"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedIndex + 1} / {items.length}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}