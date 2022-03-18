import styled from "styled-components";

const TagBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  .tag {
    display: inline-block;
    font-size: 12px;
    margin: 0 4px;
    padding: 6px 10px;
    border-radius: 20px;
    background-color: #c1efd9;
    color: #268764;
  }
`;

const SearchTagBox = () => {
  return (
    <TagBox>
      <span className="tag">#경기도캠핑장</span>
      <span className="tag">#키즈캠핑장</span>
      <span className="tag">#서울인근캠핑장</span>
    </TagBox>
  );
};

export default SearchTagBox;
