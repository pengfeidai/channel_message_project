import { Rule, RuleType } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';

export class CreateChannelRequestDTO {
  @ApiProperty({ type: 'string', example: '频道1', description: '名称' })
  @Rule(RuleType.string().min(1).max(32).required())
  name: string;
}
