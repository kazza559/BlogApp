import React from "react";
import { connect } from "react-redux";
import { getListView, getFeed } from "../actions";
import TablePagination from "@material-ui/core/TablePagination";

function Pagination(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    props.feed
      ? props.getFeed(newPage, rowsPerPage)
      : props.getListView(newPage, rowsPerPage);
  };
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    props.feed
      ? props.getFeed(0, +event.target.value)
      : props.getListView(0, +event.target.value);
  };
  return (
    <TablePagination
      rowsPerPageOptions={[10, 15, 20]}
      component="div"
      count={500}
      rowsPerPage={rowsPerPage}
      page={page}
      backIconButtonProps={{
        "aria-label": "Previous Page"
      }}
      nextIconButtonProps={{
        "aria-label": "Next Page"
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
}

export default connect(
  null,
  { getListView, getFeed }
)(Pagination);
