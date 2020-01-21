import React from 'react'
import { hot } from 'react-hot-loader'
import marked from 'marked'
import hljs from 'highlight.js'
import './style.less'

@hot(module)
class Article extends React.Component {
    state = {
        articleDetail: {content:'## asdsa'},
    }

    componentWillMount() {
        // marked相关配置
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function (code) {
                return hljs.highlightAuto(code).value
            },
        })
    }



    render() {
        const { articleDetail } = this.state
        return (
            <div
                id="content"
                className="article-detail"
                dangerouslySetInnerHTML={{
                    __html: articleDetail.content ? marked(articleDetail.content) : null,
                }}
            />
        )
    }
}


export default Article
