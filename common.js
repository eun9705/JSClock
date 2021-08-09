function clock(){
    var today = new Date();
    
    var dates = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
    var times = [today.getHours(), today.getMinutes(), today.getSeconds()];
    
    var weekDay = today.getDay();
    var weekArray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    var dateObject = document.getElementsByTagName('h3');
    var timeObject = document.getElementsByTagName('h2');
    var dayObject = document.getElementById('weekday');
    
    for(var i in dates){ 
        if(dates[i] < 10){
            dates[i] = '0' + dates[i];
        }
        if(times[i] < 10){
            times[i] = '0' + times[i];
        }
    }
    
    dayObject.textContent = weekArray[weekDay];
    for(var i in dateObject){
        dateObject[i].textContent = dates[i];
        
    }
    for(var i in timeObject){
        timeObject[i].textContent = times[i];
        
    }
}

clock();

setInterval(clock, 1000);