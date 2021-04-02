import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import "./App.css";

const baseURL = "https://api.github.com/users/defunkt";

function App() {
  const [user, setUser] = useState({});
  const [active, setActive] = useState(false);

  // useEffect(() => {
  //   let cardData = getUserInfo();
  //   setUser(() => cardData);
  // }, []);
  // console.log(user);

  let handleToggle = () => {
    setActive(!active);
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => setUser(data));
  };

  return (
    <>
      {active ? (
        <Card>
          <Card.Img src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <p>{user.bio}</p>
              <p>Location: {user.location}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        " "
      )}
      <Button onClick={handleToggle}>Toggle</Button>;
    </>
  );
}

export default App;
