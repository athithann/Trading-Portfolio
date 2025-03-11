import React, { useEffect } from "react";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Cell, XAxis, YAxis, BarChart, AreaChart, Bar, Area, Tooltip, ReferenceLine, ResponsiveContainer } from "recharts";

export default function Charts(prop) {
  const { displayAll, instrument, isInverseContract, week, month, instrumentChartsData, allChartsData, extraData } = prop

  useEffect(() => {
    allChartsData.forEach((item, index) => {
      item['Date'] = item['D'];
      item['USD Returns'] = item['U R'];
      item['BTC Returns'] = item['B R'];
      item['USD Drawdown'] = item['U Dd'];
      item['USD Drawup'] = item['U Du'];
      item['BTC Drawdown'] = item['B Dd'];
      item['BTC Drawup'] = item['B Du'];
      
      item['ADA-USD'] = item['A'];
      item['BTC-USD'] = item['B'];
      item['ETH-USD'] = item['E'];
      item['USDT'] = item['U'];
      item['SOL-USD'] = item['S'];

      delete item['D'];
      delete item['U R'];
      delete item['B R'];
      delete item['U Dd'];
      delete item['U Du'];
      delete item['B Dd'];
      delete item['B Du'];
      delete item['A'];
      delete item['B'];
      delete item['E'];
      delete item['U'];
      delete item['S'];
      
      item['Unrealised USD Returns'] = item['USD Returns'];
      item['Unrealised BTC Returns'] = item['BTC Returns'];
    });
    allChartsData[allChartsData.length - 1]['Unrealised USD Returns'] = extraData['Unrealised USD Returns'];
    allChartsData[allChartsData.length - 1]['Unrealised BTC Returns'] = extraData['Unrealised BTC Returns'];
  }, []);

  useEffect(() => {
    console.log(instrumentChartsData);
    if (instrumentChartsData != undefined)
      instrumentChartsData.forEach((item, index) => {
        item['Date'] = item['D'];
        item['USD Returns'] = item['U R'];
        item[instrument + ' Returns'] = item[instrument + ' R'];
        item['USD Drawdown'] = item['U Dd'];
        item[instrument + ' Drawdown'] = item[instrument + ' Dd'];
        item['USD Drawup'] = item['U Du'];
        item[instrument + ' Drawup'] = item[instrument + ' Du'];

        delete item['D'];
        delete item['U R'];
        delete item[instrument + ' R'];
        delete item['U Dd'];
        delete item[instrument + ' Dd'];
        delete item['U Du'];
        delete item[instrument + ' Du'];
      });
  }, [instrumentChartsData]);

  return (
    <section className="earning-section">
      <Tabs
        defaultTab="one"
      >
        <TabList>
          <Tab tabFor="one">Returns</Tab>
          <Tab tabFor="two">Drawdown</Tab>
          <Tab tabFor="three">Run-Up</Tab>
          <Tab tabFor="four">Month</Tab>
          {week ? <Tab tabFor="five">Week</Tab> : <></>}
          {displayAll ? (instrument === 'ALL' ? <Tab tabFor="six">Allocation</Tab> : <></>) : <></>}
        </TabList>
        {instrument === 'ALL' ? <><TabPanel tabId="one">
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={100}
                  height={80}
                  data={allChartsData}
                  margin={{ top: 50, left: 10, right: 0, bottom: 50 }}
                >
                  <Tooltip cursor={false} />
                  <XAxis dataKey="Date" />
                  <YAxis tickCount={10} interval="preserveStart" domain={['auto', 'auto']} />
                  <Area animationBegin={400} animationDuration={1400} type="monotone" stackId="1" dataKey={isInverseContract ?  "BTC Returns" : "USD Returns"} stroke="#ffc107" fill="#8068233e" strokeWidth={3} />
                  <Area animationBegin={500} animationDuration={1400} type="monotone" stackId="2" dataKey={isInverseContract ?  "Unrealised BTC Returns" : "Unrealised USD Returns"} stroke="#ffc107" fill="#8068233e" strokeWidth={1} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabPanel></> : <><TabPanel tabId="one">
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={100}
                height={80}
                data={instrumentChartsData}
                margin={{ top: 50, left: 10, right: 0, bottom: 50 }}
              >
                <Tooltip cursor={false} />
                <XAxis dataKey="Date" />
                <YAxis tickCount={10} interval="preserveStart" domain={['auto', 'auto']} />
                <Area animationBegin={400} animationDuration={1400} type="monotone" stackId="1" dataKey={isInverseContract ?  instrument + " Returns" : "USD Returns"} stroke="#ffc107" fill="#8068233e" strokeWidth={3} />
                <Area animationBegin={500} animationDuration={1400} type="monotone" stackId="2" dataKey={isInverseContract ?  "Unrealised " + instrument + " Returns" : "Unrealised USD Returns"} stroke="#ffc107" fill="#8068233e" strokeWidth={1} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabPanel></>}
        <TabPanel tabId="two">
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={100}
                height={80}
                data={instrument === 'ALL' ? allChartsData : instrumentChartsData}
                margin={{ top: 50, left: 10, right: 0, bottom: 50 }}
              >
                <Tooltip cursor={false} />
                <XAxis dataKey="Date" />
                <YAxis domain={['auto', 0]} />
                <ReferenceLine y={0} stroke="#6e6969" strokeDasharray="3 3" />
                <Area
                  animationBegin={200}
                  animationDuration={1600}
                  type="monotone"
                  // dataKey={instrument + " Returns"}
                  dataKey={isInverseContract ? (instrument === 'ALL' ? "BTC Drawdown" : instrument + " Drawdown") : "USD Drawdown"}
                  stroke="#f54b4b"
                  fill="#e9545452"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabPanel>
        <TabPanel tabId="three">
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={100}
                height={80}
                data={instrument === 'ALL' ? allChartsData : instrumentChartsData}
                margin={{ top: 50, left: 10, right: 0, bottom: 50 }}
              >
                <Tooltip cursor={false} />
                <XAxis dataKey="Date" />
                <YAxis domain={['auto', 0]} />
                <ReferenceLine y={0} stroke="#6e6969" strokeDasharray="3 3" />
                <Area
                  animationBegin={200}
                  animationDuration={1600}
                  type="monotone"
                  dataKey={isInverseContract ? (instrument === 'ALL' ? "BTC Drawup" : instrument + " Drawup") : "USD Drawup"}
                  stroke="#3dc134"
                  fill="#3dc13452"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabPanel>
        <TabPanel tabId="four">
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={100}
                height={80}
                data={month}
                margin={{ top: 50, left: 10, right: 0, bottom: 50 }}
              >
                <Tooltip cursor={false} />
                <XAxis dataKey="Date" />
                <YAxis />
                <ReferenceLine y={0} stroke="#6e6969" strokeDasharray="3 3" />
                <Bar
                  animationBegin={200}
                  animationDuration={1400}
                  type="monotone"
                  dataKey="Returns"
                  stroke="#ffc107"
                  fill="#ffc1077a"
                  strokeWidth={2}
                >
                  {
                    month.map((entry, index) => (
                      <Cell key={`cell-${index}`} stroke={entry.Returns < 0 ? "#ef5350" : "#26a69a"} fill={entry.Returns < 0 ? "#ef535080" : "#26a69a82"} />
                    ))
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabPanel>
        <TabPanel tabId="five">
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={100}
                height={80}
                data={week}
                margin={{ top: 50, left: 10, right: 0, bottom: 50 }}
              >
                <Tooltip cursor={false} />
                <XAxis dataKey="Date" />
                <YAxis />
                <ReferenceLine y={0} stroke="#6e6969" strokeDasharray="3 3" />
                <Bar
                  animationBegin={200}
                  animationDuration={1400}
                  type="monotone"
                  dataKey="Returns"
                  stroke="#ffc107"
                  fill="#ffc10763"
                  strokeWidth={1}
                >
                  {week ?
                    week.map((entry, index) => (
                      <Cell key={`cell-${index}`} stroke={entry.Returns < 0 ? "#ef5350" : "#26a69a"} fill={entry.Returns < 0 ? "#ef535080" : "#26a69a82"} />
                    )) : <></>
                  }
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TabPanel>
        {displayAll ? <>
          <TabPanel tabId="six">
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={100}
                  height={80}
                  data={allChartsData}
                  stackOffset="expand"
                  margin={{ top: 50, left: 10, right: 0, bottom: 50 }}
                >
                  <Tooltip cursor={false} />
                  <XAxis dataKey="Date" />
                  <YAxis tickFormatter={(decimal, fixed = 0) => `${(decimal * 100)} %`} />
                  <Area animationBegin={400} animationDuration={1400} type="monotone" stackId="1" dataKey={"BTC-USD"} stroke="#cf7e14" fill="#cf7e14" strokeWidth={2} />
                  <Area animationBegin={500} animationDuration={1400} type="monotone" stackId="1" dataKey={"ETH-USD"} stroke="#9857a9" fill="#9857a9" strokeWidth={2} />
                  <Area animationBegin={600} animationDuration={1400} type="monotone" stackId="1" dataKey={"SOL-USD"} stroke="#6f75ea" fill="#6f75ea" strokeWidth={2} />
                  <Area animationBegin={700} animationDuration={1400} type="monotone" stackId="1" dataKey={"ADA-USD"} stroke="#2b6fd0" fill="#2b6fd0" strokeWidth={2} />
                  <Area animationBegin={800} animationDuration={1400} type="monotone" stackId="1" dataKey={"USDT"} stroke="#00de94" fill="#00de94" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabPanel></> : <></>}
      </Tabs>
    </section>
  );
};
