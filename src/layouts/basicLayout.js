import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'dva/router';
export class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { getRouteData } = this.props;
        return ( 
            <div>
                <div style={{width:"100%",height:"100px"}}>
                    <ul>
                        <li><Link to="page">page1</Link></li>
                        <li><Link to="page/component1">page2</Link></li>
                    </ul>
                </div>
                <Switch>
                {
                  getRouteData('BasicLayout').map(item =>
                    (
                      <Route
                        exact={item.exact}
                        key={item.path}
                        path={item.path}
                        component={item.component}
                      />
                    )
                  )
                }
                {/* <Redirect exact from="/" to="/dashboard/analysis" /> */}
                <Route component={NotFound} />
              </Switch>
            </div>
         )
    }
}
 
export default BasicLayout;