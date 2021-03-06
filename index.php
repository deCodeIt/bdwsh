<?php
include './subfiles/scripts.inc.php';
?>

<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Happy New Year 2016</title>
        
        <link rel="stylesheet" type="text/css" href="./css/custom-style.css">
        <link rel="stylesheet" type="text/css" href="./css/book.css">
        <script src="./js/turn.min.js"></script>
        <script type="text/javascript">
        function afterLoaded(){
            $('div#main-contain').addClass('active');
            $(document).ready(function(){
                $('#myModal').removeClass('show');
                $('#myModal').addClass('hide');
                console.log("Modal off");
            });
            go.shiftsun(C_X,C_Y);
            
            
        }
        </script>

    </head>
    <body>
    <canvas id="sunset2rise" width="200" height="100"></canvas>

<!-- Modal -->
<div id="myModal" class="modal show" role="dialog">
  <div class="modal-dialog modal-sm">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
        <h4 class="modal-title"></h4>
      </div>
      <div class="modal-body">
        <center><button type="button" onclick="afterLoaded()" class="btn btn-primary" data-dismiss="modal">Let the Journey begin</button></center>
      </div>
      <div class="modal-footer">
        
      </div>
    </div>

  </div>
</div>
    <div class="container-fluid" id="main-contain">
        <div class="memory-container col-xs-12">
    		<div id="memorybook">
                <div class="hard"><p>2015 FlashBack!</p></div> 
                <!-- <div class="hard"></div> -->
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 1</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 2</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 3</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 4</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 5</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 6</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 7</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 8</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 9</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 10</p> </div>
                <div> <p><img src="./images/img1.jpg" /></p> </div>
                <div> <p>Memory 11</p> </div>

                
                <div> <p></p></div>
                <div class="hard">
                <p class="p-last">I hope this time you had a look at each one of them. No matter how I felt this year, I hope yours was filled with joy and happiness.<br>
                <br>Go ahead and turn the page for the last time, I have something for you ;)
                </p></div>
                <div class="hard"><p></p></div>
            </div>
    	</div>
    </div>
    </body>
    <script src="./js/memory.js"></script>
    <script type="text/javascript" src="./js/sun.js"></script>
    <script src="./js/firecracker.js"></script>
</html>