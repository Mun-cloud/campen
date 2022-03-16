const BasicHeaderBar = ({ title }) => {
  return (
    <div className="pop_header">
      <div className="pop_chev go_main">
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="pop_title">{title}</div>
    </div>
  );
};

export default BasicHeaderBar;
