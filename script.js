$( document ).ready(function(){

	
	

});
angular.module("myApp", []);



angular.module("myApp").factory("wineFactory", [function(){
		var Wine = function(name,description,character,body,img,myBottles){
			this.name = name;
			this.description = description;
			this.character = character;
			this.body = body;
			this.img = img
			this.myBottles = myBottles
		}
 	

 	var wineBox = [
 	new Wine ("Cabernet", ["American: Dry and oaky, typically with buttery finish due to malo-lactic fermentation."],["non","dry","heavy"],"full","grapes/cabernet.jpg",["wine a","food a1", "food a2"]),
 	new Wine ("Chardonnay", ["American: Tropical fruits and melon.  Dry and oaky, typically with buttery finish due to malo-lactic fermentation.", " French: Dry with less oak presence.  Bright, balanced with hints of citrus and tropical fruits"],["forward","dry","non"],"full","grapes/chardonnay.jpg",["wine b","food b1", "food b2"]),
 	new Wine ("Malbec", ["American: Dry and oaky, typically with buttery finish due to malo-lactic fermentation."],["non","dry","heavy"],"full","grapes/malbec.jpg",["wine c","food c1", "food c2"]),
 	new Wine ("Merlot", ["American: Dry and oaky, typically with buttery finish due to malo-lactic fermentation."],["forward","dry","non"],"medium","grapes/merlot.jpg",["wine d","food d1", "food d2"]),
 	new Wine ("Pinot Noir", ["American: Dry and oaky, typically with buttery finish due to malo-lactic fermentation."],["forward","dry","non"],"light","grapes/pinot-noir.jpg",["wine e","food e1", "food e2"]),
 	new Wine ("Riesling", ["American: Dry and oaky, typically with buttery finish due to malo-lactic fermentation."],["forward","non","non"],"light","grapes/riesling.jpg",["wine f","food f1", "food f2"]),
 	new Wine ("Sauvignon Blanc", ["American: Dry and oaky, typically with buttery finish due to malo-lactic fermentation."],["forward","non","non"],"medium","grapes/sauvignon-blanc.jpg",["wine g","food g1", "food g2"]),
 	new Wine ("Zinfandel", "American: Dry and oaky, typically with buttery finish due to malo-lactic fermentation.",["non","dry","heavy"],"full","grapes/zinfandel.jpg",["wine h","wine h1", "food h2"])
 	]

		return {
			wine: Wine,
			wineBox : wineBox
		}
	}]);


angular.module("myApp").factory("beerFactory", [function(){
		var Beer = function(name,description,body,character,abv,img,myBottles){
			this.name = name;
			this.description = description;
			this.body = body; 
			this.character = character
			this.abv = abv;
			this.img = img
			this.myBottles = myBottles
		}
 	

 	var beerBox = [
 	new Beer ("IPA", ["Hoppy and citrusy in yo grill!"], "full", ["non", "hoppy", "non"], "6-9%", "beer.jpg", ["beer a","food a1", "food a2"]),
 	new Beer ("Stout", ["Dark with tones of chocolate and slight bitterness."], "full", ["malty", "non", "non"],"6-9%","beer.jpg", ["beer b","food b1", "food b2"]),
 	new Beer ("Saison", ["Complex and balanced driven by wild yeast strains.","Ester, slight tartness, and earthy notes on the back palate."], "full", ["non", "non","sour"], "6-9%","beer.jpg", ["beer c","food c1", "food c2"]),
 	new Beer ("Sour", ["Barrel aging imparts notes of spice cabinet and woodiness to the beer.","With micro-organisms from wine barrels (i.e. brettanomyces), beers take on a distinct sour profile."], "medium", ["malty", "non", "sour"],"8-12%","beer.jpg", ["beer d","food d1", "food d2"]),
 	new Beer ("Amber", ["Typically a balance of malt and hops for a robust, yet easy drinking beer."], "medium", ["malty", "non", "non"], "4-7%","beer.jpg", ["beer e","food e1", "food e2"]),
 	new Beer ("Brown Ale", ["American brown ales tend to be characterized by roasted nut and caramel flavors.", "Some browns push hop presence, but are more typically malt oriented."], "full", ["malty", "non", "non"],"5-8%","beer.jpg", ["beer f","food f1", "food f2"]),
 	new Beer ("Belgian Dubbel", ["Rich, malty beer with dark fruit flavors and strong hop balance.","Sometimes brewed with Belgian candy to add bubblegum aromas and a very slight sweetness to the brew."], "full", ["malty", "hoppy", "sour"],"6.5-9%","beer.jpg", ["beer g","food g1", "food g2"]),
 	new Beer ("Pilsner", ["American pilsner is drive by hops and crisp, light malt character."], "light", ["non", "hoppy","non"], "5-7%","beer.jpg", ["beer h","food h1", "food h2"])
 	]

		return {
			beer: Beer,
			beerBox : beerBox
		}
	}]);

