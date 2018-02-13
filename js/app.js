'use strict';

var storeHours = ['6am', '7am','8am','9am','10am','11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  location: '1st and Pike',
  minCustomers:23,
  maxCustomers: 65,
  avg:6.3,
  customersPerHour:[],
  cookiesPerHour:[],
  makeCustomers: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (65 - 23) + 23));
      this.cookiesPerHour.push(this.customersPerHour[i] * 6.3);
    }
  }
};
