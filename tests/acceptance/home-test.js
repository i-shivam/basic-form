import { module, test } from 'qunit';
import { visit, currentURL, click, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | home', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /home', async function (assert) {
    await visit('/home');
    assert.equal(currentURL(), '/home', 'its the homePage');

    await click('.btn-primary');
    assert.equal(currentURL(), '/record', 'transitioned to record route');

    // var store = App.Model.store.find('person');
    // assert.equal(store.length,3);

      assert.equal(findAll('tr[data-toggle]').length, 4);
      await click('tr[data-toggle]');
      assert.equal(this.element.querySelector('.modal-headar').textContent.trim(' '), "Person Details", "modal popped up successfully");

    await click('#test');
    assert.equal(currentURL(), '/home', 'transitioned back to home route');

  });
});
