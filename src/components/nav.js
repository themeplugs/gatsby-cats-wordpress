import React, {Component} from "react"
import Link from "gatsby-link"

class Nav extends Component {
    render() {

        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items
        console.log(data)

        return (
            <div>
                <h1>Nav Menu</h1>
                <ul>
                    {data.map((item) =>
                        <li key={item.object_slug}>
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Nav