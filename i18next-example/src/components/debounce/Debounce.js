import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetSearchResult } from "../../redux/actions/debounce";
import { stateList } from "./constants";

function Debounce({ searchResult, GetSearchResult }) {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [state, setState] = useState();

  useEffect(() => {
    setData(searchResult);
  }, [searchResult]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      text ? GetSearchResult(state, text) : setData([]);
    }, 750);

    return () => {
      clearTimeout(timeoutId)
    }
  }, [text])

  return (
    <>
      <div>
        <h1 style={{ color: "black" }}>This is for debounce</h1>
        <div>
          <label>Select State: </label>
          <select onChange={(e) => setState(e.target.value)}>
            <option value="">Select State</option>
            {stateList.map((state, i) => (
              <option key={i} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <label>Enter Search Text: </label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={state ? false : true}
        />
      </div>
      <div>
        <p>This is for data after debounce</p>
        <div>{JSON.stringify(data)}</div>
      </div>
    </>
  );
}

const mapStateToProps = ({ DEBOUNCE_REDUCER }) => {
  return {
    searchResult: DEBOUNCE_REDUCER.searchResult,
  };
};

export default connect(mapStateToProps, {
  GetSearchResult,
})(Debounce);
