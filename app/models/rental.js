import Rental from '@cardstack/hub/models/rental';
import Ember from 'ember';
export default Rental.extend({
  sleeps: Ember.computed('bedrooms', function() {
    return this.get('bedrooms') * 4;
  })
});
