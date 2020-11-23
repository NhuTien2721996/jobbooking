import React, { useState } from "react";

const ShowTab = (tabItems, keyword) => {
  var html = null;
  const tabItemsClone = [...tabItems];
  if (tabItems.length > 0) {
    const tabItemClone = tabItemsClone.find(item => {
      return item.label === keyword;
    });
    html = tabItemClone.main;
  }
  return html();
};
const BsTab = props => {
  const tabItemArr = [];
  for (var index in props) {
    tabItemArr.push(props[index]);
  }
  const [tabDefault, setTabDefault] = useState(tabItemArr[0].label);
  return (
    <div className="bs-tab">
      <div className="tab-container">
        <div className="tab-control">
          <ul className="control-list">
            {tabItemArr.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`control-list__item ${
                    tabDefault === item.label ? "active" : ""
                  }`}
                  onClick={() => setTabDefault(item.label)}
                >
                  <img src="/images/layer-3.png" className="icon" alt=""/>
                  <img src="/images/layer-3-hover.png" className="icon-hover" alt=""/>
                  <span className="name">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-item">{ShowTab(tabItemArr, tabDefault)}</div>
        </div>
      </div>
    </div>
  );
};
export default BsTab;



