const assert = require('assert');
const app = require('../../src/app');

describe('\'Cards\' service', () => {
  it('registered the service', () => {
    const service = app.service('cards');

    assert.ok(service, 'Registered the service');
  });
});
