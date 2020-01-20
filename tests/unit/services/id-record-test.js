import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | id-record', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:id-record');

    assert.equal(service.calc(),'count: 1');
    assert.equal(service.calc(),'count: 2');
  });
});
