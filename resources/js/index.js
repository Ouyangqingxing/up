$(document).ready(function()
{
	//初始的时候的样式变动   
    $(".indexFont2").animate({	opacity:'0.5',	});
    //鼠标经过的事件。注意，只执行一次.
    $(".indexFont2").one("mouseover",function()
    {
    	//欢迎文字的变化
    	$(".indexFont1").animate({ 	left:'+=100px'	,				});
		//链接图片的变化
	    $(".indexFont2").animate({ 	left:'+=100px'	,opacity:'1',	});
	    $("#indexStar1").animate({ 	opacity:'0'		,				});
	    $("#indexStar1").animate({ 	left:'+=975px'	,top:'130px'	,	});
	    $("#indexStar1").animate({ 	opacity:'1'		,				});	    
	    $("#indexStar2").animate({ 	opacity:'0'		,				});
	    $("#indexStar2").animate({ 	left:'+=975px'	,top:'260px',	});
	    $("#indexStar2").animate({ 	opacity:'1'		,				});	    
	    $("#indexStar3").animate({ 	opacity:'0'		,				});
	    $("#indexStar3").animate({ 	left:'+=500px'	,top:'260px',	});
	    $("#indexStar3").animate({ 	opacity:'1'		,				});    
	    $("#indexStar4").animate({ 	opacity:'0'		,				});
	    $("#indexStar4").animate({ 	left:'+=500px'	,top:'130px',	});
	    $("#indexStar4").animate({ 	opacity:'1'		,				});    
	    //中间图片的变化
	    $(".indexCentre").animate({	opacity:'0',	});	
	    $(".indexCentre").animate({	display:'none',	});	
    });
    $(".indexFont2").mouseover(function()
    {
	    $(".indexFont2").animate({	opacity:'1',	});
    });
    $(".indexFont2").mouseleave(function()
    {
	    $(".indexFont2").animate({	opacity:'0.5',	});
    });
});