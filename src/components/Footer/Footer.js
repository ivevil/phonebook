import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            number: ""
        }

        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
    }

    changeFirstName(event){
        this.setState({ firstname: event.target.value
        });
    }

    changeLastName(event){
        this.setState({ lastname: event.target.value
        });
    }

    changeNumber(event){
        this.setState({ number: event.target.value
        });
    }

    resetFields(event){
        this.setState({
            firstname : '',
            lastname : '',
            number : ''
        });
    }


    render() {
        return (<footer>
            <input value={this.state.firstname} onChange={this.changeFirstName} id="firstname" type="text" placeholder="First Name" />
            <input value={this.state.lastname} onChange={this.changeLastName} id="lastname" type="text" placeholder="Last Name" />
            <input maxLength="14" value={this.state.number} onChange={this.changeNumber} id="number" type="text" placeholder="Number" />
            <span id="add-btn" onClick={(e) => {
              this.props.createItem(this.state.firstname, this.state.lastname, this.state.number);
              this.resetFields();
            }}>Add</span>
        </footer>)

    }
}

export default Footer;
