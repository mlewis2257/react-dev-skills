import React from "react";
import "./SkillListItem.css";

const ReactListItem = ({ skill, idx }) => {
  return (
    <li className="SkillListItem">
      Skill: {skill.name} <span className="level">Level: {skill.level}</span>
    </li>
  );
};

export default ReactListItem;
