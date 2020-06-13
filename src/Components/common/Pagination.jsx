import React, { useState, useEffect } from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { connect } from "react-redux";
import { getData } from "../../Redux/Employee/actions";

const Pagination = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { getData } = props;

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
    getData({ per_page: rowsPerPage, page: newPage });
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    getData({ per_page: parseInt(event.target.value, 10), page: 0 });
  };

  useEffect(() => {
    getData({ per_page: rowsPerPage, page: page });
  }, []);

  return (
    <TablePagination
      component="div"
      count={500}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getData(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
