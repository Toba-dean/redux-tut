import './App.css';
// import Counter from './features/counter/Counter';
// import { PostForm } from './features/Post/PostForm';
// import { PostList } from './features/Post/PostList';
import { PostAsyncList } from './features/PostAsync/PostAsyncList';
import { PostFormAsync } from './features/PostAsync/PostFormAsync';

function App() {
  return (
    <main className="App">
      {/* <Counter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
      <PostFormAsync />
      <PostAsyncList />
    </main>
  );
}

export default App;
