import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');

  // this.resource('posts', { path: '/posts' }, function(){
  //   this.route('new');
  //   this.route('post', { path: ':post_id' });
  // });
  this.route('post');
  this.route('events');
  this.route('cars', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:car_id'});
  });
  this.route('users');
  this.resource('todos', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:todo_id'});
  });
});

export default Router;
