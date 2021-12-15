import NewsFeedLeftSection from "./LeftSide";
import NewsFeedRightSection from "./RightSide";

const NewsFeedSection = ({ pageType, queryKey }) => {
  return (
    <section className="utf_block_wrapper">
      <div className="container">
        <div className="row">
          <NewsFeedLeftSection pageType={pageType} queryKey={queryKey} />
          <NewsFeedRightSection />
        </div>
      </div>
    </section>
  );
};

export default NewsFeedSection;
