import React from 'react';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import { makeStyles, Paper } from '@material-ui/core';
import ProfileForm from './Profiles';
import PageHeader from './PageHeader';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    width: '70%',
    position: 'relative',
    left: '20%',
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

function Prof() {
  const classes = useStyles();
  return (
    <div>
      <PageHeader
        title="Account Settings"
        subtitle="Your account settings"
        icon={<PeopleOutlinedIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <ProfileForm />
      </Paper>
    </div>
  );
}

export default Prof;
