import React from "react";
import SkillListItem from "./SkillListItem";

const ReactList = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill, idx) => (
        <SkillListItem className="SkillListItem" skill={skill} key={idx} />
      ))}
    </ul>
  );
};

export default ReactList;
