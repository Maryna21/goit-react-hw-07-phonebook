import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import s from 'components/Error/error.module.css';
import errorTransition from 'components/Error/errorTransition.module.css';
import { clearError } from 'redux/contacts-actions';
import { getError } from 'redux/contacts-selectors';
import { connect } from 'react-redux';

class Error extends Component {

    componentDidMount() {
        if (this.props.error) {
            setTimeout(() => {
                this.props.clearError();
            }, 2500);
            }
        }
    
    render() {
        return(<CSSTransition
            in={this.props.message}
            timeout={250}
            classNames={errorTransition}
            unmountOnExit
        >
            <div className={s.box}><p>{this.props.message}</p></div>
            </CSSTransition>)
    }
}

const mapStateToProps = (state) => ({
    error: getError(state),
});

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(clearError())
});
export default connect(mapStateToProps, mapDispatchToProps)(Error);