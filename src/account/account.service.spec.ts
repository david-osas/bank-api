import { Test } from '@nestjs/testing';
import { AccountService } from './account.service';
import { AccountType } from './account.interface';
import { CreateBankAccountInput } from './dto/create-account.dto';

const testAccountNumber = '1234567890';

jest.mock('nanoid/async', () => ({
  customAlphabet: () => {
    return async () => testAccountNumber;
  },
}));

describe('Account Service', () => {
  let accountService: AccountService;

  const createInput: CreateBankAccountInput = {
    firstName: 'John',
    lastName: 'Doe',
    dob: '2000-04-28',
    accountType: AccountType.SAVINGS,
    initialBalance: 10,
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AccountService],
    }).compile();

    accountService = module.get<AccountService>(AccountService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new user', async () => {
    const account = await accountService.createAccount(createInput);
    expect(account).toEqual({
      ...createInput,
      accountNumber: Number(testAccountNumber),
    });
  });

  it('should get one account', async () => {
    await accountService.createAccount(createInput);

    const account = accountService.getOneAccount(Number(testAccountNumber));

    expect(account).toEqual({
      ...createInput,
      accountNumber: Number(testAccountNumber),
    });
  });

  it('should not return any account for wrong account number', async () => {
    await accountService.createAccount(createInput);

    const account = accountService.getOneAccount(9087654321);

    expect(account).toBeUndefined();
  });

  it('should return list of created accounts', async () => {
    await accountService.createAccount(createInput);

    const accounts = accountService.getAccounts();

    expect(accounts).toEqual([
      {
        ...createInput,
        accountNumber: Number(testAccountNumber),
      },
    ]);
  });
});
