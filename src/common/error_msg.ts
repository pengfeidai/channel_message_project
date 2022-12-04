/**
 * @file 项目的错误信息文件
 * @author fly
 * @date 2022.06.27
 */

export type T_AppErrorType = [errorMessage: string, errorCode: number];

export const DTO_ERROR_TYPES: { [key: string]: string } = {};

export const APP_ERROR_TYPES: { [key: string]: T_AppErrorType } = {
  CHANNEL_NOT_FOUND: ['频道不存在', 10001],
};
