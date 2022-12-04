/**
 * @file 频道实体类
 * @author fly
 * @date 2022.06.01
 */

import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('channel', { schema: 'public' })
export class Channel extends BaseEntity {
  @Column('varchar', {
    name: 'name',
    comment: '频道名称',
    length: 64,
  })
  name: string;
}
