let count=0;
const counterE1= document.getElementById('counter');

document.getElementById('textinc').addEventListener('click',function() {
    count= count + 1;
    counterE1.textContent = count;
});

document.getElementById('textdec').addEventListener('click', function(){
    if (count > 0) {
        count= count -1;
        counterE1.textContent=count;
    }
});

document.getElementById('textres').addEventListener('click',function(){
    count=0;
    counterE1.textContent=count;
});

document.getElementById('texttt').addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');
});

