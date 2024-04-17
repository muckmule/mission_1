import styled from "styled-components";

const Header = ({ owner, repo }) => {
  return (
    <Container>
      {owner} / {repo}
    </Container>
  );
};


export default Header;

export const Container = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0.3rem;
  margin-bottom: 2rem;

`;