import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('modalidade');
  this.route('escola');
  this.route('plano');
  this.route('usuario');
  this.route('turma');
  this.route('aula');
  this.route('agenda');
});

export default Router;
