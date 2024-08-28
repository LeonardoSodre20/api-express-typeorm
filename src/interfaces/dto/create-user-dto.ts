

import {
  isEmail, IsNumber,
  IsString
} from "class-validator";

class CreateUserDto {
  @IsNumber()
  id!: number

  @IsString()
  name!: string

  @isEmail()
  email!: string
}

export {
  CreateUserDto
}