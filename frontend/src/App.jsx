import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Login from './components/login/login'
// import ky from 'ky' 
import axios from 'axios';
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        Page de login
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contacte</Link>
        </nav>

      </div>
    ),
  },
  {
    path: '/blog',
    element: (
      <div>
        Page de blog
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contacte</Link>
        </nav>

      </div>
    ),
  },
  {
    path: '/contact',
    element: (
      <div>
        Page de contact
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

      </div>
    ),
  },
]);

function App() {
  const [list, setList] = useState([]);
  // useEffect(() => {
  //   const getList = async () => {
  //       const response = await axios.get('http://127.0.0.1:8000/api/list/2', {
  //           headers: {
  //           // 'content-type': 'application/json',
  //           Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTg3ODMyOTYsImV4cCI6MTcxODc4Njg5Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWRtaW4wQGFkbWluLmZyIn0.PSmBqLaGG1LSH4kh5YOvOZuJPkq_2dJrZnyytmc8p4TCz3rV_Zz2Xzcrcy0ABct_kiJbhM52-wk0DYivnzip3JGcVfQSVEDz8aYRXjdyY6KioeBAVF9kcXxkDkJxDb5BcyDBgGNUIRepyiQTvB9cKh2MoPAcjXAuQSnFfOww04wEzp3xFkLJtHHp1qtpJKj6rfLdSstbm18JU0GThrLeVtEXWqn6-WphCiZKyRTTgyZMVbAy0B8TsXyRUaLJv1ziBpwSUT2tvQgSrj0DP9KmawgzULVY5woPm2egnHGoqCXH61OB287PsW_n_n438srpOXrEnfQymigyQkxJuoPImA`
  //           }}).json;
  //       const listJson = response.data;
  //       setList(listJson)
  //       console.log(listJson);
  //   }
  //   getList();
  // }, []);
  useEffect(() => {
    async function fetchProducts() {
        try {
            const config = {
                headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MTg3ODMyOTYsImV4cCI6MTcxODc4Njg5Niwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiYWRtaW4wQGFkbWluLmZyIn0.PSmBqLaGG1LSH4kh5YOvOZuJPkq_2dJrZnyytmc8p4TCz3rV_Zz2Xzcrcy0ABct_kiJbhM52-wk0DYivnzip3JGcVfQSVEDz8aYRXjdyY6KioeBAVF9kcXxkDkJxDb5BcyDBgGNUIRepyiQTvB9cKh2MoPAcjXAuQSnFfOww04wEzp3xFkLJtHHp1qtpJKj6rfLdSstbm18JU0GThrLeVtEXWqn6-WphCiZKyRTTgyZMVbAy0B8TsXyRUaLJv1ziBpwSUT2tvQgSrj0DP9KmawgzULVY5woPm2egnHGoqCXH61OB287PsW_n_n438srpOXrEnfQymigyQkxJuoPImA` }
            };

            const productResponse = await axios.get('http://localhost:8000/api/list/2', config);

            setList(productResponse.data);
            console.log(productResponse.data);
        } catch (error) {
            // setError('Error fetching products: ' + error.message);
            console.error('Error:', error);
        } finally {
            // setIsLoading(false);
        }
    }

    fetchProducts();
}, []);
  return (
    <>
      <div>
        <h1>Ma bite</h1>
        <RouterProvider router={router} />
        {/* <Navbar />
        <Login /> */}
      </div>
    </>
  )
}

export default App
