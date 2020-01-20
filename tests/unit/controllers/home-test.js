import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | home', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:home');

    // controller.send('checkAadhar', 10);
    // assert.equal(controller.recordPresent,'false','idNotPresent');
    // assert.equal(controller.recordPresent,'true','idPresent');

    // controller.send('addRecord');

    assert.ok(controller);
  });
});
