import React, { useState } from "react";
import "./App.css";
import "./App.scss";
import Language from "./components/i18/Language";
import Table from "./components/materialTable/Table";
import Toast from "./components/toaster/Toast";
import ModalExample from "./components/modal/ModalExample";
import Chart from "./components/react-chart/Chart";
import GoogleTranslate from "./components/googleTranslate/GoogleTranslate";
import DisplayRedux from "./components/redux-example/DisplayRedux";
import DarkMode from "./components/darkModeToggle/darkMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyles } from "./theme/global";
import Debounce from "./components/debounce/Debounce";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <div className="App">
          <h1>This is an example of i18next, material-table, sass</h1>
          <div>
            <Language />
          </div>
          <div>
            <Table />
          </div>
          <hr />
          <div>
            <Toast />
          </div>
          <div>
            <ModalExample />
          </div>
          <div style={{ width: "720px" }}>
            <Chart />
          </div>
          <div>
            <GoogleTranslate />
          </div>
          <div>
            <DisplayRedux />
          </div>
          <div>
            <GlobalStyles />
            <DarkMode theme={theme} setTheme={setTheme} />
          </div>
          <div>
            <Debounce />
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
