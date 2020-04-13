import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom"
import './cat.css'

class NewCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            success: false,
            form:{
                name: '',
                age: '',
                enjoys: ''
            }
        }
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleCreateCat (this.state.form)
        this.setState({
            success: true,
            form:{
                name: '',
                age: '',
                enjoys: ''
            }
        })
    }

    render(){
        return(
            <>
            <Router>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name" id="name">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                onChange={ this.handleChange }
                                value={ this.state.form.name }
                            />
                            <Label htmlFor="name" id="age">Age</Label>
                            <Input
                                type="text"
                                name="age"
                                onChange={ this.handleChange }
                                value={ this.state.form.age }
                            />
                            <Label htmlFor="name" id="enjoys">Enjoys</Label>
                            <Input
                                type="text"
                                name="enjoys"
                                onChange={ this.handleChange }
                                value={ this.state.form.enjoys }
                            />
                            <Link to="/catindex">
                                <Button
                                    name="submit"
                                    id="submit"
                                    onClick={ this.handleSubmit }
                                >
                                    Create a New Profile
                                </Button>
                                { this.state.success && <Redirect to="/catindex"/> }
                            </Link> 
                    </FormGroup>
                </Form>
                </Router>
            </>
        )
    }
}

export default NewCat;