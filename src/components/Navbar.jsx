import React, { useState, useEffect } from "react";
import Switch from "react-switch";

export default function Navbar(props) {
  const [disabled, setDisabled] = useState(false);
  const {instrument, isInverseContract, setContractType} = props;

  useEffect(() => {
    if (instrument==='ALL' | instrument==='BTC' | instrument==='ETH' | instrument==='SOL' | instrument==='ADA') {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [instrument]);

  return (
    <nav className="nav-bar">
      <div className="title">
        <h4>Hi Athithan,</h4>
        <h1>
          <span>Crypto Portfolio</span>
        </h1>
      </div>
      <div className="switch">
        <label htmlFor="material-switch">
          <div className="switch-text">USD</div>
          <Switch id="material-switch" onChange={() => setContractType(isInverseContract)} checked={isInverseContract} disabled={disabled} height={35} width={75} offColor={'#212121'} onColor={'#ffc107'} offHandleColor={'#ffc107'} onHandleColor={'#212121'} uncheckedIcon={false} checkedIcon={false}/>
          <div className="switch-text">{instrument === 'ALL' ? 'BTC' : instrument }</div>
        </label>
      </div>
    </nav>
  );
}
;
