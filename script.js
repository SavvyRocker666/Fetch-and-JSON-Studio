window.addEventListener("load", function (){
 this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response){
    response.json().then(function(json) {
       console.log(json);
       const div= document.getElementById("container");
       let counter = 0;
       for (let i=0; i < json.length; i++){
          div.innerHTML+= `
          <div class ="astronaut">
          <div class ="bio">
          <h3> `
       }
    }
 }
}