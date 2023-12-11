import React from "react";
import Image from "next/image";

interface ImageToIconProps {
  src: string;
  alt: string;
  size: number;
}

const ImageToIconConverter: React.FC<ImageToIconProps> = ({
  src,
  alt,
  size,
}) => (
  <div style={{ position: "relative" }}>
    <Image
      src={src}
      alt={alt || "Icon"}
      width={size}
      height={size}
      objectFit="contain"
    />
  </div>
);

export default ImageToIconConverter;
