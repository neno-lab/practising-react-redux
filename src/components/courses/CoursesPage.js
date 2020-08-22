import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends Component {
  state = {
    course: {
      title: '',
    },
  };

  handleChange = (e) => {
    const courseUpdate = { ...this.state.course, title: e.target.value };
    this.setState({ course: courseUpdate });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // our component is now connected to redux
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type='submit' value='Save' />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

// const connectedStateAndProps=connect(mapStateToProps, mapDispatchToProps);

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // if we don't call dispatch, nothing will happen
    // action creators must be called by dispatch
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// mapStateToProps: determines what states are available on props on our component
// mapDispatchToProps: determines what actions are available on props in our component
