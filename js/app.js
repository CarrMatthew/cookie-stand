'use strict';

var storeHours = ['6am', '7am','8am','9am','10am','11am', '12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var pike = {
  location: '1st and Pike',
  minCustomers:23,
  maxCustomers: 65,
  avg:6.3,
  customersPerHour:[],
  cookiesPerHour:[],
  totalCustomers:0,
  totalCookies:0,
  makeCustomers: function(){
    for(var i = 0; i < storeHours.length; i++){
      this.customersPerHour.push(Math.floor(Math.random() * (65 - 23) + 23));
      this.cookiesPerHour.push(Math.floor(this.customersPerHour[i] * 6.3));
      this.totalCustomers = this.customersPerHour[i] + this.totalCustomers;
      this.totalCookies = this.cookiesPerHour[i] + this.totalCookies;
    }
  }
  //  render: function(){
     
   } 
};