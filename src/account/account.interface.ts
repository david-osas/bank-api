export enum AccountType {
  SAVINGS = 'SAVINGS',
  CHECKING = 'CHECKING',
  MONEY_MARKET = 'MONEY_MARKET',
}

export interface Account {
  firstName: string;
  lastName: string;
  dob: string;
  accountType: AccountType;
  initialBalance: number;
  accountNumber: number;
}
