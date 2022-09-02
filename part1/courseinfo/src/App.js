const Header = (props) => {
  <h1>{props.course}</h1>
}

const Part = (props) => {

}

const Content = (props) => {

}

const Total = (props) => {

}

const App = (props) => {
  const course = 'Half Stack apllication development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App;
