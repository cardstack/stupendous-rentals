import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('field-renderers/image-url-renderer', 'Integration | Component | field renderers/image url renderer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{field-renderers/image-url-renderer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#field-renderers/image-url-renderer}}
      template block text
    {{/field-renderers/image-url-renderer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
