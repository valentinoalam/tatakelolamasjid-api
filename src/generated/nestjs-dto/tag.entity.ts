import { AssetTags } from './assetTags.entity';

export class Tag {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
  AssetTags?: AssetTags[];
}
