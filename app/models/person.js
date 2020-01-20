import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object';

export default  Model.extend ({
    firstName: attr('string'),
    lastName : attr('string'),
    email    : attr('string'),
    dateOfBirth : attr('date'),
    mobile   : attr('number'),
    address  : attr('string'),
    cityName : attr('string'),
    state    : attr('string'),
    areaZip  : attr('string'),

    fullName : computed('firstName','lastName',function(){
        return this.firstName+' '+this.lastName;
    })
     
    

});