import React from 'react';
import query from '../queries/current_user';
import {graphql} from 'react-apollo';
import { hashHistory } from 'react-router';

class Dashboard extends React.Component{

  // componentWillUpdate(nextProps){
  //   if(this.props.data.user && !nextProps.data.user){
  //     // if no user before and there is user now need to redirect
  //     hashHistory.push('/');
  //   }
  // }

  render(){
      return(
        <div>
          <h1>Welcome to dashboard!</h1>
        </div>
      );
  }
}

export default graphql(query)(Dashboard);
