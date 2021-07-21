import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
        height="100vh"
        projectID="
        2cafad9b-eb65-4198-9207-f7b42bc49ab7"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App