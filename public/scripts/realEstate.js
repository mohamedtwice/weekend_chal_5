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
        // console.log(vm.eachListing);
        vm.resArray = ListingService.eachListing.data;
        console.log(vm.resArray);
        // sortListings(resArray);
      }

    ); // get listings

    vm.postAListing = function() {
      console.log('in postAListing');
      var newListing = {
        cost: vm.costIn,
        rent: vm.rentIn,
        sqft: vm.sqftIn,
        city: vm.cityIn
      }; // end new listing
      // console.log(ListingService.postListings(newListing));
      ListingService.postListings(newListing);
      vm.getListings();
    }; // get the socks

  };
});
