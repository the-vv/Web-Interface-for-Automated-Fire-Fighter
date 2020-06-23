function updateTime(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = d + " / " + m + " / " + y;

    h = n.getHours();
    min = n.getMinutes();
    s = n.getSeconds();
    document.getElementById("time").innerHTML = h + " : " + min + " : " + s;
}
setInterval(updateTime, 1000);

