$(document).on('ready',function(){
    alert("HEY");
    //*******************************************************CRONOMETRO **************************************************************
    
    cuenta();
    
    //**** INPUT VALIDATION only nubers from 1 to 6
    
    $("input").keydown(function(event) {
        
        if(event.shiftKey){
	        event.preventDefault();
	   }

	   if (event.keyCode == 46 || event.keyCode == 8){
	   }
	   else {
	        
           if (event.keyCode < 95){
	          
               if (event.keyCode < 48 || event.keyCode > 54){
	                event.preventDefault();
	           }
	        } 
	        else {
	           
                if (event.keyCode < 96 || event.keyCode > 105) {
	                event.preventDefault();
	             }
	        }
	    }
    });
  
    //**CRONOMETER
    
    var cronometro;
    
    function stop(){//para detener el cronometro
        
        clearInterval(cronometro);  
        window.location.href="res_domino.php";//hoja de resultados
    }
    
    function cuenta(){
    
        var contador_s=0;
        var contador_m=0;
        var seg=document.getElementById('segundos');
        var min=document.getElementById('minutos');
        
        cronometro= setInterval(function(){
            
            if(contador_s == 60){
                
                contador_s=0;
                contador_m++;
                min.innerHTML=contador_m;
                
                if(contador_m ==40){
                    contador_m=0;
                    alert("Tu tiempo se ha terminado, hora de los resultados");
                    stop();//llamada al reporte de php y parada  del contador
                }
            }
            seg.innerHTML=contador_s;
            contador_s++;
            
        },1000);//cada segundo se ejecutará esta función      
    }
    //******************+*******************************DOMINO*************************************************************************
    
    //**CALLINGS TO NEW DOMINOS
    
    var c = document.getElementById('P1');
    domino(c,0,1,3,0,3,2,6,1,5,4);
    var c = document.getElementById('VP1');
    domino(c,6,0,3,5,6,3,6,3,2,4);
    var c = document.getElementById('SP1');
    domino(c,0,1,3,0,3,2,6,1,5,4);
    var c = document.getElementById('OA1');
    domino(c,5,2,4,5,3,4,6,1,3,2);
    
    var c = document.getElementById('P2');
    domino(c,3,0,3,2,5,2,5,4,0,4);
    var c = document.getElementById('VP2');
    domino(c,6,6,6,0,3,5,5,5,4,4);
    var c = document.getElementById('SP2');
    domino(c,3,0,3,2,5,2,5,4,0,4);
    var c = document.getElementById('OA2');
    domino(c,3,1,5,0,5,5,3,2,2,2);
    
    var c = document.getElementById('P3');
    domino(c,6,6,1,2,5,4,3,3,3,6);
    var c = document.getElementById('VP3');
    domino(c,1,3,3,2,5,1,1,0,3,6);
    var c = document.getElementById('SP3');
    domino(c,6,6,1,2,5,4,3,3,3,6);
    var c = document.getElementById('OA3');
    domino(c,0,2,4,6,6,6,1,0,4,3);
    
    var c = document.getElementById('P4');
    domino(c,1,0,1,1,1,2,0,3,1,3);
    var c = document.getElementById('VP4');
    domino(c,6,6,5,5,4,4,3,3);
    var c = document.getElementById('SP4');
    domino(c,1,0,1,1,1,2,0,3,1,3);
    var c = document.getElementById('OA4');
    domino(c,1,0,3,2,5,4,0,6,2,1);
    
    var c = document.getElementById('P5');
    domino(c,2,4,5,2,6,0,4,3,1,5);
    var c = document.getElementById('VP5');
    domino(c,1,1,2,2,3,3,4,6,2,6);
    var c = document.getElementById('SP5');
    domino(c,2,4,5,2,6,0,4,3,1,5);
    var c = document.getElementById('OA5');
    domino(c,6,6,0,4,4,5,30,3,3);
    
    //DOT OBJECT****************
    
    function dot(x,y){
        this.x = x;
        this.y = y;
    }
    
    //DOMINO************************
    
    function domino(c,uno,dos,tres,cuatro,cinco,seis,siete,ocho,nueve,diez){
    
        
        if(validate_canvas(c)== true){
            
            var ctx = c.getContext("2d");
            
            paint(10,10,c,uno,dos,ctx);   
            paint(100,10,c,tres,cuatro,ctx);
            paint(190,10,c,cinco,seis,ctx);
            paint(280,10,c,siete,ocho,ctx);
            paint(370,10,c,nueve,diez,ctx);
            
        }    
    }
    
    
    function validate_canvas(canvas){
        if(canvas){
            return true;
        }else{
            return false;
        }
    }
     
    
    //PAINT************************
    
    function paint(x1,y1,canvas, up,down,ctx){
        
    //***drawing the rectangle
        var x=x1;
        var y=y1;
        var w=60;
        var h=110;
        
        var P1=new dot(x,y);
        var P2=new dot(x+w,y);
        var P3=new dot(x,y+(h/2));
        var P4=new dot(x+w,y+(h/2));
        var P5= new dot(x,y+h);
        var P6= new dot(x+w,y+h);
        var PC= new dot(x+(w/2),y+(h/2));
        
        ctx.strokeStyle = "rgb(0,0,0)";
        ctx.strokeRect(x,y,w,h);
        
    //**making the divition
    
        ctx.moveTo(P3.x,P3.y);
        ctx.lineTo(P4.x,P4.y);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.stroke();
        
   
    //***calling paint dots
        
        paint_dots(ctx,P1,P2,P3,up);
        paint_dots(ctx,P3,P4,P5,down);
    
    } 
    
    
    
    function draw_circle(ctx,x,y){
        
        ctx.beginPath();
        ctx.arc(x,y,5,0,2*Math.PI);
        ctx.fillStyle="#000";
        ctx.fill();
        ctx.stroke();
    }
    
    function paint_dots(ctx,P1,P2,P3,np){
        
        var l=(P3.y-P1.y)/4;//tamaño de la recta Y
        var m=(P2.x-P1.x)/4;//tamaño de la recta en X
        //alert("  P1x:"+P1.x+"  P1y:"+P1.y+"  P2x:"+P2.x+"  P2y:"+P2.y+"  P3x:"+P3.x+"  P3y:"+P3.y);
       // alert(" L:" +l +" M:"+m);
        if(np==0){
            
        }
        if(np==1){
           
            draw_circle(ctx,P1.x+2*m,P1.y+2*l);
            
        }
        if(np==2){
            
            draw_circle(ctx,P1.x+m,P1.y+l);
            draw_circle(ctx,P1.x+3*m,P1.y+3*l);
        }
        if(np==3){
            
            draw_circle(ctx,P1.x+m,P1.y+l);
            draw_circle(ctx,P1.x+2*m,P1.y+2*l);
            draw_circle(ctx,P1.x+3*m,P1.y+3*l);
        }
        if(np==4){
            
            draw_circle(ctx,P1.x+m,P1.y+l);
            draw_circle(ctx,P1.x+m,P1.y+3*l);
            draw_circle(ctx,P1.x+3*m,P1.y+l);
            draw_circle(ctx,P1.x+3*m,P1.y+3*l);
        }
        if(np==5){
            
            draw_circle(ctx,P1.x+m,P1.y+l);
            draw_circle(ctx,P1.x+m,P1.y+3*l);
            draw_circle(ctx,P1.x+3*m,P1.y+l);
            draw_circle(ctx,P1.x+3*m,P1.y+3*l);
            draw_circle(ctx,P1.x+2*m,P1.y+2*l);
        }
        if(np==6){
            
            draw_circle(ctx,P1.x+m,P1.y+l);
            draw_circle(ctx,P1.x+m,P1.y+3*l);
            draw_circle(ctx,P1.x+3*m,P1.y+l);
            draw_circle(ctx,P1.x+3*m,P1.y+3*l);
            draw_circle(ctx,P1.x+m,P1.y+2*l);
            draw_circle(ctx,P1.x+3*m,P1.y+2*l);
        }
        
    }
    
   
    function random_color(){
       
       var colors= [ '#26C6DA', '#00BFA5', '#FFEB3B', '#FF9800','#B2FF59','#FF5252','#FF4081'];
       var x = Math.floor((Math.random() * 7) );
       return colors[x];
   }
    
//IS CHECKED****************
    /*function checked(){
        
        var cheche=$("input:checkbox:checked");
        alert(cheche.length);
        
        /*if(cheche.length< 48) {  
           
            alert("Porvafor llena todas tus respuestas");
            
        }
    }*/
    
        
    
});
    
    
