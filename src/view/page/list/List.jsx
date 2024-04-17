import styled from "styled-components";
import React from "react";
// import {useNavigate} from "react-router-dom"

const List = () => {
  const [list, runGetIssue, getMoreIssue, scrollLoading] = useIssueList();
  const [issueRef, issueViewRef] = useInView();

  useEffect(() => {
    runGetIssue();
  }, []);

  useEffect(() => {
    if (issueViewRef) {
      getMoreIssue();
    }
  }, [issueViewRef]);
  return (
    <Container>
    <ul>
      {list?.map((issue, index) => (
        <Summary issue={issue} key={index} />
      ))}
    </ul>
    <span className="infinity-scroll-ref" ref={issueRef}>
      {scrollLoading && (
        <PulseLoader size={12} style={{ margin: "12px 0" }} />
      )}
    </span>
  </Container>

  );
}
  
export const Container = styled.div`
  font-size: 1rem;
  text-align: start;

  ul {
    margin: 0;
    padding: 0;
  }

  span.infinity-scroll-ref {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;

export default List;