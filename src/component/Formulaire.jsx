 import React, { Component } from 'react'

class Formulaire extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            message : "",
            length : this.props.length
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.createMessage = this.createMessage.bind(this);
    }
    createMessage() {
        const {addMessage, pseudo, length } = this.props
        const message = {
            pseudo : pseudo,
            message : this.state.message,
        }
        addMessage(message);
        // Reset //

        this.setState({
            message : "",
            length : length
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.createMessage();
    }
    handleChange(event) {
        const message = event.target.value;
        const messageLength = this.props.length - message.length
        this.setState({
            message : message,
            length : messageLength
        })
    }
    handleKeyUp(event) {
        if (event.key === "Enter") {
            this.createMessage();
        }
        
    }
    render() {
        return (
            <form
            className="form"
            onSubmit={this.handleSubmit}>
            <textarea 
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            value={this.state.message}
            maxLength={this.props.length}
            required>
            </textarea>
            <div className="info">
            {this.state.length}
            </div>
            <button type="submit">
            Envoyer
            </button>
            </form>
            )
        }
    }
    
    export default Formulaire
