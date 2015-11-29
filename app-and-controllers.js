var spillmagasinetFront = angular.module('spillmagasinetFront', []);


spillmagasinetFront.controller('contentController', function ($scope, $http, $location, $window) {
  
  $scope.storyLimiter = 5;
  $scope.storyLimiterButtonVisbility = true;

  $scope.bloggRollScrollPosition = 0;
  $scope.reviewRollScrollPosition = 0;

  $scope.increaseStoryLimiter = function () {
    if($scope.storyLimiter + 3 > 20) {
      $scope.storyLimiterButtonVisbility = false;
    } else {
      $scope.storyLimiter = $scope.storyLimiter + 3;
      if($scope.storyLimiter >= 20) {
        $scope.storyLimiterButtonVisbility = false;
      }
    }
  }

  $scope.scrollBloggRoll = function (scrollToggle) {
    if(scrollToggle) {
      if($scope.bloggRollScrollPosition >= 3) {

      } else {
        $scope.bloggRollScrollPosition++;
      }
    } else {
      if($scope.bloggRollScrollPosition <= 0) {

      } else {
        $scope.bloggRollScrollPosition--;
      }
    }
    TweenMax.to("#ultra-long-blog-container", 0.5, {x: ($scope.bloggRollScrollPosition*1000)*-1, ease: Back.easeIn});
  }

  $scope.scrollReviewRoll = function (scrollToggle) {
    if(scrollToggle) {
      if($scope.reviewRollScrollPosition >= 3) {

      } else {
        $scope.reviewRollScrollPosition++;
      }
    } else {
      if($scope.reviewRollScrollPosition <= 0) {

      } else {
        $scope.reviewRollScrollPosition--;
      }
    }
    TweenMax.to("#ultra-long-review-container", 0.5, {x: ($scope.reviewRollScrollPosition*1000)*-1, ease: Back.easeIn});
  }

  $scope.stories = [
    {category:"GTA", title: "Er GTA - San Andreas igjen på vei til PS3 og Xbox 360?", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-1-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Destiny", title: "Hvor mye er du villig til å betale for en dans i Destiny?", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-2-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Destiny", title: "National gaming archive would inspire the next GTA", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-3-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Minecraft", title: "Dramatisk åpning på Minecraft- eventyret", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-4-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Call Of Duty", title: "Black Ops III lar deg hoppe rett til slutten av historien", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-5-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"GTA", title: "Er GTA - San Andreas igjen på vei til PS3 og Xbox 360?", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-1-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Destiny", title: "Hvor mye er du villig til å betale for en dans i Destiny?", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-2-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Destiny", title: "National gaming archive would inspire the next GTA", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-3-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Minecraft", title: "Dramatisk åpning på Minecraft- eventyret", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-4-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Call Of Duty", title: "Black Ops III lar deg hoppe rett til slutten av historien", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-5-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"GTA", title: "Er GTA - San Andreas igjen på vei til PS3 og Xbox 360?", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-1-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Destiny", title: "Hvor mye er du villig til å betale for en dans i Destiny?", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-2-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Destiny", title: "National gaming archive would inspire the next GTA", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-3-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Minecraft", title: "Dramatisk åpning på Minecraft- eventyret", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-4-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"Call Of Duty", title: "Black Ops III lar deg hoppe rett til slutten av historien", excerpt: "Specifically, dressing up as his greatest creation. The Legend of Zelda: Tri Force Heroes is available for Nintendo 3DS today, and one of the multiplayer ", image: "img/article-5-background.jpg", author: "Jørgen J", created: new Date()},
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
    {category:"SONIC", title: "Samus Aaran er tilbake!", image: "img/blogg-4-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"BATTLEFIELD 4", title: "Samus Aaran er tilbake!", image: "img/blogg-1-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"LEAGUE OF LEGENDS", title: "Samus Aaran er tilbake!", image: "img/blogg-2-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"SUPER MARIO", title: "Samus Aaran er tilbake!", image: "img/blogg-3-background.jpg", author: "Jørgen J", created: new Date()},
    {category:"SONIC", title: "Samus Aaran er tilbake!", image: "img/blogg-4-background.jpg", author: "Jørgen J", created: new Date()},
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
      {score: 4, userscore: 2, title: "Star Wars: Battlefront (PS4)", url: "", image: "review-1-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 6, userscore: 3, title: "Super Mario 3D World (WII U)", url: "", image: "review-2-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Colin Mcrea: DIRT (Xbox One)", url: "", image: "review-3-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Pokemon - Emerald Version (GBA)", url: "", image: "review-4-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Star Wars: Battlefront (PS4)", url: "", image: "review-1-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 6, userscore: 3, title: "Super Mario 3D World (WII U)", url: "", image: "review-2-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Colin Mcrea: DIRT (Xbox One)", url: "", image: "review-3-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Pokemon - Emerald Version (GBA)", url: "", image: "review-4-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Star Wars: Battlefront (PS4)", url: "", image: "review-1-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 6, userscore: 3, title: "Super Mario 3D World (WII U)", url: "", image: "review-2-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Colin Mcrea: DIRT (Xbox One)", url: "", image: "review-3-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Pokemon - Emerald Version (GBA)", url: "", image: "review-4-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Star Wars: Battlefront (PS4)", url: "", image: "review-1-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 6, userscore: 3, title: "Super Mario 3D World (WII U)", url: "", image: "review-2-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Colin Mcrea: DIRT (Xbox One)", url: "", image: "review-3-background.jpg", author: "Jørgen J", created: new Date()},
      {score: 4, userscore: 2, title: "Pokemon - Emerald Version (GBA)", url: "", image: "review-4-background.jpg", author: "Jørgen J", created: new Date()}
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
});