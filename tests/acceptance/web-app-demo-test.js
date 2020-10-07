import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | web app demo', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /web-app-demo', async function(assert) {
    await visit('/web-app-demo');

    assert.equal(currentURL(), '/web-app-demo');
  });
});
