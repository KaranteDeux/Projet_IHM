$(document).ready(function(){


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// Navbar a note modal /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $(".open-sidenav").sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });


    $('.collapsible').collapsible();

	var open = false;
    $('.open-searchbar').on('click', function(){
		if(!open){
			open=true;
			$('.search-bar').css('transform', 'scaleX(1)');
			$('.search-bar').css('transition', 'all .3s');
		}else{
			open=false;
			$('.search-bar').css('transform', 'scaleX(0)');
			$('.search-bar').css('transition', 'all .3s');
		}
    });

    $('.search-bar').on('blur', function(){

        $('.search-bar').css('transform', 'scaleX(0)');
        $('.search-bar').css('transition', 'all .3s');
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// Navbar a note modal /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// Rating a note modal /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('.modal-rate').leanModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
        }
    );

    $('.rating-modal-content').on('click', function(){
        $('#modal_rate').closeModal({
            complete: function() { Materialize.toast('Yeah ! Rated !', 4000); }
        });
    });

    $('.star-item').hover(function(){
        $(this).css('color', '#FFCE1B');
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// Rating a note modal /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////




    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// Share  a note modal /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('.share-trigger').leanModal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            complete: function() { Materialize.toast("Its been shared !", 4000); }
        }
    );

    $('.collection-item').on('click', function(){
        $(this).addClass('green');
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// Share  a note modal /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////// add editor  a note modal /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('.add-editor-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        complete: function() { Materialize.toast("User(s) added !", 4000); }
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////// add editor  a note modal ////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////




    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// rights   note modal /////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $('.allowed-trigger').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        complete: function() { Materialize.toast("User(s) removed !", 4000); }
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////// rights note modal ///////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
});