import NewsFeedLeftSection from "./LeftSide";
import NewsFeedRightSection from "./RightSide";

const NewsFeedSection = ({ isRobot, ssrData, pageType, queryKey }) => {
  return (
    <section className="utf_block_wrapper">
      <div className="container">
        <div className="row">
          <NewsFeedLeftSection
            pageType={pageType}
            queryKey={queryKey}
            isRobot={isRobot}
            ssrData={ssrData} />

          <NewsFeedRightSection />
        </div>
      </div>
    </section>
  );
};

export default NewsFeedSection;
