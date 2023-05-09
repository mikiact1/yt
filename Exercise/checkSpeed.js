checkSpeed(77);

function checkSpeed(speed){
     let points = 0;
     let max = 75;
    let speedLimit = 70;
    if(speed<=74 )
        console.log("Ok")
    else{
       
        while(points < 13 && max <= speed ){
                ++points;
                max +=5;            
        }

        if(points <= 12){
            console.log('point: '+ points);
        }
        else if(points > 12){
            console.log('License Suspended!');
        }
        
    }

}