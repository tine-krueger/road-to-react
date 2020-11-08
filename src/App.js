import './App.css'

const list1 = [
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


const App = () => {
  //do something
  const handleChange = event => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
      <hr />
      <List list={list1}/>
      
    </div>
  );
}

export default App;

const List = ({list}) => {
  return list.map(item => 
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
}
