import './App.css'

function getTitle(title) {
  return title
}

const number = 1
const nully = null
const undefine = undefined
const booly = true
const list = ['Heyy', 'there']

function App() {

  

  return (
    <div className="App">
      <h1>Hello {getTitle('React')}</h1>
      <p>{number}</p>
      <p>{nully}</p>
      <p>{undefine}</p>
      <p>{console.log(booly)}</p>
      {list.map(element => <p>{element}</p>)}

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text"/>
    </div>
  );
}

export default App;
