import { registerEnumType } from '@nestjs/graphql';

export enum AcquisitionOrigin {
    Donation = "Donation",
    Purchase = "Purchase",
    Inheritance = "Inheritance",
    Bequest = "Bequest",
    MosqueBuildingFund = "MosqueBuildingFund",
    Lease = "Lease",
    Rental = "Rental",
    Pledges = "Pledges",
    InvestmentReturns = "InvestmentReturns",
    FundraisingEvents = "FundraisingEvents",
    Grants = "Grants",
    Other = "Other"
}


registerEnumType(AcquisitionOrigin, { name: 'AcquisitionOrigin', description: undefined })
