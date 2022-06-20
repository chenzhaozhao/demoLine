import React, { useState, useEffect, useMemo, CSSProperties } from "react";
import { Line } from "@ant-design/plots";
const DemoLine = () => {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    const K = 1;
    const result1 = await fetch("http://43.129.181.196/btcactiveaddress");
    const result2 = await result1.json();
    const ActiveBTCS = result2.map(([date, value]) => ({
      date,
      value: Math.floor(value || 0),
      type: "BTC活跃地址数",
    }));
    const zipfs = result2.map(([date, value]) => ({
      date,
      value: Math.floor(K * value * Math.log(value) || 0),
      type: "Zipf指数",
    }));
    setData([...ActiveBTCS, ...zipfs]);
  };
  const config = {
    autoFit: true,
    height: 550,
    data,
    xField: "date",
    yField: "value",
    seriesField: "type",
    tooltip: {
      showMarkers: false,
    },
  };
  const styles: CSSProperties = useMemo(() => {
    if (width) {
      return {
        width: `${width}px`,
      };
    }
    return {};
  }, [width]);
  const btnClick=()=>{
      if(!width){
        setWidth(10000)
      }else{
        setWidth(0)
      }
  }
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center'}} >
        <button onClick={btnClick}>{width?'查看粗略':"查看详细"}</button>
      </div>
      <Line {...config} style={styles} />
    </div>
  );
};
export default DemoLine;
