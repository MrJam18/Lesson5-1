
const Message = (props) => {
//   let time;
//   const checkTime =() =>{  
//   let t = new Date();
//   let timeArray = [];
// timeArray.push(t.getUTCHours()+4);
// timeArray.push(t.getUTCMinutes());
// timeArray.push(t.getUTCSeconds());
// time = `${timeArray[0]}:${timeArray[1]}:${timeArray[2]}`;
//   }
//   checkTime();
    return (
        <div className='messages'>
          <div className="message" >
          {/* <div className="message-header">Я <span className="message-time">{time}</span></div> */}
           {props.message}  </div>
        </div>
    );
};

export default Message;