import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    async newUpdate(when, what, how) {
      if (when && what && how) {
        let model = await this.store.createRecord("update", {
          when: when,
          title: what,
          text: how
        });
        model.save();
        this.transitionTo('edit');
      }
    }
  }
});