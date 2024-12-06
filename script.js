let msec=0;
let sec=0;
let interval;

let msec_html=document.getElementById("msec");
let sec_html=document.getElementById("sec");
const start_btn=document.getElementById("start_button");
const stop_btn=document.getElementById("stop_button");
const reset_btn=document.getElementById("reset_button");

start_btn.addEventListener('click', ()=>{
    clearInterval(interval);
    interval=setInterval(start_timer,10);
});
stop_btn.addEventListener('click', ()=>{
    clearInterval(interval);
});
reset_btn.addEventListener('click', ()=>{
    clearInterval(interval);
    msec=0;
    sec=0;
    msec_html.innerHTML="00";
    sec_html.innerHTML="00";
});

function start_timer(){
    msec+=1;
    if (msec<=9){
        msec_html.innerHTML="0"+msec;
    }
    if (msec>9){
        msec_html.innerHTML=msec;
    }
    if (msec>99){
        msec=0;
        msec_html.innerHTML="00";
        sec+=1;
        if (sec<=9){
            sec_html.innerHTML="0"+sec;
        }else{
            sec_html.innerHTML=sec;
        }
    }
}
