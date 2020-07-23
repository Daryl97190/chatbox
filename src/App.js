import React, { Component, createRef } from 'react'
import Formulaire from "./component/Formulaire"
import Messages from "./component/Message"
import './App.css'
import './animation.css'



// firebase //
import base from "./base"

// Transition //

import {CSSTransition, TransitionGroup} from 'react-transition-group'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      messages : {},
      pseudo : this.props.match.params.pseudo,
    }
    this.messageRef = createRef()
    this.addMessage = this.addMessage.bind(this);
    this.isUser = this.isUser.bind(this);
  }
  
  componentDidMount() {
    
    base.syncState("/", {
      context : this,
      state : 'messages'
    })
    
  }
  componentDidUpdate() {
    const ref = this.messageRef.current;
    ref.scrollTop = ref.scrollHeight
  }
  addMessage(message) {
    const MESSAGES = {...this.state.messages};
    MESSAGES[`message-${Date.now()}`] = message;
    Object
    .keys(MESSAGES)
    .slice(0, -8)
    .forEach(key => {
      MESSAGES[key] = null
    })
    this.setState({
      messages : MESSAGES
    })
  }
  isUser = (pseudo) => (
    pseudo === this.state.pseudo
    )
    
    render () {
      const messages = Object.keys(this.state.messages).map( (key) => (
        
        <CSSTransition
        timeout={500}
        key={key}
        classNames='fade'
        >
        <Messages
        key={key}
        message={this.state.messages[key].message}
        pseudo={this.state.messages[key].pseudo}
        isUser={this.isUser}/>
        </CSSTransition>
        ))
        return (
          <div className='box' >
          <div>
          <div className="messages" 
          ref={this.messageRef}>
          <TransitionGroup className="message">
          {messages}
          </TransitionGroup>
          </div>
          <Formulaire
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage} />
          </div>
          </div>
          )
        }
      }
      
      export default App
