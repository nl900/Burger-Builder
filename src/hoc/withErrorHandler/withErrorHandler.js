import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    //annonymous class
    return class extends Component  {
        state = {
            error: null
        }
        //execute when component is created. Alternate is use constructor
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req=> {
                this.setState({error: null});
                return req;
            });
            //get error from firebase
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        //executed when a component is no longer required. prevent memory leak
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Aux>
                    <Modal show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                <WrappedComponent {...this.props}/>
                
                </Aux>
            );
        }
    
    }

}

export default withErrorHandler;