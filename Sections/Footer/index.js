const FooterSection = () => {
  return (
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 text-center">
            <div className="utf_copyright_info">
              <span>Copyright © 2021 All Rights Reserved.</span>
            </div>
          </div>
        </div>
        <div id="back-to-top" className="back-to-top">
          <button className="btn btn-primary" title="Back to Top">
            <i className="fa fa-angle-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
