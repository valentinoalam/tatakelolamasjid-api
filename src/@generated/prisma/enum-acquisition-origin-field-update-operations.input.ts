import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AcquisitionOrigin } from './acquisition-origin.enum';

@InputType()
export class EnumAcquisitionOriginFieldUpdateOperationsInput {

    @Field(() => AcquisitionOrigin, {nullable:true})
    set?: keyof typeof AcquisitionOrigin;
}
