import CardContainer from "./components/CardContainer";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";
import { sortArr } from "./helper";

const App = () => {

  let users = [
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Alice", age: 25 }
  ];

  let sorted = sortArr(users);

  let userCards = sorted.map((user, index) => (
    <UserCard key={index} name={user.name} age={user.age} />
  ))

  return (
    <div>
      <Greeting name="Mike"/>
      <CardContainer>
      {userCards}
      </CardContainer>
    </div>
  );
};

export default App