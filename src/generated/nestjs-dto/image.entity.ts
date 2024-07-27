import { Media } from './media.entity';

export class Image {
  id: string;
  mediaId: string | null;
  caption: string;
  url: string;
  createdAt: Date;
  updatedAt: Date | null;
  container?: Media | null;
}
