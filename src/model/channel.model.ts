import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Channel } from '../entity';
import { Repository } from 'typeorm';
import { BaseModel } from '../core/base_model';

@Provide()
export class ChannelModel extends BaseModel {
  @InjectEntityModel(Channel)
  repo: Repository<Channel>;
}
