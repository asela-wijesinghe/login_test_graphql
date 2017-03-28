import React,{Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/current_user';
import mutation from '../mutations/Logout';

class Header extends Component {

  onClickLogout(){
    this.props.mutate({
      //use to refresh the page
      refetchQueries: [{query}]
    });
  }

  renderButtons(){
    const {user,loading} =this.props.data;
      if(user){
      return(
            <div>
              <li>
                <a onClick={this.onClickLogout.bind(this)}>Logout</a>
              </li>
            </div>
      );
    }else{
      return(
          <div>
            <li>
              <Link to="/signup">
                Signup
              </Link>
            </li>
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
          </div>
      );
    }
  }

    render(){
    const {user,loading} =this.props.data;

    if(!loading){
      return(
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo left">
              Home
            </Link>
            <ul className="right">
              {this.renderButtons()}
            </ul>
          </div>
        </nav>
      );
    }
      return <div/>;
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
