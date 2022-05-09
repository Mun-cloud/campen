import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ITEM_HEIGHT = 48;

export default function ItemCommentMenu({ comment }) {
  const go = useNavigate();
  const { item } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // 게시글 삭제 function
  const deleteClick = async () => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      if (item === null) {
        alert("로그인 해주시기 바랍니다.");
        go("/login");
      } else if (item.id === comment.members_id) {
        try {
          await axios.delete(`${process.env.BACK}/comments`, {
            data: {
              id: comment.id,
            },
          });
          alert("댓글이 삭제되었습니다.");
        } catch (err) {
          alert("댓글 삭제에 실패했습니다.");
        }
      } else {
        alert("댓글 작성자가 아닙니다.");
        return;
      }
    } else {
      return;
    }
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
          <MenuItem onClick={deleteClick}>삭제하기</MenuItem>
        </Menu>
      </Backdrop>
    </div>
  );
}
