/**
 * @file 实体基础类文件
 * @author fly
 * @date 2022.06.27
 */

import { CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @CreateDateColumn({
    name: 'created_time',
    comment: '创建时间',
    type: 'timestamp',
  })
  createdTime: Date;

  @UpdateDateColumn({
    name: 'updated_time',
    comment: '更新时间',
    type: 'timestamp',
  })
  updatedTime: Date;

  @DeleteDateColumn({
    name: 'deleted_time',
    comment: '删除时间',
    type: 'timestamp',
  })
  deletedTime: Date | null;
}
