import { useState } from "react";

const AddFriend = () => {
  const [friends, setFriends] = useState(["John", "Peter", "Mark"]);
  const add = () =>{
    setFriends([...friends,'Salman'])
  }
  const remove = () =>{
    setFriends(friends.filter(f=> f!=='John'))
  }
  const update = () =>{
    setFriends(friends.map(f=> f==='Salman'? 'Johny':f))
  }
  return (
    <div>
      <button onClick={add} >add</button>
      <button onClick={remove} >remove</button>
      <button onClick={update} >update</button>
      {friends.map((f, i)=>{
        return <div key={i}>{f}</div>
      })}
    </div>
  );
};
export default AddFriend