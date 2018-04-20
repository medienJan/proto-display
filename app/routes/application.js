import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            notice: {
                title: "Jetzt neu!",
                message: "Das Info Display ist hier"
            },
            updates: [
                {
                    when: "dann",
                    title: "findet",
                    text: "etwas statt"
                },
                {
                    when: "wann anders",
                    title: "findet auch",
                    text: "noch etwas anderes statt"
                }
            ]
        }
    },

    actions: {
        newUpdate(what, when, how) {
            // console.log("neues update", what, when, how);
            let model = this.modelFor('application').updates;
            if (what && when && how) {
                model.unshift({
                    when: when,
                    title: what,
                    text: how
                });
            }
            
        }
    }
});
