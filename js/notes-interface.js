$(document).ready(function () {
    var $beforeLeft = '0%';
    var $beforeTop = "0%";

    $('.card-content').on('click', function () {

        var $note = $(this).parent().parent()[0];
        var $overlay = $('.overlay-note')[0];

        $(this).parent().parent().addClass('opened-note-item');

        $beforeLeft = $note.style.getPropertyValue('left');
        $beforeTop = $note.style.getPropertyValue('top');

        $note.style.setProperty('position', 'absolute');
        $note.style.setProperty('left', '24%');
        $note.style.setProperty('top', '0');
        $note.style.setProperty('z-index', '10');
        $note.style.setProperty('width', '60%');
        $note.style.setProperty('transition', 'all .25s');
        $note.style.setProperty('transition-timing-function', 'ease-in-out');
        $overlay.style.setProperty('display', 'block');
    });

    $('.overlay-note').on('click', function () {

        var $note = $('.opened-note-item')[0];
        $note.style.setProperty('left', $beforeLeft);
        $note.style.setProperty('top', $beforeTop);
        $note.style.removeProperty('width');
        $note.style.removeProperty('z-index');

        this.style.setProperty('display', 'none');

        $('.opened-note-item').removeClass("opened-note-item");
    });


    var $grid = $('.row').isotope({
        itemSelector: '.note-item',
        percentPosition: true,
        transitionDuration: 0,

    });

    $('.IHM').on('click', function(){
        $grid.isotope({filter : '.ihm'});
    });

    $('.SVL').on('click', function(){
        $grid.isotope({filter : '.svl'});
    });

    $('.M3DS').on('click', function(){
        $grid.isotope({filter : '.m3ds'});
    });

    $('.CAR').on('click', function(){
        $grid.isotope({filter : '.car'});
    });

    $('.ALL').on('click', function(){
        $grid.isotope({filter : '.note-item'});
    });
	
	$("input").keyup(function (e) {
		if (e.keyCode == 13) {
			var edValue = document.getElementsByClassName("search-bar");
			var text;
			for(var i = 0;i < edValue.length;i++){
				text = edValue[i].value;
			}
			if(text.toString().toUpperCase() == "IHM"){
				$grid.isotope({filter : '.ihm'});
			}else if(text.toString().toUpperCase() == "SVL"){
				$grid.isotope({filter : '.svl'});
			}else if(text.toString().toUpperCase() == "M3DS"){
				$grid.isotope({filter : '.m3ds'});
			}else if(text.toString().toUpperCase() == "CAR"){
				$grid.isotope({filter : '.car'});
			}else if(text.toString().toUpperCase() == "ALL"){
				$grid.isotope({filter : '.note-item'});
			}else if(text.toString() == "08-03-2015"){
				$grid.isotope({filter : '.date'});
			}else if(text.toString() == "12-03-2015"){
				$grid.isotope({filter : '.date1'});
			}else if(text.toString() == "14-03-2015"){
				$grid.isotope({filter : '.date2'});
			}else if(text.toString() == "19-03-2015"){
				$grid.isotope({filter : '.date3'});
			}else if(text.toString() == "15-03-2015"){
				$grid.isotope({filter : '.date4'});
			}else if(text.toString() == "22-03-2015"){
				$grid.isotope({filter : '.date5'});
			}else if(text.toString() == "21-03-2015"){
				$grid.isotope({filter : '.date6'});
			}
		}
	});
	
	/*valider le texte modifié par le créateur de texte*/
	$('.check').on('click', function(){
        $(".doCheck").replaceWith("<span class=\"card-title activator\">Card Title</span></p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>");
    });
})