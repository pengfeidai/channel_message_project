import { Rule, RuleType } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';
import { BaseListRequestDTO } from './base.dto';

export class WriteMessageRequestDTO {
  @ApiProperty({ type: 'string', example: '天气', description: '标题' })
  @Rule(RuleType.string().min(1).max(32).required())
  title: string;

  @ApiProperty({
    type: 'string',
    example: '今天在下雪，外面很冷。',
    description: '内容',
  })
  @Rule(RuleType.string().min(1).max(3512).required())
  content: string;

  @ApiProperty({
    type: 'number',
    example: 1,
    description: '频道id',
  })
  @Rule(RuleType.number().min(1).required())
  channelId: number;
}

export class GetMessageListRequestDTO extends BaseListRequestDTO {
  @ApiProperty({
    type: 'number',
    example: 1,
    description: '频道id',
  })
  @Rule(RuleType.number().min(1).required())
  channelId: number;
}
