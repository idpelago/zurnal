import Link from "next/link";

const HeaderSection = () => {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 text-left">
            <div className="logo desktop-logo">
              <Link href={{ pathname: `/` }} >
                <h1>Zurnal.co</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
