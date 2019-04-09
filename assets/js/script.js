import $  from 'jquery' ;
import bird from '../images/bird.jpg';
import squirrel from '../images/squirrel.jpg';

import '../css/normalize.css';
import '../css/style.css';


$('#image__bird').attr("src",bird);
$('#image__squirrel').attr("src",squirrel);

$(document).ready(function () {
	// when a hanburger menu is clicked
	let $ul = $(".nav__list"),
		 $menu = $(".nav__menu");

	$($menu).click(function () {
		// toggle menu-click Class
		$ul.toggleClass("menu-click");
	}); // end click event handler
});

