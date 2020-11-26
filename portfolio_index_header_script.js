var header = document.getElementsByTagName("header")[0];
var headerHeight = header.clientHeight;

window.onscroll = function() 
{
	console.log(header);
	if(document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight)
	{
		header.id = "header_is_compressed";
	}
	else
	{
		header.id = "";
	}
}

