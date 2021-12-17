
const Messages = (props) => {
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
            {props.messages.map((message)=> <div className={'message ' + 'message-author-' + message.author}>
                <div className={"message-header"}> {message.author} </div>
                {message.text}
            </div>

            )}
          <div className="message" >
          </div>
        </div>
    );
};

export default Messages;