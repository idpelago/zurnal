import NewsFeedLeftSection from "./LeftSide";
import NewsFeedRightSection from "./RightSide";

const NewsFeedSection = () => {
  return (
    <section className="utf_block_wrapper">
      <div className="container">
        <div className="row">
          <NewsFeedLeftSection />
          <NewsFeedRightSection />
        </div>
      </div>
    </section>
  );
};

export default NewsFeedSection;
