import { createApp, close, createHttpRequest } from '@midwayjs/mock';
import { Framework } from '@midwayjs/koa';

describe('test/controller/message.test.ts', () => {
  it('should POST /api/message/list', async () => {
    // create app
    const app = await createApp<Framework>();

    // make request
    const result = await createHttpRequest(app).post('/api/message/list').send({ channelId: 1, page: 1, limit: 10 });
    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.msg).toBe('success');

    // close app
    await close(app);
  });
});
