import { Route, Routes } from 'react-router-dom';

// import Counter from './features/counter/Counter';
// import { PostForm } from './features/Post/PostForm';
// import { PostList } from './features/Post/PostList';
import { PostAsyncList } from './features/PostAsync/PostAsyncList';
import { PostFormAsync } from './features/PostAsync/PostFormAsync';
import { Layout } from './component/Layout';
import { SinglePost } from './features/PostAsync/SinglePost';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<PostAsyncList />} />

        <Route path='post'>
          <Route index element={<PostFormAsync />} />
          <Route path=':postId' element={<SinglePost />} />
        </Route>
      </Route>
    </Routes>
  );
}



//  <main className="App">
    {/* <Counter /> */ }
      {/* <PostForm /> */ }
  {/* <PostList /> */ }
  {/* <PostFormAsync />
      <PostAsyncList /> */}
  {/* </main> */ }


export default App;
