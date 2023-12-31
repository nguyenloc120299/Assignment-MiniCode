
import RenderRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider, Spin, theme as a } from "antd";
function App() {
  return (
    <ConfigProvider>
      <div className="App" id="scrollableDiv">
        <Router>
          <RenderRouter />
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;
