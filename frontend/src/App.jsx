import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ErrorPage from "./Pages/ErrorPage.jsx";
import noteReducer from "./Data/Activities/noteReducer.js";
import todoReducer from "./Data/Activities/todoReducer.js";
import userReducer from "./Data/User/UserReducer.js";
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import ProtectedRoute from "./Components/Protected/ProtectedRoute.jsx"
import EditPage from "./Pages/EditPage.jsx";

function Logout(){
  localStorage.clear()
  return <Navigate to={"/login"}/>
}

function SignupandLogout(){
  localStorage.clear()
  return <SignUpPage/>
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupandLogout/>,
  },
  {
    path: "/",
    element: <ProtectedRoute>
      <HomePage/>
    </ProtectedRoute>,
  },
  {
    path:"/edit",
    element:<ProtectedRoute>
      <EditPage/>
    </ProtectedRoute>
  },
  {
    path:"*",
    element:<ErrorPage/>
  }
]);

export const store = configureStore({
  reducer: {
    note: noteReducer,
    todo: todoReducer,
    user: userReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
