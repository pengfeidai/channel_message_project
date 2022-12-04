import { Provide, Inject } from '@midwayjs/decorator';
import { ChannelModel } from '../model/channel.model';
import { Channel } from '../entity';
import { CreateChannelRequestDTO } from '../dto/channel.dto';

@Provide()
export class ChannelService {
  @Inject()
  channelModel: ChannelModel;
  /**
   * 创建频道
   * @param params
   */
  async addChannel(params: CreateChannelRequestDTO): Promise<Channel> {
    const channel = new Channel();
    channel.name = params.name;
    return await this.channelModel.save(channel);
  }

  /**
   * 获取频道怕列表
   */
  async getChannelList(): Promise<Channel[]> {
    const data = await this.channelModel.getList();
    return data;
  }

  /**
   * 获取频道详情
   */
  async getChannel(id: number): Promise<Channel> {
    const data = await this.channelModel.getOne({ id });
    return data;
  }
}
