import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

const campen = {
  white: "#fff",
  mainColor: "rgb(67, 192, 131)",
  darkMainColor: "rgb(34, 119, 88)",
  darkDarkGreen: "rgba(62, 204, 121, 0.18)",
  darkGreen: "rgba(34, 119, 88, 0.4)",
  lightGray: "rgb(234, 238, 236)",
  nomalGray: "rgb(212, 217, 214)",
  darkGray: "rgb(90, 94, 91)",
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={campen}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
