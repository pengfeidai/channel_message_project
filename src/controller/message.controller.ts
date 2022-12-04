import { Inject, Controller, Post, Body } from '@midwayjs/decorator';

import { Context } from '@midwayjs/koa';
import { MessageService } from '../service/message.service';
import {
  WriteMessageRequestDTO,
  GetMessageListRequestDTO,
} from '../dto/message.dto';

@Controller('/api/message')
export class MessageController {
  @Inject()
  ctx: Context;

  @Inject()
  messageService: MessageService;

  @Post('', { summary: '创建频道' })
  async writeMessage(@Body() body: WriteMessageRequestDTO) {
    const { title, content, channelId } = body;
    const user = await this.messageService.addMessage({
      title,
      content,
      channelId,
    });
    return user;
  }

  @Post('/list', { summary: '获取频道列表' })
  async getMessageList(@Body() body: GetMessageListRequestDTO) {
    const { page, limit, channelId } = body;
    const user = await this.messageService.getMessageList(
      channelId,
      page,
      limit
    );
    return user;
  }
}
