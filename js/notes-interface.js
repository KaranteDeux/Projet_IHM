$(document).ready(function () {
    var $beforeLeft = '0%';
    var $beforeTop = "0%";

    $('.card-content-p').on('click', function () {

        var $note = $(this).parent().parent().parent()[0];
        var $overlay = $('.overlay-note')[0];
        var $collabs = $(this).parent().next()[0];

        $(this).parent().parent().parent().addClass('opened-note-item');

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

        $collabs.style.setProperty('display', 'block');
        $(this).parent().next().addClass("active-action-content");
    });

    $('.overlay-note').on('click', function () {

        var $note = $('.opened-note-item')[0];
        var $collabs = $('.active-action-content')[0];
        var $details = $('.card-footer')[0];

        this.style.setProperty('display', 'none');

        $note.style.setProperty('left', $beforeLeft);
        $note.style.setProperty('top', $beforeTop);
        $note.style.removeProperty('width');
        $note.style.removeProperty('z-index');

        $collabs.style.setProperty('display', 'none');

        $details.style.setProperty('display', 'block');

        $('.active-action-content').removeClass("active-action-content");
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
			var text = $('.search-bar').val().toUpperCase();

			if(text == "IHM"){
				$grid.isotope({filter : '.ihm'});
			}else if(text == "SVL"){
				$grid.isotope({filter : '.svl'});
			}else if(text == "M3DS"){
				$grid.isotope({filter : '.m3ds'});
			}else if(text == "CAR"){
				$grid.isotope({filter : '.car'});
			}else if(text == "ALL"){
				$grid.isotope({filter : '.note-item'});
			}else if(text == "08-03-2015"){
				$grid.isotope({filter : '.date'});
			}else if(text == "12-03-2015"){
				$grid.isotope({filter : '.date1'});
			}else if(text == "14-03-2015"){
				$grid.isotope({filter : '.date2'});
			}else if(text == "19-03-2015"){
				$grid.isotope({filter : '.date3'});
			}else if(text == "15-03-2015"){
				$grid.isotope({filter : '.date4'});
			}else if(text == "22-03-2015"){
				$grid.isotope({filter : '.date5'});
			}else if(text == "21-03-2015"){
				$grid.isotope({filter : '.date6'});
			}else if(text == "ME"){
				$grid.isotope({filter : '.perso1'});
			}else if(text == "MOHAMED"){
				$grid.isotope({filter : '.perso2'});
			}else if(text == "NABIL"){
				$grid.isotope({filter : '.perso3'});
			}else if(text == "ANTONIN"){
				$grid.isotope({filter : '.perso4'});
			}
		}
	});
	
	/*valider le texte modifié par le créateur de texte*/
	$('#check').on('click', function(){
        $(this).slideUp("medium");
        $('.modified-note').contents().unwrap();

    });


    $('.friend-card-action').on('click', function(e){
        e.preventDefault();
        $(this).parent().parent().fadeOut('medium');
        Materialize.toast("The friend has been deleted !", 1000);
    });
















})