import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateBankAccountInput } from './dto/create-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async createAccount(@Body() createInput: CreateBankAccountInput) {
    return await this.accountService.createAccount(createInput);
  }

  @Get(':accountNumber')
  async getOneAccount(@Param('accountNumber') accountNumber: number) {
    const account = this.accountService.getOneAccount(accountNumber);

    if (!account) {
      throw new NotFoundException('No account was found');
    }

    return account;
  }
}
