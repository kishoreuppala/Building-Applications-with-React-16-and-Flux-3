//App.js will decide which page to render
import React, { useEffect } from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursesPage';
import { Redirect, Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PageNotFound from './PageNotFound';
import ManageCoursePage from './ManageCoursePage';

function App() {
    //----Traditional routing-------
    // function getPage() {
    //     const route = window.location.pathname;
    //     if (route === "/about") return <AboutPage />;
    //     if (route === "/courses") return <CoursesPage />;
    //     return <HomePage />;
    // }
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} /> {/* exact - This route should only match if the URL is exactly "/" */}
                <Route path="/courses" component={CoursesPage} />
                <Route path="/about" component={AboutPage} />
                {/*Test Redirect */}
                <Redirect from="/about-page" to="about" />
                <Route path="/course/:slug" component={ManageCoursePage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    )
}

export default App;