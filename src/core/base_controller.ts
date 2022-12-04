/**
 * @file 路由层基础类文件
 * @author fly
 * @date 2022.06.27
 */

import { App, Inject } from '@midwayjs/decorator';
import { Context, Application } from '@midwayjs/koa';

/**
 * 成功响应对象接口定义
 */
export interface ISuccessResponse<TData> {
  code: number;
  data: TData;
  message: string;
}

export abstract class BaseController {
  @App()
  protected app: Application;

  @Inject()
  protected ctx: Context;

  protected success(data?) {
    this.ctx.status = 200;
    return {
      code: 0,
      data,
      message: 'success',
    };
  }
}
