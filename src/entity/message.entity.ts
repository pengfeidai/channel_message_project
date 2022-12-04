/**
 * @file 消息实体类
 * @author fly
 * @date 2022.06.01
 */

import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('message', { schema: 'public' })
export class Message extends BaseEntity {
  @Column('varchar', {
    name: 'title',
    comment: '标题',
    length: 64,
  })
  title: string;

  @Column('varchar', {
    name: 'content',
    comment: '内容',
    length: 512,
  })
  content: string;

  @Index()
  @Column('int', {
    name: 'channel_id',
    comment: '频道id',
  })
  channelId: number;
}
