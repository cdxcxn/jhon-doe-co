import React from 'react';
import {
    Card,
    CardText,
    CardActions,
    TextField,
    Button
} from 'react-md';
import { connect } from 'react-redux';
import './Contact.css';
import { CONTACT_CHANGE, CLEAR_RESPONSE } from '../actions/types';
import { postContact } from '../actions/index';

const Contact = (props) => {
    const disableTags = props.isDisable
        ? { flat: true, primary: true, swapTheming: true }
        : { disabled: true, raised: true };

    if (props.contactResponse) {
        alert(`Response from server: ${props.contactResponse}`);
        props.clearResponse();
    }

    return(
        <div className='contact__wrapper'>
            <Card className='md-cell md-cell--12 md-text-container'>
                <CardText className='contact__card'>
                    <TextField
                        id='firstName'
                        required
                        label='Firs Name'
                        placeholder='Your name...'
                        maxLength={255}
                        errorText='Please write down your first name'
                        onChange={props.handleFieldChange}
                        value={props.firstName}
                    />
                    <TextField
                        id='lastName'
                        required
                        label='Last Name'
                        placeholder='Your last name...'
                        maxLength={255}
                        errorText='Please write down your last name'
                        onChange={props.handleFieldChange}
                        value={props.lastName}
                    />
                    <TextField
                        id='email'
                        required
                        label='Firs Name'
                        placeholder='Your email address...'
                        maxLength={255}
                        errorText='Don’t forget to tell us what your email address is'
                        onChange={props.handleFieldChange}
                        value={props.email}
                    />
                    <TextField
                        id='subject'
                        required
                        label='Subject'
                        placeholder='Let us know your concerns!'
                        maxLength={500}
                        rows={5}
                        errorText='Don’t forget to write something to use!'
                        onChange={props.handleFieldChange}
                        value={props.subject}
                    />
                </CardText>
                <CardActions className='contact__card-footer'>
                    <Button {...disableTags} className='contact__submit' type='submit' onClick={() => props.handleSubmit(props)}>SUBMIT</Button>
                </CardActions>
            </Card>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        subject: state.subject,
        isDisable: state.firstName && state.lastName && state.email && state.subject,
        contactResponse: state.contactResponse,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFieldChange: (value, event) => {
            const targetFiledId = event.target.id;
            dispatch({ type: CONTACT_CHANGE, field: targetFiledId, value: value });
        },

        handleSubmit: (props) => {
            const dataBody = {
                firstName: props.firstName,
                lastName: props.lastName,
                email: props.email,
                subject: props.subject,
            }
            dispatch(postContact(dataBody));
        },

        clearResponse: () => {
            dispatch({ type: CLEAR_RESPONSE });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
