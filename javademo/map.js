//Mock data
var items = {
    listofitems:[
        {name: 'Hilmar Cheese2 Company', dist: 1, tags:['highlight', 'outdoor','family']},
        {name: 'California State University Stanislaus', dist: 3.8, tags:['highlight']},
        {name: 'Hilmar Country Plaza', dist: 4, tags:['highlight']},
        {name: 'Carnegie Arts Center', dist: 6, tags:['outdoor','family']},
        {name: 'Ricos Pizza', dist: 8, tags:['highlight', 'outdoor']},
        {name: 'Elegant Bull', dist: 10, tags:['family','outdoor']},
        {name: 'ABCABAC', dist: 4.6, tags:['family']},
        {name: 'CGDFS', dist: 7, tags:['highlight','family']},
        {name: 'AHUEE', dist: 8, tags:['highlight', 'outdoor']},
        {name: 'Carmellon', dist: 9, tags:['highlight']},
        {name: 'new bean cafe', dist: 4.6, tags:['outdoor']},
        {name: 'zayka', dist: 7, tags:['highlight','family']},
        {name: 'angethi', dist: 8, tags:['family', 'outdoor']},
        {name: 'museum', dist: 9, tags:['highlight', 'family']},
        {name: 'beach', dist: 4.6, tags:['family']},
        {name: 'park', dist: 7, tags:['family','outdoor']},
        {name: 'zoo', dist: 8, tags:['highlight', 'outdoor']},
        {name: 'drive in', dist: 9, tags:['outdoor', 'family']},
    ]
}



var cls='Highlights';//class to be active initially
var start=0;//start pointer
var size=4; //number of li items to display onscreen at once
var itno=8; // number of total items of specific tag


//initial setup
identifyclass('Highlights');
document.querySelector(".paging").innerHTML=(start+1)+' - '+(start+size)+' of '+itno;

var sel= document.querySelectorAll(".navigator li");
//Add event listeners
for(i=0;i<sel.length;i++){
    
    sel[i].addEventListener('click', function(event){
    var listing = event.target.innerHTML;
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    cls=listing;
    //correspondigly change pagination on reset
    start=size;
    page_clicked("prev");
    //call function
    start=0;
    identifyclass(cls);
    
});
}


//finding the element with right tag and changing its contents
function find_element(str,arr,start,end){
    var count=0;
    var i=start;
    for(j=0;j<items.listofitems.length;j++){
        var x = items.listofitems[j].tags.includes(str);
        if(count>=start && count<end && x==true){
            arr[i%size].childNodes[0].nodeValue=items.listofitems[j].name;
            arr[i%size].childNodes[1].innerHTML=items.listofitems[j].dist+' km ';
            i++;
        }
        if(x==true)count++;
        
    }
}


//main function
function identifyclass(str){
    console.log("kk");
  console.log(start);
    end=size+start;
    var arr=document.querySelectorAll('ol li');
    arr[0].value=start+1;
    switch(str){
       case('Highlights'):
           find_element('highlight',arr,start,end);        
           break;
       case('Outdoor activities'):
            find_element('outdoor',arr,start,end);   
           break;
       case('Family-friendly'):         
            find_element('family',arr,start,end);    
           break;
       case('Restaurants'):         
            find_element('highlight',arr,start,end);   
           break;
       case('Landmarks'):        
             find_element('highlight',arr,start,end);   
           break;
       case('Shopping &amp; relaxation'):        
            find_element('highlight',arr,start,end);         
           break;
       case('Transportation'):        
            find_element('highlight',arr,start,end);  
           break;
   
    }
   }


//change pagination
   function page_clicked(clicked){

    var page_next=document.querySelector('#next');
    var page_prev=document.querySelector('#prev');
    if(clicked=="prev"){  if(page_prev.classList.contains('disabled'))return ;  start-=size;}
    if(clicked=="next"){  if(page_next.classList.contains('disabled'))return ;  start+=size;}

    if((start+size)>=itno){
        page_next.classList.add('disabled');
    }
    else{
        page_next.classList.remove('disabled');  
    }

    if(start-size<0){
        page_prev.classList.add('disabled');
    }
    
    if(start-size>=0){
        page_prev.classList.remove('disabled');
    }
    document.querySelector(".paging").innerHTML=(start+1)+' - '+(start+size)+' of '+itno;
    identifyclass(cls);
   }
