import React, { Component } from 'react';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import swal from '@sweetalert/with-react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactDOM from 'react-dom';
import PrefSelection from './PrefSelection';


//const MySwal = withReactContent(Swal);
//const SweetAlert = require('react-bootstrap-sweetalert');


class IsSubmitted extends Component {

    constructor(props) {
        super(props);
    }

    handleChange(value){
        console.log(value);
        swal.setActionValue(value);
    }


    submitBtnOnClick = () => {
        swal({
            title: "What is your nick?",
            content: "input",
            buttons: {
                confirm: "Confirm",
                cancel: "Cancel"
            }
        }).then((valueName) => {
            console.log(valueName);
            swal({
                title: "What are your special preferences?",
                content: <PrefSelection onChange={this.handleChange.bind(this)}/>,
                buttons: {
                    confirm: "Confirm",
                    cancel: "Cancel"
                }
            }).then((valuePrefs) => {
                console.log(valuePrefs);
            })
        })
    }

    render() {

        if (this.props.isSubmitted) {
            return (
                <div>
                    <Check />
                    User is submitted
                </div>
            );
        } else {
            return (
                <div>
                    <Close />
                    User is not submitted
                    <Button onClick={this.submitBtnOnClick} color="primary">
                        Submit
                    </Button>
                    {/*<SweetAlert
                        title={<span>HTML <small>Title</small>!</span>}
                        onConfirm={this.hideAlert}
                    >
                        <span>A custom <span style={{ color: '#F8BB86' }}>html</span> message.</span>
                    </SweetAlert>*/}
                </div>
            );
        }

    }
}

export default IsSubmitted;