import BasicHeaderBar from "../components/BasicHeaderBar";

const MyActive = () => {
  return (
    <div>
      <BasicHeaderBar title="나의 활동" />
      <div>
        <a href="#">
          <div className="myArticleBox">
            <div className="myArticleDate">22.02.10</div>
            <div className="myArticleTitleBox">
              <div className="myArticleTitle">
                <h3>캠핑톡톡</h3>
                <div className="myArticleSub">
                  이번 캠핑에 다녀온 후기를 남깁니다.
                </div>
              </div>
              <div className="myArticleImg">
                {" "}
                <img
                  src="data:image/png;base64,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"
                  alt="커뮤니티"
                />
              </div>
            </div>
            <div className="myArticleInfo">
              <div className="myArticleViews">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#9fa5a2"
                >
                  <path
                    d="M17.24 8.73924L17.2399 8.73931L17.246 8.75C17.2899 8.826 17.313 8.91223 17.313 9C17.313 9.08379 17.292 9.16617 17.2519 9.23959C16.7329 10.029 15.6127 11.6062 14.1333 12.9841C12.6317 14.3826 10.8411 15.5 8.98906 15.5C7.13574 15.5 5.36727 14.4011 3.885 13.0193C2.41639 11.6502 1.30502 10.0748 0.767126 9.2657C0.715147 9.18499 0.6875 9.09102 0.6875 8.995C0.6875 8.89895 0.715156 8.80496 0.767126 8.72426C1.30296 7.91831 2.43177 6.3446 3.91098 4.97714C5.40462 3.59632 7.17496 2.50064 8.99746 2.5C11.1433 2.5144 12.9687 3.62954 14.3957 4.99612C15.8207 6.36067 16.7993 7.93047 17.24 8.73924Z"
                    stroke="current"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M12.418 9.02997C12.418 10.963 10.851 12.53 8.91797 12.53C6.98497 12.53 5.41797 10.963 5.41797 9.02997C5.41797 7.09697 6.98497 5.52997 8.91797 5.52997C10.851 5.52997 12.418 7.09697 12.418 9.02997Z"
                    stroke="current"
                    stroke-miterlimit="10"
                  ></path>
                </svg>
                0
              </div>
              <div className="myArticleHearts">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00012 15.6829C8.91651 15.6822 8.83427 15.6616 8.76012 15.6229C8.47012 15.4629 1.50012 11.6229 1.50012 6.69292C1.41347 5.77479 1.64673 4.85494 2.16042 4.08904C2.6741 3.32314 3.43666 2.75824 4.319 2.49001C5.20134 2.22178 6.14926 2.26667 7.00231 2.61709C7.85535 2.9675 8.56112 3.60191 9.00012 4.41292C9.43913 3.60191 10.1449 2.9675 10.9979 2.61709C11.851 2.26667 12.7989 2.22178 13.6812 2.49001C14.5636 2.75824 15.3261 3.32314 15.8398 4.08904C16.3535 4.85494 16.5868 5.77479 16.5001 6.69292C16.5001 11.6929 9.50013 15.4629 9.24013 15.6229C9.16598 15.6616 9.08374 15.6822 9.00012 15.6829V15.6829ZM5.73012 3.43294C4.8699 3.43823 4.04687 3.78432 3.44141 4.39541C2.83595 5.00649 2.49746 5.83269 2.50012 6.69292C2.50012 10.5829 7.80012 13.9029 9.00012 14.6029C10.2001 13.9029 15.5001 10.6029 15.5001 6.69292C15.5028 5.83269 15.1643 5.00649 14.5588 4.39541C13.9534 3.78432 13.1303 3.43823 12.2701 3.43294C11.0401 3.43294 9.98013 4.59294 9.44013 5.58294C9.39515 5.65969 9.33087 5.72334 9.25368 5.76757C9.17649 5.8118 9.08908 5.83504 9.00012 5.83504C8.91116 5.83504 8.82376 5.8118 8.74657 5.76757C8.66938 5.72334 8.6051 5.65969 8.56012 5.58294C8.02012 4.59294 6.96012 3.43294 5.73012 3.43294Z"
                    fill="#9FA5A2"
                  ></path>
                </svg>
                0
              </div>
              <div className="myArticleComments">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2 3.00153C13.4364 3.00153 13.6704 3.04806 13.8888 3.13852C14.1072 3.22898 14.3056 3.36157 14.4728 3.52872C14.6399 3.69586 14.7725 3.89428 14.863 4.11267C14.9534 4.33106 15 4.56513 15 4.80151V10.4015C14.9974 10.8781 14.8069 11.3344 14.4699 11.6714C14.1329 12.0084 13.6766 12.1989 13.2 12.2015H10.41L10.13 12.7315L9 14.8615L7.87 12.7315L7.59 12.2015H4.8C4.32342 12.1989 3.8671 12.0084 3.53011 11.6714C3.19311 11.3344 3.00263 10.8781 3 10.4015V4.80151C3 4.32412 3.18964 3.86628 3.52721 3.52872C3.86477 3.19115 4.32261 3.00153 4.8 3.00153H13.2ZM13.2 2.00153H4.8C4.0574 2.00153 3.3452 2.29652 2.8201 2.82162C2.295 3.34673 2 4.05891 2 4.80151V10.4015C2 11.1441 2.295 11.8563 2.8201 12.3814C3.3452 12.9065 4.0574 13.2015 4.8 13.2015H6.99001L8.28999 15.6515C8.37415 15.7596 8.48185 15.847 8.60489 15.9071C8.72793 15.9672 8.86306 15.9984 9 15.9984C9.13694 15.9984 9.27207 15.9672 9.39511 15.9071C9.51815 15.847 9.62585 15.7596 9.71001 15.6515L11.01 13.2015H13.2C13.5677 13.2015 13.9318 13.1291 14.2715 12.9884C14.6112 12.8477 14.9199 12.6414 15.1799 12.3814C15.4399 12.1214 15.6462 11.8127 15.7869 11.473C15.9276 11.1333 16 10.7692 16 10.4015V4.80151C16 4.43381 15.9276 4.06972 15.7869 3.73001C15.6462 3.3903 15.4399 3.08163 15.1799 2.82162C14.9199 2.56162 14.6112 2.35537 14.2715 2.21466C13.9318 2.07395 13.5677 2.00153 13.2 2.00153Z"
                    fill="#9FA5A2"
                  ></path>
                </svg>
                0
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MyActive;
