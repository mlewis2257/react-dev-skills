import SkillsList from "./components/SkillsList";
import NewSkillForm from "./components/NewSkillForm";
import { useState } from "react";
import "./App.css";

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ]);

  const addSkill = (skill) => {
    setSkills([...skills, skill]);
  };

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillsList skills={skills} />
      <hr></hr>
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}

export default App;
