
let nameOfPerson = "-NAME-";
let date = "5 Sep, 2024";
let relation = ",";
let wish = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde vel saepe esse voluptatum rem quis accusamus corrupti ut autem eveniet suscipit velit, est dolorem quos modi cupiditate fugit aspernatur totam nostrum commodi. Laudantium fugiat perferendis totam consequuntur iste, beatae quas officiis consectetur possimus. Sunt laudantium, aliquam voluptatum quas accusantium deleniti et ex molestiae id veniam reprehenderit neque corrupti fugiat quasi, tempore ullam dignissimos tenetur quaerat!"





function defaultData(){
  document.querySelector('.p3').innerHTML = nameOfPerson;
  document.querySelector('.dear').innerHTML += relation;
  document.querySelector('.wish').innerHTML = wish;

  document.querySelector('.img-1').src = "./no background images/black.jpg"
  document.querySelector('.img-2').src = "./no background images/black.jpg"
  document.querySelector('.img-3').src = "./no background images/black.jpg"
  document.querySelector('.img-4').src = "./no background images/black.jpg"
  document.querySelector('.img-5').src = "./no background images/black.jpg"
  document.querySelector('.img-6').src = "./no background images/black.jpg"
}


defaultData();






let div = document.querySelector('.landing-div');

const initialText = ["IT's", date];

let index = 0;

let wordIndex = 0;

let textIndex = 0;

let speed = 120;








function typeWriter(){

  const referenceArray = initialText;

  const word = referenceArray[wordIndex];

  div.innerHTML += word[textIndex];

  textIndex++;

  if(textIndex>=word.length){
    setTimeout(erase, 1000)
  }
  else{
    setTimeout(typeWriter, speed);  
  }
}



typeWriter()



function erase(){

  if(div.innerHTML.length > 0){

    div.innerHTML = div.innerHTML.slice(0, -1);
    setTimeout(erase, 40)
  }
  else{
    textIndex = 0;
  
    wordIndex++;
    if(wordIndex>=initialText.length){
      setTimeout(()=>{
        div.classList.add('hide');
        startGsapAnimation();
      },1000)
    }
    else{
      setTimeout(typeWriter, 500)
    }

  }
  
}


function startGsapAnimation(){

  const t1 = gsap.timeline();

  t1.from('.p1', {opacity:0, y:-50})
    .from('.p2', {opacity:0, y:-50})
    .from('.p3', {opacity:0, y:-50})
    .to('.second-page', {delay:1, y:-1000, duration:1.5})
    .from('.text-content', {x:-1000})
    .from('.img-div-1', {y:-400, rotation:200})
    .from('.img-1', {opacity:0, y:-10})
    .from('.img-2', {opacity:0, y:-10})
    .from('.img-3', {opacity:0, y:-10})
    .from('.img-div-2', {y:400, rotation:100})
    .from('.img-4', {opacity:0, y:20})
    .from('.img-5', {opacity:0, y:20})
    .from('.img-6', {opacity:0, y:20})
    .from('.happy', {x:-100, opacity:0})
    .from('.cake-img', {x:100, opacity:0, rotation:180})
  
}