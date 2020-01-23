import Route from '@ember/routing/route';

export default Route.extend({

    // model() { 
    //     return this.store.findAll('person');
    //   } 
    
   
    model(val){
        if(val.category =='create'){
          var newPerson = this.store.createRecord('person',{
                id : this.id,
                firstName : this.firstName,
                lastName : this.lastName,
                email : this.email, 
                dateOfBirth : this.dateOfBirth,
                mobile : this.mobile,
                address : this.address,
                cityName : this.cityName,
                state : this.state,
                areaZip : this.areaZip
               });
          return newPerson;
        }
        else{
            return this.store.peekRecord('person',val.id);
        }
    }
    // actions: {
    //     willTransition(transition) {
    //       if (this.controller.userHasEnteredData &&
    //           !confirm('Are you sure you want to abandon progress?')) {
    //         transition.abort();
    //       } else {
    //         // Bubble the `willTransition` action so that
    //         // parent routes can decide whether or not to abort.
    //         return true;
    //       }
    //     }
    //   }
});
