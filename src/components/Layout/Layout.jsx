import Nav from "../Nav/Nav";
import "../../assets/css/global.css"

const Layout = ({ children }) => {
    return (
      <div className="container">
        <Nav />
        {children}
      </div>
    );
  };
export default Layout;
