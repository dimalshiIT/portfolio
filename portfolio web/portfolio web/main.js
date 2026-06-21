// JS: calculate offset for percentage
const circumference = 2 * Math.PI * 80; // r=80
const percent = 60;
const offset = circumference * (1 - percent / 100); 
progressCircle.style.strokeDashoffset = offset;