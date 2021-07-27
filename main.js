const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 102\xB0 F outside, so :insertx: went for a walk. When they got to :inserty:, they stared in shock for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 570 pounds, and it was a hot day.";

let insertX = ['Rhysies Pieces', 'Feisty Frederick', 'Sir Jeffrey'];

let insertY = ['where the sidewalk ends', 'the requisite Waffle House that is on every corner', 'Stars Hollow'];

let insertZ = ['spontaneously photosynthesized', 'began to bawl unconsoleably', 'did jazz hands', 'did spirit fingers'];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':insertx:', xItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(570/14);
    let temperature =  Math.round(((102-32)*(5/9)));
    newStory = newStory.replace("570", weight);
    newStory = newStory.replace("102", temperature);
    newStory = newStory.replace("pounds", "stone");
    newStory = newStory.replace("F", "C");

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}