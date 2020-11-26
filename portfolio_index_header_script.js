var header = document.getElementsByTagName("header")[0];
var headerHeight = header.clientHeight;

//check this the very moment the site loads
document.onload =  function(){
	if(window.getComputedStyle(document.getElementById("quickfind_column")).display === "none"){
		header.id = "";
	}
	else
	{
		if(document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight)
		{
			header.id = "header_is_compressed";
		}
		else
		{
			header.id = "";
		}
	}
}

window.onresize = function(){
	if(window.getComputedStyle(document.getElementById("quickfind_column")).display === "none"){
		header.id = "";
	}
	else
	{
		if(document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight)
		{
			header.id = "header_is_compressed";
		}
		else
		{
			header.id = "";
		}
	}
}

window.onscroll = function() 
{
	if(window.getComputedStyle(document.getElementById("quickfind_column")).display !== "none"){
		if(document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight)
		{
			header.id = "header_is_compressed";
		}
		else
		{
			header.id = "";
		}
	}
}

