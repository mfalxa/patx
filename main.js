function displayUL(event) {
    document.getElementById(currentDir).src = './src/sky/'+currentDir+'.png';
    for (var i=0; i < 49; i++) {
        document.getElementById(i).remove();
        var img = document.createElement('img');
        img.id = i;
        img.src = './src/'+event.target.id+'/ul' + i +'.png';
        src.appendChild(img);
        }
    currentDir = event.target.id;
    document.getElementById(currentDir).src = './src/sky/s'+currentDir+'.png';
}

var currentDir = 'UL_0'
var src = document.getElementById('plot');
for (var i=0; i < 49; i++) {
    var img = document.createElement('img');
    img.id = i;
    img.src = './src/UL_0/ul' + i +'.png';
    src.appendChild(img);
    }

var corner = document.getElementById('corner');
var header = document.getElementById('header')
src.addEventListener("mouseenter", function(event) {
    corner.src = './src/'+currentDir+'/corner/corner' + event.target.id +'.png';
    header.innerHTML = 'f = 1e' + data['f'][event.target.id].toFixed(2) + ' Hz || log_ul = ' + data[currentDir]['ul_'+event.target.id].toFixed(2) + ' || log_median = ' + data[currentDir]['medians_'+event.target.id].toFixed(2)
    }, true);

document.getElementById('UL_0').addEventListener("click", displayUL);
document.getElementById('UL_1').addEventListener("click", displayUL);
document.getElementById('UL_2').addEventListener("click", displayUL);
document.getElementById('UL_3').addEventListener("click", displayUL);
document.getElementById('UL_4').addEventListener("click", displayUL);
document.getElementById('UL_5').addEventListener("click", displayUL);
document.getElementById('UL_6').addEventListener("click", displayUL);
document.getElementById('UL_7').addEventListener("click", displayUL);
document.getElementById('UL_8').addEventListener("click", displayUL);
document.getElementById('UL_9').addEventListener("click", displayUL);
document.getElementById('UL_10').addEventListener("click", displayUL);
document.getElementById('UL_11').addEventListener("click", displayUL);