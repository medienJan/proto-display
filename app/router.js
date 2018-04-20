import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('edit', function() {
    this.route('notice');
    this.route('newUpdate');
  });
});

export default Router;
