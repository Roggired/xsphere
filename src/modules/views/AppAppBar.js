import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
              to="/xsphere/"
          >
            <MuiLink
                variant="h6"
                underline="none"
                color="inherit"
                className={classes.title}
            >
              XSPHERE
            </MuiLink>
          </Link>
          <div className={classes.right}>
            <Link
                to="/xsphere/login"
            >
              <MuiLink
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={classes.rightLink}
              >
                {'Войти'}
              </MuiLink>
            </Link>
            <Link
                to="/xsphere/register"
            >
              <MuiLink
                  variant="h6"
                  underline="none"
                  color="inherit"
                  className={classes.rightLink}
              >
                {'Зарегистрироваться'}
              </MuiLink>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
