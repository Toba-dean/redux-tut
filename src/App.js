import { Route, Routes, Navigate } from 'react-router-dom';

// import Counter from './features/counter/Counter';
// import { PostForm } from './features/Post/PostForm';
// import { PostList } from './features/Post/PostList';
import { PostAsyncList } from './features/PostAsync/PostAsyncList';
import { PostFormAsync } from './features/PostAsync/PostFormAsync';
import { Layout } from './component/Layout';
import { SinglePost } from './features/PostAsync/SinglePost';
import EditPostForm from './features/PostAsync/EditPost';
import UsersList from './features/users/UserAsyncList';
import UserPage from './features/users/UserPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<PostAsyncList />} />

        <Route path='post'>
          <Route index element={<PostFormAsync />} />
          <Route path=':postId' element={<SinglePost />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>

        <Route path='user'>
          <Route index element={<UsersList />} />
          <Route path=':userId' element={<UserPage />} />
        </Route>


        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
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
