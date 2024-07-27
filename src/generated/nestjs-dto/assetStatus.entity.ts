import { Asset } from './asset.entity';

export class AssetStatus {
  id: string;
  assetId: string;
  availableQty: number;
  totalQty: number;
  note: string;
  updatedBy: string;
  updatedAt: Date | null;
  asset?: Asset;
}
