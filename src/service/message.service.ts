import { Provide, Inject } from '@midwayjs/decorator';
import { MessageModel } from '../model/message.model';
import { Message } from '../entity';
import { ChannelService } from './channel.service';
import { WriteMessageRequestDTO } from '../dto/message.dto';

import { APP_ERROR_TYPES } from '../common/error_msg';
import { SysError } from '../common/sys_error';

@Provide()
export class MessageService {
  @Inject()
  messageModel: MessageModel;

  @Inject()
  channelService: ChannelService;

  /**
   * 写入消息
   * @param params
   */
  async addMessage(params: WriteMessageRequestDTO): Promise<Message> {
    const channel = await this.channelService.getChannel(params.channelId);
    if (!channel) {
      throw new SysError(APP_ERROR_TYPES.CHANNEL_NOT_FOUND);
    }

    const message = new Message();
    message.title = params.title;
    message.content = params.content;
    message.channelId = params.channelId;
    const data = await this.messageModel.save(message);
    return data;
  }

  /**
   * 获取消息列表
   * @param channelId
   * @param page
   * @param limit
   * @returns
   */
  async getMessageList(channelId, page, limit: number): Promise<Message[]> {
    const data = await this.messageModel.getList(
      { channelId },
      {
        skip: (page - 1) * limit,
        take: limit,
        order: {
          createdTime: 'DESC',
        },
      }
    );
    return data;
  }
}
