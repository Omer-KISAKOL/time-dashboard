// import data from './data.json' with {type : 'json'};
//
// console.log(data);

const btn_weekly = document.getElementById('weekly');
const btn_daily = document.getElementById('daily');
const btn_monthly = document.getElementById('monthly');


const work1 = document.getElementById('work-p')
const work2 = document.getElementById('work-span')




let data = fetch('data.json')
.then(response => response.json())
.then(veri => {
    veri.forEach(element => {

        btn_weekly.addEventListener("click", function () {
            if (element.title === 'Work' && work1.innerHTML === ''){
                work1.innerHTML += `${element.timeframes.weekly.current}hrs`
            }
            if (element.title === 'Work' && work2.innerHTML === ''){
                work2.innerHTML += `Last Week - ${element.timeframes.weekly.previous}hrs`
            }
        });



    });
});