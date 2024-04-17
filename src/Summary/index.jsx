import { Link, useNavigate } from "react-router-dom";

const Summary = ({ issue, index }) => {
  const navigate = useNavigate();

  return (
    <>
      {issue?.type === "post" ? (
        <Container
          key={index}
          onClick={() => {
            navigate(`/detail/facebook/react/${issue.number}`);
          }}
        >
          <>
            <span className="title">
              #{issue.number}&nbsp;{issue.title}
              <p className="meta">
                작성자:&nbsp;{issue.writer.name}, 작성일:&nbsp;{issue.createdAt}
              </p>
            </span>
            <span className="comments">코멘트:&nbsp;{issue.comments}</span>
          </>
        </Container>
      ) : (
        <Container>
          <div className="ad">
            <Link to="https://www.wanted.co.kr">
              <img src="img/ad.jpg" alt="원티드 광고 배너" />
            </Link>
          </div>
        </Container>
      )}
    </>
  );
};

export default Summary;

const Container = styled.li`
  flex: 1;
  margin: 0 20px;
  padding: 12px 0;
  font-size: 1.2rem;
  list-style: none;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  .ad {
    width: 100%;

    img {
      width: 100%;
      height: 64px;
      object-fit: cover;
    }
  }

  span.title {
    p.meta {
      margin: 0;
      font-size: 0.8rem;
    }
  }
  span.comments {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
