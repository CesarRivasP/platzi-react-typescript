// La I de prefijo es para denotar que es global. Puede usarse la T.
type IFoxImageItem = {
  id: string;
  url: string
}

/*
  * Ideal:
  * Entidades.
  * Usuario.
  * Producto.
  * (No abusar de ellos)
  * Empezar local, y despues validar si es necesario que se exporten globalmente.
*/