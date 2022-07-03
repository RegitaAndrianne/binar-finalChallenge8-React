import { useEffect, useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    // console.log('table component',props.form)

    if (props.form) {
      setUsername(props.form.username);
      setEmail(props.form.email);
      setExperience(props.form.experience);
      setLevel(props.form.level);
    }
  }, [props.form]);

  const usernameOnChangeHandle = (event) => {
    setUsername(event.target.value);
  };

  const emailOnChangeHandle = (event) => {
    setEmail(event.target.value);
  };

  const experienceOnChangeHandle = (event) => {
    setExperience(event.target.value);
  };

  const levelOnChangeHandle = (event) => {
    setLevel(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (props.form) {
      const data = {
        id: props.form.id,
        username: username,
        email: email,
        experience: experience,
        level: level,
      };

      props.onUpdatePlayer(data);
    } else {
      const data = {
        username: username,
        email: email,
        experience: experience,
        level: level,
      };
      props.onAddPlayer(data);
    }
    setUsername("");
    setEmail("");
    setExperience("");
    setLevel("");
  };

  return (
    <form className="form__control" onSubmit={onSubmit}>
      <div className="form__control">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={usernameOnChangeHandle}
        ></input>
      </div>
      <div className="form__control">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={emailOnChangeHandle}
        ></input>
      </div>
      <div className="form__control">
        <label>Experinece</label>
        <select
          name="experience"
          value={experience}
          onChange={experienceOnChangeHandle}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div className="form__control">
        <label>Level</label>
        <input
          type="number"
          value={level}
          onChange={levelOnChangeHandle}
        ></input>
      </div>

      <button type="submit" className="form__actions">
        Submit
      </button>
    </form>
  );
};

export default Form;
