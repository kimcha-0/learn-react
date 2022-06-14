// refactor the code so that it consists of three new components:

// Header
const Header = (props) => {
  console.log(props);
  return <h1>{props.name}</h1>;
};

// Part
const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};
// Content
const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.parts[0]} />
    </div>
  );
};
// Total
const Total = (props) => {
  console.log(props);
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 17,
      },
      {
        name: "State of a component",
        exercises: 14,
      }
    ]
  };

  return (
    <div>
      <Header name={course.name} />
      <Content part={course.parts} />
      <Total part={course.parts} />
    </div>
  );
};

export default App;
