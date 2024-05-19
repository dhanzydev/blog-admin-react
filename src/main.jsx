import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import SidebarContextProvider from "./context/SidebarContext";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <SidebarContextProvider>
        <RouterProvider router={router} />
      </SidebarContextProvider>
    </Provider>
  </React.StrictMode>
);
