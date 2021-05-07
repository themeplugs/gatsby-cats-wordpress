import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props
    const resolutions = post.featured_media.localFile.childImage.Sharp.resolutions
    return (
      <section className="section x">
        <div className="container">
          <div className="columns">
              <div className="column">
                <div className="columns">
                    {posts.map(({ node: post }) => (
                      <div className="post-content column is-6" key={post.id} >
                       {resolutions &&
                          <div>
                            <img src="{resolutions.src}" alt="" />
                          </div>
                       }
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
              <div className="column is-one-third">

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
