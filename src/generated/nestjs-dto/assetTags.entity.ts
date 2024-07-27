import { Asset } from './asset.entity';
import { Tag } from './tag.entity';

export class AssetTags {
  id: string;
  assetId: string;
  tagId: string;
  asset?: Asset;
  tag?: Tag;
}
