import React from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core'
import './App.css'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'

const TeamPageEmployee = () => {
  const { register, handleSubmit } = useForm()
  const drawerWidth = 240
  const onSubmit = data => { console.log(data) }
  const useStyles = makeStyles((theme) => ({

    paper: {
      marginTop: '100px',
      width: '50%',
      marginLeft: '450px',
      height: '100%',
      boxSizing: 'border-box',
      boxShadow: '5px 10px 10px 10px'
    },
    root: {
      display: 'flex'
    },
    appBar: {
      width: '100%'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0

    },
    form: {
      marginTop: '70px',
      marginBottom: '50px',
      marginLeft: '300px'
    },
    formLabel: {
      color: 'black',
      fontWeight: '200px',
      fontSize: '20px'
    },
    drawerPaper: {
      marginTop: '60px',
      width: drawerWidth,
      backgroundColor: '#115293'
    },
    gridData: {
      width: '100%',
      height: '100px',
      fontWeight: '200px',
      fontSize: '20px',
      marginLeft: '70px',
      color: '#115293'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  }))

  const classes = useStyles()
  return (
     <>
       <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <Divider />
        <List>
         <ListItem>
           <ListItemIcon>
           <HomeOutlinedIcon style={{ color: 'white' }}/>
           <Typography style={{ color: 'white', marginLeft: '10px' }}>Home</Typography>
           </ListItemIcon>
         </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem>
           <ListItemIcon>

           </ListItemIcon>
         </ListItem>
        </List>
      </Drawer>
     <div className={classes.border}>
         <h4><b>Team / Member View</b></h4>
     <h2 >Filling For:<b>17-August-2021</b></h2>
                    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
  <div className="mb-3">
    <label htmlFor="teamName" className={classes.formLabel} >Q.What did you do today?</label>
    <input type="text" className="form-control" style={{ width: '50%' }} placeholder='Answer'{...register('ans1', { required: true, maxLength: 20 })} />
  </div>
  <div className="mb-3">
    <label htmlFor="teamMember" className={classes.formLabel} >Q.What will you do tommorrow?</label>
    <input type="text" className="form-control" style={{ width: '50%' }} placeholder='Answer'{...register('ans2', { required: true, maxLength: 20 })} />
  </div>
  <div className="mb-3">
    <label htmlFor="teamDescription" className={classes.formLabel} >Q.Are there any blockers on your way?</label>
    <input type="text" style={{ width: '50%' }} placeholder='Answer' {...register('ans3', { required: true, maxLength: 100 })} className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>
        </>
  )
}

export default TeamPageEmployee
