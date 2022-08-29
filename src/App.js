import './App.css';
import { PostForm } from './features/Post/PostForm';
import { PostList } from './features/Post/PostList';

function App() {
  return (
    <main className="App">
      {/* <Counter /> */}
      <PostForm />
      <PostList />
    </main>
  );
}

export default App;
