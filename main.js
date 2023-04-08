




document.getElementById("searchBar").addEventListener("keydown" , function (e) {
    if(e.key == "Enter") {


        let cityName   = searchBar.value ; 

fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=cd1f607a62c16feeae59b268f8a30dcb").then(response => {
    return response.json() ;
}).then(result => {
    console.log(result.weather[0].main) ;
    console.log(result) 
    console.log(result.main.temp)  ;

    // kelimeyi bul ve sil
    let str = result.name;
    str = str.replace("Province", "");

    result.weather[0].main = result.weather[0].main.replace("Clouds" , "Bulutlu")  ; 
    result.weather[0].main = result.weather[0].main.replace("Rain" , "Yağmurlu")  ; 
    result.weather[0].main = result.weather[0].main.replace("Clear" , "Açık hava")  ; 
    result.weather[0].main = result.weather[0].main.replace("Sunny" , "Güneşli")  ;

    document.getElementById("temp").innerHTML = result.main.temp + "°C" ; 
    document.getElementById("city").innerHTML = str + ", " + result.sys.country; 
    document.getElementById("case").innerHTML =  result.weather[0].main ; 
    document.getElementById("mintemp").innerHTML =  "Minimum sıcaklık : "+result.main.temp_min  + "°C"; 
    document.getElementById("maxtemp").innerHTML =  "Maximum sıcaklık : "+result.main.temp_max  + "°C";


})




    }
} )


function istanbul() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=cd1f607a62c16feeae59b268f8a30dcb").then(response => {
        return response.json() ; 
    }).then(result => {


        result.weather[0].main = result.weather[0].main.replace("Clouds" , "Bulutlu")  ; 
    result.weather[0].main = result.weather[0].main.replace("Rain" , "Yağmurlu")  ; 
    result.weather[0].main = result.weather[0].main.replace("Clear" , "Açık hava")  ; 
    result.weather[0].main = result.weather[0].main.replace("Sunny" , "Güneşli")  ;

    
        document.getElementById("temp").innerHTML = result.main.temp + "°C" ; 
        document.getElementById("case").innerHTML =  result.weather[0].main ; 
    document.getElementById("mintemp").innerHTML =  "Minimum sıcaklık : "+result.main.temp_min  + "°C"; 
    document.getElementById("maxtemp").innerHTML =  "Maximum sıcaklık : "+result.main.temp_max  + "°C";

    })

}
