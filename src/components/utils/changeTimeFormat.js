export const changeTimeFormat = (time) =>{  
    let t = new Date(time);
    let hours = t.getUTCHours()+4;
    let minutes = t.getUTCMinutes();
    if (hours < 10) hours = '0'+ hours;
    if (minutes < 10) minutes = '0' + minutes;
  return `${hours}:${minutes}`;
    }