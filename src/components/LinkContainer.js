import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
            favLinks: []
        }
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */

    //    this.setState({ favLinks: this.state.favLinks.splice(index, 1) })
        console.log('removing link')
        this.setState({ favLinks: this.state.favLinks.filter(i => this.state.favLinks.indexOf(i) != index )})
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState({ favLinks: this.state.favLinks.concat(favLink) })
       console.log('I am the favorite links')
       console.log(this.state.favLinks)
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                    <Table linkData={this.state.favLinks} removeLink={this.removeCharacter}/>            
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                    <Form onSubmit={this.handleSubmit}  />
            </div>
        );
    }
}

export default LinkContainer;