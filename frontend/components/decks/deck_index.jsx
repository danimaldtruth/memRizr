import React from 'react';
import { Link } from 'react-router';
import DeckIndexItem from './deck_index_item';
import DeckForm from './create_deck_form';

class DeckIndex extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      showNewDeckForm: false
    };
  }

  showForm(){
    let show = this.state.showNewDeckForm ? false : true;
    this.setState({
      showNewDeckForm: show
    });
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      showNewDeckForm: false
    });
  }

  render(){
    let { decks, createDeck, subjectDetail, deleteDeck, currentUser } = this.props;
    let deckList = <div className="no-decks-found">No Decks Found</div>;
    let deckForm = <div className="new-deck-form-placeholder"></div>;
    let admin = currentUser ? (currentUser.id === subjectDetail.creator) : false;
    let optionsBtn = null;

    if(admin){
      optionsBtn = <button onClick={() => this.showForm()}>
        <i className="fa fa-plus"></i>
        Deck
      </button>;
    }

    if(this.state.showNewDeckForm){
      deckForm = <DeckForm
        cancelForm={this.showForm.bind(this)}
        createDeck={createDeck}
        subjectId={subjectDetail.id}/>;
    }

    if(decks.length > 0){
      deckList = decks.map((deck, idx) => {
        return <DeckIndexItem
          key={idx}
          deck={deck}
          subjectDetail={this.props.subjectDetail}
          deleteDeck={deleteDeck}
          admin={admin}/>;
      });
    }

    return(
      <content>
        <div className="deck-list-header">
          <div className="deck-header">
            Decks
          </div>
          <div className="deck-list-options">
            {optionsBtn}
          </div>
        </div>
        <ul className="deck-list-ul">
          {deckList}
          {deckForm}
        </ul>
      </content>
    );
  }
}

export default DeckIndex;
