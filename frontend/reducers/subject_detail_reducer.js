import {
  RECEIVE_SUBJECT,
  RECEIVE_SUBJECT_ERRORS
} from '../actions/subject_actions';
import merge from 'lodash/merge';

const _nullSubject = {
  decks: [],
  subjectDetail: null,
  errors: []
};

const SubjectDetailReducer = (state = _nullSubject, action) => {
  let newState;
  switch(action.type){
    case(RECEIVE_SUBJECT_ERRORS):
      newState = { errors: action.errors };
      return merge({}, _nullSubject, newState);
    case(RECEIVE_SUBJECT):
      return {
        decks: action.subject.decks,
        subjectDetail: action.subject.subjectDetail,
        errors: []
      };
    default:
      return state;
  }
};

export default SubjectDetailReducer;