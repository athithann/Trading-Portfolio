import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Metrics from "./Metrics";
import Charts from "./Charts";
import scrollreveal from "scrollreveal";

export default function Dashboard(prop) {
  const { displayAll, instrument, posts, returnsData } = prop
  const extraData = posts[instrument].extras;
  const allChartsData = posts[instrument].historical;
  const [isInverseContract, SetIsInverseContract] = useState(false);
  const [month, setMonth] = useState(posts[instrument].usd.Month);
  const [metricsData, setMetricsData] = useState(posts[instrument].usd);
  const [instrumentChartsData, setInstrumentChartsData] = useState();


  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .column__one,
        .column__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  useEffect(() => {
    setMonth(posts[instrument].usd.Month)
    setMetricsData(posts[instrument].usd)
    SetIsInverseContract(false)
  }, [instrument]);

  useEffect(() => {
    if (returnsData) {
      returnsData.historical.forEach((item, index) => {
        item['Unrealised USD Returns'] = item['USD Returns'];
        item['Unrealised ' + instrument + ' Returns'] = item[instrument + ' Returns'];
      });
      returnsData.historical[returnsData.historical.length - 1]['Unrealised USD Returns'] = returnsData.extras['Unrealised USD Returns'];
      returnsData.historical[returnsData.historical.length - 1]['Unrealised ' + instrument + ' Returns'] = returnsData.extras['Unrealised ' + instrument + ' Returns'];
      setInstrumentChartsData(returnsData.historical)
    }
  }, [returnsData, instrument]);

  const setContractType = (val) => {
    if (val) {
      if (posts[instrument].usd) {
        setMonth(posts[instrument].usd.Month)
        setMetricsData(posts[instrument].usd)
      }
    } else {
      setMonth(posts[instrument].crypto.Month)
      setMetricsData(posts[instrument].crypto)
    }
    SetIsInverseContract(!val)
  }

  return (
    <section className="dashboard-section">
      <Navbar instrument={instrument} isInverseContract={isInverseContract} setContractType={setContractType} />
      <div className="grid">
        <div className="column__one">
          <Metrics instrument={instrument} posts={metricsData} />
        </div>
        <div className="column__two">
          <Charts instrument={instrument} displayAll={displayAll} isInverseContract={isInverseContract} month={month} instrumentChartsData={instrumentChartsData} allChartsData={allChartsData} extraData={extraData}/>
        </div>
      </div>
    </section>
  );
};
