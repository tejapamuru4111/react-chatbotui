import { Component } from 'react'
import {format} from 'date-fns'
import EmojiPicker from 'emoji-picker-react';
import {BsPeople, BsEmojiLaughing} from 'react-icons/bs'

import Message from '../Message'
import './index.css'

const channelList = [
    {id : "POLAND", name: "Poland Office", msgList: [{user: "Alan", msg: "Hii everyone!", sendDate: '12 Jan 2023 07:12 am'},{user: "Bob", msg: "Hello Good Morning", sendDate: '12 Jan 2023 07:12 am'}]},
    {id : "INTRO", name: "Introduction", msgList: [{user: "Carol", msg: "Hey colleagues",sendDate: '12 Jan 2023 07:12 am'},{user: "Alan", msg: "Hello !",sendDate: '12 Jan 2023 07:12 am'}]},
    {id : "INDIA", name: "India Office", msgList: [{user: "Dean", msg: "Welcome to India Office Group",sendDate: '12 Jan 2023 07:12 am'},{user: "Elin", msg: "hey everyone..",sendDate: '12 Jan 2023 07:12 am'}]}
]

class Chatbox extends Component {
    state = {
        inputMessage : "",
        messagesList : channelList,
        toogleEmoji: false
    }

    onChangeInput = (event) => {
        this.setState({inputMessage: event.target.value})
    }

    onEmojiClick = ( emojiObject) => {
        this.setState((prevState) => ({inputMessage: prevState.inputMessage + emojiObject.emoji}))
    }

    onClickSend = () => {
        const {inputMessage, messagesList} = this.state
        const {active} = this.props
        const {user} = this.props
        const today = new Date()
        const date = format(today, 'd MMM Y hh:mm aaa')
        const msgObj = {
            user: user,
            msg:inputMessage,
            sendDate : date,
        }

        const newList = messagesList.map(channel => {
            if(channel.id === active) {
                return ({
                    id : channel.id,
                    name : channel.name,
                    msgList : [...channel.msgList, msgObj]
                })
            }
            return channel
        })
        this.setState({messagesList: newList, inputMessage: ''})
    }

    onClickEmoji = () => {
        this.setState((prevState) => ({toogleEmoji: !prevState.toogleEmoji}))
    }

    render () {

        const {inputMessage, messagesList, toogleEmoji} = this.state
        const {active} = this.props
        const channelMsgs = messagesList.filter(channel => channel.id === active)
        
        return (
            <>
                <div className='chat-channel-header-bg-card'>
                    <div className='chat-channel-title-card'>
                        <h1 className='chat-channel-title'>{channelMsgs[0].name}</h1>
                        <p className='chat-channel-description'>This Channel is for Company wide Chatter</p>
                    </div>
                    <div className='chat-channel-members-card'>
                        <p className='chat-channel-members'>3 | 100</p>
                        <BsPeople />
                    </div>
                </div>
                <hr className='chat-channel-devider' />
                
                    <ul className='chat-channel-message-container'>
                        {channelMsgs[0].msgList.map(item => (<Message message={item} key={item.msg} />))}
                    </ul>
                <div className='chat-channel-msg-send-card'>
                    <div className='chat-channel-input-msg-card'>
                        <input className='chat-channel-input-text' type="text" value={inputMessage} onChange={this.onChangeInput} placeholder='Type Message' />
                        <button className='chat-channel-emoji-button' onClick={this.onClickEmoji}><BsEmojiLaughing /></button>
                        {toogleEmoji && <EmojiPicker theme='dark' onEmojiClick={this.onEmojiClick} />}
                    </div>
                    <button className='chat-channel-send-button' type="button" onClick={this.onClickSend}>Send</button>
                </div>
            </>
        )
    }

}
export default Chatbox