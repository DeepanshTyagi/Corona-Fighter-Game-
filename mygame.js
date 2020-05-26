var game=()=>
{
    var load_image=()=> // It helps us to load assests 
    {
         // We load the image of enamy
        enemy_img=new Image;
        enemy_img.src="enemy.png";
        
        // We load the image of player 
        player_img=new Image;
        player_img.src="player.jpg";
        
        // we load the image of gem 
        
        gem_img=new Image;
        gem_img.src="gem.png";
    }
    var init=()=>
    {
        // here we define the game objects 
        canvas= document.getElementById("mycanvas");
        console.log(canvas);
        W=700;
        H=300;
        canvas.width=W;
        canvas.height=H;
        
        // We define the context object which helps us to draw an objectt
        pen=canvas.getContext('2d');
        console.log(pen);
        // Instead of one box we will define multiple enemys
        e1=
        {
               x:150,
            y:50,
            w:90,
            h:70,
            speed:20
        };
           e2=
        {
            x:300,
            y:150,
            w:90,
            h:70,
            speed:30
        };
           e3=
        {
               x:450,
            y:20,
            w:90,
            h:70,
            speed:40
        };
        enemy=[e1,e2,e3];
        
        // Make the Player Object 
        player=
        {
            x:20,
            y:H/2,
            w:70,
            h:70,
            speed:20,
            moving:false
        }
        
        // Make the gem object
        gem=
        {
          x:W-100,
          y:H/2,
          w:70,
          h:70,
          speed:20
        }
        /*
        Box=
        {
            x:150,
            y:50,
            w:70,
            h:70,
            speed:20
        };*/
        
        // Add event listner to the canvas 
        // when we press the mouse 
        canvas.addEventListener('mousedown',()=>
                               {
            console.log("Mouse Pressed");
            player.moving=true;
        })
        
        // when we release the mouse 
        canvas.addEventListener('mouseup',()=>
                               {
            console.log("Mouse relesed");
            player.moving=false;
        })
        
    }
    var draw=()=>
    {
        pen.clearRect(0,0,W,H); // clear the canvas area from old frame
       // pen.fillStyle="green";
      //   pen.fillRect(Box.x,Box.y,Box.w,Box.h);
      // Instead of Drwaing Rectangle we draw Image of each enamy
       // pen.drawImage(enemy,Box.x,Box.y,Box.w,Box.h);
        for(var i=0;i<enemy.length;i++)
            {
              pen.drawImage(enemy_img,enemy[i].x,enemy[i].y,enemy[i].w,enemy[i].h);  
            }
        
        // Draw the Player 
        pen.drawImage(player_img,player.x,player.y,player.w,player.h);
        // Draw the gem
        pen.drawImage(gem_img,gem.x,gem.y,gem.w,gem.h);
    }
    var update=()=>
    {
        
        // Here we will update the Box to move 
        /*
        Box.y+=Box.speed;
        // Now we will check the connditon if box going beyond the canvas boundry 
        if(Box.y>=H-Box.h || Box.y<0)
            {
                Box.speed=Box.speed*-1; // Change the direction of Box 
            }*/
        
        // We try to move each enemy 
        for(var i=0;i<enemy.length;i++)
            {
                enemy[i].y+=enemy[i].speed;
                if(enemy[i].y>=H-enemy[i].h || enemy[i].y<0)
                    {
                        enemy[i].speed*=-1;
                    }
            }
        
        // If We press the mouse then the player will move 
        if(player.moving==true)
            {
                player.x+=player.speed;
                if(player.x>=W || player.x<0)
                    {
                        player.speed*=-1;
                    }
            }
        
    }
     var gameloop=()=>
     {
         draw();
         update();
         console.log("In game loop");
     }
     load_image();
     init();
     var f=setInterval(gameloop,100);
}