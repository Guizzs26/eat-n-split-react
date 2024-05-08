import { useState } from "react";

import FriendsList from "./Components/FriendsList";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";
import Button from "./Components/Button";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
