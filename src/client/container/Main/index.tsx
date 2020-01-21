import React, {Fragment} from 'react'
import { hot } from 'react-hot-loader'
import Article from '../../component/Article'
import './style.less'

@hot(module)
class Main extends React.Component{
    state = {

    }
    render() {
        return (
            <Fragment>
                <div className="sidebar">
                    js
                </div>
                <div className="page">
                    <Article />
                </div>
            </Fragment>
        )
    }
}


export default Main
