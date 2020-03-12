import { DocumentStorage } from './document-storage';
jest.setTimeout(30000);

describe('DocumentStorage', () => {
  it('DocumentStorage should exist', () => {
    expect(new DocumentStorage(true)).toBeDefined();
  });
  it('list bucket should be defined', () => {
    expect(new DocumentStorage(true).listBuckets).toBeDefined();
  });
  it('list bucket should have at least one bucket and it should be an array',async (done) => {
    const promise= await new DocumentStorage(true).listBuckets()
    expect(promise.length).toBeGreaterThanOrEqual(1)
    expect(promise[0].Name.length).toBeGreaterThanOrEqual(1)
    done()
  });

});
