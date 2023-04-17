import { useEffect, useRef, useState } from 'react';
// import type { FunctionComponent, FC } from "react";
import type { ImgHTMLAttributes } from 'react'

const transparentImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";

type LazyImageProps = {
  src: string;
  onLazyLoad?: (node: HTMLImageElement) => void;
};

type ImagesNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImagesNativeTypes;

/*
 * ESTA ES LA FORMA EN LA QUE SE DEBERIA IMPLEMENTAR
*/
export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setSrc] = useState(transparentImage);

  useEffect(() => {
    // Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        /*
          * onIntersection
          * Esta propiedad indica si el elemento esta dentro de la pantalla
        */
        if (entry.isIntersecting) {
          console.log('Hey you!!');
          setSrc((prevState) => {
            if (prevState !== src) {
              node.current && onLazyLoad?.(node.current);
              observer.disconnect();
              return src;
            }
            return prevState;
          });
          window.plausible("add_fox", {
            callback: () => { },
            props: {
              'example': 'caracas'
            }
          });
        }
      });
    });

    // Observe node
    node.current && observer.observe(node.current);

    // disconnect
    return () => {
      observer.disconnect();
    }
  }, [src, onLazyLoad]);

  return <img ref={node} src={currentSrc} {...imgProps} />
}

// ESTA ES LA FORMA EN LA QUE NOOO SE DEBERIA IMPLEMENTAR
// export const RandomFoxExplicitFC = (): FunctionComponent => {
//   return <img />
// }

// export const RandomFoxFC = (): FC => {
//   return <img />
// }