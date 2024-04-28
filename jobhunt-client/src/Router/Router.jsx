import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import Salary from "../Pages/Salary";
import Login from "../components/auth/Login";
import JobDetails from "../Pages/JobDetails";
import SignUp from "../components/auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home/> },
      { path: "/post-job", element: <CreateJob/> },
      { path: "/my-job", element: <MyJobs/> },
      { path: "/salary", element: <Salary/> },
      {
        path: "/login", element: <Login/>
      },
      {
        path: "/sign-up", element: <SignUp/>
      },
      {
        path: "/job/:id", element: <JobDetails/>
      },
  
    ],
  },
]);

export default router;
