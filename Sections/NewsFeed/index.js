import NewsFeedLeftSection from "./LeftSide";
import NewsFeedRightSection from "./RightSide";

const NewsFeedSection = (props) => {
  return (
    <section className="utf_block_wrapper">
      <div className="container">
        <div className="row">
          <NewsFeedLeftSection {...props} />
          <NewsFeedRightSection />
        </div>
      </div>
    </section>
  );
};

export default NewsFeedSection;
