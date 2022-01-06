import React from 'react'
import { Contactus } from './Component/Contactus';
import { Aboutus } from './Component/Aboutus';
import { Feedback } from './Component/Feedback';
import { Home } from './Component/Home';
import { Link, Router,BrowserRouter ,Route,Switch} from 'react-router-dom'
export const Navbar = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">Aboutus</Link></li>
                        <li><Link to="/contactus">contactUs</Link></li>
                        <li><Link to="/feedback">Feedback</Link></li>
                    </ul>
                </nav>
                <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/aboutus" component={Aboutus} />
                        <Route path="/contactus" component={Contactus} />
                        <Route path="/Feedback" component={Feedback} />

                </Switch>


            </div>

        </Router>

    )
}

