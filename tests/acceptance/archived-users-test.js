import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | archived users', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /archived-users', async function(assert) {
    await visit('/archived-users');

    assert.equal(currentURL(), '/archived-users');
  });
});
