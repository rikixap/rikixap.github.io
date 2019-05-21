 // event pada saat link di klik
 $('.page-scroll').on('click',function(e){
 	// ambil isi href
 	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
 	var elemenTujuan= $(tujuan);
 	$('html,body').animate ({
 		scrollTop: elemenTujuan.offset().top - 50
 	},1000);
 	// pindah scroll
 	// $('body').scrollTop('700');

 	e.preventDefault();
 });