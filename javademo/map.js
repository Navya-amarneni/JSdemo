var highlights=['highlight1','highlight2','highlight3','highlight4','highlight5','highlight6','highlight7','highlight8','highlight9','highlight10','highlight11','highlight12'];
var outdoor=['outdoor1','outdoor2','outdoor3','outdoor4','outdoor5','outdoor6','outdoor7','outdoor8','outdoor9','outdoor10','outdoor11','outdoor12'];
var family=['family1','family2','family3','family4','family5','family6','family7','family8','family9','family10','family11','family12'];
var restaurants=['restaurant1','restaurant2','restaurant3','restaurant4','restaurant5','restaurant6','restaurant7','restaurant8','restaurant9','restaurant10','restaurant11','restaurant12'];
var landmarks=['landmark1','landmark2','landmark3','landmark4','landmark5','landmark6','landmark7','landmark8','landmark9','landmark10','landmark11','landmark12'];
var shopping=['shopping1','shopping2','shopping3','shopping4','shopping5','shopping6','shopping7','shopping8','shopping9','shopping10','shopping11','shopping12'];
var transport=['transport1','transport2','transport3','transport4','transport5','transport6','transport7','transport8','transport9','transport10','transport11','transport12'];

var sel = '.navigator li';
var cls='Highlights';
var start=0;
var end=6;

identifyclass('Highlights');


$(sel).on('click', function(){

    var listing = this.innerHTML;
    $(sel).removeClass('active');
    $(this).addClass('active');
    cls=listing;
    showfirst();
    
});




function identifyclass(str){
    console.log(start);
    var arr=$('ol li');
    arr[0].value=start+1;
    switch(str){
       case('Highlights'):
           for(i=start;i<end;i++){
               arr[i%6].innerHTML=highlights[i];
           }          
           break;
       case('Outdoor activities'):
           for(i=start;i<end;i++){
               console.log(i);
            arr[i%6].innerHTML=outdoor[i];
            }   
           break;
       case('Family-friendly'):         
           for(i=start;i<end;i++){
            arr[i%6].innerHTML=family[i];
            }    
           break;
       case('Restaurants'):         
           for(i=start;i<end;i++){
            arr[i%6].innerHTML=restaurants[i];
            }  
           break;
       case('Landmarks'):        
           for(i=start;i<end;i++){
            arr[i%6].innerHTML=landmark[i];
            }  
           break;
       case('Shopping &amp; relaxation'):        
           for(i=start;i<end;i++){
            arr[i%6].innerHTML=shopping[i];
            }
           break;
       case('Transportation'):        
           for(i=start;i<end;i++){
            arr[i%6].innerHTML=transport[i];
            }
           break;
   
    }
   }


function showfirst(){

    start=0;end=6;
    identifyclass(cls);
    $('button').removeClass('enabled');
    $('button').removeClass('disabled');
    $('.pagination .page2').addClass('enabled');
    $('.pagination .page1').addClass('disabled');
}



function showsecond(){

    start=6;end=12;
    console.log(cls);
    identifyclass(cls);
    $('button').removeClass('enabled');
    $('button').removeClass('disabled');
    $('.pagination .page1').addClass('enabled');
    $('.pagination .page2').addClass('disabled');

}