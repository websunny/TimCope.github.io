import  React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../../component/Header'
import routes from '../../../controllers'
import 'antd/dist/antd.css'
import './style.less'

class App extends React.Component{
    state ={

    }
    routeWithSubRoutes = (route: any, index: number) => (
        <Route
            key={index}
            exact={route.exact || false}
            path={route.path}
            render={props => (
                <route.component
                    {...props}
                    routes={route.routes}
                />
            )}
        />
    )

    render() {
        return (
            <div className="container">
                <Header />
                <Switch>
                    {routes.map((route: any, index: number) =>
                        this.routeWithSubRoutes(route, index)
                    )}
                </Switch>
            </div>
        )
    }
}

export default App