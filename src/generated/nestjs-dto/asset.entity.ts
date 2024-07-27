import { AssetTypes, AcquisitionOrigin } from '@prisma/client';
import { AssetStatus } from './assetStatus.entity';
import { AssetTags } from './assetTags.entity';

export class Asset {
  id: string;
  name: string;
  description: string;
  date_acquired: Date;
  economicLife: number;
  qty: number;
  createdAt: Date;
  updatedAt: Date | null;
  createdBy: string;
  editedBy: string;
  type: AssetTypes;
  origin: AcquisitionOrigin;
  AssetStatus?: AssetStatus[];
  AssetTags?: AssetTags[];
}
