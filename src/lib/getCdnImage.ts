export function getCdnImage(
  filename: string,
  folder: string = "resume", // ignore incoming folder param
  width: number = 400
): string {
  return `https://res.cloudinary.com/dxrwnc5g4/image/upload/f_auto,q_auto,w_${width}/gcintle/${folder}/${filename}`;
}
