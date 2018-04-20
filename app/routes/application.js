import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      notice: {
        title: "Jetzt neu!",
        message: "Das Info Display ist hier"
      }
    }
  },
  actions: {
    newUpdate(when, what, how) {
      if (when && what && how) {
        var model = this.modelFor(this.routeName);
        model.updates.unshift({
          when: when,
          title: what,
          text: how
        });
        console.log(model);
      }
    }
  }
});