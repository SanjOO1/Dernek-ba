import { useAuth } from "lib/contexts/AuthContext";

function Event(props) {
  const { userData } = useAuth();

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mx-4 my-4">
      <div className="px-6 py-4 text-center ">
        <div className="font-bold font-mono text-black-500 text-xl mb-2">
          {props.name}
        </div>
        <p className="text-grey-700 text-base mb-2">
          {props.location}
          <br />
          {props.date}
          <br />
          {props.time}
        </p>
        {userData?.user?.email && (
          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:ring-yellow-300 hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition ease-in"
          >
            Add to favorite
          </button>
        )}
      </div>
    </div>
  );
}

export default Event;
