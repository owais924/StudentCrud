import { useState } from "react";
export default function EventChange() {
  const [name, setName] = useState("owais");
  return (
    <div className="EventChange">
      <input type="text " value={name} onChange={(e) => setName(e.target.value)} />
      <h1>Name is {name}</h1>
    </div>
  );
}