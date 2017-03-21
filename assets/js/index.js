var colors = {
	'default' : '#d9e1e8',
	'danger'	: '#f1404b',
	'primary'	: '#84B1ED',
	'warning'	: '#f9a11b',
	'success'	: '#28b78d',
	'royal'		: '#9055A2',
	'fashion'	: '#ed317f'
};

$('#color_danger').addClass('color__chooser_active');
$('#size_md').addClass('size__chooser_active');

$('.color > button').on('click', function(e){
	$('.color > button').removeClass('color__chooser_active');
	$(this).addClass('color__chooser_active');
	switch($(this).attr('id')){
		case 'color_danger':
			$('.desc__text').css('border-color', colors.danger);
			$('.card__title, .size__chooser, .card__copy_cloud').css({
				'color': colors.danger,
				'border-color' : colors.danger
			});
			$('.btn').removeClass('btn-primary').removeClass('btn-warning').removeClass('btn-success').removeClass('btn-royal').removeClass('btn-fashion').addClass('btn-danger');
			break;
		case 'color_primary':
			$('.desc__text').css('border-color', colors.primary);
			$('.card__title, .size__chooser, .card__copy_cloud').css({
				'color': colors.primary,
				'border-color' : colors.primary
			});
			$('.btn').removeClass('btn-warning').removeClass('btn-danger').removeClass('btn-success').removeClass('btn-royal').removeClass('btn-fashion').addClass('btn-primary');
			break;
		case 'color_warning':
			$('.desc__text').css('border-color', colors.warning);
			$('.card__title, .size__chooser, .card__copy_cloud').css({
				'color': colors.warning,
				'border-color' : colors.warning
			});
			$('.btn').removeClass('btn-primary').removeClass('btn-danger').removeClass('btn-success').removeClass('btn-royal').removeClass('btn-fashion').addClass('btn-warning');
			break;
		case 'color_success':
			$('.desc__text').css('border-color', colors.success);
			$('.card__title, .size__chooser, .card__copy_cloud').css({
				'color': colors.success,
				'border-color' : colors.success
			});
			$('.btn').removeClass('btn-primary').removeClass('btn-warning').removeClass('btn-danger').removeClass('btn-royal').removeClass('btn-fashion').addClass('btn-success');
			break;
		case 'color_royal':
			$('.desc__text').css('border-color', colors.royal);
			$('.card__title, .size__chooser, .card__copy_cloud').css({
				'color': colors.royal,
				'border-color' : colors.royal
			});
			$('.option__switcher_indicator:after').css('background-color', colors.royal);
			$('.btn').removeClass('btn-primary').removeClass('btn-warning').removeClass('btn-success').removeClass('btn-danger').removeClass('btn-fashion').addClass('btn-royal');
			break;
		case 'color_fashion':
			$('.desc__text').css('border-color', colors.fashion);
			$('.card__title, .size__chooser, .card__copy_cloud').css({
				'color': colors.fashion,
				'border-color' : colors.fashion
			});
			$('.btn').removeClass('btn-primary').removeClass('btn-warning').removeClass('btn-success').removeClass('btn-danger').removeClass('btn-royal').addClass('btn-fashion');
			break;
	}
});

$('.size > button').on('click', function(e){
	$('.size > button').removeClass('size__chooser_active');
	$(this).addClass('size__chooser_active');
	switch($(this).attr('id')){
		case 'size_sm':
			if($('.card__btn > button').hasClass( "btn-md" )){
				$('.card__btn > button').removeClass('btn-md').addClass('btn-sm');
			}else if($('.card__btn > button').hasClass( "btn-lg" )){
				$('.card__btn > button').removeClass('btn-lg').addClass('btn-sm');
			}
			$('.card__btn > button').text('Small');
			$('.btn-menu').html('<i class="fa fa-bars" aria-hidden="true"></i>');
			break;
		case 'size_md':
			if($('.card__btn > button').hasClass( "btn-sm" )){
				$('.card__btn > button').removeClass('btn-sm').addClass('btn-md');
			}else if($('.card__btn > button').hasClass( "btn-lg" )){
				$('.card__btn > button').removeClass('btn-lg').addClass('btn-md');
			}
			$('.card__btn > button').text('Medium');
			$('.btn-menu').html('<i class="fa fa-bars" aria-hidden="true"></i>');
			break;
		case 'size_lg':
			if($('.card__btn > button').hasClass( "btn-md" )){
				$('.card__btn > button').removeClass('btn-md').addClass('btn-lg');
			}else if($('.card__btn > button').hasClass( "btn-sm" )){
				$('.card__btn > button').removeClass('btn-sm').addClass('btn-lg');
			}
			$('.card__btn > button').text('Large');
			$('.btn-menu').html('<i class="fa fa-bars" aria-hidden="true"></i>');
			break;
	}
});

$('#blockBtn').on('click', function(){
	$('.btn').toggleClass('btn-block');
});
$('#outlineBtn').on('click', function(){
	$('.btn').toggleClass('btn-no-outline');
});

$('.card__copy_cloud').on('click', function(e){
	e.preventDefault();


	var classList = $(this).parent().parent()[0].children[1].children[0].className;

	$('.footer__select').val('<button class="' + classList + '"></button>').select();

	try{
		var successful = document.execCommand('copy');
		var info = successful ? 'successful' : 'unsuccessful';
		console.log('Copy ' + info);
		$('.copyMsg').addClass('copyMsg_active');
		setTimeout(function(){
			$('.copyMsg').removeClass('copyMsg_active');
		}, 1500);
	}catch(err){
		console.log('Oops, unable to copy');
	};
});