import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import {
  testAccount,
  testAccountNumber,
  testCreateAccountInput,
} from './constants.test';

describe('Account controller', () => {
  let accountController: AccountController;

  const createAccountMock = jest.fn().mockResolvedValue(testAccount);
  const getOneAccountMock = jest.fn().mockReturnValue(testAccount);
  const getAccountsMock = jest.fn().mockReturnValue([testAccount]);

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [
        {
          provide: AccountService,
          useValue: {
            createAccount: createAccountMock,
            getOneAccount: getOneAccountMock,
            getAccounts: getAccountsMock,
          },
        },
      ],
    }).compile();

    accountController = module.get<AccountController>(AccountController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create account', async () => {
    const account = await accountController.createAccount(
      testCreateAccountInput,
    );

    expect(createAccountMock).toBeCalledTimes(1);
    expect(createAccountMock).toBeCalledWith(testCreateAccountInput);
    expect(account).toEqual(testAccount);
  });

  it('should find one account', () => {
    const account = accountController.getOneAccount(Number(testAccountNumber));

    expect(getOneAccountMock).toBeCalledTimes(1);
    expect(getOneAccountMock).toBeCalledWith(Number(testAccountNumber));
    expect(account).toEqual(testAccount);
  });

  it('should throw not found exception when account can not be found', () => {
    getOneAccountMock.mockReturnValueOnce(undefined);

    try {
      accountController.getOneAccount(9087654321);
    } catch (error) {
      expect(getOneAccountMock).toBeCalledTimes(1);
      expect(error).toBeInstanceOf(NotFoundException);
    }
  });

  it('should return list of all accounts', () => {
    const accounts = accountController.getAccounts();

    expect(getAccountsMock).toBeCalledTimes(1);
    expect(accounts).toEqual([testAccount]);
  });
});
