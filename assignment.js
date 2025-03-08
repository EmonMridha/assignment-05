document.getElementById('complete').addEventListener('click', function(){
    alert('Board updated Successfully')
})
document.getElementById('complete2').addEventListener('click', function(){
    alert('Board updated Successfully')
})
document.getElementById('complete3').addEventListener('click', function(){
    alert('Board updated Successfully')
})
document.getElementById('complete4').addEventListener('click', function(){
    alert('Board updated Successfully')
})
document.getElementById('complete5').addEventListener('click', function(){
    alert('Board updated Successfully')
})
document.getElementById('complete6').addEventListener('click', function(){
    alert('Board updated Successfully')
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
    
})
