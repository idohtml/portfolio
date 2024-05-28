import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageLinkProps {
  href: string;
  src: StaticImageData;
  alt: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ href, src, alt }) => (
  <Link href={href} target="_blank">
    <Image
      className="w-full h-full object-cover object-center rounded-md"
      src={src}
      alt={alt}
    />
  </Link>
);

export default ImageLink;
