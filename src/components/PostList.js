import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="row no-gutters">
              <div className="col-lg-8">
                <div className="row no-gutters">
                    {posts.map(({ node: post }) => (
                      <div className="col-lg-6" key={post.id} >
                        <div className="post-block">
                            <h2 className="post-title">
                                <Link  to={post.slug}>
                                {post.title}
                                </Link>
                            </h2>
                            <div className="post-content">
                                <div dangerouslySetInnerHTML={{
                                    __html: post.excerpt.replace(/<p class="more-link-hide link-more.*/, ''),
                                    }}
                                />
                            </div>
                            <div className="post-meta">
                               <span>
                                    <Link to={`/author/${post.author.slug}`}>
                                        {post.author.name}
                                    </Link>
                                </span>, 
                                <span> {post.date} {' '}</span>
                            </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="col-lg-4">

              </div>
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
