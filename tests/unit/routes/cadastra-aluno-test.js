import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cadastra-aluno', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cadastra-aluno');
    assert.ok(route);
  });
});
