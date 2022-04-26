import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";

const ITEM_HEIGHT = 48;

export default function MenuBtn({ content }) {
  const { item } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [writer, setWriter] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 작성자 감지
  useEffect(() => {
    if (content?.members_id === item?.id) {
      setWriter(true);
    }
  }, [content, item]);

  const shareClick = (copy) => {
    // 흐름 1.
    if (!document.queryCommandSupported("copy")) {
      return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }
    // 흐름 2.
    const text = document.createElement("textarea");
    text.value = `http://localhost:3000/board/${content.id}`;
    text.style.top = 0;
    text.style.left = 0;
    text.style.position = "fixed";
    // 흐름 3.
    document.body.appendChild(text);
    // focus() -> 사파리 브라우저 서포팅
    text.focus();
    // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
    text.select();
    // 흐름 4.
    document.execCommand("copy");
    // 흐름 5.
    document.body.removeChild(text);
    alert("주소가 복사되었습니다.");
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Backdrop
        sx={{ color: "#000", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={() => shareClick(window.location.href)}>
            공유하기
          </MenuItem>
          <MenuItem onClick={handleClose}>수정하기</MenuItem>
          <MenuItem onClick={handleClose}>삭제하기</MenuItem>
        </Menu>
      </Backdrop>
    </div>
  );
}
