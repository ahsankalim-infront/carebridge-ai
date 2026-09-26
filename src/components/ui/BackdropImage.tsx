import Image from "next/image";

export function BackdropImage({
  src,
  alt = "",
  className = "opacity-40 md:opacity-25",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      className={`pointer-events-none object-cover ${className}`}
    />
  );
}
