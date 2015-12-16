import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sayHello: function(){
      alert('hello');
    },
    toggleBody: function(){
      this.toggleProperty('isShowingBody');
    },
    submitAction: function(){
      alert(this.get('name'));
      alert(this.get('comment'));
    }
  },
  title: "My Blog Post",
  body: "This si the body of my blog post",
  authors: ['William', 'Robert', 'Michelle'],
  created: new Date(),
  comments: [
    {
      name: 'Mike Smith',
      comment: 'Thanks for the great post'
    },
    {
      name: 'John Doe',
      comment: 'Nice post!'
    },
    {
      name: 'Deff Williams',
      comment: 'Good job!'
    }
  ]
});
