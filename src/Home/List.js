import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { getListView } from "../actions";
import PreviewArticle from "./PreviewArticle";
import Pagination from "../components/Pagination";


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  border: {
    boxShadow: "none"
  }
}));

function List(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.border} color="inherit" position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Your Feed" />
          <Tab label="Global Feed" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>No articles are here...yet.</TabContainer>}
      {value === 1 && (
        <TabContainer>
          <WrappedComponent />
        </TabContainer>
      )}
    </div>
  );
}

function ListPreview(props) {
  const { getListView, list } = props;
  useEffect(() => {
    getListView();
  }, [getListView]);

  const renderList = (list) => {
    return list.map(item => <PreviewArticle {...item} key={item.slug} />)
  }

  return !list ? (
    <div>Loading...</div>
  ) : ( <>
    {renderList(list)}
    <Pagination {...list} />
    </>
  );
}

const mapStateToProps = state => {
  return { list: state.listView };
};
const WrappedComponent = connect(
  mapStateToProps,
  { getListView }
)(ListPreview);
export default List;
