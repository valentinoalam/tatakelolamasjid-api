import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationStatus } from '../prisma/notification-status.enum';

@InputType()
export class NotificationUncheckedCreateWithoutReceiverInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sender?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => String, {nullable:true})
    photoUrl?: string;

    @Field(() => Date, {nullable:true})
    dtCreated?: Date | string;

    @Field(() => Boolean, {nullable:true})
    isReaded?: boolean;

    @Field(() => Date, {nullable:false})
    sentAt!: Date | string;

    @Field(() => NotificationStatus, {nullable:false})
    status!: keyof typeof NotificationStatus;
}
