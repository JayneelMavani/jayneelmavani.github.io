import Image from "next/image";

interface ProjectGalleryProps {
  screenshots: string[];
  title: string;
}

export default function ProjectGallery({
  screenshots,
  title,
}: ProjectGalleryProps) {
  if (screenshots.length === 0) return null;

  return (
    <section className="mb-10 sm:mb-12" aria-labelledby="gallery-heading">
      <h2
        id="gallery-heading"
        className="text-xl sm:text-2xl font-bold mb-4 text-white"
      >
        Screenshots
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {screenshots.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative aspect-video rounded-lg overflow-hidden glass"
          >
            <Image
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
