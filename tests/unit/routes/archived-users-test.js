import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | archived-users', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:archived-users');
    assert.ok(route);
  });
});
