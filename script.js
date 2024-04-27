'use strict';

const btn_weekly = document.getElementById('weekly');
const btn_daily = document.getElementById('daily');
const btn_monthly = document.getElementById('monthly');


const work1 = document.getElementById('work-p')
const work2 = document.getElementById('work-span')
const play1 = document.getElementById('play-p')
const play2 = document.getElementById('play-span')
const study1 = document.getElementById('study-p')
const study2 = document.getElementById('study-span')
const exercise1 = document.getElementById('exercise-p')
const exercise2 = document.getElementById('exercise-span')
const social1 = document.getElementById('social-p')
const social2 = document.getElementById('social-span')
const selfCare1 = document.getElementById('selfCare-p')
const selfCare2 = document.getElementById('selfCare-span')



let data = fetch('data.json')
.then(response => response.json())
.then(veri => {
    veri.forEach(element => {

        btn_weekly.addEventListener("click", function () {

            document.getElementById("weekly").classList.add("text-white");
            document.getElementById("daily").classList.remove("text-white");
            document.getElementById("monthly").classList.remove("text-white");

            if (element.title === 'Work' && work1.innerHTML.length <= 7 ){
                work1.innerHTML = ``;
                work1.innerHTML += `${element.timeframes.weekly.current}hrs`;
            }
            if (element.title === 'Work' && work2.innerHTML.length <= 20 ){
                work2.innerHTML = ``;
                work2.innerHTML += `Last Week - ${element.timeframes.weekly.previous}hrs`;
            }

            if (element.title === 'Play' && work1.innerHTML.length <= 7 ){
                play1.innerHTML = ``;
                play1.innerHTML += `${element.timeframes.weekly.current}hrs`;
            }
            if (element.title === 'Play' && work2.innerHTML.length <= 20 ){
                play2.innerHTML = ``;
                play2.innerHTML += `Last Week - ${element.timeframes.weekly.previous}hrs`;
            }

            if (element.title === 'Study' && work1.innerHTML.length <= 7 ){
                study1.innerHTML = ``;
                study1.innerHTML += `${element.timeframes.weekly.current}hrs`;
            }
            if (element.title === 'Study' && work2.innerHTML.length <= 20 ){
                study2.innerHTML = ``;
                study2.innerHTML += `Last Week - ${element.timeframes.weekly.previous}hrs`;
            }

            if (element.title === 'Exercise' && work1.innerHTML.length <= 7 ){
                exercise1.innerHTML = ``;
                exercise1.innerHTML += `${element.timeframes.weekly.current}hrs`;
            }
            if (element.title === 'Exercise' && work2.innerHTML.length <= 20 ){
                exercise2.innerHTML = ``;
                exercise2.innerHTML += `Last Week - ${element.timeframes.weekly.previous}hrs`;
            }

            if (element.title === 'Social' && work1.innerHTML.length <= 7 ){
                social1.innerHTML = ``;
                social1.innerHTML += `${element.timeframes.weekly.current}hrs`;
            }
            if (element.title === 'Social' && work2.innerHTML.length <= 20 ){
                social2.innerHTML = ``;
                social2.innerHTML += `Last Week - ${element.timeframes.weekly.previous}hrs`;
            }

            if (element.title === 'Self Care' && work1.innerHTML.length <= 7 ){
                selfCare1.innerHTML = ``;
                selfCare1.innerHTML += `${element.timeframes.weekly.current}hrs`;
            }
            if (element.title === 'Self Care' && work2.innerHTML.length <= 20 ){
                selfCare2.innerHTML = ``;
                selfCare2.innerHTML += `Last Week - ${element.timeframes.weekly.previous}hrs`;
            }



        });


        btn_daily.addEventListener("click", function () {

            document.getElementById("weekly").classList.remove("text-white");
            document.getElementById("daily").classList.add("text-white");
            document.getElementById("monthly").classList.remove("text-white");


            if (element.title === 'Work' && work1.innerHTML.length <= 7 ){
                work1.innerHTML = ``;
                work1.innerHTML += `${element.timeframes.daily.current}hrs`;
            }
            if (element.title === 'Work' && work2.innerHTML.length <= 20 ){
                work2.innerHTML = ``;
                work2.innerHTML += `Last Week - ${element.timeframes.daily.previous}hrs`;
            }

            if (element.title === 'Play' && work1.innerHTML.length <= 7 ){
                play1.innerHTML = ``;
                play1.innerHTML += `${element.timeframes.daily.current}hrs`;
            }
            if (element.title === 'Play' && work2.innerHTML.length <= 20 ){
                play2.innerHTML = ``;
                play2.innerHTML += `Last Week - ${element.timeframes.daily.previous}hrs`;
            }

            if (element.title === 'Study' && work1.innerHTML.length <= 7 ){
                study1.innerHTML = ``;
                study1.innerHTML += `${element.timeframes.daily.current}hrs`;
            }
            if (element.title === 'Study' && work2.innerHTML.length <= 20 ){
                study2.innerHTML = ``;
                study2.innerHTML += `Last Week - ${element.timeframes.daily.previous}hrs`;
            }

            if (element.title === 'Exercise' && work1.innerHTML.length <= 7 ){
                exercise1.innerHTML = ``;
                exercise1.innerHTML += `${element.timeframes.daily.current}hrs`;
            }
            if (element.title === 'Exercise' && work2.innerHTML.length <= 20 ){
                exercise2.innerHTML = ``;
                exercise2.innerHTML += `Last Week - ${element.timeframes.daily.previous}hrs`;
            }

            if (element.title === 'Social' && work1.innerHTML.length <= 7 ){
                social1.innerHTML = ``;
                social1.innerHTML += `${element.timeframes.daily.current}hrs`;
            }
            if (element.title === 'Social' && work2.innerHTML.length <= 20 ){
                social2.innerHTML = ``;
                social2.innerHTML += `Last Week - ${element.timeframes.daily.previous}hrs`;
            }

            if (element.title === 'Self Care' && work1.innerHTML.length <= 7 ){
                selfCare1.innerHTML = ``;
                selfCare1.innerHTML += `${element.timeframes.daily.current}hrs`;
            }
            if (element.title === 'Self Care' && work2.innerHTML.length <= 20 ){
                selfCare2.innerHTML = ``;
                selfCare2.innerHTML += `Last Week - ${element.timeframes.daily.previous}hrs`;
            }
        });


        btn_monthly.addEventListener("click", function () {

            document.getElementById("monthly").classList.add("text-white");
            document.getElementById("weekly").classList.remove("text-white");
            document.getElementById("daily").classList.remove("text-white");


            if (element.title === 'Work' && work1.innerHTML.length <= 7 ){
                work1.innerHTML = ``;
                work1.innerHTML += `${element.timeframes.monthly.current}hrs`;
            }
            if (element.title === 'Work' && work2.innerHTML.length <= 20 ){
                work2.innerHTML = ``;
                work2.innerHTML += `Last Week - ${element.timeframes.monthly.previous}hrs`;
            }

            if (element.title === 'Play' && work1.innerHTML.length <= 7 ){
                play1.innerHTML = ``;
                play1.innerHTML += `${element.timeframes.monthly.current}hrs`;
            }
            if (element.title === 'Play' && work2.innerHTML.length <= 20 ){
                play2.innerHTML = ``;
                play2.innerHTML += `Last Week - ${element.timeframes.monthly.previous}hrs`;
            }

            if (element.title === 'Study' && work1.innerHTML.length <= 7 ){
                study1.innerHTML = ``;
                study1.innerHTML += `${element.timeframes.monthly.current}hrs`;
            }
            if (element.title === 'Study' && work2.innerHTML.length <= 20 ){
                study2.innerHTML = ``;
                study2.innerHTML += `Last Week - ${element.timeframes.monthly.previous}hrs`;
            }

            if (element.title === 'Exercise' && work1.innerHTML.length <= 7 ){
                exercise1.innerHTML = ``;
                exercise1.innerHTML += `${element.timeframes.monthly.current}hrs`;
            }
            if (element.title === 'Exercise' && work2.innerHTML.length <= 20 ){
                exercise2.innerHTML = ``;
                exercise2.innerHTML += `Last Week - ${element.timeframes.monthly.previous}hrs`;
            }

            if (element.title === 'Social' && work1.innerHTML.length <= 7 ){
                social1.innerHTML = ``;
                social1.innerHTML += `${element.timeframes.monthly.current}hrs`;
            }
            if (element.title === 'Social' && work2.innerHTML.length <= 20 ){
                social2.innerHTML = ``;
                social2.innerHTML += `Last Week - ${element.timeframes.monthly.previous}hrs`;
            }

            if (element.title === 'Self Care' && work1.innerHTML.length <= 7 ){
                selfCare1.innerHTML = ``;
                selfCare1.innerHTML += `${element.timeframes.monthly.current}hrs`;
            }
            if (element.title === 'Self Care' && work2.innerHTML.length <= 20 ){
                selfCare2.innerHTML = ``;
                selfCare2.innerHTML += `Last Week - ${element.timeframes.monthly.previous}hrs`;
            }
        });

    });
});