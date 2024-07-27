import {
  NotificationStatus,
  Role,
  AccountType,
  TransactionType,
  WeekDay,
  Period,
  AcquisitionOrigin,
  AssetTypes,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
// import Decimal from 'decimal.js';

export function fakeNotification() {
  return {
    sender: undefined,
    title: faker.lorem.words(5),
    message: faker.lorem.words(5),
    photoUrl: undefined,
    sentAt: faker.date.anytime(),
    status: faker.helpers.arrayElement([
      NotificationStatus.Pending,
      NotificationStatus.Sent,
      NotificationStatus.Failed,
      NotificationStatus.Delivered,
    ] as const),
  };
}
export function fakeNotificationComplete() {
  return {
    id: faker.string.uuid(),
    sender: undefined,
    title: faker.lorem.words(5),
    message: faker.lorem.words(5),
    photoUrl: undefined,
    dtCreated: new Date(),
    isReaded: false,
    sentAt: faker.date.anytime(),
    status: faker.helpers.arrayElement([
      NotificationStatus.Pending,
      NotificationStatus.Sent,
      NotificationStatus.Failed,
      NotificationStatus.Delivered,
    ] as const),
  };
}
export function fakeUserNotificationComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    notification_id: faker.string.uuid(),
  };
}
export function fakeUser() {
  return {
    emailAddress: faker.lorem.words(5),
    username: faker.internet.userName(),
    hashedPassword: faker.lorem.words(5),
    api_token: undefined,
    isConfirmed: faker.lorem.words(5),
    updatedAt: undefined,
    role: faker.helpers.arrayElement([
      Role.Admin,
      Role.Petugas,
      Role.Member,
    ] as const),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    emailAddress: faker.lorem.words(5),
    username: faker.internet.userName(),
    hashedPassword: faker.lorem.words(5),
    api_token: undefined,
    isConfirmed: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
    role: faker.helpers.arrayElement([
      Role.Admin,
      Role.Petugas,
      Role.Member,
    ] as const),
  };
}
export function fakePosition() {
  return {
    name: faker.person.fullName(),
    periode: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakePositionComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    eventId: undefined,
    name: faker.person.fullName(),
    periode: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeFamilyMember() {
  return {
    name: faker.person.fullName(),
    information: faker.lorem.words(5),
    relationType: faker.lorem.words(5),
  };
}
export function fakeFamilyMemberComplete() {
  return {
    id: faker.string.uuid(),
    participantId: faker.string.uuid(),
    name: faker.person.fullName(),
    information: faker.lorem.words(5),
    relationType: faker.lorem.words(5),
  };
}
export function fakeParticipant() {
  return {
    withFamily: faker.datatype.boolean(),
    updatedAt: undefined,
  };
}
export function fakeParticipantComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    eventId: faker.string.uuid(),
    profileId: faker.string.uuid(),
    emergencyId: faker.string.uuid(),
    withFamily: faker.datatype.boolean(),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeEmergencyContact() {
  return {
    name: faker.person.fullName(),
    phone: faker.lorem.words(5),
    relationType: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeEmergencyContactComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.lorem.words(5),
    relationType: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeUstadz() {
  return {
    name: faker.person.fullName(),
    phone: faker.lorem.words(5),
    address: faker.lorem.words(5),
  };
}
export function fakeUstadzComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.lorem.words(5),
    address: faker.lorem.words(5),
  };
}
export function fakeUstadzEventComplete() {
  return {
    id: faker.string.uuid(),
    ustadzId: faker.string.uuid(),
    eventId: faker.string.uuid(),
  };
}
export function fakeEvent() {
  return {
    name: faker.person.fullName(),
    place: faker.lorem.words(5),
    dtStart: faker.date.anytime(),
    dtEnd: faker.date.anytime(),
    quota: faker.number.int(),
    description: faker.lorem.words(5),
    heldPeriod: faker.helpers.arrayElement([
      Period.DAILY,
      Period.WEEKLY,
      Period.MONTHLY,
      Period.QUARTERLY,
      Period.YEARLY,
    ] as const),
    updatedAt: undefined,
    createdBy: faker.lorem.words(5),
  };
}
export function fakeEventComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    place: faker.lorem.words(5),
    dtStart: faker.date.anytime(),
    dtEnd: faker.date.anytime(),
    quota: faker.number.int(),
    description: faker.lorem.words(5),
    heldPeriod: faker.helpers.arrayElement([
      Period.DAILY,
      Period.WEEKLY,
      Period.MONTHLY,
      Period.QUARTERLY,
      Period.YEARLY,
    ] as const),
    createdAt: new Date(),
    updatedAt: undefined,
    createdBy: faker.lorem.words(5),
  };
}
export function fakeProfile() {
  return {
    dtBirth: faker.date.anytime(),
    isMan: faker.datatype.boolean(),
    address: faker.lorem.words(5),
    domisili: undefined,
    fullname: faker.lorem.words(5),
    phone: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeProfileComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    dtBirth: faker.date.anytime(),
    isMan: faker.datatype.boolean(),
    address: faker.lorem.words(5),
    domisili: undefined,
    fullname: faker.lorem.words(5),
    phone: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakePaymentMethod() {
  return {
    jenis_pembayaran: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakePaymentMethodComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    jenis_pembayaran: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeAccountCategory() {
  return {
    name: faker.person.fullName(),
    description: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeAccountCategoryComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    description: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeBankAccount() {
  return {
    bankName: faker.lorem.words(5),
    accountNumber: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeBankAccountComplete() {
  return {
    id: faker.string.uuid(),
    bankName: faker.lorem.words(5),
    accountNumber: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeAccount() {
  return {
    name: faker.person.fullName(),
    type: faker.helpers.arrayElement([
      AccountType.Asset,
      AccountType.Liability,
      AccountType.Equity,
      AccountType.Income,
      AccountType.Expense,
    ] as const),
    description: faker.lorem.words(5),
    balance: faker.number.int(),
    updatedAt: undefined,
  };
}
export function fakeAccountComplete() {
  return {
    id: faker.string.uuid(),
    bankAccId: faker.string.uuid(),
    parentAccountId: undefined,
    name: faker.person.fullName(),
    type: faker.helpers.arrayElement([
      AccountType.Asset,
      AccountType.Liability,
      AccountType.Equity,
      AccountType.Income,
      AccountType.Expense,
    ] as const),
    description: faker.lorem.words(5),
    balance: faker.number.int(),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeTransaction() {
  return {
    type: faker.helpers.arrayElement([
      TransactionType.DEBIT,
      TransactionType.CREDIT,
    ] as const),
    amount: faker.number.int(),
    description: faker.lorem.words(5),
    reference: faker.lorem.words(5),
    dtTrx: faker.date.anytime(),
    notaUrl: faker.lorem.words(5),
    updatedAt: undefined,
    createdBy: faker.lorem.words(5),
    updatedBy: faker.lorem.words(5),
  };
}
export function fakeTransactionComplete() {
  return {
    id: faker.string.uuid(),
    accountId: faker.string.uuid(),
    vendorId: faker.string.uuid(),
    paymentMethodId: faker.string.uuid(),
    type: faker.helpers.arrayElement([
      TransactionType.DEBIT,
      TransactionType.CREDIT,
    ] as const),
    amount: faker.number.int(),
    description: faker.lorem.words(5),
    reference: faker.lorem.words(5),
    dtTrx: faker.date.anytime(),
    notaUrl: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
    createdBy: faker.lorem.words(5),
    updatedBy: faker.lorem.words(5),
  };
}
export function fakeTrialBalance() {
  return {
    periodStart: faker.date.anytime(),
    periodEnd: faker.date.anytime(),
    totalDebit: faker.number.int(),
    totalCredit: faker.number.int(),
    updatedAt: undefined,
  };
}
export function fakeTrialBalanceComplete() {
  return {
    id: faker.string.uuid(),
    ledgerId: faker.string.uuid(),
    periodStart: faker.date.anytime(),
    periodEnd: faker.date.anytime(),
    totalDebit: faker.number.int(),
    totalCredit: faker.number.int(),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeTrialBalanceDetail() {
  return {
    openingBalance: faker.number.int(),
    closingBalance: faker.number.int(),
    updatedAt: undefined,
  };
}
export function fakeTrialBalanceDetailComplete() {
  return {
    id: faker.string.uuid(),
    trialBalanceId: faker.string.uuid(),
    accountId: faker.string.uuid(),
    isDebit: true,
    openingBalance: faker.number.int(),
    closingBalance: faker.number.int(),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeLedger() {
  return {
    name: faker.person.fullName(),
    description: faker.lorem.words(5),
    updatedAt: undefined,
    reportPeriod: faker.helpers.arrayElement([
      Period.DAILY,
      Period.WEEKLY,
      Period.MONTHLY,
      Period.QUARTERLY,
      Period.YEARLY,
    ] as const),
    startWeekDay: faker.helpers.arrayElement([
      WeekDay.MONDAY,
      WeekDay.TUESDAY,
      WeekDay.WEDNESDAY,
      WeekDay.THURSDAY,
      WeekDay.FRIDAY,
      WeekDay.SATURDAY,
      WeekDay.SUNDAY,
    ] as const),
  };
}
export function fakeLedgerComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    description: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
    reportPeriod: faker.helpers.arrayElement([
      Period.DAILY,
      Period.WEEKLY,
      Period.MONTHLY,
      Period.QUARTERLY,
      Period.YEARLY,
    ] as const),
    startWeekDay: faker.helpers.arrayElement([
      WeekDay.MONDAY,
      WeekDay.TUESDAY,
      WeekDay.WEDNESDAY,
      WeekDay.THURSDAY,
      WeekDay.FRIDAY,
      WeekDay.SATURDAY,
      WeekDay.SUNDAY,
    ] as const),
  };
}
export function fakeVendor() {
  return {
    name: faker.person.fullName(),
    phone: faker.lorem.words(5),
    address: faker.lorem.words(5),
    businessField: faker.lorem.words(5),
    note: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeVendorComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.lorem.words(5),
    address: faker.lorem.words(5),
    businessField: faker.lorem.words(5),
    note: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeMemo() {
  return {
    title: faker.lorem.words(5),
    body: faker.lorem.words(5),
    is_done: faker.datatype.boolean(),
    updatedAt: undefined,
  };
}
export function fakeMemoComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    title: faker.lorem.words(5),
    body: faker.lorem.words(5),
    is_done: faker.datatype.boolean(),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeAsset() {
  return {
    name: faker.person.fullName(),
    description: faker.lorem.words(5),
    date_acquired: faker.date.anytime(),
    economicLife: faker.number.int(),
    qty: faker.number.int(),
    updatedAt: undefined,
    createdBy: faker.lorem.words(5),
    editedBy: faker.lorem.words(5),
    type: faker.helpers.arrayElement([
      AssetTypes.Fixed,
      AssetTypes.NonFixed,
      AssetTypes.Current,
      AssetTypes.NonCurrent,
    ] as const),
    origin: faker.helpers.arrayElement([
      AcquisitionOrigin.Donation,
      AcquisitionOrigin.Purchase,
      AcquisitionOrigin.Inheritance,
      AcquisitionOrigin.Bequest,
      AcquisitionOrigin.MosqueBuildingFund,
      AcquisitionOrigin.Lease,
      AcquisitionOrigin.Rental,
      AcquisitionOrigin.Pledges,
      AcquisitionOrigin.InvestmentReturns,
      AcquisitionOrigin.FundraisingEvents,
      AcquisitionOrigin.Grants,
      AcquisitionOrigin.Other,
    ] as const),
  };
}
export function fakeAssetComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    description: faker.lorem.words(5),
    date_acquired: faker.date.anytime(),
    economicLife: faker.number.int(),
    qty: faker.number.int(),
    createdAt: new Date(),
    updatedAt: undefined,
    createdBy: faker.lorem.words(5),
    editedBy: faker.lorem.words(5),
    type: faker.helpers.arrayElement([
      AssetTypes.Fixed,
      AssetTypes.NonFixed,
      AssetTypes.Current,
      AssetTypes.NonCurrent,
    ] as const),
    origin: faker.helpers.arrayElement([
      AcquisitionOrigin.Donation,
      AcquisitionOrigin.Purchase,
      AcquisitionOrigin.Inheritance,
      AcquisitionOrigin.Bequest,
      AcquisitionOrigin.MosqueBuildingFund,
      AcquisitionOrigin.Lease,
      AcquisitionOrigin.Rental,
      AcquisitionOrigin.Pledges,
      AcquisitionOrigin.InvestmentReturns,
      AcquisitionOrigin.FundraisingEvents,
      AcquisitionOrigin.Grants,
      AcquisitionOrigin.Other,
    ] as const),
  };
}
export function fakeAssetStatus() {
  return {
    availableQty: faker.number.int(),
    totalQty: faker.number.int(),
    note: faker.lorem.words(5),
    updatedBy: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeAssetStatusComplete() {
  return {
    id: faker.string.uuid(),
    assetId: faker.string.uuid(),
    availableQty: faker.number.int(),
    totalQty: faker.number.int(),
    note: faker.lorem.words(5),
    updatedBy: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeTag() {
  return {
    name: faker.person.fullName(),
    description: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeTagComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    description: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
export function fakeAssetTagsComplete() {
  return {
    id: faker.string.uuid(),
    assetId: faker.string.uuid(),
    tagId: faker.string.uuid(),
  };
}
export function fakeMediaComplete() {
  return {
    id: faker.string.uuid(),
  };
}
export function fakeImage() {
  return {
    caption: faker.lorem.words(5),
    url: faker.lorem.words(5),
    updatedAt: undefined,
  };
}
export function fakeImageComplete() {
  return {
    id: faker.string.uuid(),
    mediaId: undefined,
    caption: faker.lorem.words(5),
    url: faker.lorem.words(5),
    createdAt: new Date(),
    updatedAt: undefined,
  };
}
