function big_doge()
{
    var date = new Date();
    var  hours = date.getHours();
    var minutes  = date.getMinutes();
    var seconds = date.getSeconds();
    var month = date.getMonth();
    var day = date.getDay();
    var year = date.getFullYear();
    
    /*console.log(day);
    console.log(month);*/
    if(hours<10)
        {
            hours = '0' + hours;
        }
    if(minutes<10)
        {
            minutes = '0' + minutes;
        }
    if(seconds<10)
        {
            seconds = '0' + seconds;
        }
    hours = hours +" :";
    minutes = minutes +" :";
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
    //document.getElementById("month").innerHTML = month;
    //document.getElementById("day").innerHTML = day;
    document.getElementById("year").innerHTML = year;
    
}


setInterval(big_doge,1000);
 




