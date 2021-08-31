import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';

import './App.css';

class App extends Component {


  unsubscribteFromAuth = null;

  componentDidMount() {
    const { setCurrentUserProp } = this.props;

    // Google User Authentication + Creation (stored in Firestore)
    this.unsubscribteFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, (snapshot) => {
          setCurrentUserProp({
              id: snapshot.id,
              ...snapshot.data()
          });
        })
      }
      else {
        setCurrentUserProp(userAuth);
        console.log('No user has signed in')
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribteFromAuth();
  }

  render() {
    const { currentUserProp } = this.props;

    return  (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUserProp ? 
            (<Redirect to='/' />) 
            : 
            (<SignInAndSignUpPage /> )
            } 
          />
        </Switch>
      </>
    )
  };
}

const mapStateToProps = ({ user }) => ({
  currentUserProp: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUserProp: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
