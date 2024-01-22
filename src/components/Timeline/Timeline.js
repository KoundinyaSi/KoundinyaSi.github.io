import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool, FaStar } from "react-icons/fa";
import { timelineData } from "./TimelineData";
import { FaMapSigns } from "react-icons/fa";

const Timeline = () => {
  return (
    <div id="timeline">
      <h1 id="timeline-heading"><FaMapSigns color="brown" /> My Journey </h1>
      <VerticalTimeline>
        {timelineData.map((elem) => {
          return (
            <VerticalTimelineElement
              key={elem.id}
              className={"vertical-timeline-element--" + elem.type}
              contentStyle={{
                ...(elem.id % 2 == 0
                  ? {
                      background: `linear-gradient(to left,  #141a24, #150050)`,
                    }
                  : {
                      background: `linear-gradient(to right,  #141a24, #150050)`,
                    }),
              }}
              contentArrowStyle = {{
                color: "black"
              }}
              date={elem.timelineObj.time}
              iconStyle={{ background: "black", color: "#fff" }}
              icon={elem.type == "work" ? <FaBriefcase /> : <FaSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                {elem.timelineObj.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {elem.timelineObj.organization}
              </h4>
              <p>{elem.timelineObj.description}</p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
