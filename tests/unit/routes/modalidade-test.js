import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | modalidade', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:modalidade');
    assert.ok(route);
  });
});
