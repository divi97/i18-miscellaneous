import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GetName } from "../../redux/actions/example";
import { GetValue } from "../../redux/actions/example_second";
import "./redux.scss";

function DisplayRedux({ GetName, GetValue, name, value }) {
  useEffect(() => {
    GetName();
    GetValue();
  }, []);

  return (
    <div>
      ||-----------------------------------------------------||
      <br />
      <br />
      Redux output fetched from backend will be displayed here:
      <br />
      <div className="container">
        <table className="table-setting" style={{margin: 'auto'}}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      ||-----------------------------------------------------||
    </div>
  );
}

const mapStateToProps = ({ EXAMPLE_REDUCER, SECOND_REDUCER }) => {
  return {
    name: EXAMPLE_REDUCER.name,
    value: SECOND_REDUCER.value,
  };
};

export default connect(mapStateToProps, {
  GetName,
  GetValue,
})(DisplayRedux);
