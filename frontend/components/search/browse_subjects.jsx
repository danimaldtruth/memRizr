import React from 'react';
import { Link } from  'react-redux';
import NavBarContainer from '../navbar_container';
import SearchContainer from './search_container';
import SubjectsList from '../subjects/subjects_list';
import isEqual from 'lodash/isEqual';

class BrowseSubjects extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      subjectList: {}
    };
  }

  componentWillReceiveProps(nextProps){
    if(!isEqual(this.props.subjects, nextProps.subjects)){
      this.setState({
        subjectList: nextProps.subjects
      });
    }
  }

  render(){
    let { subjects } = this.props;

    return(
      <main className="browse-subjects-outer">
        <NavBarContainer />
        <SearchContainer />
        <SubjectsList subjects={this.state.subjectList}/>
      </main>
    );
  }
}

export default BrowseSubjects;