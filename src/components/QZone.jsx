import swim from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playground from "../assets/playground.png";
import bg from "../assets/bg.png";

const QZone = () => {
  return (
    <div className="">
      <h2 className="font-semibold mb-3">Q-Zone</h2>
      <div className="w-full flex flex-col items-center bg-base-200 rounded-md">
        <img src={swim} alt="" />
        <img src={classImg} alt="" />
        <img src={playground} alt="" />
      </div>
        <img className="mt-5 w-full" src={bg} alt="" />
    </div>
  );
};

export default QZone;
