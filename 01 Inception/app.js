// const root = document.getElementById("root");

// const heading = document.createElement("h1");

// heading.innerText = "Hello World!";

// root.appendChild(heading);

// using react CDN

const root = ReactDOM.createRoot(document.getElementById("root"));

const greet = React.createElement(
  "h1",
  { id: "greet" },
  "good morning everyone!"
);

const div = React.createElement("div", {}, [greet]);

root.render(div);
