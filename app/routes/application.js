import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return {
            notice: {
                title: "Jetzt neu!",
                message: "Das Info Display ist hier"
            }
        }
    }
});
