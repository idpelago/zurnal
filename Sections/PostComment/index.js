const PostComment = ({ isLoaded, postSlugId, postSlugTitle }) => {
  return (
    <div className="row">
      <div className="col-lg-8 col-md-12">
        {!isLoaded ? (
          <>Loading Comments...</>
        ) : (
          <>
            <div id="fb-root"></div>
            <div
              id="comments"
              className="fb-comments"
              data-href={`https://www.zurnal.co/post/${postSlugId}/${postSlugTitle}`}
              data-colorscheme="light"
              data-width="100%"
              data-numposts="5"
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostComment;
