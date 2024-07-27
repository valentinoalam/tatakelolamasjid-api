import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Transaction } from '../transaction/transaction.model';
import { PaymentMethodCount } from './payment-method-count.output';

@ObjectType()
export class PaymentMethod {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    jenis_pembayaran!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [Transaction], {nullable:true})
    Transaction?: Array<Transaction>;

    @Field(() => PaymentMethodCount, {nullable:false})
    _count?: PaymentMethodCount;
}
