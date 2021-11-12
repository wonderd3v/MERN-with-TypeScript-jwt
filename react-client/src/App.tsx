import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/auth.component';
import Nav from './components/navbar/nav';
import Profile from './components/Profile';
import Register from './components/auth/register.component';
import authServices from './services/auth.services';
import CoursesList from "./components/courses/courses-admin-list";
import CourseForm from './components/courses/course-form';
import Home from './components/Home';

const App = () => {
  const [user, setUser] = useState({});

  const fetchProfile = async () => {
    const token = localStorage.getItem('token');

    if (token === null) return <h1> You are not an authenticated user, maybe you should log in</h1>
    const profile = await authServices.profile(token);
    setUser(profile);
  }

  useEffect(() => {
    fetchProfile();

  }, [])

  return <>

    <BrowserRouter>
      <Nav user={user} />
      <div className="container">
        <Switch>

          <Route path="/home" component={Home} />
          <Route path="/login"  component={Login} />
          <Route path='/' exact component={() => <Profile user={user} />} />
          <Route path="/register" component={Register} />
          <Route path="/courses-admin" component={CoursesList} />
          <Route path="/add-courses" component={CourseForm} />
          <Route path="/update/:id" component={CourseForm} />

        </Switch>
      </div>
    </BrowserRouter>
  </>
}

export default App;