import React from 'react';
import { Router,
         Route,
         IndexRoute,
         hashHistory,
         withRouter
       } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import BrowseSubjectsContainer from './search/browse_subjects_container';
import { receiveErrors } from '../actions/session_actions';
import { clearActiveSubject, clearSubjects } from '../actions/subject_actions';
import LibraryContainer from './subjects/library_container';
import SubjectDetailContainer from './subjects/subject_detail_container';
import Home from './home';
import DeckStudyContainer from './study/deck_study_container';
import DeckEditFormContainer from './decks/deck_edit_form_container';

const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      alert("Anonymous users cannot perform that action \n Please Login");
      hashHistory.push('/browse');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/my-subjects');
    }
  };

  const _clearErrors = () => {
    store.dispatch(receiveErrors([]));
  };

  const _clearAllSubjects = () => {
    store.dispatch(clearActiveSubject());
    store.dispatch(clearSubjects());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route
            path="/my-subjects"
            component={LibraryContainer}
            onEnter={_ensureLoggedIn}>
            <IndexRoute component={SubjectDetailContainer} />
            <Route
              path="/my-subjects/:subjectId"
              component={SubjectDetailContainer} />
          </Route>
          <Route
            path="/study/:deckId"
            component={DeckStudyContainer}
            onEnter={_ensureLoggedIn} />
          <Route
            path="/deck/:deckId/edit"
            component={DeckEditFormContainer}
            onEnter={_ensureLoggedIn} />
          <Route
            path="/browse"
            component={BrowseSubjectsContainer}
            onLeave={_clearAllSubjects}>
            <Route
              path="/browse/:subjectId"
              component={SubjectDetailContainer} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
