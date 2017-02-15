angular.module('chatroom').service('messageService', function($http){
  //Here you'll need to create two methods. One called postMessage and the other called getMessages.

  //On the lines below create a getMessages method. This method will retrieve data from the backend.
  //The url for the get request should be 'https://practiceapi.devmounta.in/api/chats'
  //Be sure to return whatever gets returned from $http so you can call .then in your controller.
  var messages = [];

  this.getMessages = function() {
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmounta.in/api/chats'
    }).then(function(response) {
      // console.log('service', response);
      messages = response.data;
      // console.log('messages', messages);
      return messages;
    }, function(err) {
      console.err(err)
    });
  }

  //On the line below create the postMessage method. This method will add data to the backend server.
  //The url for the request needs to be 'https://practiceapi.devmounta.in/api/chats'
  //Because we're making a POST request, need a data object with a message property IE data: {message: "Hello World"}
  //Also, remember that $http returns a promise. So return the whole $http call (return $http(...)), so you can then use .then in your controller.
  // this.postMessage = function(message) {
  //   return $http({
  //     method: 'POST',
  //     url: 'https://practiceapi.devmounta.in/api/chats',
  //     data: message
  //   }).then(function(response) {
  //     console.log(response);
  //   }, function(err) {
  //     console.log(err);
  //   })
  // }

  this.postMessage = function(message) {
    var posturl = 'https://practiceapi.devmounta.in/api/chats';

    return $http({
        method: 'POST',
        url: posturl,
        data: JSON.stringify({message: message})
      }).then(function successCallback(response) {
          //code for what happens when the request is successful
          // console.log('success', response);
      }, function errorCallback(response) {
          //code for what happens when there's an error
          // console.log('error', response);
      });
    }
});
