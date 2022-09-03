import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = props.good / all * 100;

  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // if good, neutral, bad are 0, then show "No feedback given"
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  } else {
    // else show statistics
    return (
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>

        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <td>good</td><td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td><td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td><td>{bad}</td>
            </tr>
            <tr>
              <td>all</td><td>{good + neutral + bad}</td>
            </tr>
            <tr>
              <td>average</td><td>{(good - bad) / (good + neutral + bad)}</td>
            </tr>
            <tr>
              <td>positive</td><td>{good / (good + neutral + bad) * 100} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
