// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.course.name}</h1>
//     </>
//   );
// };

// const Part = (props) => {
//   return (
//     <p>
//       {props.part} {props.exercises}
//     </p>
//   );
// };

// const Content = (props) => {
//   return (
//     <>
//       <Part
//         part={props.course.parts[0].name}
//         exercises={props.course.parts[0].exercises}
//       />
//       <Part
//         part={props.course.parts[1].name}
//         exercises={props.course.parts[1].exercises}
//       />
//       <Part
//         part={props.course.parts[2].name}
//         exercises={props.course.parts[2].exercises}
//       />
//     </>
//   );
// };

// const Total = (props) => {
//   return (
//     <>
//       <p>
//         Number of exercises{" "}
//         {props.course.parts[0].exercises +
//           props.course.parts[1].exercises +
//           props.course.parts[2].exercises}
//       </p>
//     </>
//   );
// };

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };
//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//       <Total course={course} />
//     </div>
//   );
// };

import { useState } from "react";
// intro to state hooks
// const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log("rendering...", counter);
//   const increaseByOne = () => setCounter(counter + 1);
//   const setToZero = () => setCounter(0);
//   const decreaseByOne = () => setCounter(counter - 1);
//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={decreaseByOne} text="minus" />
//       <Button onClick={setToZero} text="zero" />
//     </div>
//   );
// };

// complex states
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setClicks({
      ...clicks,
      left: clicks.left + 1,
    });
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setClicks({
      ...clicks,
      right: clicks.right + 1,
    });
  };

  return (
    <div>
      {clicks.left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {clicks.right}
      <History allClicks={allClicks} />
    </div>
  );
};

// Conditional Rendering

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};
export default App;
