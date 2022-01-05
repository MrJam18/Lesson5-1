const Messages = (props) => {
  const changeTimeFormat = (time) =>{  
    let t = new Date(time);
    let hours = t.getUTCHours()+4;
    let minutes = t.getUTCMinutes();
    if (hours < 10) hours = '0'+ hours;
    if (minutes < 10) minutes = '0' + minutes;
  return `${hours}:${minutes}`;
    }
    
    return (
        <>
        <div className='messages'>
            {props.messages.map((message)=> <div className={message.author !== props.chatAuthor ? 'message message-author-me' : 'message message-author-chatUser'} key={message.id}>
                <div className={"message-header"}> {message.author} <span className="message__time">{changeTimeFormat(message.id)}</span></div>
                {message.text}
            </div>

            )}
          </div>
          <div className="senderPlace" >
        </div>
        </>
    );
};

export default Messages;