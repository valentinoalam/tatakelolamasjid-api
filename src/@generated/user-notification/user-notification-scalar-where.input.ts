import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserNotificationScalarWhereInput {

    @Field(() => [UserNotificationScalarWhereInput], {nullable:true})
    AND?: Array<UserNotificationScalarWhereInput>;

    @Field(() => [UserNotificationScalarWhereInput], {nullable:true})
    OR?: Array<UserNotificationScalarWhereInput>;

    @Field(() => [UserNotificationScalarWhereInput], {nullable:true})
    NOT?: Array<UserNotificationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    notification_id?: StringFilter;
}
