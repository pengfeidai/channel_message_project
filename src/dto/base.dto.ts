/**
 * @file 基础数据模型文件
 * @author fly
 * @date 2022.07.25
 */

import { Rule, RuleType } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';

export const greaterNumber = min => RuleType.number().greater(min);
export const maxString = (minLen, maxLen) =>
  RuleType.string().min(minLen).max(maxLen).required();

export class BaseListRequestDTO {
  @ApiProperty({
    type: 'integer',
    example: 1,
    description: '当前页',
  })
  @Rule(greaterNumber(0).default(1).required())
  page: number;

  @ApiProperty({
    type: 'integer',
    example: 10,
    description: '每页条数',
  })
  @Rule(greaterNumber(0).max(100).default(10).required())
  limit: number;
}
