import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsNumber,
  IsDateString,
  Min,
} from 'class-validator';
import { AccountType } from '../account.interface';

export class CreateBankAccountInput {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsDateString(undefined, {
    message: 'dob must be a valid ISO 8601 date string. Example: 2000-04-28',
  })
  dob: string;

  @IsEnum(AccountType)
  accountType: AccountType;

  @Min(0)
  @IsNumber()
  initialBalance: number;
}
