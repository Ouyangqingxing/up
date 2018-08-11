$(document).ready(function()
{ 
	var checkFfzrmList = false;
	var checkMmpList = false;
	var checkQsmxList = false;
	var checkShyshList = false;

	//=============================== 分分钟入门 ===============================
	//鼠标移入移出
	$("#ffzrm").mouseover(function()
    {
		$("#ffzrmIcon").fadeToggle("slow");
		$("#ffzrm").animate({ opacity:'1' });
    });
    $("#ffzrm").mouseleave(function()
    {
	    $("#ffzrmIcon").fadeToggle("slow");
	    $("#ffzrm").animate({ opacity:'0.6' });
    });
    //鼠标点击
    $("#ffzrm").click(function()
    {
    	$("#funny").fadeToggle("slow");
    	$("#versionNumber").fadeToggle("slow");
    	$("#bottom").fadeToggle("slow");
    	$("#main").fadeToggle("slow");
		$("#ffzrmBg").fadeToggle("slow");
		$("#ffzrmList").fadeToggle("slow");
		$("#ffzrmList").animate({ top:'95px' });
    });

    //=============================== 慢慢品 ===============================
    //鼠标移入移出
    $("#mmp").mouseover(function()
    {	
		$("#mmpIcon").fadeToggle("slow");
		$("#mmp").animate({ opacity:'1' });
    });
	$("#mmp").mouseleave(function()
    {
	    $("#mmpIcon").fadeToggle("slow");
	    $("#mmp").animate({ opacity:'0.6' });
    });
    //鼠标点击
    $("#mmp").click(function()
    {
    	$("#funny").fadeToggle("slow");
    	$("#versionNumber").fadeToggle("slow");
    	$("#bottom").fadeToggle("slow");
		$("#main").fadeToggle("slow");
		$("#mmpBg").fadeToggle("slow");
		$("#mmpList").fadeToggle("slow");
		$("#mmpList").animate({ left:'+=300px', top:'+=60px' });
    });
	//=============================== 奇思妙想 ===============================
    //鼠标移入移出
    $("#qsmx").mouseover(function()
    {	
		$("#qsmxIcon").fadeToggle("slow");
		$("#qsmx").animate({ opacity:'1' });
    });
	$("#qsmx").mouseleave(function()
    {
	    $("#qsmxIcon").fadeToggle("slow");
	    $("#qsmx").animate({ opacity:'0.6' });
    });
    //鼠标点击
	$("#qsmx").click(function()
    {
    	$("#funny").fadeToggle("slow");
    	$("#versionNumber").fadeToggle("slow");
    	$("#bottom").fadeToggle("slow");
		$("#main").fadeToggle("slow");
		$("#qsmxBg").fadeToggle("slow");
		$("#qsmxList").fadeToggle("slow");
		$("#qsmxList").animate({ left:'-=350px', top:'+=50px' });
    });

	//===============================  生活呀生活 ===============================
    //鼠标移入移出
    $("#shysh").mouseover(function()
    {	
		$("#shyshIcon").fadeToggle("slow");
		$("#shysh").animate({ opacity:'1' });
    });
	$("#shysh").mouseleave(function()
    {
	    $("#shyshIcon").fadeToggle("slow");
	    $("#shysh").animate({ opacity:'0.6' });
    });
    //鼠标点击
	$("#shysh").click(function()
    {
    	$("#funny").fadeToggle("slow");
    	$("#versionNumber").fadeToggle("slow");
    	$("#bottom").fadeToggle("slow");
		$("#main").fadeToggle("slow");
		$("#shyshBg").fadeToggle("slow");
		$("#shyshList").fadeToggle("slow");
		$("#shyshList").animate({ left:'+=350px', top:'+=50px' });
    });
	//=============================== 其他 ===============================
    //滑稽事件
    $("#funny").mouseover(function()
    {	
		$("#funny").fadeToggle("slow")
		$("#funny").animate({ 	right:'+=1320px'	,				});
		$("#funny").fadeToggle("slow")	
    });
});