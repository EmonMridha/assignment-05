document.getElementById('complete').addEventListener('click', function(){
    alert('Board updated Successfully');
    const ol =document.getElementById('parent');
    const p = document.createElement('p');
    p.innerText = "You have completed the task Fix Mobile Button Issue at 1:26:53 AM";
    ol.appendChild(p);
    this.disabled = true;
    this.style.backgroundColor= 'gray';
    this.style.color = 'white';
})
document.getElementById('complete2').addEventListener('click', function(){
    alert('Board updated Successfully')
    const ol =document.getElementById('parent');
    const p = document.createElement('p');
    p.innerText = "You have completed the task Add Pay Success Modal at 1:26:53 AM";
    ol.appendChild(p);
    this.disabled = true;
    this.style.backgroundColor= 'gray';
    this.style.color = 'white';
})
document.getElementById('complete3').addEventListener('click', function(){
    alert('Board updated Successfully')
    const ol =document.getElementById('parent');
    const p = document.createElement('p');
    p.innerText = "You have completed the task Add new reaction at 1:26:53 AM";
    ol.appendChild(p);
    this.disabled = true;
    this.style.backgroundColor= 'gray';
    this.style.color = 'white';
})
document.getElementById('complete4').addEventListener('click', function(){
    alert('Board updated Successfully')
    const ol =document.getElementById('parent');
    const p = document.createElement('p');
    p.innerText = "You have completed the task Fix Video Loading Issue at 1:26:53 AM";
    ol.appendChild(p);
    this.disabled = true;
    this.style.backgroundColor= 'gray';
    this.style.color = 'white';
})
document.getElementById('complete5').addEventListener('click', function(){
    alert('Board updated Successfully')
    const ol =document.getElementById('parent');
    const p = document.createElement('p');
    p.innerText = "You have completed the task Integrate AI search at 1:26:53 AM";
    ol.appendChild(p);
    this.disabled = true;
    this.style.backgroundColor= 'gray';
    this.style.color = 'white';
})
document.getElementById('complete6').addEventListener('click', function(){
    alert('Board updated Successfully')
    const ol =document.getElementById('parent');
    const p = document.createElement('p');
    p.innerText = "You have completed the task Review Ami Probashi Site at 1:26:53 AM";
    ol.appendChild(p);
    this.disabled = true;
    this.style.backgroundColor= 'gray';
    this.style.color = 'white';
    alert('congrats!!! You have completed all the current task')
})

const var1 = document.getElementById('number');
const  var2 = document.getElementById('complete');

var2.addEventListener('click', function(){
    let presentNumber = parseInt(var1.innerText);
    var1.innerText = presentNumber - 1;
})

const var3 = document.getElementById('number');
const var4 = document.getElementById('complete2');

var4.addEventListener('click', function(){
    let presentNumber = parseInt(var3.innerText);
    var3.innerText = presentNumber - 1;
})

const var5 = document.getElementById('number');
const var6 = document.getElementById('complete3');

var6.addEventListener('click', function(){
    let presentNumber= parseInt(var5.innerText);
    var5.innerText= presentNumber - 1;
})

const var7= document.getElementById('complete4');
var7.addEventListener('click',function(){
    let presentNumber = parseInt(var1.innerText);
    var1.innerText=presentNumber - 1;
})

const var8 = document.getElementById('complete5');
var8.addEventListener('click',function(){
    let presentNumber= parseInt(var1.innerText);
    var1.innerText=presentNumber - 1;
})

const var9= document.getElementById('complete6');
var9.addEventListener('click',function(){
    let presentNumber = parseInt(var1.innerText);
    var1.innerText=presentNumber - 1;
})

let veri1 = document.getElementById('number2');

var2.addEventListener('click',function(){
    let presentNumber2 = parseInt(veri1.innerText);
    veri1.innerText= presentNumber2 +1;
})

var4.addEventListener('click',function(){
    let presentNumber2 = parseInt(veri1.innerText);
    veri1.innerText= presentNumber2 +1;
})

var6.addEventListener('click',function(){
    let presentNumber2 = parseInt(veri1.innerText);
    veri1.innerText= presentNumber2 +1;
})

var7.addEventListener('click',function(){
    let presentNumber2 = parseInt(veri1.innerText);
    veri1.innerText= presentNumber2 +1;
})

var8.addEventListener('click',function(){
    let presentNumber2 = parseInt(veri1.innerText);
    veri1.innerText= presentNumber2 +1;
})

var9.addEventListener('click',function(){
    let presentNumber2 = parseInt(veri1.innerText);
    veri1.innerText= presentNumber2 +1;
})

document.getElementById('clear-btn').addEventListener('click', function(){
    const hey = document.getElementById('parent');
    hey.innerHTML = '';
})

document.getElementById('Discover').addEventListener('click',function(){
    window.location.href='index2.html'
})

document.getElementById('Discover').style.cursor='pointer';

document.getElementById('color-btn').addEventListener('click',function(){
    document.body.style.backgroundColor='#' +Math.floor(Math.random()*16777215).toString(16);
});

let theDate = new Date();

let date2 = theDate.toLocaleDateString();

document.getElementById('the-date').textContent = date2;







