import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "lib/constants";
import { useAuth } from "lib/contexts/AuthContext";

function Navigation() {
  const { userData } = useAuth();

  return (
    <div className="">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="bg-yellow-500 text-right text-xl    font-mono px-4"
      >
        <div>{userData?.user?.email && `Hello, ${userData?.user?.email}`}</div>
        <div>
          <Link to={ROUTE_PATHS.SIGN_IN}>Sign In</Link> /{" "}
          <Link to={ROUTE_PATHS.SIGN_IN}>Register</Link>
        </div>
      </div>
      <div className="bg-slate-100 items-center justify-center    text-2xl font-mono p-4 flex flex-row">
        <div className="navbar-item px-5 py-1 mx-2 flex">
          <h3 className="">Kvote</h3>
          <div className="mt-2.5 ml-1 text-sm">
            <BsChevronDown />
          </div>
        </div>

        <div className="navbar-item px-5 py-1 mx-2 flex">
          <h3 className="">Izdvajamo</h3>
          <div className="mt-2.5 ml-1 text-sm">
            <BsChevronDown />
          </div>
        </div>

        <div className="navbar-item px-5 py-1 mx-2 flex">
          <h3 className="">Najave</h3>
          <div className="mt-2.5 ml-1 text-sm">
            <BsChevronDown />
          </div>
        </div>

        <div className="navbar-item px-5 py-1 mx-2 flex">
          <h3 className="">Najtrazenije</h3>
          <div className="mt-2.5 ml-1 text-sm">
            <BsChevronDown />
          </div>
        </div>

        <div className="navbar-item px-5 py-1 mx-2 flex">
          <h3 className="">Slike</h3>
          <div className="mt-2.5 ml-1 text-sm">
            <BsChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
