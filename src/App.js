import { Helmet } from "react-helmet";
import "./styles.css"

function App() {
  return (
    <div>
      <div>
        <Helmet>
          <title>Luke Jianu</title>
          <link rel="icon" type="image/png" href="favicon3.ico" sizes="16x16" />
        </Helmet>
        <body>
          <h1>Luke Jianu</h1>
          <h2>
            <a href="https://github.com/lukejianu" target="_blank" rel="noopener noreferrer">github</a>
            &nbsp;| <a href="mailto:jianuluke@gmail.com">contact</a>
            &nbsp;| <a href="https://drive.google.com/file/d/1QQkqg_NfcTSGPe1-gAUkHBPdJFvbEcG1/view?usp=sharing" target="_blank" rel="noopener noreferrer">cv</a>
            &nbsp;| <a href="https://nikhilsardana.github.io/" target="_blank" rel="noopener noreferrer">credit</a>
          </h2>
          <h2>Northeastern University</h2>
        </body>
      </div>
    </div>
  );
}

export default App; 