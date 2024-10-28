import { InvalidParamError } from '../errors/invalid-param-error'
import { MissingParamError } from '../errors/missing-param-error'
import { BadRequest } from '../helpers/http-helper'
import { type IController } from '../protocols/controller'
import { type IEmailValidator } from '../protocols/email-validator'
import { type IHttpResponse, type IHttpRequest } from '../protocols/http'

export class SignUpController implements IController {
  private readonly emailValidator: IEmailValidator

  constructor (emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamError(field))
      }
    }
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return BadRequest(new InvalidParamError('invalidEmails'))
    }
    return {
      statusCode: 200,
      body: 'Sign up successful'
    }
  }
}
