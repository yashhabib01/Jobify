import StatItem from "./StatItem";
import { useAppContext } from "../context/useAppContext.js";
import { FaSuitcaseRolling, FaBug, FaCalendarCheck } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "pending application",
      count: stats.pending || 0,
      color: "#e9b949",
      bcg: "#fcefc7",
      icon: <FaSuitcaseRolling />,
    },
    {
      title: "interview scheduled",
      count: stats.interview || 0,
      color: "#647acb",
      bcg: "#e0e8f9",
      icon: <FaCalendarCheck />,
    },
    {
      title: "jobs declined",
      count: stats.decline || 0,
      color: "#d66a6a",
      bcg: "#ffeeee",
      icon: <FaBug />,
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
