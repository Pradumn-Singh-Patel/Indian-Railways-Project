fetch('https://indianrailapi.com/api/v2/livetrainstatus/apikey/1bd78a55e029960fa2142935b75274dd/trainnumber/02435/date/20210316/')
    .then((response) => {
        return response.json()
 })
    .then((data) => {
      let n=no_of_station=data.TrainRoute.length
      for(let i=0;i<n;i++){
        document.getElementById('container').innerHTML+=`<div class="card">
        <div class="card-header">
         <h2> ${data.TrainRoute[i].SerialNo}</h2>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <h3>${data.TrainRoute[i].StationName}<br><br>(${data.TrainRoute[i].StationCode})</h3>
          </blockquote>
        </div>
      </div>`
      }
    })
    .catch()

    


function time_updater(){
let time=new Date()
let date=time.toDateString()
let hours=time.getHours()
let minute=time.getMinutes()
let second=time.getSeconds()
hours=(hours>12) ? hours-12 : hours
second=(second<10) ? '0'+second :second
minute=(minute<10) ? '0'+minute :minute
hours=(hours<10) ? '0'+hours :hours
current_time=hours + ':' + minute + ':' + second
document.getElementById('date').innerHTML=`<h6>${date}</h6>`
document.getElementById('time').innerHTML=`<h6>${current_time}</h6>`
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}


document.getElementById('btn').addEventListener('click',() =>{
let val=document.getElementById('fetch_date').value
let val2=val.replace(/-/g,'')
})