import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPosts } from "../../actions/post";
import SinglePost from "../pages/SinglePost";

const Posts = ({ post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const postcomponent = (
    <>
      <div>
        <body class="bg-gray-100 text-gray-700  font-sans quicksand">
          <div class="p-16">
            <SinglePost posts={posts} />
          </div>
        </body>
      </div>
    </>
  );
  return <>{loading ? <Spinner /> : postcomponent})</>;
};
Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
