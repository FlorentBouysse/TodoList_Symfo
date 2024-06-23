import { useEffect, useState } from 'react'
// import Navbar from './components/navbar/Navbar'
import axios from 'axios';
import {RouterProvider} from "react-router-dom";
import Route from "./routes/Route.jsx";
import Cours from './components/cours/Cours.jsx';
// import Login from './components/login/Login.jsx';



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

    // fetchProducts();
}, []);
  return (
    <>
      <div>
        <RouterProvider router={Route} />
        <Cours />
        
        
        
        {/* <Navbar /> */}
        {/* <Login /> */}
      </div>
    </>
  )
}

export default App
