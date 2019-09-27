import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('sobre');
  this.route('contato');
  this.route('chamada');
  this.route('cadastra-aluno');
});

export default Router;
