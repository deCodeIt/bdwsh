var SCREEN_W = window.innerWidth,
    SCREEN_H = window.innerHeight,
    BOOK_H = 400,
    C_X=1,//x Coordinate of sun
    C_Y=100;//y Coordinate of sun
$(document).ready(function() {
	$("#memorybook").turn({
		autoCenter: true,
	});
	//$("#memorybook").css({"margin-left":(window.innerWidth-$(this).width())/2+"px"});

	n_pages = $("#memorybook").turn("pages");

	//Setting up book height
	BOOK_H=($("#memorybook").height()>0)?$("#memorybook").height():BOOK_H;

	//initially the main page is vertically centered
	obj = $("#memorybook > div[page=1] p");
	$(obj).css({"padding-top":(BOOK_H/2-$(obj).outerHeight()/2)+"px"});
	$(obj).css({"opacity":"1"});

	//after page is turned
	$("#memorybook").bind("turned", function(event, page, view) {
	  console.log(view);

	  //padding so that the text appears on center
	  
	  for(i=0;i<view.length;i++)
	  {
	  	pg=view[i];

	  	if(pg>=n_pages)
	  	{
	  		//I am on the last page
	  		$("#memorybook").addClass("exitclass");
	  		$("#sunset2rise").hide();
	  		//calls the firecracker function
	  		initiate();
	  		//setTimeout(function(){$("#memorybook").remove()},1000);
	  	}

	  	if(pg!=0)
	  	{
		  	obj = $("#memorybook > div[page="+pg+"] p");
		  	if(i==0)
		  	{
		  		//set the sun's position
		  		console.log("Calling shiftsun");
		  		// go.shiftsun(pg,n_pages);
		  		go.dragsun(pg,n_pages,1);
		  		console.log("shiftsun was called after turning");
		  	}
		  	if(parseInt($(obj).css("padding-top"))==0)
		  	{
			  	$(obj).css({"padding-top":(BOOK_H/2-$(obj).outerHeight()/2)+"px"});
			  	$(obj).css({"opacity":"1"});
			  	console.log("adjusted: "+pg);
			}
		}
		else
		{
			console.log("Left Page 1");
		}
	  }
	});

	//at the end of the book
	// $("#memorybook").bind("end", function(event, pageObject, turned){
	//   console.log("Transition Ends");
	//   // console.log(pageObject);
	// });
	console.log("turned");
	doSomeWork();
	$(window).resize(function(){
		doSomeWork();
	});
});

function doSomeWork(){

	SCREEN_W = window.innerWidth,
    SCREEN_H = window.innerHeight;
	
	$("div.memory-container").css({"padding-top":(SCREEN_H-$("#memorybook").innerHeight())/2+"px"});
	$("div.memory-container").css({"padding-left":(SCREEN_W-$("#memorybook").innerWidth())/2+"px"});
}