import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import "../../styles/main.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/main.css";
import { loadPost } from "../../actions/post";
import Spinner from "../../components/layout/Spinner";

const Post = ({ loadPost, post: { loading, post }, match }) => {
  useEffect(() => {
    loadPost(match.params.slug);
  }, [loadPost]);
  if (loading)
    return (
      <>
        <Spinner />
      </>
    );
  return (
    <>
      <h1>post id is: </h1>
      {post}
    </>
  );
};
Post.propTypes = {
  loadPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { loadPost })(Post);
