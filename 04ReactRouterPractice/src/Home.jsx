import React from "react";
import { useParams } from "react-router-dom";

function Home() {
  const { user } = useParams();
  return <div>Hello {user}</div>;
}

export default Home;
