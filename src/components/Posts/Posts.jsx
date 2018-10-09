<Fragment>
  <h1>All posts</h1>

  {this.posts.map((post, i) => {
    return <Media
      key={i}
      className="mt-5"
      id="post">

      <Media body>
        <Media heading>
          <Link
            to={'/post/' + post.head}>{post.head}
          </Link>
        </Media>
        {post.text}
      </Media>

      <Button
        id="delete-btn"
        onClick={(e) => { this.remove(post); }}>
        Delete Post
    </Button>
    </Media>
  })}
</Fragment>