import HomePage from "./routes/homePage/homePage"
import{
  createBrowserRouter,
  RouterProvider,
  
}from"react-router-dom";
import ListPage from "./routes/homePage/listPage/listPage";
import Layout from "./routes/homePage/layout/layout";
import SinglePage from "./routes/homePage/singlePage/singlePage";

function App() {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {path:"/",
         element:<HomePage/>

        },
        {path:"/list",
          element:<ListPage/>
 
        },
        {path:"/:id",
          element:<SinglePage/>
 
        }
      ]
    }
  ]);
  return (
   
    <RouterProvider router={router}/>
  );
}

export default App;