// import data from './data.json' with {type : 'json'};
//
// console.log(data);

const work1 = document.getElementById('work-p')

let data = fetch('data.json')
.then(response => response.json())
.then(veri => {
    veri.forEach(element => {
         if (element.title === 'Work'){
             work1.innerHTML += `${element.timeframes.weekly.current}`
             console.log(element.timeframes.weekly.current);
             console.log(element.timeframes.weekly.previous);
         }

    });
});