angular.module("myApp").factory("foodFactory", [function(){
		var Food = function(name,description,character,body,character2,body2,img,myWines,myBeers){
			this.name = name;
			this.description = description;
			this.character = character;
			this.body = body;
			this.character2 = character2
			this.body2 = body2
			this.img = img;
			this.myWines = myWines;
			this.myBeers = myBeers
		}
 	

 	var foodBox = [
 		new Food("Beef",["Many different cuts and preperations.","Loves tannic wine to cut through the fat content on a great steak."], ["non","heavy","dry"], ["full","medium"], 
 			["malty", "hoppy", "sour"], ["full", "medium"], "steak.jpg",["wine a","wine b", "wine c"],["beer a","beer b", "beer c"]),

 		new Food("Chicken",["The preperation can change the best match","Chicken pairs well with chardonnay as a general rule."], ["non", "non","dry"], ["light","medium"], 
 			["non", "hoppy", "sour"], ["light","medium"],"Chicken-Breast.jpg",["wine d","wine e", "wine f"],["beer d","beer e", "beer f"]),

 		new Food("Shellfish",["There are lots of kinds of shellfish, of course.","Mussels, clams, quahogs and the like are great with minerality.","If you're eating with citrus, try a more acidic wine."], ["non","non","sour"], "light", 
 			["non", "hoppy", "non"], ["light"], "shellfish.jpg",["wine g","wine h", "wine i"],["beer g","beer h", "beer i"]),

 		new Food("Mild Fish",["Milder textures and flavors mean milder wine."], ["forward","non","non"], "light", 
 			["non", "hoppy", "non"], ["light"],"mild-fish.jpg",["wine j","wine k", "wine l"],["beer j","beer k", "beer l"]),

 		new Food("Bold Fish",["Bolder fish means we can be a bit bolder with our wine.","But let's not get carried away!"], ["non","heavy","dry"], ["light","medium"], 
 			["malty","non","non"], ["light","medium"], "tuna.jpg",["wine m","wine n", "wine o"],["beer m","beer n", "beer o"]),

 		new Food("Lamb",["Many different cuts and preperations.","Loves tannic wine to cut through the fat contetnt on a great steak."], ["non","non","sour"], ["light","medium"], 
 			["malty", "non", "non"], ["medium","full"],"lamb.jpg",["wine p","wine q", "wine r"],["beer p","beer q", "beer r"]),

 		new Food("Pork",["Many different cuts and preperations.","Dial back the tannins and match the preperation on the pork."], ["non","non","dry"], ["light","medium"], 
 			["malty","hoppy","sour"], ["medium","light"], "pork.jpg",["wine s","wine t", "wine u"],["beer s","beer t", "beer u"]),

 		new Food("Chocolate",["Dark, milk, and everything in between!"], ["forward","non","non"], "light", 
 			["non","non","sour"], ["light"], "chocolate.jpg",["wine v","wine w", "wine x"],["beer v","beer w", "beer x"])
	]
		return {
			food: Food,
			foodBox : foodBox
		}
	}]);

angular.module("myApp").factory("blogFactory", [function(){
		var Blog = function(title,date,content){
			this.title = title;
			this.date = date;
			this.content = content
		}

		var blogBox = [
		new Blog("Sanitas Brewing Visit","2-10-16","This brewery got beer for DAZE!  Five Steins."),

		new Blog("Pollos Hermanos Visit","1-24-16", "Has your condition worsened? Your medical condition, has it grown worse? Is there a ringing in your ears? Are you seeing bright lights or hearing voices? No, clearly you are not. No rational person would do as you have done. Explain yourself. Are you asking me if I ordered the murder of a child? Where is Pinkman now. "),

		new Blog ("Shraderbrau Christmas Review", "12-23-15", "Marie, I said Cheetos, not Fritos. I must've said Cheetos like ten times. You need me to write it down for you? Well, I'm just saying, y'know, I said Cheetos. Ch-ch-ch sound. Virtually impossible to confuse Cheetos with Fritos it seems to me. Where are you going?")
		]

		return {
			blog : Blog,
			blogBox : blogBox
		}
		

	}]);

angular.module("myApp")
	.controller("bodyTroller", ['$scope', "wineFactory", "beerFactory", "foodFactory", "blogFactory",function($scope, wineFactory, beerFactory, foodFactory, blogFactory){

		$('#myCarousel').bind('slid.bs.carousel', function (e) {
			$scope.$apply(function(){
				$scope.pageTitle = $(e.relatedTarget).data("index")
						})

		});
		var s = $scope;
		s.pageTitle = '(wine)'
		s.myIndex = 0;
		s.blurClick = false;
		s.blurMaker = function(){
			s.blurClick = !s.blurClick
		};
		s.hide1=true;
		s.hide2=true;

		s.clicker = function(element,searchProp){
			if (!element.target.checked){
				s.search[searchProp] = ""
			}
		};

		//wine page

		s.wineBox = wineFactory.wineBox;
		var Wine = wineFactory.wine;

		s.pusher = function(wine){
			s.myIndex = s.wineBox.indexOf(wine)
			console.log("that's my eye")
		}

 		
		//beer page

		s.beerBox = beerFactory.beerBox;
		var Beer = beerFactory.beer

		s.beerPusher = function(beer){
			s.beerIndex = s.beerBox.indexOf(beer)
			console.log("needs more zazz!")
		}

		//food page

		s.foodBox = foodFactory.foodBox;
		var Food = foodFactory.foodFactory

		s.foodPusher = function(food){
			s.foodIndex = s.foodBox.indexOf(food)
			console.log("yum yum gimmee some!")
		}

		s.wineClick = function(){
			s.hide1=!s.hide1
			s.hide2=true
		}

		s.beerClick = function(){
			s.hide2=!s.hide2
			s.hide1=true
		}

		//blogpage

		s.blogBox = blogFactory.blogBox;
		var blog = blogFactory.blog


	}]);