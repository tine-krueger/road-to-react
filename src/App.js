import './App.css'
import {useState} from 'react'


const App = () => {

  const stories = [
    {
      title: 'React',
      url: 'http://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'http://redux.js.org',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]

  function handleSearch(event) {
    console.log(event.target.value)
  }

  

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch}/>
      <hr />
      <List list={stories}/>
      
    </div>
  );
}

export default App;

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = event => {
    props.onSearch(event)
    setSearchTerm(event.target.value)
  }

  return (
      <div>
        <label htmlFor="search"> Search: </label>
        <input id="search" type="text" onChange={handleChange}/>

        <p>Searching for: <strong>{searchTerm}</strong></p>
      </div>)
}
 
const List = (props) => props.list.map(item => 
     (<div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      </div>
    )
  )

