import React from 'react'
import LinkContainer from './components/LinkContainer';

const [r1,r2] = useState([
  {
    id:1,
    title: 'this is first'
  }
])
// {name:'git', URL:'github.com'}

function App() {
  return (
    <div className="App">
        <LinkContainer r1={r1}/>
    </div>
  );
}

export default App;
