window.onload = function() {
  const body = document.body;
  console.log(body);

const createDuck = ()=>{
  let babyDuck = document.createElement('div');
  babyDuck.style.top = Math.random() * window.innerHeight+'px';
  babyDuck.style.left = Math.random() * window.innerWidth+'px';
  body.appendChild(babyDuck);
  babyDuck.className = 'duck flap';


 const flap = () =>{
    babyDuck.classList.toggle('flap');
 }
 setInterval(flap, 250);

  const moveDuck = babyDuck => {
    babyDuck.style.top = Math.random() * window.innerHeight+'px';
    babyDuck.style.left = Math.random() * window.innerWidth+'px';
   }
   setInterval(() => {moveDuck(babyDuck)}, 1000);


   return babyDuck;
 }
for(let i = 0; i < 5; i++){
  createDuck().addEventListener('click', (e)=>{
  e.target.classList.add('shot');
  setTimeout(()=>{
    e.target.remove()}, 1000);
  })
}

const checkForWinner = () =>{
  let duckieArr = document.querySelectorAll('.duck');
  if (duckieArr.length === 0) {
    window.alert('Good Job!!!');
    clearInterval(winner,1000)
  }
}

let winner = setInterval(checkForWinner, 1000);
};
