const init = require('../../src')
const supertest = require('supertest')
const database = require('../../src/lib/database')
const { deleteAllThings, addThingsToDb } = require('./helpers');

describe('Integration tests', () => {
  let request;

  beforeAll(async () => {
    const app = await init();
    request = supertest(app);
  })

  afterAll(async (done) => {
    await database.disconnect();
    done();
  })

  describe('/ping', () => {
    it('returns a 200 response', async done => {
      const res = await request.get('/ping')
      expect(res.status).toBe(200)
      const parsedResponse = JSON.parse(res.text)
      expect(parsedResponse).toEqual({ status: 'OK' })
      done()
    })
  });

  describe('/', () => {

    beforeAll(async () => {
      await deleteAllThings();
    });

    it('can read things from the db', async done => {
      await addThingsToDb(5);
      const res = await request.get('/');
      expect(res.status).toBe(200)
      const parsedResponse = JSON.parse(res.text)
      expect(parsedResponse.length).toEqual(5)
      parsedResponse.forEach(thing => {
        expect(Boolean(thing._id)).toBe(true);
        expect(Boolean(thing.name)).toBe(true);
      })
      done()
    });
  });
});

