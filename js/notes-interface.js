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
})