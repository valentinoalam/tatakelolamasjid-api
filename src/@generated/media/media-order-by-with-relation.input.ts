import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImageOrderByRelationAggregateInput } from '../image/image-order-by-relation-aggregate.input';

@InputType()
export class MediaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    img?: ImageOrderByRelationAggregateInput;
}
