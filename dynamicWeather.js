var fontsize = 40;
var weatherData;
var api=" https://api.openweathermap.org/data/2.5/weather?q=";
var city="Chicago";
var apikey="&appid=0e4292d48f2d480453e8ced5528bd704&units=metric ";
var citySelect;
var url="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var nyapikey="&api-key=6248f78729064814b3bb6989df33f6ea";
var jay;


function setup(){
  createCanvas(1200,500);
  textSize(fontsize);
  citySelect=createSelect();
  citySelect.position(10,10);
  citySelect.option("Chicago");
  citySelect.option("New York");
  citySelect.option("Dubai");
  citySelect.option("London");
  citySelect.changed(changeCity);

//loadJSON(url,gotNewsData);
}


function changeCity(){
  var weatherURL = api + citySelect.value() + apikey;
  loadJSON(weatherURL, gotWeatherData);
}

function changeNewsLocation(){
var cityURL = url + citySelect.value() + nyapikey;
  loadJSON(cityURL,gotNewsData);
  print("hello1");
  //print(data.response.docs[0].headline.main);

}

function gotNewsData(data){
jay=data;
var articles=data.response.docs;
  print("hello2");
    print(data.response.docs[0].headline.main);
    for(var i=0; i<articles.length;i++ ){
      text(data.response.docs.headline.main);
    }
    console.log(jay);
}

function gotWeatherData(data){
  weatherData = data;
  print("hello3");
  print(weatherData.main.temp);
  console.log(weatherData);
}

function draw() {
  background(160);

  if(weatherData){
    fillTemp=weatherData.main.temp;
    textSize(30);
  textAlign(LEFT,LEFT);
    var mappedFillTemp;
    mappedFillTemp=map(fillTemp,300,300,300,300);
    fill(mappedFillTemp,3000,15500);
    ellipse(width/2,height/2,weatherData.main.temp, weatherData.main.temp);

    text(weatherData.weather[0].description,100,40);
    text("temperature",100,100,100,100);
    text(weatherData.main.temp,100,100);

  }

}
