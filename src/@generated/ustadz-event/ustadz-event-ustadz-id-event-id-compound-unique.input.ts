import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UstadzEventUstadzIdEventIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    ustadzId!: string;

    @Field(() => String, {nullable:false})
    eventId!: string;
}
