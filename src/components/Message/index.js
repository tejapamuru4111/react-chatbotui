import './index.css'

const Message = (props) => {
    const {message} = props
    console.log(message)
    const {user, msg, sendDate} = message

    return (
        <li className='user-chat-message-card'>
            <p className='user-chat-dp'>{user[0]}</p>
            <div className='user-chat-details-card'>
                <div className='user-chat-card'>
                    <h1 className='user-chat-username'>{user}</h1>
                    <p className='user-chat-msg-send-date'>{sendDate}</p>
                </div>
                <p className='user-chat-usermessage'>{msg}</p>
            </div>
        </li>
)
}

export default Message