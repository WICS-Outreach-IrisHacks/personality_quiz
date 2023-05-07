let pickedcolor;
let pickedanimal;
let pickedweather;
let mood;


function wipe() {
    document.getElementById("main").innerHTML = `
    <div id="main">
      <p> pick a color </p>
      <div class="text_container" >
          <button class="btn blue", onclick="colorclicked('blue')"> blue </button>
          <button class="btn red", onclick="colorclicked('red')"> red </button>
          <button class="btn green", onclick="colorclicked('green')"> green </button>
          <button class="btn yellow", onclick="colorclicked('yellow')"> yellow </button>
          <button class="btn grey", onclick="colorclicked('grey')"> grey </button>
          <button class="btn aqua", onclick="colorclicked('aqua')"> aqua </button>
          <button class="btn magenta", onclick="colorclicked('magenta')"> magenta </button>
          <button class="btn orange", onclick="colorclicked('orange')"> orange </button>
      </div>
    </div>`;

}
function colorclicked(user_color) {
  pickedcolor = user_color;
  document.getElementById("main").innerHTML = `
  <div>
  <p> pick a picture </p>
  <div class="image_container" >
      <button> <img class="images" onclick="dogclicked('dog on the floor')" src="https://th.bing.com/th/id/OIP.fqmo4l7j2UR8-WorpH1MOgHaFj?pid=ImgDet&rs=1" /> </button>
      <button> <img class="images" onclick="dogclicked('dog holding a rose')" src="https://th.bing.com/th/id/OIP.cFbSMhjRMOmNaJsl4nI2fwHaF7?pid=ImgDet&rs=1" /> </button>
      <button> <img class="images" onclick="dogclicked('dog lying on the leaves')" src="https://th.bing.com/th/id/R.c763cd87fc75ab4b95c4dcd3700ce4d7?rik=cumKSdzMPI2ktA&pid=ImgRaw&r=0" /> </button>
      <button> <img class="images" onclick="dogclicked('dog in the basket')" src="https://th.bing.com/th/id/OIP.ledaLMTX1SmKvQyp7S24hgHaEK?pid=ImgDet&rs=1" /> </button>
  </div>
</div>
  `;
}

function dogclicked(user_dog) {
    pickeddog = user_dog;
    document.getElementById("main").innerHTML = `
    <div>
    <p> pick a weather </p>
    <div class="image_container" >
        <button> <img class="images" onclick="weatherclicked('thunder')" src="https://th.bing.com/th/id/OIP.hbU_1auljCpMs2dTD0WDnwHaEK?pid=ImgDet&rs=1" /> </button>
        <button> <img class="images" onclick="weatherclicked('cloudy')" src="https://th.bing.com/th/id/R.acb26ff6a194b5a93895c92aa5486673?rik=lWB%2fBSmTQhijcw&pid=ImgRaw&r=0" /> </button>
        <button> <img class="images" onclick="weatherclicked('rainy')" src="https://th.bing.com/th/id/R.a4af5eb683985f97c86858efd7520a8b?rik=fwkiYVV%2bPRxXsQ&pid=ImgRaw&r=0" /> </button>
        <button> <img class="images" onclick="weatherclicked('sunny')" src="https://th.bing.com/th/id/R.ff1da9bd80f99309556227eefed9c3f7?rik=lwzwObamtqDVzQ&pid=ImgRaw&r=0" /> </button>
    </div>
  </div>
  `
}

function weatherclicked(user_weather) {
    pickedweather = user_weather;
    document.getElementById("main").innerHTML = ""
    if ((pickedweather == "rainy") && (pickedcolor == "grey")) {
        mood = "stressed";
        document.getElementById("main").innerHTML = `
        <p> your current mood is: stressed </p>
        <button class ="btn" onclick="rating()"> next </button>
        `;
    }
    else if ((pickedweather == "cloudy") && (pickedcolor == "blue"))  {
        mood = "sad";
        document.getElementById("main").innerHTML = `
        <p> your current mood is: sad </p>
        <button class ="centerbtn" onclick="facts()"> next </button>
        `;
    }
    else if ((pickedweather == "sunny") && (pickedcolor == "yellow")) {
        mood = "happy";
        document.getElementById("main").innerHTML = `
        <p> your current mood is: happy </p>
        <button class ="centerbtn" onclick="facts()"> next </button>
        `;
    }
    else if (pickedweather == "thunder") {
        mood = "scared";
        document.getElementById("main").innerHTML = `
        <p> your current mood is: scared for that upcoming test </p>
        <button class ="centerbtn" onclick="facts()"> next </button>
        `;
    }
    else {
        mood = "normal";
        document.getElementById("main").innerHTML = `
        <p> your current mood is: normal </p>
        <button class ="centerbtn" onclick="facts()"> next </button>
        `;
    }

}

function facts() {
    if (mood == "normal") {
    document.getElementById("main").innerHTML = `
    <p> facts about normal mood </p>
    `}
}