import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';

@InputType()
export class MediaWhereInput {

    @Field(() => [MediaWhereInput], {nullable:true})
    AND?: Array<MediaWhereInput>;

    @Field(() => [MediaWhereInput], {nullable:true})
    OR?: Array<MediaWhereInput>;

    @Field(() => [MediaWhereInput], {nullable:true})
    NOT?: Array<MediaWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    img?: ImageListRelationFilter;
}
