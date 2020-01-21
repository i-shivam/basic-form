import Controller from '@ember/controller';
import EmberResolver from 'ember-resolver';
// import { computed } from '@ember/object';

export default Controller.extend({
    queryParams: ['category', 'id'],
    category: 'create',
    id: null,

    // model(){
    //     this.store.pushPayload({
    //         persons : [
    //           {
    //               id : 1,
    //               firstName : 'shivam',
    //               lastName : 'mishra',
    //               email : 'svmdigrt@gmail.com', 
    //               dateOfBirth : '12/10/1998',
    //               mobile : '9451714049',
    //               address : 'st.3 Town Area ',
    //               cityName : 'CBE',
    //               state : "TN",
    //               areaZip : "641202"
    //           },
    //           {
    //               id : 2,
    //               firstName : 'lalit',
    //               lastName : 'kumar',
    //               email : 'lalitkumardwm@gmail.com', 
    //               dateOfBirth : '14/4/1998',
    //               mobile : '9564547689',
    //               address : 'flat no. 3 gardenWall street',
    //               cityName : 'FZD',
    //               state : 'UP',
    //               areaZip : '224121'
    //           }
    //         ]
    //       });
    // },
    // uniqueId      : null,
    // firstName     : null,
    // lastName      : null,
    // inputEmail    : null,
    // dateOfBirth   : null,
    // mobile        : null,
    // inputAddress  : null,
    // cityName      : null,
    // state         : null,
    // inputZip      : null,

    // isFormValid : computed('id','firstName','lastName','email','dateOfBirth','mobile','address','cityName','state','areaZip',function(){
    //      return !(this.id && this.firstName && this.lastName && this.email && this.dateOfBirth && this.mobile && this.address && this.cityName && this.state && this.areaZip);
    // }),
    //    isFormValid(){
    //        if(this.store)
    //    }
    actions: {
        addRecord() {
            // let self = this;
            $.ajax({
                url: "http://localhost:8000/people",
                type: "POST",
                data: {
                        "id": this.model.get('id'),
                        "type": "person",
                        "attributes" : {
                        "firstName": this.model.get('firstName'),
                        "lastName": this.model.get('lastName'),
                        "email": this.model.get('email'),
                        "dateOfBirth": this.model.get('dateOfBirth'),
                        "mobile": this.model.get('mobile'),
                        "address": this.model.get('address'),
                        "cityName": this.model.get('cityName'),
                        "state": this.model.get('state'),
                        "areaZip": this.model.get('areaZip')
                        }
                }
            }).then(() => {
             this.transitionToRoute('record');
            });
            // .catch(function (error) {
            //     self.set('errorMessage', error.error || error);
            // });

        },

        checkAadhar(aadharNo) {
            if (this.store.peekRecord('person', aadharNo)) {
                this.recordPresent = 'true';
                alert('Aadhar number ' + aadharNo + ' is already registered');
            }
            else {
                this.recordPresent = 'false';
                alert('Form with Aadhar Number ' + aadharNo + ' is not submitted');
            }
        }
    }

});
