//pass props, its destructured here
const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {} , [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ])
}

const App = () => {
  return React.createElement("div", { id:'try'}, [
    React.createElement("h1", {}, 'Adopt Me!'), 
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Bichon"}),
    React.createElement(Pet, { name: "Grumpy", animal: "Cat", breed: "Mixed"}),
    React.createElement(Pet, { name: "Rain", animal: "Dog", breed: "Maltese"}),
  ])
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));