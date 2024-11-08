import { type IEmailValidator } from '../presentation/protocols/email-validator'

export class EmailValidatorAdapter implements IEmailValidator {
  isValid (email: string | any): boolean {
    return false
  }
}
