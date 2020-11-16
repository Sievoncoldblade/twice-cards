import React, { Component } from 'react';
import './App.css';
// import data from './json/twice-json.json'
import { CardList } from './components/card-list/card-list.component.jsx' 
import { SearchField } from './components/search-field/search-field.component';

class App extends Component {

    constructor() {
        super()

        this.state = {
           members : [],
           searchField: ''
        }
    }
    
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Sievoncoldblade/twice-api/main/twice-api.json')
        .then(response => response.json())
        .then(members => this.setState({ members : members }))
        .catch(error => console.log('something happened'))
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { members, searchField } = this.state
        const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchField.toLowerCase()))

        return (
            <div className='App'>
                <img 
                    src={process.env.PUBLIC_URL + '/twice.png'} 
                    alt='twice-logo'
                    className='twiceLogo'
                />
                <SearchField 
                    placeholder='Search member'
                    handleChange={this.handleChange}
                />
                <CardList members={ filteredMembers } />
            </div>
             
        )
    }

    
}

export default App;