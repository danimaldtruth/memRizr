import React from 'react';
import { Link } from  'react-redux';
import NavBarContainer from '../navbar_container';
import SearchBarContainer from './search_bar_container';
import SubjectsList from '../subjects/subjects_list';
import isEqual from 'lodash/isEqual';

class BrowseSubjects extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      subjectList: {}
    };
  }

  componentWillMount(){
    this.props.fetchSubjects();
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
    let mainWindow = <SubjectsList subjects={this.state.subjectList}/>;
    if(this.props.params.subjectId){
      mainWindow = this.props.children;
    }

    return(
      <main className="browse-subjects-outer">
        <NavBarContainer />
        <SearchBarContainer />
        {mainWindow}
      </main>
    );
  }
}

export default BrowseSubjects;
