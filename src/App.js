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

const list2 = [
  {
    title: 'Fuckin other language',
    url: 'http://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Express',
    url: 'http://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

const list3 = [
  {
    title: 'Wordpress',
    url: 'http://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Angular',
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
      <List list={list1}/>
      <hr />
      <List list={list2}/>
      <hr />
      <List list={list3}/>
      
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
     })
}
