const Skills = ({ skills }) => {
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </>
  );
};

export default Skills;
