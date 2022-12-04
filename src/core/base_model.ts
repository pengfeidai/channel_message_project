/**
 * @file model基础类
 * @author fly
 * @date 2022.06.28
 */

import { QueryRunner } from 'typeorm';

export abstract class BaseModel {
  protected repo;
  /**
   * 创建数据
   * @param params
   * @returns
   */
  async save(params, queryRunner?: QueryRunner) {
    if (queryRunner) {
      return queryRunner.manager.save(params);
    }
    const res = await this.repo.save(params);
    return res;
  }

  /**
   * 更新数据
   * @param entity
   * @param where
   * @param entity
   * @param queryRunner
   * @returns
   */
  async update(params, where, entity?, queryRunner?: QueryRunner) {
    if (queryRunner) {
      return queryRunner.manager.update(entity, where, params);
    }
    const res = await this.repo.update(where, params);
    return res;
  }

  /**
   * 获取列表
   * @param where
   * @returns
   */
  async getList(where = {}, options = {}) {
    const res = await this.repo.find({ where, ...options });
    return res;
  }

  async getListAndCount(where = {}, options = {}) {
    const [list, count] = await this.repo.findAndCount({ where, ...options });
    return { list, count };
  }

  /**
   * 获取详情
   * @param where
   * @returns
   */
  async getOne(where: object, options?: object) {
    const res = await this.repo.findOne({ where, ...options });
    return res;
  }

  /**
   * 统计数量
   * @returns
   */
  async count(where, entity?, queryRunner?: QueryRunner): Promise<number> {
    if (queryRunner) {
      return queryRunner.manager.count(entity, { where });
    }
    return await this.repo.count({ where });
  }

  /**
   * 物理删除
   * @param entity
   * @param where
   */
  async remove(entity: object, where: object, queryRunner?: QueryRunner) {
    console.log('remove', entity, where, !!queryRunner);
    throw new Error('产品环境不允许删除数据');
    // if (queryRunner) {
    //   return queryRunner.manager.remove(entity, where);
    // }
    // return this.repo.remove(where);
  }

  /**
   * 软删除数据
   * @param where
   * @returns
   */
  async softRemove(entity: object, queryRunner?: QueryRunner) {
    if (queryRunner) {
      return queryRunner.manager.softRemove(entity);
    }
    return this.repo.softRemove(entity);
  }
}
