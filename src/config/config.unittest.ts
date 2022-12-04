/**
 * @file 项目的单元测试环境配置文件
 * @author fly
 * @date 2022.05.30
 */

import { MidwayConfig } from '@midwayjs/core';

export default {
  koa: {
    port: null,
  },
  typeorm: {
    dataSource: {
      default: {
        host: '127.0.0.1',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'channel',
        synchronize: false,
        logging: false,
      },
    },
  },
  redis: {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '123456',
      db: 0,
    },
  },
} as MidwayConfig;
