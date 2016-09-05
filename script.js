var characters = {
	lando: {
		armWrestle: 60,
		foodEating: 80,
		debate: 65,
		footRace: 60
	},
	c3PO: {
		armWrestle: 40,
		foodEating: 40,
		debate: 55,
		footRace: 40
	},
	stormtrooper: {
		armWrestle: 50,
		foodEating: 70,
		debate: 35,
		footRace: 65
	},
	tuskenraider: {
		armWrestle: 70,
		foodEating: 95,
		debate: 40,
		footRace: 75
	},
	jawa: {
		armWrestle: 45,
		foodEating: 55,
		debate: 45,
		footRace: 50
	},
	palpatine: {
		armWrestle: 95,
		foodEating: 60,
		debate: 80,
		footRace: 90
	},
	darthvader: {
		armWrestle: 85,
		foodEating: 45,
		debate: 85,
		footRace: 80
	},
	hansolo: {
		armWrestle: 65,
		foodEating: 75,
		debate: 60,
		footRace: 85
	},
	chewbacca: {
		armWrestle: 75,
		foodEating: 100,
		debate: 50,
		footRace: 45
	},
	luke: {
		armWrestle: 90,
		foodEating: 85,
		debate: 70,
		footRace: 70
	},
	obiwan: {
		armWrestle: 80,
		foodEating: 65,
		debate: 90,
		footRace: 55
	},
	leia: {
		armWrestle: 55,
		foodEating: 90,
		debate: 75,
		footRace: 100
	},
	r2D2: {
		armWrestle: 35,
		foodEating: 35,
		debate: 95,
		footRace: 35
	},
	yoda: {
		armWrestle: 100,
		foodEating: 50,
		debate: 100,
		footRace: 95
	}
};


$('form').on('submit', function(event) {

	var seconds = 3;

	var countdown = window.setInterval(function () {
		//update span text w/# of seconds
		$('.countdown span').html(seconds);
		$('main').css('opacity', '0.3');


		if (seconds === 0) {
			window.clearInterval(countdown);
			$('span').html('');
			window.location.href='#goToWinner';
			$('main').css('opacity', '1');
		}
	seconds--;

	},1000);

	event.preventDefault();
	var userSelectedBattle = $('input[name=battleSelection]:checked').val();
	var userCharSelect1 = $('.characterOne .is-selected').data('character');
	var userCharSelect2 = $('.characterTwo .is-selected').data('character');

	//get corresponding stat based on battle type

	//use Object.assign to make a copy.
	var stats1 = Object.assign({},characters[userCharSelect1]);
	var stats2 = Object.assign({},characters[userCharSelect2]);

	var x = Math.floor(Math.random()) * 100;
	var bonus = false;
	if (stats1[userSelectedBattle] > stats2[userSelectedBattle]) {
		if((Math.floor((Math.random()) * 100)) >= 90) {
			stats2[userSelectedBattle] = stats2[userSelectedBattle] + 30;
			bonus = true;
		}
	} else {
		if((Math.floor((Math.random()) * 100)) >= 90) {
			stats1[userSelectedBattle] = stats1[userSelectedBattle] + 30;
			bonus = true;
		}
	}

	console.log(stats1[userSelectedBattle]);
	console.log(stats2[userSelectedBattle]);

	if(stats1[userSelectedBattle] > stats2[userSelectedBattle]) {
		console.log("Player 1 Wins");
		var winner = userCharSelect1;
	}else {
		console.log("Player 2 Wins");
		var winner = userCharSelect2;
	};

	displayWinner(winner, bonus);
});

var displayWinner = function(winner, bonus){
	$('.winner').html(`<h2 class = "winnerName">${winner} is victorious!</h2>`);
	$('.winnerName').css('text-transform', 'capitalize');
	$('.winner').css('height', '60vh');
	$('.winner').css('margin-top', '10vh');
	$('.winner').append(`<img src="sprites/${winner}.png">`);
	
	if(bonus == true){
		$('.winner').append('<i class="fa fa-spinner fa-pulse fa-1x fa-fw faa-slow">');
	}
}