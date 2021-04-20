import React from 'react';
import { EditGuesser } from '@api-platform/admin';
import { NumberInput } from 'react-admin';
import { EditActions } from '../actions/EditActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  gridItem: {
    width: '5%'
  }
}));

const LienPositionTitle = ({ record }) => {
  return 'Edit - ' + record.position;
};
export const LienPositionEdit = props => {
  const classes = useStyles();
  return (
    <EditGuesser
      actions={<EditActions title={'Edit - Lien Positon'} />}
      {...props}
    >
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item className={classes.gridItem} xs={12} sm={6} lg={6}>
            <NumberInput fullWidth label="Lien Position" source="position" />
          </Grid>
        </Grid>
      </div>
    </EditGuesser>
  );
};
