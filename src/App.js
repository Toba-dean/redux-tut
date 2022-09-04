import './App.css';
// import Counter from './features/counter/Counter';
// import { PostAsyncList } from './features/PostAsync/PostAsyncList';
import { PostForm } from './features/Post/PostForm';
import { PostList } from './features/Post/PostList';
// import { PostFormAsync } from './features/PostAsync/PostFormAsync';

function App() {
  return (
    <main className="App">
      {/* <Counter /> */}
      <PostForm />
      <PostList />
      {/* <PostFormAsync />
      <PostAsyncList /> */}
    </main>
  );
}

export default App;
