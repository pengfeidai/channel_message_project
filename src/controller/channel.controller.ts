import { Inject, Controller, Post, Body } from '@midwayjs/decorator';

import { Context } from '@midwayjs/koa';
import { ChannelService } from '../service/channel.service';
import { CreateChannelRequestDTO } from '../dto/channel.dto';

@Controller('/api/channel')
export class ChannelController {
  @Inject()
  ctx: Context;

  @Inject()
  channelService: ChannelService;

  @Post('', { summary: '创建频道' })
  async getUserRoleList(@Body() body: CreateChannelRequestDTO) {
    const { name } = body;
    const user = await this.channelService.addChannel({ name });
    return user;
  }
}
