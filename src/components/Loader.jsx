
import { ThreeCircles } from 'react-loader-spinner'; // Import a spinner component from the library

const Loader = () => {
  return (
    <div className="flex items-center justify-center max-h-screen mt-52">
      <ThreeCircles
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="three-circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  );
};

export default Loader;
