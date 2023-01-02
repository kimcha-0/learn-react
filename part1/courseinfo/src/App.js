const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part
        part={props.part[0].name}
        exercises={props.exercises[0].exercises}
      />
      <Part
        part={props.part[1].name}
        exercises={props.exercises[1].exercises}
      />
      <Part
        part={props.part[2].name}
        exercises={props.exercises[2].exercises}
      />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.numExercises}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercises={parts} />
      <Total
        numExercises={
          parts[0].exercises + parts[1].exercises + parts[2].exercises
        }
      />
    </div>
  );
};

export default App;
