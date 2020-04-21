var btncounter=0;
var previmg="";
var prevbtn="";
var c1=1;
var i=0,j=0;

var links=[
    "https://images-na.ssl-images-amazon.com/images/I/51nEvoCNk4L._SX324_BO1,204,203,200_.jpg", 
    "https://prodimage.images-bn.com/pimages/9781250175281.jpg",
     "https://images.squarespace-cdn.com/content/v1/59e802b9be42d61a159cbf16/1555322883123-F6FIUKYSUACRNM6G2640/ke17ZwdGBToddI8pDm48kB4nORySMPwEDaddUNIRril7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0jRb3i7UjwNNySrgFE_nWau3eoIbt6T219qcqUWV36JU8EtheewCadFuc6Byd4Wlqw/Caroline+Hsu+-+Head+Down+Movement.jpg",
    "https://www.deeperblue.com/wp-content/uploads/2016/10/AdobeStock_26298283-copy.jpg",
    "https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_230/vue-a%C3%A9rienne-paris-tour-eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-fotolia/19544352-1-fre-FR/Vue-a%C3%A9rienne-Paris-Tour-Eiffel-coucher-de-soleil-%7C-630x405-%7C-%C2%A9-Fotolia.jpg",
    "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
    "https://i.pinimg.com/originals/2c/ca/d5/2ccad553273808b29d4b05573eb5b7cb.jpg", 
    "https://c8.alamy.com/comp/HN066E/south-indian-vegetarian-thali-on-a-banana-leaf-underliner-in-a-stainless-HN066E.jpg",
    "https://images.newindianexpress.com/uploads/user/imagelibrary/2019/11/2/w900X450/RUMOURS.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0Gl8_bxSkuESMh_kiME1Kenfw3vx8DZe7f77rRoZxKlmOw3bY&usqp=CAU",
    "https://www.columbiacollege.ca/wp-content/uploads/2019/01/cricket-1024x683.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/JoffreyReynolds.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjDuhYopAh9T72ThFa1pj9fIkgXneDCR9R6sUmk8-PGf0VYtMZ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYA-XIxHqj-wg9W5c-PQN0CXye1znU2dEwmnGnfm9ui27XgQXs&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn08YbZvMEs4cdK3SQwHEFpCiyRrzmnSfYpdubx4qQLImProTo&usqp=CAU"
   
]

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
           console.log(linkimg);
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