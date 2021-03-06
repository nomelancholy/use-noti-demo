import React from "react";
import useNoti from "use-noti";
import './App.css'

function App() {
  const title = "title you want";
  const options = { body: "body you want" };

  const notificationClickHandle = useNoti(title, options);

  return (
    <div className="App">
      <button onClick={notificationClickHandle}>notification</button>
    </div>
  );
}

export default App;