$(document).ready(function(){

    $(".open-sidenav").sideNav({
        menuWidth: 240, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });


    $('.collapsible').collapsible();

});