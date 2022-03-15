import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.ru', description: 'Email address' })
    @IsString({ message: 'Must be a string' })
    @IsEmail({}, { message: 'Incorrect email address' })
    readonly email: string;

    @ApiProperty({ example: '12345', description: 'Password' })
    @IsString({ message: 'Must be a string' })
    @Length(4, 16, { message: 'No less than 4 and no more than 16 characters' })
    readonly password: string;
};