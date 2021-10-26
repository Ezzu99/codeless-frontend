import React from "react";
import { BarChart, Bar } from 'recharts';
import { XAxis } from "recharts/lib/cartesian/XAxis";
import { Tooltip } from 'recharts/lib/component/Tooltip';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="px-3 py-2 bg-white border-2 text-indigo-500 rounded-md shadow-lg">
          <p className="label">{
              (label === 'Reg') ?
              "Regression " :
              (label === "Clu") ?
              "Clustering " : "Classification "
          }{`${payload[0].value} times`}</p>
        </div>
      );
    }
  
    return null;
};

const ActivityCard = (props) => {
    const index = props.index;
    const data = props.data.value;

    return (
        <div className="mx-7 mb-2 px-7 py-4 bg-white rounded-lg shadow-lg flex flex-col items-start justify-start">
            <h1 className="text-md text-gray-500 font-bold">{props.data.aName}</h1>
            {
                (index === 0) ? 
                <BarChart width={175} height={150} data={data}>
                    <XAxis dataKey="name" />
                    <Tooltip allowEscapeViewBox={{ y: true }} content={<CustomTooltip />}/>
                    <Bar dataKey="value" fill="#6366F1" />
                </BarChart> :
                <p className="text-indigo-600">{props.data.value}</p>
            }
        </div>
    );
}

export default ActivityCard;