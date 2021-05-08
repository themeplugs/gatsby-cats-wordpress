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
                <div className="row">
                    {posts.map(({ node: post }) => (
                      <div className="col-lg-6" key={post.id} >
                        {categories && categories.length ? (
                        <div>
                          <h4>Categories</h4>
                          <ul className="taglist">
                            {categories.map(category => (
                              <li key={`${category.slug}cat`}>
                                <Link to={`/categories/${category.slug}/`}>
                                  {category.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                        <p>
                          <Link className="has-text-primary" to={post.slug}>
                            {post.title}
                          </Link>
                          <span> &bull; </span>
                          <small>
                            {post.date} - posted by{' '}
                            <Link to={`/author/${post.author.slug}`}>
                              {post.author.name}
                            </Link>
                          </small>
                        </p>
                        <div>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                            }}
                          />
                          <Link className="button is-small" to={post.slug}>
                            Keep Reading →
                          </Link>
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
