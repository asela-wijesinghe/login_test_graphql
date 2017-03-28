import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import mutation from '../mutations/SignIn';
import query from '../queries/current_user';
import AuthForm from './AuthForm';
import { hashHistory } from 'react-router';

class SignupForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      errors: []
    }
  }

  componentWillUpdate(nextProps){
    if(!this.props.data.user && nextProps.data.user){
      // if no user before and there is user now need to redirect
      hashHistory.push('/dashboard');
    }
  }

    onSubmit({email, password}){
      this.props.mutate({
        variables: {email, password},
        refetchQueries: [{query}]
      }).catch(res=> {
        const errors = res.graphQLErrors.map(error => error.message );
        this.setState({errors});
      });
    }
    render(){
      return(
          <div>
            <h3>Signup</h3>
            <AuthForm errors={this.state.errors} onSubmit={this.onSubmit.bind(this)}/>
          </div>
      );
    }

}

export default graphql(query)(
  graphql(mutation)(SignupForm)
);
