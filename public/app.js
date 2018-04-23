//load firebase
var config = {
    apiKey: "AIzaSyCknV3FxNpNM1_KMZm1Baij0BaAW7Z-otM",
    authDomain: "polled-1d02a.firebaseapp.com",
    databaseURL: "https://polled-1d02a.firebaseio.com",
    projectId: "polled-1d02a",
    storageBucket: "polled-1d02a.appspot.com",
    messagingSenderId: "540632836416"
};
firebase.initializeApp(config);

function initApp(){
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
      const auth = firebase.auth();

      if(email != null){
        console.log(email);
      }
      else{
        console.log("I got nothing");
      }
      const promise = auth.signInWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));
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
      const email = getEmail.value;
      const pass = getPassword.value;
      const auth = firebase.auth();

      if(email != null){
        console.log(email);
      }
      else{
        console.log("I got nothing");
      }
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
    });
  }
  else{
    console.log("singup NULL AF");
  }
  //add a realtime authentication listener
  /*firebase.auth().onAuthStateChanged(function(user){
    if(user){
      console.log("logged in");
    }
    else{
      console.log("not logged");
    }
  });*/

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