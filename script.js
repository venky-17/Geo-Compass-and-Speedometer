const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition((data) =>{
    console.log(data);
    speed.textContent = Math.floor(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
   

}, (err) =>{
    console.log(err);
    alert("Please grant permission access your location to continue") 
})
