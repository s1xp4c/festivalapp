import React from "react";

interface ImageToIconProps {
  src: string;
  alt: string;
  size: number;
}

const ImageToIconConverter: React.FC<ImageToIconProps> = ({
  src,
  alt,
  size = 24,
}) => <img src={src} alt={alt || "Icon"} width={size} height={size} />;

export default ImageToIconConverter;
