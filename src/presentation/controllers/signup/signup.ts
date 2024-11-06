import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, ok, serverError } from '../../helpers/http-helper'
import { type IHttpResponse, type IHttpRequest, type IController, type IEmailValidator, type IAddAccount } from './signup-protocols'

export class SignUpController implements IController {
  private readonly emailValidator: IEmailValidator
  private readonly addAccount: IAddAccount

  constructor (emailValidator: IEmailValidator, addAccount: IAddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  handle (httpRequest: IHttpRequest): IHttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { name, email, password, passwordConfirmation } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('invalidEmails'))
      } else {
        const account = this.addAccount.add({ name, email, password })
        return ok(account)
      }
    } catch (error) {
      return serverError()
    }
  }
}
