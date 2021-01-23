import React, { FC } from 'react';

interface ImageProps {
  className?: string;
  src?: string;
  width?: string;
  alt?:string;
}

const Image: FC<ImageProps> = ({
  className="rounded-circle",
  src="/assets/not-found.png",
  width="auto",
  alt="resim"
}) => {
  return (
    <img src={src} className={className} width={width} alt={alt} />
  );
};

export default Image;
