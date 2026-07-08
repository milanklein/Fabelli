import Image from "next/image";

export default function GallerySlider({ images }: { images: string[] }) {
  const track = [...images, ...images];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-[64px] py-16">
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative aspect-[280/553] w-[220px] shrink-0 overflow-hidden rounded-[24px] shadow-[0px_0px_43px_0px_rgba(219,236,248,0.59)] sm:w-[300px] sm:rounded-[40px]"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
