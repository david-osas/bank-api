import { Injectable } from '@nestjs/common';
import { CreateBankAccountInput } from './dto/create-account.dto';
import { Account } from './account.interface';
import { customAlphabet } from 'nanoid/async';

@Injectable()
export class AccountService {
  private accounts: Account[];

  constructor() {
    this.accounts = [];
  }

  async createAccount(createInput: CreateBankAccountInput) {
    const generatedNumber = await customAlphabet('0123456789', 10)();
    const accountNumber = Number(generatedNumber);

    const newAccount: Account = { ...createInput, accountNumber };
    this.accounts.push(newAccount);

    return newAccount;
  }

  getOneAccount(accountNumber: number) {
    return this.accounts.find(
      (savedAccount) => savedAccount.accountNumber === accountNumber,
    );
  }

  getAccounts() {
    return this.accounts;
  }
}
