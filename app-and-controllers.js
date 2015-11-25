var spillmagasinetFront = angular.module('spillmagasinetFront', ['ngSanitize', 'ngCookies', 'ngRoute', 'angularMoment']);

spillmagasinetFront.run(function(amMoment) {
  amMoment.changeLocale('nb');
});


spillmagasinetFront.controller('contentController', function ($scope, $http, $location, $window, $cookies, $routeParams) {
  $scope.stories = [
    {category:"GTA", title: "Er GTA - San Andreas igjen på vei til PS3 og Xbox 360?", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-1-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Destiny", title: "Hvor mye er du villig til å betale for en dans i Destiny?", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-2-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Destiny", title: "National gaming archive would inspire the next GTA", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-3-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Minecraft", title: "Dramatisk åpning på Minecraft- eventyret", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-4-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Call Of Duty", title: "Black Ops III lar deg hoppe rett til slutten av historien", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-5-background.jpg", author: "Jørgen J", created: new Date()}
  ];

  $scope.thisWeeksGamer = [{
    category:"ukens-gamer", title: "Uke 1: Noobwork", excerpt: "Navn: Joachim Haraldsen<br>Alder: 22 (født 29. desember 1992)<br>Bosted: Nittedal<br><br>Denne ukens gamer har over 80 000 følgere på youtube, og lever – tro det eller ei – faktisk av å spille spill.", image: "img-user/SamusAran_1600.jpg"}
  ];

    $scope.fromBlogg = [
    {category:"BATTLEFIELD 4", title: "Samus Aaran er tilbake!", image: "img/blogg-1-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"LEAGUE OF LEGENDS", title: "Samus Aaran er tilbake!", image: "img/blogg-2-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"SUPER MARIO", title: "Samus Aaran er tilbake!", image: "img/blogg-3-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"SONIC", title: "Samus Aaran er tilbake!", image: "img/blogg-4-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"BATTLEFIELD 4", title: "Samus Aaran er tilbake!", image: "img/blogg-1-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"LEAGUE OF LEGENDS", title: "Samus Aaran er tilbake!", image: "img/blogg-2-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"SUPER MARIO", title: "Samus Aaran er tilbake!", image: "img/blogg-3-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"SONIC", title: "Samus Aaran er tilbake!", image: "img/blogg-4-background.jpg", author: "Jørgen J", created: new Date()}
  ];

  $scope.calendar = [
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"}
  ];

    $scope.reviews = [
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"},
    {score:"4", votePanelToggle: false, reviewScoreTemp: false, userReviewScore: false, userScore:4, totalCount:40, userVotes:10, title: "Star Wars Battlefront", image: "img-user/SamusAran_1600.jpg", excerpt: "17-11-2015 - Playstation 4<br>17-11-2015 - Xbox One<br>17-11-2015 - Windows<br>"}
  ];


  $scope.norwegianStreams = [];

  $scope.instagramPhotos = [];
  $scope.reviewConfig = {
    totalReviewsLength : ($scope.reviews.length-4) * 250,
    reviewCounter : 0,
    leftButtonVisibility: false,
    rightButtonVisibility: true
  };

  $scope.moveReviewRight = function () {
    $scope.reviewConfig.reviewCounter += 250;
    TweenMax.to("#review-articles", 0.5, {x: ($scope.reviewConfig.reviewCounter*-1), ease: Back.easeIn, onComplete: 
      function () {

    }
    });
    if(($scope.reviewConfig.reviewCounter+250) > $scope.reviewConfig.totalReviewsLength) {
      $scope.reviewConfig.rightButtonVisibility = false;
    }
    if(($scope.reviewConfig.reviewCounter) > 0) {
      $scope.reviewConfig.leftButtonVisibility = true;
    }

  };

  $scope.moveReviewLeft = function () {
    $scope.reviewConfig.reviewCounter -= 250;
    TweenMax.to("#review-articles", 0.5, {x: ($scope.reviewConfig.reviewCounter*-1), ease: Back.easeIn, onComplete: 
      function () {

    }
    });
    if(($scope.reviewConfig.reviewCounter+250) <= $scope.reviewConfig.totalReviewsLength) {
      $scope.reviewConfig.rightButtonVisibility = true;
    }

    if(($scope.reviewConfig.reviewCounter-250) <= 0) {
      $scope.reviewConfig.leftButtonVisibility = false;
    }
  };

  $scope.setUserScore = function (score, review) {
    review.userReviewScore = score;
    review.reviewScoreTemp = false;
    review.votePanelToggle = false;
    review.userVotes = review.userVotes++;
    review.totalCount = review.totalCount + score;
    console.log(review.totalCount, review.userVotes, review.totalCount/review.userVotes, Math.round(review.totalCount/review.userVotes));
    review.userScore = Math.round(review.totalCount/review.userVotes);
  };

  //$http.jsonp("https://api.twitch.tv/kraken/streams?channel=herpaderpus,turtles_head,nubstep_rs,taketv,destiny,followgrubby&callback=JSON_CALLBACK")
  $http.jsonp("https://api.twitch.tv/kraken/streams?broadcaster_language=no&callback=JSON_CALLBACK")
  .success(function(data) {
    console.log(data);
    _.each(data.streams, function (stream) {
      $scope.norwegianStreams.push({
        game: stream.game,
        viewers: stream.viewers,
        display_name: stream.channel.display_name,
        status: stream.channel.status,
        lowRes: stream.preview.small,
        highRes: stream.preview.large,
        url: stream.channel.url
      });
    });    
  });

  
	
  $http.jsonp("https://api.instagram.com/v1/tags/gaming/media/recent/?count=8&client_id=046b08d202094c94ab1fbae69dd0776c&callback=JSON_CALLBACK")
  .success(function(data) {
    _.each(data.data, function(image) {
      console.log(image.images.low_resolution.url);
      $scope.instagramPhotos.push({
        user: image.user.username,
        lowRes: image.images.low_resolution.url,
        highRes: image.images.high_resolution,
        link: image.link,
        caption: image.caption.text
      });
    });
  });
});