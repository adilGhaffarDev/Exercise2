import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }

const Total = ({ course }) => {
    const sum = course.parts.reduce((sum,coursepart)=>{return sum + coursepart.exercises},0)
    return(
      <p>Number of exercises {sum}</p>
    )
}
  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    )
}
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(coursedata=> 
          <Part key={coursedata.id} part={coursedata}/>
        )}
      </div>
    )
}

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
}

export default Course

