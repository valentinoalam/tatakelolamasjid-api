import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  emailAddress: string;
  username: string;
  hashedPassword: string;
  api_token?: string;
  isConfirmed: string;
  @ApiProperty({ enum: Role })
  role: Role;
}
