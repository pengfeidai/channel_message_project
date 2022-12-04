import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Message } from '../entity';
import { Repository } from 'typeorm';
import { BaseModel } from '../core/base_model';

@Provide()
export class MessageModel extends BaseModel {
  @InjectEntityModel(Message)
  repo: Repository<Message>;
}
