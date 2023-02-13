import Image from './image.interface';

export default interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Image;
}
