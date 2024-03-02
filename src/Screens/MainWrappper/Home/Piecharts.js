import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";


const data = [
  { name: "Orthopedic", value: 17 },
  { name: "Nerology", value: 44 },
  { name: "Dental care", value: 55 },
  { name: "Gynocology", value: 41 },
];

const COLORS = ["#ff4560", "#008ffb", "#00e396", "#feb019"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataItem = payload[0].payload;
    const index = data.findIndex((item) => item.name === dataItem.name);
    return (
      <div
        style={{
          backgroundColor: COLORS[index],
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius:5,
          zIndex:1
        }}
      >
        {`${dataItem.name}:${dataItem.value}`}
      </div>
    );
  }
  return null;
};

function Piecharts() {
  // const totalValue = data.reduce((total, entry) => total + entry.value, 0);
  return (
    <div style={{ position: "relative" ,display:'flex',marginBottom:'30px'}}>
      <div style={{backgroundColor:'white',width:'75%',height:'300px',marginRight:'50px',borderRadius:'10px'}}></div>
      <PieChart width={300} height={300} style={{backgroundColor:'white',padding:'10px',borderRadius:'10px'}}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#8884d8"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
     
    </div>
  );
}

export default Piecharts;
