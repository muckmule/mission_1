import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { PulseLoader } from "react-spinners";
import { IoArrowBack } from "react-icons/io5";
import Summary from "./Summary/index";
import { useDetailIssue } from "../../hooks/useDetailIssue";

const Detailed = () => {
  const { owner, repo, number } = useParams();
  const navigate = useNavigate();

  const [issue, runGetDetailIssue] = useDetailIssue();

  useEffect(() => {
    runGetDetailIssue(owner, repo, number);
  }, []);

  return (
    <Container>
      {issue ? (
        <>
          <button className="back-btn" onClick={() => navigate(-1)}>
            <IoArrowBack />
          </button>
          <article className="summary">
            <img
              src={issue?.writer?.profileUrl}
              alt="이슈 작성자 프로필 이미지"
            />
            <Summary issue={issue} />
            <li></li>
          </article>
          <article className="content">
            <Markdown>{issue?.content}</Markdown>
          </article>
        </>
      ) : (
        <LoadingContainer>
          <PulseLoader color="#000" size={10} />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default Detailed;

const Container = styled.div`
  position: relative;

  li {
    list-style: none;
  }

  button.back-btn {
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    top: -58px;
    left: 10px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }

  article.summary {
    display: flex;
    align-items: center;

    img {
      width: 48px;
      height: 48px;
    }
  }

  article.content {
    padding: 24px 12px 12px 12px;
    white-space: pre-wrap;
    overflow: hidden;

  }
`;
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;
