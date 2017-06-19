var myApp = angular.module('myApp', []);

myApp.controller('ListingsController', function(ListingService) {
  console.log('realEstate.js');
  var vm = this;
  //
  vm.rent = [];
  vm.purchase = [];

  vm.getListings = function() {
    ListingService.checkListings().then(function() {
      console.log(ListingService.eachListing.data);
      console.log(vm.eachListing);
      var resArray = ListingService.eachListing.data;
      vm.finalArray = resArray;
      sortListings(resArray);
    });
  }; // get listings

  //
  function sortListings(resArray) {
    for (var i = 0; i < resArray.length; i++) {
      if (resArray[i].rent === undefined) {
        vm.rentArray = resArray;
      } else if (resArray[i].cost === undefined) {
        vm.purchaseArray = resArray;
      }
    }

    vm.postAListing = function() {
      console.log('in postAListing');
      var newListing = {
        cost: vm.costIn,
        rent: vm.rentIn,
        sqft: vm.sqftIn,
        city: vm.cityIn
      }; // end new sock
      console.log(ListingService.postListings(newListing));
      ListingService.postListings(newListing);
      vm.getListings();
    }; // get the socks

  }
});
