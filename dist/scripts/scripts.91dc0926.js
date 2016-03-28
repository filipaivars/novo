"use strict";angular.module("lbawApp",["ngAnimate","ngAria","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/question",{templateUrl:"views/question.html",controller:"QuestionCtrl",controllerAs:"question"}).when("/searchResults",{templateUrl:"views/searchResults.html",controller:"searchResultsCtrl",controllerAs:"searchResults"}).otherwise({redirectTo:"/"})}]),angular.module("lbawApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("lbawApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("lbawApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="wrap"> <div layout="column"> <div> <div layout="row"> <div flex> <img src="images/perfil_foto.c214299e.png" style="width: 160px"> </div> <div flex="80"> <div layout="column"> <div flex> <h2>FILIPAIVARS</h2><br> Apparently, this user prefers to keep an air of mystery about them. </div> <div flex style="margin-top: 65px"> <div layout="row"> <div flex="65"> <img src="images/medalha.6b479689.png"> </div> <div> <b>4</b> questions<br> <b>2</b> answers<br> <b>2</b> favorites for </div> </div> </div> </div> </div> </div> </div> <div> <img src="images/rate_fav.85eb75f9.png" style="width: 160px"> </div> <span style="display:block; height: 50px"></span> <div> <h2>QUESTIONS<h2><hr> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> </h2></h2></div> </div> </div>'),a.put("views/main.html",'<!--\n<div class="jumbotron">\n  <h1>\'Allo, \'Allo!</h1>\n  <p class="lead">\n    <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br>\n    Always a pleasure scaffolding your apps.\n  </p>\n  <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p>\n</div>\n\n<div class="row marketing">\n  <h4>HTML5 Boilerplate</h4>\n  <p>\n    HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.\n  </p>\n\n  <h4>Angular</h4>\n  <p>\n    AngularJS is a toolset for building the framework most suited to your application development.\n  </p>\n\n  <h4>Karma</h4>\n  <p>Spectacular Test Runner for JavaScript.</p>\n</div>\n--> <div class="wrap"> <h1>Recent Questions</h1> <hr style="border-width: 2px"> <div class="questions"> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> </div> <h1>Top Questions</h1> <hr style="border-width: 2px"> <div class="questions"> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> </div> </div>'),a.put("views/question.html",'<div class="wrap"> <h2>How come is Hitman always crashing on initiate?</h2><hr> <div layout="row"> <div flex="15"> <a ng-href="#/about"><img src="images/token.3a8c7fe4.png"></a> </div> <div layout="column" flex> <div> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum libero euismod leo mollis tincidunt. Donec sit amet blandit lacus. Pellentesque magna mauris, maximus nec condimentum vel, congue in justo. Donec bibendum interdum mauris in ultrices. Duis sit amet iaculis libero.</p> <p>In hac habitasse platea dictumst. Nulla id maximus quam, id dictum tortor. Integer consequat porta dui sit amet commodo. In eu mollis ipsum. Donec a erat urna. In placerat nisi at semper mollis. Morbi in sodales nunc, vel sodales nibh.</p> </div> <div layout="row"> <img src="images/tag.9934a9a7.png"> <img src="images/tag.9934a9a7.png"> </div> <div style="margin-top: 10px"> <img src="images/stars.af699168.png"><br> <span style="display:block; height: 10px"></span> <a style="color: #ee453e">COMMENT</a> </div> <span style="display:block; height: 20px"></span> <div layout="row" style="background-color: #ecf0f1"> <div flex="10"> <img src="images/token0.e5342937.png" style="margin-left:10px"> </div> <div flex layout="column" style=""> <div layout="row"> <div flex> <b>outrouser</b> </div> <div flex="80" style="text-align: right; color: #b5b5b4; margin-right:2%"> 19 feb 2016, 22:21h </div> </div> <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div> </div> </div> </div> </div> <span style="display:block; height: 30px"></span> <div style="margin-left: 10%; margin-right: 10%"> <form> <input type="text" name="RespText" placeholder="My answer" style="width: 100%; height: 75px"> <input type="button" name="RespButton" value="post answer" style="margin-top:5px; margin-left:90%; background-color: #ee453e; color: white"> </form> </div> <hr style="background-color: #d2d2d1; border-color: #d2d2d1; color: #d2d2d1"> <h2>ANSWERS</h2> <span style="display:block; height: 40px"></span> <div layout="row"> <div flex="10"> <img src="images/token0.e5342937.png"> </div> <div flex layout="column"> <div> <b>outrouser</b> <span style="display:block; height: 5px"></span> </div> <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum libero euismod leo mollis tincidunt. Donec sit amet blandit lacus. Pellentesque magna mauris, maximus nec condimentum vel, congue in justo. Donec bibendum interdum mauris in ultrices. <span style="display:block; height: 20px"></span> </div> <div> <img src="images/stars.af699168.png"> </div> <div style="color: #ee453e"> <span style="display:block; height: 10px"></span> COMMENT <span style="display:block; height: 20px"></span> </div> <div layout="column" style="margin-left: 20px"> <div> <div layout="row" style="background-color: #ecf0f1"> <div flex="10"> <img src="images/token0.e5342937.png" style="margin-left:10px"> </div> <div flex layout="column" style=""> <div layout="row"> <div flex> <b>outrouser</b> </div> <div flex="80" style="text-align: right; color: #b5b5b4; margin-right:2%"> 19 feb 2016, 22:21h </div> </div> <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div> </div> </div> </div> <div> <span style="display:block; height: 10px"></span> <div layout="row" style="background-color: #ecf0f1"> <div flex="10"> <img src="images/token0.e5342937.png" style="margin-left:10px"> </div> <div flex layout="column" style=""> <div layout="row"> <div flex> <b>outrouser</b> </div> <div flex="80" style="text-align: right; color: #b5b5b4; margin-right:2%"> 19 feb 2016, 22:21h </div> </div> <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div> </div> </div> </div> </div> </div> </div> </div>'),a.put("views/searchResults.html",'<div class="wrap"> <div> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> <a ng-href="#/question"><img src="images/question.fe8df583.png" style="width: 90%; padding-left:5%"></a> </div> </div>')}]);