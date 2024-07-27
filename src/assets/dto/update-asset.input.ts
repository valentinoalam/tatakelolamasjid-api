import { CreateAssetInput } from './create-asset.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAssetInput extends PartialType(CreateAssetInput) {
  id: number;
}
