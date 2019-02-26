import React, { Component } from 'react';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import SweetAlert from 'react-bootstrap-sweetalert';
import withReactContent from 'sweetalert2-react-content';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactDOM from 'react-dom';
import PrefSelection from './PrefSelection';


const MySwal = withReactContent(Swal);
//const SweetAlert = require('react-bootstrap-sweetalert');


class IsSubmitted extends Component {

    constructor(props) {
        super(props);
    }


    submitBtnOnClick = () => {
        MySwal.fire({
            title: <p>Insert nick</p>,
            input: "text",
            footer: 'Copyright 2018',
            onOpen: () => {
                // `MySwal` is a subclass of `Swal`
                //   with all the same instance & static methods
                // MySwal.clickConfirm()
            }
        }).then((result) => {
            MySwal.fire({
                html: "<div id=\"superRoot\"></div>",
                onConfirm: () => {
                    console.log("FlockOff");
                    
                },
                onOpen: () => {
                    ReactDOM.render(<PrefSelection />, document.getElementById('superRoot'));

                }

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