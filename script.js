const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')
const longitude = document.querySelector('.longitude')
const latitude = document.querySelector('.latitude')

navigator.geolocation.watchPosition((data) =>{
    console.log(data);
    speed.textContent = Math.floor(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    longitude.textContent = data.coords.longitude;
    latitude.textContent = data.coords.latitude;

}, (err) =>{
    console.log(err);
    alert("Please grant permission access your location to continue") 
})
