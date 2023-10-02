import React from "react";
import { useState } from "react";
import "./NewSkillForm.css";

const NewSkillForm = ({ addSkill }) => {
  const [formData, setFormData] = useState({
    name: "",
    level: 3,
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addSkill(formData);
    setFormData({
      name: "",
      level: 3,
    });
  };
  return (
    <form action="" className="NewSkillForm" onSubmit={handleSubmit}>
      <label htmlFor="">Skill</label>
      <input
        type="text"
        id="skill"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Type New Skill"
      />
      <label htmlFor="">Level</label>
      <select
        name="level"
        value={formData.level}
        id="level"
        onChange={handleChange}
      >
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
