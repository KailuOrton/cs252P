
(function(){
  // Initialize Firebase
/*  var config = {
    apiKey: "AIzaSyBEONVRaw91KgzM5p86uv0qRnG90KSNE_0",
    authDomain: "polls-4fa84.firebaseapp.com",
    databaseURL: "https://polls-4fa84.firebaseio.com",
    projectId: "polls-4fa84",
    storageBucket: "",
    messagingSenderId: "820921347318"
  };
  firebase.initializeApp(config);
*/
  //Get all elements
  const getEmail = document.getElementById('txtuser').innerHTML;
  const getPassword = document.getElementById('txtpass').innerHTML;
  const getLogin = document.getElementById('LoginButton').innerHTML;
  const getSignUp = document.getElementById('SignupButton').innerHTML; 

  //add event listener for login
  getLogin.addEventListener('click', e=>{
    const email = getEmail.value;
    const pass = getPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  //add event listener for signup
  getSignUp.addEventListener('click', e=>{
    const email = getEmail.value;
    const pass = getPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //add a realtime authentication listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
    }
    else{
      console.log('Not logged in');
    }
  });

}()); 
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