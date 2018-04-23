//load firebase
var config = {
    apiKey: "AIzaSyBEONVRaw91KgzM5p86uv0qRnG90KSNE_0",
    authDomain: "polls-4fa84.firebaseapp.com",
    databaseURL: "https://polls-4fa84.firebaseio.com",
    projectId: "polls-4fa84",
    storageBucket: "",
    messagingSenderId: "820921347318"
  };
  firebase.initializeApp(config);

/*function initApp(){
  //Get all elements
  const getEmail = document.getElementById('txtuser');
  console.log(getEmail);
  const getPassword = document.getElementById('txtpass');
  console.log(getPassword);
  const getLogin = document.getElementById('loginButton');
  const getSignUp = document.getElementById('signupButton'); 

  //add event listener for login
  if(getLogin){
    getLogin.addEventListener('click', e=>{
      const email = getEmail.value;
      const pass = getPassword.value;
      //const auth = firebase.auth();

      if(email != null){
        console.log(email);
      }
      else{
        console.log("I got nothing");
      }
      firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      window.alert("Error: " + errorMessage);
      });
      console.log("good shit"); 
    });
  }
  else{
    console.log("login NULL AF");
  }

  //add event listener for signup
  if(getSignUp){
    console.log("inside sign up");
    getSignUp.addEventListener('click', e=>{
      console.log("after the click");
      //const email = getEmail.value;
      //const pass = getPassword.value;
      //const auth = firebase.auth();

      const user_email = document.getElementById('txtuser').value;
      const user_pass = document.getElementById('txtpass').value;

      /*if(email){
        console.log(email);
      }
      else{
        console.log("I got nothing");
      }
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });*/
/*s      console.log("before creating");
      firebase.auth().createUserWithEmailAndPassword(user_email, user_pass).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      window.alert("Error: " + errorMessage);
      }); 
      console.log("created success!")
      console.log("signed up with email " + userEmail);
    });
  }
  else{
    console.log("singup NULL AF");
  }
  //add a realtime authentication listener
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      console.log("logged in");
    }
    else{
      console.log("not logged");
    }
  });

};

//call function when the window loads
window.onload = function() {
  initApp();
}; 
/*
(function() {
  var app = angular.module('app', ['ngRoute', 'angular-jwt']);
  app.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
      templateUrl: './components/main.html',
      controller: 'MainController',
      controllerAs: 'vm',
    });
    $routeProvider.when('/login', {
      templateUrl: './components/login.html',
      controller: 'LoginController',
      controllerAs: 'vm',
    });
    $routeProvider.when('/register', {
      templateUrl: './components/register.html',
      controller: 'RegisterController', 
      controllerAs: 'vm',
    });
    $routeProvider.when('/polls', {
      templateUrl: './components/polls.html',
      controller: 'PollsController',
      controllerAs: 'vm',
    });
    $routeProvider.when('/profile', {
      templateUrl: './components/profile.html',
      controller: 'ProfileController',
      controllerAs: 'vm',
    });
  });

  app.controller('MainController', MainController);
  function MainController($location, $window) {
    var vm = this;
    vm.title = "MainController";
  }
  app.controller('LoginController', LoginController);
  function LoginController($location, $window) {
    var vm = this;
    vm.title = "LoginController"
  }
  app.controller('RegisterController', RegisterController);
  function RegisterController($location, $window) {
    var vm = this;
    vm.title = "RegisterController"
  }
  app.controller('PollsController', PollsController);
  function PollsController($location, $window) {
    var vm = this;
    vm.title = "PollsController"
  }
  app.controller('ProfileController', ProfileController);
  function ProfileController($location, $window) {
    var vm = this;
    vm.title = "ProfileController"
  }
  app.controller('PollController', PollController);
  function PollController($location, $window) {
    var vm = this;
    vm.title = "PollController"
  }
}());*/