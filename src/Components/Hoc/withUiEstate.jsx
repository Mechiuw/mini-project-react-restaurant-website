import { Component } from 'react';
import Toast from "../Toast/Toast.jsx";

function WithUiEstate(WrappedComponent){
    return class HOC extends Component {
        state = {
            isLoading: false,
            showToast: false,
            toastMessage:"",
            toastColor:"primary"
        }

        handleShowLoading = () => {
            this.setState({isLoading: true})
        }

        handleHideLoading = () =>{
            this.setState({isLoading: false})
        }

        showToast = (message,color) => {
            this.setState({
            showToast: true,
            toastMessage:message,
            toastColor:color || this.state.toastColor
            })

            setTimeout(() => {
                this.setState({showToast: false})
            },2000  )
            }


        render(){
            return (
                <>
                    {this.state.showToast && (
                        <Toast
                            message={this.state.toastMessage}
                            color={this.state.toastColor}
                            />
                    )}
                <WrappedComponent
                    {...this.props}
                    showToast={this.showToast}
                    isLoading={this.state.isLoading}
                    handleHide={this.handleHideLoading}
                    handleShowLoading={this.handleShowLoading}
                >

                </WrappedComponent>
                </>
            )
        }
    }
}

export default WithUiEstate;