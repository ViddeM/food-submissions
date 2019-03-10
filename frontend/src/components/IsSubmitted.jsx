import React, { Component } from 'react';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import swal from '@sweetalert/with-react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactDOM from 'react-dom';
import PrefSelection from './PrefSelection';

class IsSubmitted extends Component {

    constructor(props) {
        super(props);
    }

    handleChange(value) {
        console.log(value);
        swal.setActionValue(value.join());
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
            if (valueName) {
                return;
            }
            swal({
                title: "What are your special preferences?",
                content: <PrefSelection onChange={this.handleChange.bind(this)} />,
                buttons: {
                    confirm: "Confirm",
                    cancel: "Cancel"
                }
            }).then((valuePrefs) => {
                if (valuePrefs === null) {
                    return;
                }
                if (valuePrefs) {
                    valuePrefs = valuePrefs.split(',');
                }
                console.log(valuePrefs);
                console.log(valueName);
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
                <div class='centercolumn'>
                    <Close class='centercolumn'/>
                    User is not submitted
                    <Button onClick={this.submitBtnOnClick} color="primary">
                        Submit
                    </Button>
                </div>
            );
        }

    }
}

export default IsSubmitted;