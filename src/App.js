import './App.css';
import { PostAsyncList } from './features/PostAsync/PostAsyncList';
// import { PostForm } from './features/Post/PostForm';
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
