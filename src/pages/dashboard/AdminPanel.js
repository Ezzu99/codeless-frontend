import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import axios from "axios";
import AdminDashboard from "./AdminDashboard";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";
import Users from "./Users";
import { useState } from "react/cjs/react.development";

let request = axios.create({
  baseURL: 'something',
  headers: {
      post: {
          'Content-Type': 'application/json'
      }
  }
});

const data = [
  {
    usersJoined : [
      {
        value: 400
      },
      {
        value: 351
      },
      {
        value: 214
      },
      {
        value: 393
      },
      {
        value: 185
      },
      {
        value: 154
      },
      {
        value: 149
      },
      {
        value: 221
      },
      {
        value: 372
      },
      {
        value: 400
      },
      {
        value: 400
      },
      {
        value: 350
      }
    ]
  },
  {
    averageScore : [
      {
        name: "Regression",
        value: 84
      },
      {
        name: "Classification",
        value: 60
      },
      {
        name: "Clustering",
        value: 70
      }
    ]
  }
]

const AdminPanel = () => {
  const [user, setuser] = useState([
    {
      userID: 0,
      username: 'ezaan1999',
      name: 'Ezaan Ali',
      package: 'admin'
    }
  ]);

  let users = 0;
  data[0].usersJoined.map((items) => {
    return users += items.value;
  })

  useEffect(async () => {
    let res = await request.get('/something', {
      headers: {
        "Authorization": `${localStorage.getItem('token')}`
      }
    });

    setuser(res.data.user);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col">
      <NavBar />
      <div className="w-screen h-full bg-gray-100 flex flex-row overflow-hidden">
          <SideBar data={user} length={users}/>
          <Redirect from="/admin" to="/admin/dashboard" />
          <Switch>
            <Route path="/admin/dashboard" component={() => <AdminDashboard data={data} />} />
            <Route path="/admin/users" component={() => <Users />} />
          </Switch>
      </div>
    </div>
  )
}

export default AdminPanel;