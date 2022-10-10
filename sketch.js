let x= 350;
let e1= 335;
let e2= 360;
let l1= 0;
let l2= 0;
let c1= 0;
let c2= 0;
let t1= 0;
let t2= 0;
let t3= 0;
let t4= 0;



function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(225, 247, 255);
  fill(249, 222, 191);
  strokeWeight(0);
  rect(0, 300, 800, 200);
  
  fill(252, 242, 124);
  arc(350,300,450,500, PI, 0, CHORD)

  strokeWeight(0);
  fill(211, 15, 15);
  ellipse(x, 250, 200, 100);
  ellipse(x, 200, 100, 90);
  
  x= x + 1;
  
  
  fill(255,255,255);
  ellipse(e1, 150, 30, 30);
  ellipse(e2, 150, 30, 30);
  
  e1= e1+1;
  e2= e2+1;
  
  fill(0,0,0);
  ellipse(e1, 150, 10, 20);
  ellipse(e2, 150, 10, 20);
  
  fill(255,255,255);
  ellipse(e1, 150, 5, 5);
  ellipse(e2, 150, 5, 5);
  
  triangle(t1+335,220,t1+330,200,t1+340,200)
  triangle(t2+345,220,t2+350,200,t2+340,200)
  triangle(t3+355,220,t3+360,200,t3+350,200)
  triangle(t4+365,220,t4+370,200,t4+360,200)
  
  
  t1= t1+1
  t2= t2+1
  t3= t3+1
  t4= t4+1
  
  
  stroke(211,15,15);
  strokeWeight(10);
  fill(211, 15, 15);
  line(l1+280,230,l1+200,200);
  line(l2+420,230,l2+500,200);
  
  l1= l1+1
  l2= l2+1
  
  
  stroke(211,15,15);
  strokeWeight(10);
  fill(211, 15, 15);
  line(c1+280,280,c1+230,300);
  line(c2+420,280,c2+460,300);

 c1= c1+1
 c2= c2+1
  
  
  ;
  
}
