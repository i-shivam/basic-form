import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | record', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:record');
    assert.ok(controller);
    // controller.send('deleteRecord',2);
    // assert.equal(controller.stroe.peekAll('person').length,1,'deleteSuccessfull');
  });
});
