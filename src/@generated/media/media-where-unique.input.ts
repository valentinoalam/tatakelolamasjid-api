import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MediaWhereInput } from './media-where.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';

@InputType()
export class MediaWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [MediaWhereInput], {nullable:true})
    AND?: Array<MediaWhereInput>;

    @Field(() => [MediaWhereInput], {nullable:true})
    OR?: Array<MediaWhereInput>;

    @Field(() => [MediaWhereInput], {nullable:true})
    NOT?: Array<MediaWhereInput>;

    @Field(() => ImageListRelationFilter, {nullable:true})
    img?: ImageListRelationFilter;
}
