import Child from "./components/Child" 

const App = () => {

  let childNames = ["Mikey", "Victoria", "Jerry"];

  //creates an array of 3 child components based on the children array
  let children = childNames.map((kid, index) => {

    return <Child key={new Date().getTime()} fname={kid}/>;

  })

  return (
    <>
      <h1>My kids are:</h1>
      {children};
    </>
  );
};

export default App;