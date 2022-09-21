import React, {Component} from 'react';


export default class signup extends Component{
    state = {
        email: '',
        password: '',

    };
    handleEmailChnge = event =>{
        this.setState({email: event.target.value});
    };
    handlePwdChange = event =>{
        this.setState({password: event.target.value
        });
    };
    handleSubmit = event =>{
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        let bodyFormData = new FormData();
        bodyFormData.set('email',email);
        bodyFormData.set('password',password);
    };
    renderRedirect = () => {
        if(this.state.redirect){
            return<Redirect to ='/dashboard'/>
        };
        render() {
            return(
                <div className='container'>
                    <TitleComponent title = 'Sign Up'></TitleComponent>
                    <div className='card-body'>
                        <form onSubmit = {this.handleSubmit}>
                            <div className="form-label-group">
                                <input ClassName={"form-control" + (this.state.authError ? 'is-invalid':"")} id="inputEmail" type="text"/>
                                <label htmlFor = "inputEmail">Email</label> 

                            </div>
                            <div className="form-label-group">
                                <input ClassName={"form-control" + (this.state.authError ? 'is-invalid':"")} id="inputPassword" type="text"/>
                                <label htmlFor = "inputPassword">Password</label> 
                                
                            </div>

                        </form>
                        {this.renderRedirect()}

                    </div>
                </div>
            );
        
    };
    }
}