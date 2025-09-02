"use client";

import Image from "next/image";

import { useMediaQuery } from "@/hooks/use-media-query";

interface ResponsiveBannerProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
}

const ResponsiveBanner = ({
  desktopSrc,
  mobileSrc,
  alt,
  className = "h-auto w-full",
}: ResponsiveBannerProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Image
      src={isDesktop ? desktopSrc : mobileSrc}
      alt={alt}
      height={0}
      width={0}
      sizes="100vw"
      className={className}
    />
  );
};

export default ResponsiveBanner;
