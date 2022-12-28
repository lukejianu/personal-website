import { Helmet } from "react-helmet";
import "./styles.css"

function App() {
  return (
    <div>
      <div>
        <Helmet>
          <title>Luke Jianu</title>
          <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        </Helmet>
        <body>
          <h1>Luke Jianu</h1>
          <h2>
            <a href="https://github.com/lukejianu" target='_blank'>github</a>
            &nbsp;| <a href="mailto:jianuluke@gmail.com">contact</a>
            &nbsp;| <a href="LJ_Resume.pdf" target='_blank' rel="noopener noreferrer">cv</a>
          </h2>
          <h2>Northeastern University</h2>
        </body>
      </div>
    </div>
  );
}

export default App; 