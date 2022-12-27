import { Helmet } from "react-helmet";
import "./styles.css"

function App() {
  return (
    <div>
      <Helmet>
        <title>Luke Jianu</title>
      </Helmet>
      <body>
        <h1>Luke Jianu</h1>
        <h2><a href="https://github.com/lukejianu">github</a> | <a href="mailto:jianuluke@gmail.com">contact</a></h2>
        <h2>
          <p>
            Northeastern University
          </p>
        </h2>
      </body>
    </div>
  );
}

export default App; 