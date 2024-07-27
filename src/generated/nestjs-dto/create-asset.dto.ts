
import {AssetTypes,AcquisitionOrigin} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateAssetDto {
  name: string;
description: string;
date_acquired: Date;
economicLife: number;
qty: number;
createdBy: string;
editedBy: string;
@ApiProperty({ enum: AssetTypes})
type: AssetTypes;
@ApiProperty({ enum: AcquisitionOrigin})
origin: AcquisitionOrigin;
}
