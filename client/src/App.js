import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './Pages/about-us';
import ClassDisplay from './Components/Class';
import ContactUs from './Pages/contact-us'
import Courses from './Pages/use-it-correct';
import Search from './Pages/search';
import Help from './Pages/Help';
import Login from './Log/login';
import Payment from './Pages/payment';
import CartPage from './Pages/cart';
import CourseDetails from './Components/course-details';
import FormsForTeachers from './Forms/Forms-For-Teachers';
import DoubtSessions from './Pages/DoubtSessions';
import Careers from './Pages/Careers';
import Blog from './Pages/Blog'
import BlogLandingPage from './Constants/Blogs/Blog-Landing-Page';
import Workshops from './Constants/Workshops/Workshops'
import WorkshopsDetails from './Constants/Workshops/WorkshopsDetails';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pidgin/about-us' component={AboutUs} />
            <Route exact path='/pidgin/cart' component={CartPage} />
            <Route exact path='/pidgin/help' component={Help} />
            <Route exact path='/pidgin/contact-us' component={ContactUs} />
            <Route exact path='/pidgin/courses' component={Courses} />
            <Route exact path='/pidgin/search/:id' component={Search} />
            <Route exact path='/pidgin/login' component={Login} />
            <Route exact path='/pidgin/payment' component={Payment} />
            <Route exact path='/pidgin/we-support-teachers' component={FormsForTeachers} />
            <Route exact path='/pidgin/i-need-to-learn' component={DoubtSessions} />
            <Route exact path='/pidgin/join-us' component={Careers} />
            <Route exact path='/pidgin/blogs' component={BlogLandingPage} />
            <Route exact path='/pidgin/workshops' component={Workshops} />
            <Route exact path='/pidgin/blogs/:index' component={Blog} />
            <Route exact path='/pidgin/workshops/:index' component={WorkshopsDetails} />
            <Route exact path='/class/class-details/:id/:doc' component={CourseDetails} />
            <Route exact path='/class/:id' component={ClassDisplay} />
          </Switch>
        </Router>
      </div>
    );
  }
}

