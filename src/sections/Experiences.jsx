import { Timeline } from "../components/Timeline";
import { experiences } from "../contants";

const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
