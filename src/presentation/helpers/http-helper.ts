import { type IHttpResponse } from '../protocols/http'
import { ServerError } from '../errors'
import { type IAddAccountModel } from '../controllers/signup/signup-protocols'

export const badRequest = (error: Error): IHttpResponse => ({ statusCode: 400, body: error })

export const serverError = (): IHttpResponse => ({ statusCode: 500, body: new ServerError() })

export const ok = (account: IAddAccountModel): IHttpResponse => ({ statusCode: 200, body: account })
