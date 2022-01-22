import Link from "next/link";

const HeaderSection = () => {
  return (
    <header id="header" className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-2 text-left">
            <div className="logo desktop-logo">
              <Link href={{ pathname: `/` }}>
                <a>
                  <h1>Zurnal.co</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
