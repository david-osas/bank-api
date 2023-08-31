import { Account, AccountType } from './account.interface';
import { CreateBankAccountInput } from './dto/create-account.dto';

export const testAccountNumber = '1234567890';

export const testCreateAccountInput: CreateBankAccountInput = {
  firstName: 'John',
  lastName: 'Doe',
  dob: '2000-04-28',
  accountType: AccountType.SAVINGS,
  initialBalance: 10,
};

export const testAccount: Account = {
  firstName: 'John',
  lastName: 'Doe',
  dob: '2000-04-28',
  accountType: AccountType.SAVINGS,
  initialBalance: 10,
  accountNumber: 1234567890,
};
