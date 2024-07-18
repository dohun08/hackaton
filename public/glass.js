const serverUrl = 'http://localhost:3000/glassReq?userid=1';

const glassColor = {0:"F5F4F4",
                    1:"FFD6D6",
                    2:"F79797",
                    3:"FF6868",
                    4:"FF6868",
                    5:"DC4E4E",
                    6:"D33C3C"};

document.addEventListener('DOMContentLoaded', function() {
(async () => {
  try {
    const response = await fetch(serverUrl);
    
    const data = await response.json();
    
    const target = document.getElementById("grass-box");
    listTrans(data.glass).forEach(element => {
      target.innerHTML += `<div style="background-color:#${glassColor[element]};"></div>`
    });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
})()});