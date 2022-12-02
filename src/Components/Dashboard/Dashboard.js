import React, { useContext } from 'react';
import "./dashboard.css";
import ourContext from "../Add Items/AddItems";

const Dashboard = () => {
  const topicList = useContext(ourContext)
  console.log(ourContext)
  return (
    <div>
        <h3>Add topics</h3>
    </div>
  )
}

export default Dashboard