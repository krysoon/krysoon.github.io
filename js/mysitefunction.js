    $(document).ready(function() {
	
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(400);
            },
            function(){
                $(this).children('.sub-menu').slideUp(400);
            }
        );

		$('#experience').hide();
        $('#academice').hide();
        $('#profolio').hide();
        $('#aboutme').hide();
        $('#contact').hide();
        $('#wrap').hide();
        
        $('#homenav').click(function() {
        $('#experience').hide();
        $('#academice').hide();
        $('#profolio').hide();
        $('#aboutme').hide();
        $('#contact').hide();
        $('#home').show();
        });
        
        $('#expnav').click(function() {
        $('#home').hide();
        $('#academice').hide();
        $('#profolio').hide();
        $('#aboutme').hide();
        $('#contact').hide();
        $('#experience').show();
        });
        
        $('#academicnav').click(function() {
        $('#home').hide();
        $('#experience').hide();
        $('#profolio').hide();
        $('#aboutme').hide();
        $('#contact').hide();
        $('#academice').show();
        });
        
        $('#profolionav').click(function() {
        $('#home').hide();
        $('#experience').hide();
        $('#academice').hide();
        $('#aboutme').hide();
        $('#contact').hide();
        $('#profolio').show();
        
        });
        
        $('#aboutnav').click(function() {
        $('#home').hide();
        $('#experience').hide();
        $('#academice').hide();
        $('#profolio').hide();
        $('#contact').hide();
        $('#aboutme').show();
        });
        
        $('#contactnav').click(function() {
        $('#home').hide();
        $('#experience').hide();
        $('#academice').hide();
        $('#profolio').hide();
        $('#aboutme').hide();
        $('#contact').show();
        });
 
 
        
    }); // end ready
  

 //homepage vedio
 var myPlayer;
        function showInfo(info) {
            $("#info").stop().delay(500).html(info).stop().fadeIn().delay(1000).fadeOut();
        }

        jQuery(function () {
            myPlayer = jQuery("#bgndVideo").YTPlayer();
            myPlayer.on("YTPData", function (e) {
                showInfo(e.prop.title + "<br><br>@" + e.prop.channelTitle);
            });
        });






