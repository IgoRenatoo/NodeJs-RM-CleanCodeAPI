import { MissingParamError } from '../errors/missing-param-error'
import { BadRequest } from '../helpers/http-helper'
import { type Controller } from '../protocols/controller'
import { type HttpResponse, type HttpRequest } from '../protocols/http'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamError(field))
      }
    }
    return {
      statusCode: 200,
      body: 'Sign up successful'
    }
  }
}
