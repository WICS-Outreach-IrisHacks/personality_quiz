let pickedcolor;
let pickedanimal;
let pickedweather;
let personality;


function wipe() {
    document.getElementById("main").innerHTML = `
    <div id="main">
      <p> pick a color </p>
      <div class="text_container" >
          <button class="btn blue", onclick="colorclicked('blue')"> blue </button>
          <button class="btn purple", onclick="colorclicked('purple')"> purple </button>
          <button class="btn green", onclick="colorclicked('green')"> green </button>
          <button class="btn yellow", onclick="colorclicked('yellow')"> yellow </button>
          <button class="btn orange", onclick="colorclicked('orange')"> orange </button>
          <button class="btn red", onclick="colorclicked('red')"> red </button>
      </div>
    </div>`;

}
function colorclicked(user_color) {
  pickedcolor = user_color;
  document.getElementById("main").innerHTML = `
  <div>
  <p> pick a picture </p>
  <div class="container" >
      <button class="imagebtn"> <img class="images" onclick="dogclicked('dog on the floor')" src="https://th.bing.com/th/id/OIP.fqmo4l7j2UR8-WorpH1MOgHaFj?pid=ImgDet&rs=1" /> </button>
      <button class="imagebtn"> <img class="images" onclick="dogclicked('dog holding a rose')" src="https://th.bing.com/th/id/OIP.cFbSMhjRMOmNaJsl4nI2fwHaF7?pid=ImgDet&rs=1" /> </button>
      <button class="imagebtn"> <img class="images" onclick="dogclicked('dog lying on the leaves')" src="https://th.bing.com/th/id/R.c763cd87fc75ab4b95c4dcd3700ce4d7?rik=cumKSdzMPI2ktA&pid=ImgRaw&r=0" /> </button>
      <button class="imagebtn"> <img class="images" onclick="dogclicked('dog in the basket')" src="https://th.bing.com/th/id/OIP.ledaLMTX1SmKvQyp7S24hgHaEK?pid=ImgDet&rs=1" /> </button>
  </div>
</div>
  `;
}

function dogclicked(user_dog) {
    pickeddog = user_dog;
    document.getElementById("main").innerHTML = `
    <div>
    <p> pick a weather </p>
    <div class="container" >
        <button class="imagebtn"> <img class="images" onclick="weatherclicked('thunder')" src="https://th.bing.com/th/id/OIP.hbU_1auljCpMs2dTD0WDnwHaEK?pid=ImgDet&rs=1" /> </button>
        <button class="imagebtn"> <img class="images" onclick="weatherclicked('cloudy')" src="https://th.bing.com/th/id/R.acb26ff6a194b5a93895c92aa5486673?rik=lWB%2fBSmTQhijcw&pid=ImgRaw&r=0" /> </button>
        <button class="imagebtn"> <img class="images" onclick="weatherclicked('rainy')" src="https://th.bing.com/th/id/R.a4af5eb683985f97c86858efd7520a8b?rik=fwkiYVV%2bPRxXsQ&pid=ImgRaw&r=0" /> </button>
        <button class="imagebtn"> <img class="images" onclick="weatherclicked('sunny')" src="https://th.bing.com/th/id/R.ff1da9bd80f99309556227eefed9c3f7?rik=lwzwObamtqDVzQ&pid=ImgRaw&r=0" /> </button>
    </div>
  </div>
  `
}

function weatherclicked(user_weather) {
    pickedweather = user_weather;
    document.getElementById("main").innerHTML = `
    <div>
    <p> pick a house </p>
    <div class="container" >
        <button class="imagebtn"> <img class="images" onclick="houseclicked('fancy')" src="https://s.hdnux.com/photos/01/32/03/07/23605740/3/1200x0.jpg" /> </button>
        <button class="imagebtn"> <img class="images" onclick="houseclicked('mansion')" src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_24/1448814/how-size-doesnt-make-you-happier-today-main-190614.jpg" /> </button>
        <button class="imagebtn"> <img class="images" onclick="houseclicked('modern')" src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" /> </button>
        <button class="imagebtn"> <img class="images" onclick="houseclicked('normal')" src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg" /> </button>
    </div>
  </div>
  `;
}

function houseclicked(user_house) {
    pickedhouse = user_house;
    document.getElementById("main").innerHTML = `
    <div>
    <p> pick an activity </p>
    <div class="container" >
        <button class="imagebtn"> <img class="images" onclick="activityclicked('books')" src="https://media.wired.com/photos/5fd2c29c2a4ddaf3b6389694/191:100/w_2580,c_limit/Gear-Books-Roundup-671406905.jpg" /> </button>
        <button class="imagebtn"> <img class="images" onclick="activityclicked('hike')" src="https://bearfoottheory.com/wp-content/uploads/2020/04/Idaho_Stanley_Hell-Roaring-Creek-Trail-14-Hiking-Gear.jpeg" /> </button>
        <button class="imagebtn"> <img class="images" onclick="activityclicked('friends')" src="https://wp.missmalini.com/wp-content/uploads/2018/12/Group-Of-Friends-Image-Courtesy-Shuuterstock.jpg" /> </button>
        <button class="imagebtn"> <img class="images" onclick="activityclicked('party')" src="https://img.freepik.com/free-vector/silhouette-party-audience_1048-9714.jpg?w=2000" /> </button>
    </div>
  </div>
  `;
}
  function activityclicked(user_activity) {
    pickedactivity = user_activity;
    document.getElementById("main").innerHTML = "";
    if (((pickedcolor == "blue") || (pickedcolor == "purple") || (pickedcolor == "green")) && ((pickedweather == "rainy") || (pickedweather == "cloudy")) && (pickedhouse == "normal") && ((pickedactivity == "books") || (pickedactivity == "hike"))) {
      personality = "introvert";
      document.getElementById("main").innerHTML = `
      <p> you are an introvert </p>
      <button class ="centerbtn" onclick="conclusion()"> next </button>
        `;
    }
    else if (((pickedcolor == "yellow") || (pickedcolor == "orange") || (pickedcolor == "red")) && ((pickedweather == "thunder") || (pickedweather == "sunny")) && ((pickedhouse == "fancy") || (pickedhouse == "mansion")) && ((pickedactivity == "friends") || (pickedactivity == "party"))) {
      personality = "extrovert";
      document.getElementById("main").innerHTML = `
      <p> you are an extrovert </p>
      <button class ="centerbtn" onclick="conclusion()"> next </button>
        `;
    }
    else {
      personality = "both";
      document.getElementById("main").innerHTML = `
      <p> you are sometimes an extrovert and sometimes an introvert </p>
      <button class ="centerbtn" onclick="conclusion()"> next </button>
        `;
    }
    
  }

  function conclusion() {
    if (personality == "introvert"){
      document.getElementById("main").innerHTML = `
      <p> here are some careers that you may want to go into: </p>
      <p> - social workers </p>
      <p> - physician assistant </p>
      <p> - data scientist </p>
      <p> - engineer </p>
      <p> - software developer </p>
        `
    }
    else if (personality == "extrovert") {
      document.getElementById("main").innerHTML = `
      <p> here are some careers that you may want to go into: </p>
      <p> - general manager </p>
      <p> - sales representative </p>
      <p> - financial advisor </p>
      <p> - lawyer </p>
      <p> - sales manager </p>
        `
    }
    else {
      document.getElementById("main").innerHTML = `
      <p> anything is good for you </p>
        `
    }

  } 