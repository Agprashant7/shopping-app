
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Jan",
    items: 240,
    
  },
  {
    name: "Feb",
    items: 1398,
    
  },
  {
    name: "March",
    items: 9800,
    
  },
  {
    name: "April",
    items: 3908,
    
  },
  {
    name: "May",
    items: 4800,
    
  },
  {
    name: "June",
    items: 3800,
   
  },
  {
    name: "July",
    items: 4300,
    
  },
  {
    name: "August",
    items: 6300,
  
  },
  {
    name: "Sept",
    items: 5300,
  
  },
  {
    name: "Oct",
    items: 5900,
  
  },
  {
    name: "Nov",
    items: 3300,
   
  },
  {
    name: "Dec",
    items: 7300,
   
  }
];

 const Chart=()=> {
    const[aspectRatio,setAspectRatio]=React.useState(2.4)
	React.useEffect(()=>{
		
		if(window.innerWidth>0 && window.innerWidth < 500){
			setAspectRatio(1.4)
		}else if (window.innerWidth > 700){
			setAspectRatio(2.2)
		}
	},[])
  return (
    <ResponsiveContainer width="100%"  aspect={aspectRatio} >
    <LineChart
       width={800}
      data={data}
    //   margin={{
    //     top: 5,
    //     right: 30,
    //     left: 20,
    //     bottom: 5
    //   }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="items"
        stroke="#F9A109"
        activeDot={{ r: 8 }}
      />
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart
