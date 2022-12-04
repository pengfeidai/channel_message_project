/**
 * @file 项目的系统错误文件
 * @author fly
 * @date 2022.06.27
 */

import { T_AppErrorType } from './error_msg';

export class SysError extends Error {
  code: number;
  errors: any[] | undefined;
  details?: unknown;
  status: number;

  /**
   * 全局自定义错误结构
   * 可以接受多条错误信息，用于业务抛错
   * @param appErrorType
   * @param errors 错误数组(jio 表单错误多条)
   * @param status 状态码 2xx, 4xx, 5xx
   */
  constructor(appErrorType: T_AppErrorType, errors?: any[], status?: number) {
    const [message, code] = appErrorType;
    super(message + ` &>${code || ''}`);
    // super(message);
    this.code = code;
    this.errors = errors;
    this.status = status || 400;
  }
}

export class DtoError extends Error {
  code: number;
  errors: any[] | undefined;
  details?: unknown;
  status: number;

  /**
   * DTO参数校验错误结构
   * @param message
   * @param code
   * @param errors 错误数组(jio 表单错误多条)
   * @param status 状态码 422
   */
  constructor(message: string, code = 422, errors?: any[], status?: number) {
    super(message + ` &>${code || ''}`);
    this.errors = errors;
    this.code = code;
    this.status = status || 422;
  }
}
