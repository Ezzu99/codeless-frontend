import React from "react";
import { Redirect, Route, Switch } from "react-router";
import AdminDashboard from "./AdminDashboard";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

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
    let users = 0;
    data[0].usersJoined.map((items) => {
      return users += items.value;
    })  

    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar />
            <div className="w-screen h-full bg-gray-100 flex flex-row overflow-hidden">
                <SideBar length={users}/>
                <Redirect from="/admin" to="/admin/dashboard" />
                <Switch>
                  <Route path="/admin/dashboard" component={() => <AdminDashboard data={data} />} />
                </Switch>
            </div>
        </div>
    )
}

export default AdminPanel;