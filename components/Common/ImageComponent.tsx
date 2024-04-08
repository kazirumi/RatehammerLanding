import Image from "next/image";
import React, { CSSProperties } from "react";

interface Props{
    src:string,
    objectFit: CSSProperties["objectFit"];
    alt:string;
    classes?:string
}

const ImageComponent = ({src, objectFit, alt, classes}:Props) => {
  return (
    <Image
        src={src}
        fill
        alt={alt}
        style={{objectFit:objectFit}}
        quality={100}
        className={classes}
    />
  );
};

export default ImageComponent;
