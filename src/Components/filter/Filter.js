import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/products/productActions";
import { productFilterSelector } from "../../redux/products/productsSelector";

const Filter = ({ filter, setFilter }) => {
  return (
    <label>
      filter
      <input name="" value={filter} onChange={(e) => setFilter(e.target.value)} />
    </label>
  );
};

const mapStateToProps = (state) => ({
  filter: productFilterSelector(state),
});

export default connect(mapStateToProps, { setFilter })(Filter);
