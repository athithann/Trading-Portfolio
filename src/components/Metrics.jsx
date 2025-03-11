import React from "react";

export default function Metrics(prop) {
  const {instrument, posts} = prop
  return (
    <section className="analytic-section">
      <div className="analytic ">
        <div className="content">
          <div className="first">Sortino Ratio</div> 
          <div className="second">{posts.Sortino}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
        <div className="first">Calmar Ratio</div>
        <div className="second">{posts.Calmar}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">All Time High</div>
          <div className="second">{posts.AllTimeHigh}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">All Time Low</div>
          <div className="second">{posts.AllTimeLow}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Maximum Drawdown</div>
          <div className="second">{posts.MaximumDrawdown} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Current Drawdown</div>
          <div className="second">{posts.CurrentDrawdown} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">CAGR</div>
          <div className="second">{posts.CAGR} %</div>
        </div>
      </div>
      {instrument !== 'ALL' ? (<>
      <div className="analytic ">
        <div className="content">
          <div className="first">Success Rate</div> 
          <div className="second">{posts.WinRate} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
        <div className="first">Risk Reward Ratio</div>
        <div className="second">{posts.RiskReward}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Win</div>
          <div className="second">{posts.AvgWin} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Loss</div>
          <div className="second">{posts.AvgLoss} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Max Win</div>
          <div className="second">{posts.MaxWin} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Max Loss</div>
          <div className="second">{posts.MaxLoss} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Max Consecutive Wins</div>
          <div className="second">{posts.MaxConsWin}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Max Consecutive Losses</div>
          <div className="second">{posts.MaxConsLoss}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Total Trades</div> 
          <div className="second">{posts.TotalTrades}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
        <div className="first">Long Trades</div>
        <div className="second">{posts.LongTradesPer} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Long Success Rate</div>
          <div className="second">{posts.LongWinRate} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Long Win</div>
          <div className="second">{posts.AvgLongWin} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Long Loss</div>
          <div className="second">{posts.AvgLongLoss} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
        <div className="first">Short Trades</div>
        <div className="second">{posts.ShortTradePer} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Short Success Rate</div>
          <div className="second">{posts.ShortWinRate} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Short Win</div>
          <div className="second">{posts.AvgShortWin} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Short Loss</div>
          <div className="second">{posts.AvgShortLoss} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Earnings per Trade</div>
          <div className="second">{posts.EarningPerFlip} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Flips per Month</div>
          <div className="second">{posts.AvgFlipsPerMonth}</div>
        </div>
      </div></>
      ) : (<></>)}
      <div className="analytic ">
        <div className="content">
          <div className="first">Total Months</div>
          <div className="second">{posts.TotalMonths}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Monthly Success Rate</div>
          <div className="second">{posts['MonthlyWin%']} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Monthly Returns</div>
          <div className="second">{posts['AvgMonthReturn%']} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Total Weeks</div>
          <div className="second">{posts.TotalWeeks}</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Weekly Success Rate</div>
          <div className="second">{posts.WeeklyWinRate} %</div>
        </div>
      </div>
      <div className="analytic ">
        <div className="content">
          <div className="first">Average Weekly Returns</div>
          <div className="second">{posts['AvgWeekReturn%']} %</div>
        </div>
      </div>
    </section>
  );
};
