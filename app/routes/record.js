import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        // console.log("model hook just ran");
        return this.store.findAll('person');
    }

});
