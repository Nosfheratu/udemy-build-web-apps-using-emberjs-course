import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var url = 'https://api.github.com/users/nosfheratu/repos?sort=created_at&order=desc';
    return Ember.$.getJSON(url).then(function(data){
      return data.splice(0, 5);
    });
  }
});
