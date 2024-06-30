const image = document.querySelector('img'), input = document.querySelector('input');

input.addEventListener("change", () => {image.src=URL.createObjectURL(input.files[0]);});


const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // handle midnight
document.getElementById('liveTime').innerHTML=(`${hours}:${minutes} ${ampm}`);

