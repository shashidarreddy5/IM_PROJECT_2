var btncounter=0;
var previmg="";
var prevbtn="";
var c1=1;
var i=0,j=0;
var links=[
    "https://images.outlookindia.com/public/uploads/articles/2020/4/11/Dhoni-ODI-File_571_855.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkl_KIrAZnsW30Z35fJslAx0xtpFz6Q5J1-NnDyeTGMxtD5oKP&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyaHM94xXJEuEr39Dibhzrokas27wvge8utsne-wxpa3PdCyDj&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ELTkKSz_xDazElKXJod7tWQnmorKPon8Ar4AaGDzhC_idlBk&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZyv7ju3vA08hqsaHHemEC7_3Yet61E_QKqcMzf9UpbYG-t-xa&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRaQHN_l43QjJcXD8n0iWUI96EQhv2YzdEYi5ZvMAFo-nrIxc4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe7MAS1hOdbTLjrRSi_eZ_h8GptF_pps0z88mrNuLJZz5D1lYl&usqp=CAU",
    "https://www.car-wallpapers.net/cars/black-kawasaki-ninja-racing-bikes.jpg",
    "https://lnt.org/wp-content/uploads/files/2012/03/mallory2beverest2bridge.jpg", 
    "https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2013/12/cycling_3.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-hand-petting-dog-royalty-free-image-1145791356-1563784791.jpg",
    "https://www.thespruce.com/thmb/i65aFxN02EXTZcGn70qMoStACDI=/3865x2576/filters:fill(auto,1)/proud-gardener-539829042-58ba31d13df78c353ca93275.jpg",
    "https://cache.dominos.com/nolo/ca/en/6_8_14/assets/build/market/CA/_en/images/promo/DPC_N65_GM_HP_large_4_topping_mobile.png"]

function resize(x,y)
{
    var imgdom=document.getElementById(x.id);
    var btndom=document.getElementById(y.id);

    previmg=imgdom;
    prevbtn=btndom;

    switch(btncounter)
    {
        case 0:
            btndom.innerHTML="large";
            imgdom.style.width=690;
            imgdom.style.height=590;      
            btncounter=1;
            break;
        case 1:
            btndom.innerHTML="small";
            imgdom.style.width=920;
            imgdom.style.height=800;      
            btncounter=2;   
            break;
        case 2:
            btndom.innerHTML="small";
            imgdom.style.width=520;
            imgdom.style.height=350;      
            btncounter=0;    
            break;
    }
    
    imgdom.style.transition="width 2s,height 2s";
}
function gotop(x)
{
    
    var index1=0;
   var index2=links.indexOf(x);
   var temp=links[index1];
   links[index1]=links[index2];
   links[index2]=temp;

   c1=1;
   loadimages();
}
function gobottom(x)
{
    
   var index1=c1-2;
   var index2=links.indexOf(x);
   var temp=links[index1];
   links[index1]=links[index2];
   links[index2]=temp;
c1=1;
   loadimages();
}
function goleft(x)
{
   var index1=links.indexOf(x);
   var index2=index1-1;
   if(index1!=0)
   {
   var temp=links[index1];
   links[index1]=links[index2];
   links[index2]=temp;
  c1=1;
   loadimages();
    }
}

function goright(x)
{
   var index1=links.indexOf(x);
   var index2=index1+1;
   if(index1!=c1-2)
   {
   var temp=links[index1];
   links[index1]=links[index2];
   links[index2]=temp;
  c1=1;
   loadimages();
   }
}


function loadimages()
{   

       //create a array 
       //get the  dom of content
       var contentdom=document.getElementById("content");
       contentdom.innerHTML="";
       //create a counter variable i
       var divid=""
       var imgid="";
       var sizebtnid=""; 
       var topbtnid=""; 
       var bottombtnid=""; 
       var leftbtnid=""; 
       var rightbtnid=""; 
       var linkimg="";
       var childid="";
       c1=1;
       //start the loop 
       while(c1<=links.length)
       {
           divid="box"+c1;
           imgid="img"+c1;
           sizebtnid="sizebtn"+c1;
           topbtnid="topbtn"+c1;
           bottombtnid="bottombtn"+c1;
           leftbtnid="leftbtn"+c1;
           rightbtnid="rightbtn"+c1;
           childid="child"+c1;
           linkimg=links[c1-1];
       //append div with id box+i
       contentdom.innerHTML +=
       ` <div id="${divid}" onmouseover="displayBtns(${childid})" onmouseout="hideBtns(${childid})">
       <img id="${imgid}" src="${linkimg}" width=520 height=350 "><br>
       
           <div id="${childid}" >
          
            <button id="${sizebtnid}" onclick="resize(${imgid},${sizebtnid})">Medium</button>
            <button id="${topbtnid}" onclick="gotop('${linkimg}')" >Top</button>
            <button id="${bottombtnid}" onclick="gobottom('${linkimg}')" >Bottom</button>
            <button id="${leftbtnid}" onclick="goleft('${linkimg}')" >Left</button>
            <button id="${rightbtnid}" onclick="goright('${linkimg}')">Right</button>
            
            </div>
        </div>
       `; 
          
           c1++;
      }
      positionButtons();
}
function displayBtns(x)
{
    var childdiv=document.getElementById(x.id);
    childdiv.style.opacity=1;
}

function hideBtns(x)
{
    var childdiv=document.getElementById(x.id);
    childdiv.style.opacity=0;
 
}

function positionButtons()
{
    c1=1;
   while(c1<=links.length)
       {
           divid="box"+c1;
           childid="child"+c1;
          
           divdom=document.getElementById(divid);
           divdom.style.position="relative";
           divdom.style.display="flex";
           
           divdom.style.margin="30px";
           
           divdom.style.justifyContent="center";
           
           childdom=document.getElementById(childid);
           childdom.style.position="absolute";
           childdom.style.width="35%";
           childdom.style.display="flex";
           childdom.style.justifyContent="space-around";
           childdom.style.top="0px";
           childdom.style.padding="2%";   
           childdom.style.opacity=0;
                     
           c1++;
       }
}