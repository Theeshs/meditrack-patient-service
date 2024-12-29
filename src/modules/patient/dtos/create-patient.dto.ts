import { IsString, IsEmail, IsDate, IsOptional } from 'class-validator';

export class CreatePatientDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  phoneNumber: string;

  @IsDate()
  dateOfBirth: Date;

  @IsOptional()
  @IsString()
  medicalHistory?: string;
}
