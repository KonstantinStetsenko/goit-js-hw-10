import{i as e,f as h}from"./vendor-BbSUbo7J.js";const n=document.querySelector("#datetime-picker"),u=document.querySelector("button[data-start]"),f=document.querySelector("span[data-days]"),y=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");u.addEventListener("click",b);let c=null,i=null;function b(){i=setInterval(q,1e3)}function q(){const t=c-new Date;if(t<=0){clearInterval(i),n.disabled=!1,e.success({message:"Time is up!",position:"topRight"});return}const{days:o,hours:s,minutes:a,seconds:r}=D(t);f.textContent=String(o).padStart(2,0),y.textContent=String(s).padStart(2,0),S.textContent=String(a).padStart(2,0),g.textContent=String(r).padStart(2,0),n.setAttribute("disabled",!0)}function D(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:p}}const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=new Date){e.error({message:"Please choose a date in the future",position:"topRight"});return}c=t[0],u.disabled=!1,e.success({message:"Date has been successfully selected!",position:"topRight"})}};h(n,M);console.log("hrhg");
//# sourceMappingURL=1-timer-Caa9hrNH.js.map
