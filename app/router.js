import Ember from 'ember';
import config from './config/environment';
import { cardstackRoutes } from '@cardstack/routing';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('show', { path: '/:rental_id' });
  });
  this.route('cs', cardstackRoutes);
});

export default Router;
