import React from "react";
import { useState } from "react";
import "./NewSkillForm.css";

const NewSkillForm = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState(3);
  const [skills, setSkills] = useState([]);

  const handleChange = (evt) => {
    evt.preventDefault();
    setName(evt.target.value);
  };

  const levelChange = (evt) => {
    evt.preventDefault();
    setLevel(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newSkill = {
      name,
      level: parseInt(level),
    };

    setSkills([...skills, newSkill]);
    setName("");
    setLevel(3);
  };
  return (
    <form action="" className="NewSkillForm" onSubmit={handleSubmit}>
      <label htmlFor="">Skill</label>
      <input type="text" id="skill" value={name} onChange={handleChange} />
      <label htmlFor="">Level</label>
      <select name={level} id="level" onChange={levelChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">Add New Skill</button>
    </form>
  );
};

export default NewSkillForm;
