function time_updater() {
  let time = new Date()
  let date = time.toDateString()
  let hours = time.getHours()
  let minute = time.getMinutes()
  let second = time.getSeconds()
  hours = (hours > 12) ? hours - 12 : hours
  second = (second < 10) ? '0' + second : second
  minute = (minute < 10) ? '0' + minute : minute
  hours = (hours < 10) ? '0' + hours : hours
  current_time = hours + ':' + minute + ':' + second
  document.getElementById('date').innerHTML = `<h6>${date}</h6>`
  document.getElementById('time').innerHTML = `<h6>${current_time}</h6>`
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
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 9000);
}


document.getElementById('btn').addEventListener('click', () => {
  let train_no = document.getElementById('train_no').value
  let date = document.getElementById('fetch_date').value
  let required_date = date.replace(/-/g, '')
  fetch('https://indianrailapi.com/api/v2/livetrainstatus/apikey/1bd78a55e029960fa2142935b75274dd/trainnumber/' + train_no + '/date/' + required_date)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let n = no_of_station = data.TrainRoute.length
      container.innerHTML = ''
      for (let i = 0; i < n; i++) {
        container= document.getElementById('container')
        container.innerHTML +=
          `<div class="wrap text-center col-sm-3">
      <div class="side_a">
         <div class="card-header">
           <h2 class="card_header">${data.TrainRoute[i].SerialNo}</h2>
         </div>
         <div class="card_body card-body">
           <blockquote class="blockquote mb-0 ">
             <h3>${data.TrainRoute[i].StationName}<br><br>(${data.TrainRoute[i].StationCode})</h3>
          </blockquote>
         </div>
      </div>
      <div class="side_b">
        <div class="card">
          <ul class="list-group list-group-flush">
          
            <li class="list-group-item" style="background-color: black; color: white;" ><h5>Day</h5><b>${data.TrainRoute[i].Day}</li>
            <li class="list-group-item" style="background-color: black; color: white;"><h5>Arrival Time</h5>${data.TrainRoute[i].ScheduleArrival}</li>
            <li class="list-group-item" style="background-color: black; color: white;"><h5>Departure Time</h5>${data.TrainRoute[i].ScheduleDeparture}</li>
          </ul>
        </div>
      </div>
    </div> `
        // <p class="arrow" style="color: white;"><b>--></b></p>`
      }
    })
    .catch()
})

