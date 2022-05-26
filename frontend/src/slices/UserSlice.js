/**
 * 작성자 : 문태호
 * 기능 : 유저 로그인 정보를 Redux store에 저장하고 리턴함.
 */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** 비동기 처리 함수 구현 */
// 여러개의 Slice가 사용되는 경우 함수에 적용되는 별칭이 다른 파일과 중복되지 않도록 "파일명/함수별칭" 등으로 지정해야 한다.
export const getUserData = createAsyncThunk(
  "USER/GET_DATA",
  async ({ user_id, user_pw, rejectWithValue }) => {
    let result;
    try {
      result = await axios.post(`/api/member/login`, {
        user_id,
        user_pw,
      });
    } catch (err) {
      result = rejectWithValue(err.response);
    }
    return result;
  }
);

/** Slice 정의 (Action함수 + Reducer의 개념) */
const userSlice = createSlice({
  // slice 별칭
  name: "user",
  /** state값 구조 정의 */
  initialState: {
    rt: null, // HTTP 상태 코드 (200, 404, 500 등)
    rtmsg: null, // 에러메세지
    item: null, // Ajax 처리를 통해 수신된 데이터
    loading: false, // 로딩 여부
    login: false,
  },
  // 내부 action 및 동기 action (Ajax처리시에는 사용하지 않음)
  reducer: {},
  // 외부 action 및 비동기 action
  extraReducers: {
    /** Ajax 요청 준비 */
    [getUserData.pending]: (state, { payload }) => {
      // state값을 적절히 수정하여 리턴한다.
      return { ...state, loading: true };
    },
    /** Ajax 요청 성공 */
    [getUserData.fulfilled]: (state, { meta, payload }) => {
      if (meta.arg.page > 1) {
        payload.data.item = state.item.item.concat(payload.data.item);
      }
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data.item[0],
        loading: false,
        login: true,
      };
    },
    [getUserData.rejected]: (state, { payload }) => {
      return {
        ...state,
        rt: payload?.status ? payload.status : "500",
        rtmsg: payload?.statusText ? payload.statusText : "Server Error",
        item: payload?.data,
        loading: false,
        login: false,
      };
    },
  },
});

export default userSlice.reducer;
