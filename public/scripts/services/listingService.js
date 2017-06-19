myApp.service('ListingService', function($http) {
  console.log('listingService.js');

  var sv = this;

  sv.checkListings = function() {
    console.log('in checkListings');
    return $http.get('/listings').then(function(res) {
      // console.log('back from server with:', response);
      sv.eachListing = res;
      // return sv.eachListing;
    });
  }; // end checkListings

  sv.postListings = function(newListing) {
    console.log('in postListings:', newListing);
    $http.post('/listings', newListing).then(function(res) {
      console.log('adding to server with:', res);
      sv.listingObject = res;
    });
  }; //end postListings

}); // end ListingService
