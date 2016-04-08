import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('answer-quantity', 'Integration | Component | answer quantity', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{answer-quantity}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#answer-quantity}}
      template block text
    {{/answer-quantity}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
