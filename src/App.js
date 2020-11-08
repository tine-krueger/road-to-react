import './App.css'

function getTitle(title) {
  return title
}


const list = [
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

function App() {

  

  return (
    <div className="App">
      <h1>My Hacker Stories</h1>
      

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text"/>
      <hr />
      <List/>
      <hr />
      <List/>
      <hr />
      <List />
      
    </div>
  );
}

export default App;

function List() {
  return list.map(function(item) {
    return (<div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      </div>
    )
  })
}
