"use client";
import Image from "next/image";
import { useState } from "react";

type FlagImageProps = {
  src: string;
  alt: string;
  size: number;
  className?: string;
  pending?: boolean;
};

const FlagImage = ({ src, alt, size, className = "", pending = false }: FlagImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const showLoader = !loaded || pending;
  return (
    <span className={`relative inline-block shrink-0 rounded-full ${className}`}>
      {showLoader && (
        <span
          className={`absolute inset-0 flex items-center justify-center rounded-full bg-white/40 dark:bg-white/15 ${
            pending ? "" : "animate-pulse"
          }`}
        >
          {pending && (
            <span className="w-3/4 h-3/4 rounded-full border-2 border-white border-t-transparent animate-spin" />
          )}
        </span>
      )}
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        unoptimized
        priority
        onLoad={() => setLoaded(true)}
        className={`w-full h-full rounded-full transition-opacity duration-300 ${
          showLoader ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
};
export default FlagImage;
