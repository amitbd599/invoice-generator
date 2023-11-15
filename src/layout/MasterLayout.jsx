import { Link } from "react-router-dom";
const MasterLayout = (props) => {
  return (
    <section>
      {/* sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="logo">
          <img src="/assets/img/Invoice.png" alt="" className="img-fluid" />
        </div>
        {/* Menu */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">All Invoice</Link>
            </li>
            <li>
              <Link to="/">Image to pdf</Link>
            </li>
            <li>
              <Link to="/">Setting</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="body">{props.children}</div>
    </section>
  );
};

export default MasterLayout;
