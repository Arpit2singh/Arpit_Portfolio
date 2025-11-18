import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend , LabelList } from "recharts";

const ThirdSection = () => {
  const [leetdata, setLeetdata] = useState(null);
  const [gfgdata, setgfgdata] = useState(null)
 
useEffect(() => {
  const fetchData = async()=>{
     const response = await fetch("https://portfolio-backend-wpgz.onrender.com/portfolio/gfgData");
      const data = await response.json();
      console.log(data)
      setgfgdata(data) ; 
    
  }
 fetchData();
  
}, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://leetcode-api-faisalshohag.vercel.app/arpitlibono57");
      const data = await response.json();
      console.log(data)
      setLeetdata(data);
    };
    fetchData();
  }, []);
  
  if (!leetdata) return <div>Loading...</div>;
   if (!gfgdata) return <div>Loading...</div>;

  const chartData1 = [
    { difficulty: "Easy", solved: leetdata.easySolved },
    { difficulty: "Medium", solved: leetdata.mediumSolved },
    { difficulty: "Hard", solved: leetdata.hardSolved },
  ];
  const chartData2 = [
    { difficulty: "Easy", solved: gfgdata.data.solvedStats.easy?.count },
    { difficulty: "Medium", solved: gfgdata.data.solvedStats.medium?.count },
    { difficulty: "Hard", solved: gfgdata.data.solvedStats.hard?.count },
  ];

  const BarChartComponent = ({data}) => {
  return (
 <BarChart width={500} height={150} data={data}>
  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" /> {/* grid lines in white */}
  
  <XAxis 
    dataKey="difficulty" 
    tick={{ fill: "#ffffff" }}  // tick labels in white
    stroke="#ffffff"             // axis line in white
  />
  
  <YAxis 
    tick={{ fill: "#ffffff" }}  // tick labels in white
    stroke="#ffffff"             // axis line in white
  />
  
  <Tooltip />
  <Legend wrapperStyle={{ color: "#ffffff" }} />  {/* legend text in white */}
  
  <Bar dataKey="solved" fill="#8884d8">
    <LabelList dataKey="solved" position="top" fill="#ffffff" /> {/* bar numbers in white */}
  </Bar>
</BarChart>

  );
};

  return (
    <div className="flex flex-nowrap p-4 gap-8 h-screen w-auto bg-transparent ">
      
      <div className='bg-gradient-to-br w-2/3 from-orange-400 via-red-500 to-pink-500 
        bg-clip-text text-transparent text-5xl font-extrabold leading-20 '>
        “I solve real-world problems through structured logic, optimized algorithms, 
        and clean code practices"
      </div>

      <div className='flex flex-col justify-between items-center gap-5' >
        <div className="w-full shadow-lg shadow-white bg-white/20 border-white/30 backdrop-blur-md   rounded-lg shadow p-4 flex justify-between items-center flex-col ">
        
        <div><BarChartComponent data={chartData1}  /></div>
        <div className='flex justify-center items-center gap-5  ' >  <img className= ' rounded-full h-[50px] w-[50px] object-cover ' src="data:image/png;base64,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" alt="" /> Total Solved {leetdata.totalSolved} </div>
     </div>

          <div className="w-full shadow-lg shadow-white bg-white/20 border-white/30 backdrop-blur-md   rounded-lg shadow p-4 flex justify-between items-center flex-col ">
        
        <div><BarChartComponent data={chartData2}  /></div>
        <div className='flex justify-center items-center gap-5  ' >  <img className= ' rounded-full h-[50px] w-[50px] object-cover ' src='data:image/png;base64,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' alt="" /> Total Solved {gfgdata.data.solvedStats.easy?.count +gfgdata.data.solvedStats.medium?.count + gfgdata.data.solvedStats.hard?.count} </div>
     </div>
     </div>
    </div>
  );
};

export default ThirdSection;
