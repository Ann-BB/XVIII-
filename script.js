
let a=document.createElement('a');
a.setAttribute ('href', 'https://github.com/Ann-BB');
a.setAttribute('target', '_blank');
a.textContent='Hello';

document.querySelectorAll('.wraper')[0].appendChild(a)

document.querySelectorAll('.wraper').forEach((item) => {
    let p = document.createElement('p');
    p.classList.add('paragraph');
    p.textContent = 'dom';
    p.style.color = 'red';

    item.appendChild(p);
})
document.getElementById('wraper-test').innerText='word';
document.getElementById('send').addEventListener('click', function() {
    alert('Hello');
})
document.getElementById('send').addEventListener('mouseover',function(){
    send.style.backgroundColor = 'red';
})


document.getElementById('send').addEventListener('mouseout',function(){
    send.style.color = 'blue';
})

document.getElementById('send').addEventListener('mousemove',function(){
    console.log('move');
})
document.getElementById('send').addEventListener('click',function(){
    document.body.classList.toggle('new');
})
document.getElementById('username').addEventListener('focus', function(){
    console.log('input is focused');
})
document.getElementById('email').addEventListener('keydown', function(event){
    if(event.which===13){
        alert('you pressed enter');
    }
    else{
        console.log('error');
    }
})
