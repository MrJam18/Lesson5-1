import { changeTimeFormat } from "./utils/changeTimeFormat";

const Messages = (props) => {
    console.log(props);

    return (
        <>
        <div className='messages'>
            {props.messages.map((message)=> message.text && 
            <div className={message.author !== props.chatAuthor ? 'message message-author-me' : 'message message-author-chatUser'} key={message.id}>
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