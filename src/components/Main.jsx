import { useState } from "react";
import Container from "./Container";
import FormBox from "./Form";
import List from "./List";
import "../index.css";
const Main = () => {
  let [userInfos, setUserInfos] = useState([]);
  let getUserInfo = (user) => {
    setUserInfos([...userInfos, user]);
  };
  return (
    <section className='main'>
      <Container>
        <FormBox getUserInfo={getUserInfo} />
      </Container>
      <Container>
        <List userInfos={userInfos} />
      </Container>
    </section>
  );
};

export default Main;
