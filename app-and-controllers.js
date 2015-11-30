var spillmagasinetFront = angular.module('spillmagasinetFront', ['ui.calendar', 'ui.bootstrap']);


spillmagasinetFront.run(function ($window) {

});

spillmagasinetFront.controller('contentController', function ($scope, $http, $location, $window) {

  $scope.pageCoverNumber = Math.floor((Math.random() * 5) + 1);
  
  $scope.storyLimiter = 5;
  $scope.storyLimiterButtonVisbility = true;

  $scope.streamLimiter = 6;
  $scope.streamLimiterButtonVisbility = true;

  $scope.bloggRollScrollPosition = 0;
  $scope.reviewRollScrollPosition = 0;


  $scope.uiConfig = {
    calendar:{
      height: 450,
      editable: true,
      header:{
        left: 'title',
        center: '',
        right: 'today prev,next'
      },
      dayNames: ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"],
      dayNamesShort: ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"]
      /**
      eventClick: $scope.alertOnEventClick,
      eventDrop: $scope.alertOnDrop,
      eventResize: $scope.alertOnResize,
      eventRender: $scope.eventRender
      **/
    }
  };

  $scope.eventSource = {
    url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
    className: 'gcal-event',           // an option!
    currentTimezone: 'America/Chicago' // an option!
  };

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

  $scope.increaseStreamLimiter = function () {
    if($scope.streamLimiter + 3 > 20) {
      $scope.streamLimiterButtonVisbility = false;
    } else {
      $scope.streamLimiter = $scope.streamLimiter + 3;
      if($scope.streamLimiter >= 20) {
        $scope.streamLimiterButtonVisbility = false;
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

  $http.get("Spillmagasinet-partnere-static.json")
  .success(function(data) {
    _.each(data.responseData.feed.entries, function(entry) {
      entry.publishedDate = new Date(entry.publishedDate);
      if(!entry.author) {
        entry.author = entry.link.replace("http://","").split(".")[0];
        entry.enclosure.url = entry.enclosure.url.replace('http://i.blogg.no/140/100/','');
      }
    })
    $scope.stories = data.responseData.feed.entries;
    console.log($scope.stories);
  });

  $http.get("Spillmagasinet-bloggere-static.json")
  .success(function(data) {
    _.each(data.responseData.feed.entries, function(entry) {
      entry.publishedDate = new Date(entry.publishedDate);
      if(!entry.author) {
        entry.author = entry.link.replace("http://","").split(".")[0];
        entry.enclosure.url = entry.enclosure.url.replace('http://i.blogg.no/140/100/','');
      }
    })
    $scope.fromBlogg = data.responseData.feed.entries;
    console.log($scope.fromBlogg);
  });

  $http.get("Spillmagasinet-podcasts-static.json")
  .success(function(data) {
    _.each(data.responseData.feed.entries, function(entry) {
      entry.publishedDate = new Date(entry.publishedDate);
      if(!entry.author) {
        entry.author = entry.link.replace("http://","").split(".")[0];
        entry.enclosure.url = entry.enclosure.url.replace('http://i.blogg.no/140/100/','');
      }
    })
    $scope.podcasts = data.responseData.feed.entries;
    console.log($scope.podcasts);
  });

  $scope.thisWeeksGamer = [{
    category:"ukens-gamer", title: "Uke 1: Noobwork", excerpt: "Navn: Joachim Haraldsen<br>Alder: 22 (født 29. desember 1992)<br>Bosted: Nittedal<br><br>Denne ukens gamer har over 80 000 følgere på youtube, og lever – tro det eller ei – faktisk av å spille spill.", image: "img-user/SamusAran_1600.jpg"}
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
    console.log($scope.norwegianStreams);
  });
});