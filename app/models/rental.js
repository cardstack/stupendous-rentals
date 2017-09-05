import Rental from '@cardstack/models/generated/rental';
import Ember from 'ember';
export default Rental.extend({
  sleeps: Ember.computed('bedrooms', function() {
    return this.get('bedrooms') * 4;
  })
});
