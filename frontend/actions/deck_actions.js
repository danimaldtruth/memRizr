import * as MainAPIUtil from '../util/main_api_util';
import { fetchSubject } from './subject_actions';

export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';

export const fetchDeck = (id) => (dispatch) => {
  MainAPIUtil.fetchDeck(id)
             .then(res => dispatch(receiveDeck(res)));
};

export const createDeck = (deck) => (dispatch) => {
  MainAPIUtil.createDeck(deck)
             .then(res => dispatch(fetchSubject(deck.subject_id)));
};

export const deleteDeck = (deckId) => (dispatch) => {
  MainAPIUtil.deleteDeck(deckId)
             .then(deck => (dispatch(fetchSubject(deck.subject_id))));
};

export const removeDeck = (deckId) => ({
  type: REMOVE_DECK,
  deckId
});

export const receiveDeck = (deck) => ({
  type: RECEIVE_DECK,
  deck
});