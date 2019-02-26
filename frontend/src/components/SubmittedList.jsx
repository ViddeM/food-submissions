import React, { Component } from 'react';
import UserListItem from './UserListItem';

class SubmittedList extends Component {


    constructor(props) {
        super(props);
    }

    render() {

        return(
        
        <div>
            {this.props.users.map(x =>
                <UserListItem key = {x.name} name = {x.name} prefs = {x.prefs} />
            )}
        </div>);
    }
}

export default SubmittedList;