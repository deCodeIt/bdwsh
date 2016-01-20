//initializing parameters
        var ctx,sky,gr,ANIMATE_PARTS=20.0,FINAL_X;

        //Defining screen width and height
        var SCREEN_WD = window.innerWidth,
        SCREEN_HT = window.innerHeight,
        INITIAL_TIME = 8,
        FINAL_TIME = 19;
        
        function go() {
  
            // some style setup
            ctx.font = "bold 16px sans-serif";
            gr.addColorStop(0, "#ffc");
            gr.addColorStop(0.75, "gold");
            gr.addColorStop(1, "orange");

            ctx.shadowColor = "#ffa";

            var centerX = ctx.canvas.width * 0.5,   // center of arc
                bottomY = ctx.canvas.height *0.81,   // let center be a bit below horizon
                radiusX = ctx.canvas.width  * 0.52, // radius, 80% of width in this example
                radiusY = ctx.canvas.height * 0.8;  // radius, 90% of height in this example

            // define sunrise and sunset times (in 24-hour clock, can be fractional)
            var time = INITIAL_TIME, sunrise = 7, sunset = 19;
            function dragsun(a,b,depth){
              // animates the shifting of sun from a to b
              i=0;
              if(depth==1)
              {
                //set the final state to reach (position)
                FINAL_X=a;
              }
              if(depth<=ANIMATE_PARTS)
              {
                console.log("Animating Sun");
                
                console.log("Sun animated by "+depth+" part");
                setTimeout(function(){
                  if(depth!=1)
                    go.shiftsun(a,b);
                  dragsun(C_X+(FINAL_X-C_X)*depth/ANIMATE_PARTS,b,depth+1);
                  
                },20);
                
              }
              else
              {
                C_X=a,
                C_Y=b;
                console.log("Animation of Sun ends with C_X:"+C_X+", C_Y:"+C_Y);
              }
            }
            go.dragsun=dragsun;

            function shiftsun(a,b) {
                console.log("shiftsun called with params: "+a+","+b);
              var normTime = getTime(a,b);                                  // get normalized time
              var angle = getAngle(normTime);                            // get angle in radians
              var x = centerX + radiusX * Math.cos(angle);               // calcuate point
              var y = bottomY + radiusY * Math.sin(angle);
              drawSky(normTime);                                         // draw sky gradient
              if(a<b)
                drawSun(x, y);                                             // draw sun at point
              // drawTime();                                                // render time
              // requestAnimationFrame(loop)                                // loop
            }
            go.shiftsun = shiftsun;

            function setSun(a,b){
              return (a/b)*(FINAL_TIME-INITIAL_TIME) + INITIAL_TIME;
            }
            go.setSun = setSun;

            function getTime(a,b) {
              // produces a normalized pseduo-time
              //time += 0.5;
              time = setSun(a,b)
              if (time > FINAL_TIME) time = INITIAL_TIME;
              return (time - sunrise) / (sunset - sunrise);
            }
            go.getTime = getTime;

            function getAngle(normTime) {
              return Math.PI + Math.PI * normTime
            }
            go.getAngle = getAngle;

            function drawSun(x, y) {
              ctx.beginPath();
              ctx.moveTo(x + 32, y);
              ctx.arc(x, y, 32, 0, 6.28);
              ctx.fillStyle = gr;
              ctx.shadowBlur = 20;
              ctx.fill();
            }
            go.drawSun = drawSun;

            function drawTime() {
              ctx.fillStyle = "#fff";
              ctx.shadowBlur = 0;
              ctx.fillText("Time: " + time.toFixed(1) + "h", 10, 20);
            }
            go.drawTime=drawTime;
              
              function drawSky(t) {
                t = Math.max(0, Math.min(1, t));
                  var iw = sky.width,
                      w =  ctx.canvas.width,
                      x = 60 + (iw - 120) * t;
                ctx.drawImage(sky, x, 0, 1, sky.height, 0, 0, w, ctx.canvas.height);
              }
              go.drawSky = drawSky;
            }

        //when document has loaded, run this script
        $(document).ready(function(){
            console.log("JQuery Loaded");

            $("#sunset2rise").attr("width",SCREEN_WD);
            $("#sunset2rise").attr("height",SCREEN_HT);
            ctx = document.getElementById('sunset2rise').getContext("2d"),
            gr = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height),
            sky = new Image();
            go();
            //sky.onload = go;
            sky.src = "./../images/sky_image.jpg";
            //setTimeout(function(){go.shiftsun(C_X,C_Y)},1000);
            //interval = setInterval(go.shiftsun, 200);
            console.log("JQuery Ended");

            $(window).resize(function(){
              //clearInterval(interval);
              SCREEN_WD = window.innerWidth,
              SCREEN_HT = window.innerHeight;
              $("#sunset2rise").attr("width",SCREEN_WD);
              $("#sunset2rise").attr("height",SCREEN_HT);
              ctx = document.getElementById('sunset2rise').getContext("2d"),
              gr = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height),
              sky = new Image();
              go();
              //sky.onload = go;
            sky.src = "./../images/sky_image.jpg";
            go.shiftsun(C_X,C_Y);
            //interval = setInterval(go.shiftsun, 200);
            });
        });


