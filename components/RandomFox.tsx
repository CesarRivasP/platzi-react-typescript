import type { FunctionComponent, FC } from "react";

type Props = {
  image: string;
  alt: string
}

/*
* ESTA ES LA FORMA EN LA QUE SE DEBERIA IMPLEMENTAR
*/
export const RandomFoxExplicit = ({ image, alt }: Props): JSX.Element => {
  return <img width={320} height={'auto'} className='rounded' src={image} alt={alt} />
}

// ESTA ES LA FORMA EN LA QUE NOOO SE DEBERIA IMPLEMENTAR
// export const RandomFoxExplicitFC = (): FunctionComponent => {
//   return <img />
// }

// export const RandomFoxFC = (): FC => {
//   return <img />
// }