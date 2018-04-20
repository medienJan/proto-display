import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let model = this.store.findAll('update');
    console.log(model);
    return model;
  }
});