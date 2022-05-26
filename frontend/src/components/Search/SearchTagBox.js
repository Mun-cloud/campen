import styled from "styled-components";

const TagBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 50px;
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

const SearchTagBox = ({ item }) => {
  if (!item.tag) return null;
  return (
    <TagBox>
      {/* 태그값을 정렬화하여 값 앞에 #을 붙여주고 반복문 수행 */}
      {item.tag
        .split(", ")
        .map((word) => (word.startsWith("#") ? word : `#${word}`))
        .map((tag, index) => (
          <span className="intro_tag" key={index}>
            {tag}
          </span>
        ))}
    </TagBox>
  );
};

export default SearchTagBox;
