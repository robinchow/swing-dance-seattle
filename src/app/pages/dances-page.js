import React from "react";
import { connect } from "react-redux";

import { daysStartingToday } from "../utils";
import { selectDancesByDay, selectDancesFetching } from "../state/selectors";
import Page from "../components/page";
import OccasionsList from "../components/occasions-list";

const DancesPage = ({ dances, loading }) => {
  return (
    <Page loading={loading}>
      {daysStartingToday().map((dayInfo, index) => (
        <OccasionsList
          key={index}
          heading={dayInfo[0]}
          headingClassName="uppercase"
          occasions={dances[dayInfo[1]]}
        />
      ))}
    </Page>
  );
};

const mapStateToProps = state => ({
  dances: selectDancesByDay(state),
  loading: selectDancesFetching(state)
});

export default connect(mapStateToProps)(DancesPage);
