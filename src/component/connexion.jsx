import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Connexion extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            pseudo : "",
            goToChat : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        const pseudo = event.target.value;
        this.setState( {
            pseudo : pseudo
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            goToChat : true
        });
    }
    render() {
        if (this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }
        
        return (
            <div className="connexionBox">
            <form className="connexion" onSubmit={this.handleSubmit}>
            <input 
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder="Pseudo"
            type="text"
            required/>
            <button type="submit">Connexion</button>
            </form>
            </div>
            )
        }
    }
    
    export default Connexion