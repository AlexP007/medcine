$('.sl').slick({
 
  dots: true,
  cssEase: 'ease-in',
  slidesToShow: 3,
  responsive: [
  	{
  		breakpoint: 1200,
  		settings: {
  			slidesToShow: 3
  		}
	},
	  	{
  		breakpoint:1190,
  		settings:{
  			slidesToShow: 2
  		}
	},
	  	{
  		breakpoint:720,
  		settings:{
  			slidesToShow: 1
  		}
	},
  ]
 });

 $('.sl2').slick({
  cssEase: 'ease-in',
  asNavFor: '.sl3',
  slidesToShow: 3,
  
  responsive: [
  	{
  		breakpoint: 1200,
  		settings: {
  			slidesToShow: 3
  		}
	},
	  	{
  		breakpoint:1190,
  		settings:{
  			slidesToShow: 2
  		}
	},
	  	{
  		breakpoint:720,
  		settings:{
  			slidesToShow: 1
  		}
	},
  ]
 });

 $('.sl3').slick({
   
  slidesToShow: 6,
  asNavFor: '.sl2',
  focusOnSelect: true,
  arrows: false,
  slidesToScroll: 2,
  responsive: [
  	{
  		breakpoint: 1200,
  		settings: {
  			slidesToShow: 6
  		}
	},
	  	{
  		breakpoint:1190,
  		settings:{
  			slidesToShow: 4
  		}
	},
	  	{
  		breakpoint:720,
  		settings:{
  			slidesToShow: 2
  		}
	},
  ]
 });


