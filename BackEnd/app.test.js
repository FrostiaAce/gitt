const request = require('supertest');
const { app, db } = require('./index');

describe('GET /barang', () => {
  it('harus mengembalikan status 200', async () => {
    const res = await request(app).get('/barang');
    expect(res.statusCode).toBe(200);
  });

  afterAll(() => {
    db.end();
  });
});