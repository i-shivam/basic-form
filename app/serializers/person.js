import JSONAPISerializer from '@ember-data/serializer/json-api';

export default JSONAPISerializer.extend({
    attrs : {
        firstName: 'firstName',
        lastName:'lastName',
        email : "email", 
        dateOfBirth : "dateOfBirth",
        mobile : "mobile",
        address : "address",
        cityName : "cityName",
        state : "state",
        areaZip : "areaZip"
      }
});
