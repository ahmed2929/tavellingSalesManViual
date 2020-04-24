
/////////////bute force algo//////////////////////////////

// var cities=[];
// var totalCities=7;
// var recordDis;
// var bestPath;
//     function setup() {

//         createCanvas(1366, 600);

//     for (let i = 0; i < totalCities; i++) {
        
//         var v=createVector(random(width),random(height));
//         cities[i]=v;

//     }
//     recordDis=calcDistance(cities)
//     bestPath=[...cities]
   
//   }

//   ////////////////////////////////////////////////////////
  
//   function draw() {
//     background(0);
//     fill(255);
//     for(var i=0;i<cities.length;i++){

//         ellipse(cities[i].x,cities[i].y,8,8);

//     }
   
//     // stroke(255);
//     // strokeWeight(1)
//     // noFill();

//     // beginShape();

//     // for(var i=0;i<cities.length;i++){

//     //     vertex(cities[i].x,cities[i].y);

//     // }
//     // endShape();

//     var i=floor(random(cities.length));
//     var j=floor(random(cities.length));
//     swap(cities,i,j)
   
//     var d=calcDistance(cities);
//     if(d<recordDis){
//         recordDis=d;
//         bestPath=[...cities]
        
//     }


//     stroke(255);
//     strokeWeight(4)
//     noFill();

//     beginShape();

//     for(var i=0;i<cities.length;i++){

//         vertex(bestPath[i].x,bestPath[i].y);

//     }
//     endShape();


   
//   }


//   function swap(a,i,j){
//     var temp=a[i];
//     a[i]=a[j]
//     a[j]=temp



//   }

//   function calcDistance(points){
//     var sum=0;

//     for(var i=0;i<points.length-1;i++){
//         var d=dist(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
//         sum+=d;
//     }

//     return sum;

//   }


  /////////end buteforce algo/////////////////////////

  /**
   * 
   * 
   * 
   *   Lexicographic Order algo
   * 
   * 
   * 
   * 
   */



        

 


 var vals=[1,2,3,4,5,6,7,8,9,10]

    function setup() {

       createCanvas(1366, 600);
      // createCanvas(400, 300);
      
   
  
  
  }


  
  function draw() {

  /**
   * 
   *      Lexicographic Order algo
    * Find the largest x such that P[x]<P[x+1].(If there is no such x, P is the last permutation.)
    *   Find the largest y such that P[x]<P[y].
    * Swap P[x] and P[y].
    * Reverse P[x+1 .. n].
    * 
   * 
   * 
   * 
   * 
   * 
   * 
   * 
   */




                  var lageI=-1;
                  for(let i=0;i<vals.length-1;i++){
                    if(vals[i]<vals[i+1]){
                      lageI=i;
                    }


                  }

                  if(lageI===-1){

                    noLoop();
                    


                  }

                  var LageJ=-1

                  
                  for (var j = 0; j < vals.length; j++) {
                    if (vals[lageI] < vals[j]) {
                      LageJ = j;
                    }
                  }




                  
                
                swap(vals,lageI,LageJ);

                var arrEnd=vals.splice(lageI+1);
                arrEnd.reverse();
                vals =vals.concat(arrEnd)
  










    background(0);
    textSize(64)
   var s='';

   for(let j=0;j<vals.length;j++){

    s+=vals[j];


  }

  fill(255);
  text(s,20,height/2)




    
  }


  function swap(a,i,j){
    var temp=a[i];
    a[i]=a[j]
    a[j]=temp



  }

 