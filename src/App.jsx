import FriendsList from "./Components/FriendsList";
import FormAddFriend from "./Components/FormAddFriend";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}
