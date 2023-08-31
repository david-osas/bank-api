import { Test } from '@nestjs/testing';
import { AccountService } from './account.service';
import { testAccountNumber, testCreateAccountInput } from './constants.test';

jest.mock('nanoid/async', () => ({
  customAlphabet: () => {
    return async () => testAccountNumber;
  },
}));

describe('Account Service', () => {
  let accountService: AccountService;

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
    const account = await accountService.createAccount(testCreateAccountInput);
    expect(account).toEqual({
      ...testCreateAccountInput,
      accountNumber: Number(testAccountNumber),
    });
  });

  it('should get one account', async () => {
    await accountService.createAccount(testCreateAccountInput);

    const account = accountService.getOneAccount(Number(testAccountNumber));

    expect(account).toEqual({
      ...testCreateAccountInput,
      accountNumber: Number(testAccountNumber),
    });
  });

  it('should not return any account for wrong account number', async () => {
    await accountService.createAccount(testCreateAccountInput);

    const account = accountService.getOneAccount(9087654321);

    expect(account).toBeUndefined();
  });

  it('should return list of created accounts', async () => {
    await accountService.createAccount(testCreateAccountInput);

    const accounts = accountService.getAccounts();

    expect(accounts).toEqual([
      {
        ...testCreateAccountInput,
        accountNumber: Number(testAccountNumber),
      },
    ]);
  });
});
