$('.menu-icon').click(function() {
    toggleMenu();
});

$('.close-menu').click(function() {
    toggleMenu();
})

var toggleMenu = function() {
    $('.navigation-mobile').toggleClass('active');
}