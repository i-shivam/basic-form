import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import { hbs } from 'ember-cli-htmlbars';

module('Unit | Route | record', function(hooks) {
  setupRenderingTest(hooks);

  test('it exists', async function(assert) {
    let route = this.owner.lookup('route:record');
    assert.ok(route);
  });
});
