import {Component} from 'react'
import {BsPlusCircle} from 'react-icons/bs'

import Chatbox from '../Chatbox'

import './index.css'

const userList = ["Alan", "Bob", "Carol", "Dean", "Elin"]
const user = Math.floor(Math.random() * userList.length)
const channelName = [{id : "POLAND", name : "Poland Office"}, {id : "INTRO", name : "Introduction"}, {id : "INDIA", name : "India Office"}]

class Home extends Component {
    state = {
        activeTab : "POLAND"
    }

    onClickChannel = (event) => {
        this.setState({activeTab : event.target.id})
    }

    render() {
        const {activeTab} = this.state
        return (
            <div className='chat-app-home-bg-container'>
                <div className='home-menu-container'>
                    <div className='home-menu-user-bg-card'>
                        <p className='home-menu-user-initial'>{userList[user][0]}</p>
                        <div className='home-menu-user-name-card'>
                            <h1 className='home-menu-user-name'>{userList[user]}</h1>
                            <p className='home-menu-user-proffesion'>Reaserch Nurse</p>
                        </div>
                    </div>
                    <div className='home-menu-conv-title-card'>
                        <p className='home-menu-conv-title'>Conversations</p>
                        <BsPlusCircle  className='home-menu-conv-addsymbol'/>
                    </div>
                        <ul className='home-menu-channels-bg-card'>
                            {channelName.map(channel => (
                                <li className={`home-menu-channel-card ${activeTab === channel.id ? 'active-bg' : '' }`}id={channel.id} onClick={this.onClickChannel} key={channel.id} >
                                    <p className='home-menu-channel-dp' >#</p>
                                    <p className='home-menu-channel-name' >{channel.name}</p>
                                </li>
                            ))}
                        </ul>
                </div>
                <div className='home-chatbox-bg-container'>
                    {<Chatbox user = {userList[user]} active = {activeTab} />}
                </div>
            </div>
        )
    }
}

export default Home
