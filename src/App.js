import React from "react";
// import instance from './network/axios';
import styled from "styled-components";
// import router from "./Router";
import MyStore from "store";
import ListPage from "./view/page/list";


function App() {
  return (
    <Body>

        <Header>
        Organization Name / Repository Name
        </Header>
        <MyStore.Provider value={{ list, setList }}>
          <layout>
            <ListPage />
          </layout>
        </MyStore.Provider>
    
    </Body>
    

    

    
  );
}

const Body = styled.div`
  margin: 0rem auto;
  padding: 0rem 6rem;
  background-color: ivory;


`;

const Header = styled.header`
  background: white;
  position: fixed;
  flexDirection: column;
  text-align: center;
  display: flex;
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 50px;
`;


export default App;

