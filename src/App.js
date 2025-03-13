import React, { useState, useEffect } from "react"
import ReactLoading from 'react-loading';
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function App(prop) {
  const { profile } = prop
  const [posts, setPosts] = useState();
  const [returnsData, setReturnsData] = useState();
  const [instrument, setInstrument] = useState('ALL');

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/metrics.json?t=${new Date().getTime()}`);
        const data = await response.json();
        let formattedData = JSON.parse(JSON.stringify(data).replaceAll("'nan'", 'nan').replaceAll("'", '"').replaceAll('nan', '"nan"'));
        setPosts(formattedData);
      } catch (error) {
        console.error("Error loading metrics.json:", error);
      }
    })();
  }, []);

  const setContract = (val) => {
    if (val !== "ALL") {
      (async () => {
        try {
          const response = await fetch(`${process.env.PUBLIC_URL}/${val}_Chart.json?t=${new Date().getTime()}`);
          let data = await response.json();
          let formattedData = JSON.parse(JSON.stringify(data).replaceAll("'nan'", 'nan').replaceAll("'", '"').replaceAll('nan', '"nan"'));
          setReturnsData(formattedData);
          setInstrument(val);
        } catch (error) {
          console.error("Error loading JSON file:", error);
        }
      })();
    } else {
      setInstrument(val)
      setReturnsData(null)
    }
  }

  return (
    <div className="main-div">
      {!posts ? (
        <ReactLoading className='Loading-icon' type={'bars'} color={'#ffc107'} height={'76px'} width={'76px'} />
      ) : (
        <>
          <Sidebar setContract={setContract} displayAll={profile === 'athithan' ? true : false} />
          <Dashboard instrument={instrument} displayAll={profile === 'athithan' ? true : false} posts={posts} returnsData={returnsData} />
        </>)}
    </div>
  );
};
