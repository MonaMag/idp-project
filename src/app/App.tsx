import React from "react";
import "./styles/index.scss";
import { ConfigProvider } from "antd";
import AppRouter from "./router/AppRouter";
import { Sidebar } from "../widgets/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#d36207",
            colorBgBase: "#fff",
            colorTextBase: "rgba(235,124,32,0.2)",
            colorBorder: "#eb7c20",
            fontSize: 16,
          },
        }}
      >
        <Sidebar />
        <AppRouter />
      </ConfigProvider>
    </div>
  );
}
export default App;
