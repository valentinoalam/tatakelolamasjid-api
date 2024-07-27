import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumAssetTypesFieldUpdateOperationsInput } from '../prisma/enum-asset-types-field-update-operations.input';
import { EnumAcquisitionOriginFieldUpdateOperationsInput } from '../prisma/enum-acquisition-origin-field-update-operations.input';
import { AssetStatusUncheckedUpdateManyWithoutAssetNestedInput } from '../asset-status/asset-status-unchecked-update-many-without-asset-nested.input';
import { AssetTagsUncheckedUpdateManyWithoutAssetNestedInput } from '../asset-tags/asset-tags-unchecked-update-many-without-asset-nested.input';

@InputType()
export class AssetUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    date_acquired?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    economicLife?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    qty?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    createdBy?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    editedBy?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAssetTypesFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAssetTypesFieldUpdateOperationsInput;

    @Field(() => EnumAcquisitionOriginFieldUpdateOperationsInput, {nullable:true})
    origin?: EnumAcquisitionOriginFieldUpdateOperationsInput;

    @Field(() => AssetStatusUncheckedUpdateManyWithoutAssetNestedInput, {nullable:true})
    AssetStatus?: AssetStatusUncheckedUpdateManyWithoutAssetNestedInput;

    @Field(() => AssetTagsUncheckedUpdateManyWithoutAssetNestedInput, {nullable:true})
    AssetTags?: AssetTagsUncheckedUpdateManyWithoutAssetNestedInput;
}
