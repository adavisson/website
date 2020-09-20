import { createMuiTheme, makeStyles } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#002f6c',
      contrastText: '#fbc02d',
    },
    secondary: {
      main: '#fbc02d',
      contrastText: '#002f6c',
    },
  },
  typography: {
    fontFamily: ['"Titillium Web"', 'sans-serif'].join(','),
  },
})

export const cardStyle = makeStyles({
  root: {
    width: '20rem',
    margin: '15px',
    backgroundColor: '#002f6c',
  },
  title: {
    fontSize: 'x-large',
    marginBottom: '10px'
  },
  body: {
    padding: '15px',
    backgroundColor: '#fbc02d'
  },
  pos: {
    marginBottom: 12,
  },
})

export const bottomBarStyle = makeStyles((theme) => ({
  link: {
    '&:hover': {
      color: '#fbc02d',
      textDecoration: 'none',
    },
  },
  divider: {
    backgroundColor: '#fbc02d',
  },
  icon: {
    fontSize: 18,
  },
  text: {
    fontSize: 'x-small',
    paddingLeft: 15,
    paddingRight: 15,
  },
  toolbar: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
  }
}))


const drawerWidth = 240

export const navStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexGrow: 1,
    // marginBottom: '15px',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#002f6c',
    color: '#fbc02d',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#fbc02d',
    color: '#002f6c',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    martingLeft: 0,
  },
  link: {
    '&:hover': {
      color: '#fbc02d',
      textDecoration: 'none',
    },
  },
  divider: {
    backgroundColor: '#fbc02d',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  weather: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    alignContent: 'center',    
    '&:hover': {
      color: '#fbc02d',
      textDecoration: 'none',
    },
  },
  button: {
    backgroundColor: '#fbc02d',
    color: '#002f6c',
    '&:hover': {
      backgroundColor: '#fbc02d',
      color: '#002f6c',
    },
  }
}));