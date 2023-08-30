import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateBankAccountInput } from './dto/create-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async createAccount(@Body() createInput: CreateBankAccountInput) {
    return await this.accountService.createAccount(createInput);
  }
}
