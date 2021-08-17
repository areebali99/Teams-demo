import React, { useState } from 'react'
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
import CancelIcon from '@material-ui/icons/Cancel'

const TeamPageEmployer = () => {
  const { register, handleSubmit } = useForm()
  const drawerWidth = 240
  const [member, setMember] = useState([])
  const onSubmit = data => { setMember([...member, data]) }

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
      marginTop: '50px',
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
         <h4 style={{ marginTop: '100px' }}><b>Settings</b></h4>
     <h2 ><b>Questions:</b></h2>
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

</form>
<h2 ><b>Reminder Date:</b></h2>
<div className="mb-3">
<input type="date" id="reminder" name="reminder" style={{ marginLeft: '350px', border: '2px solid black', marginTop: '30px' }}{...register('date', { required: true })}/>

    <input type="checkbox" style={{ marginLeft: '350px' }} placeholder='Answer' {...register('excludeWeekends', { required: true })} />
    <label htmlFor="teamDescription" style={{ marginLeft: '5px', fontSize: '15px' }} ><b>Exclude Weekends</b></label>
</div>
<div>
<h2 ><b>Members:</b></h2>
<ul>
    <li>member1@example.com <CancelIcon/></li>
    <li>member2@example.com <CancelIcon/></li>
    <li>member3@example.com <CancelIcon/></li>
    <li>member4@example.com <CancelIcon/></li>
    <li>member5@example.com <CancelIcon/></li>
    <li>member6@example.com <CancelIcon/></li>
    {member.map((data) => (

<li key={data.length}>
<li >{data.addMemberEmail}<CancelIcon/></li>
</li>
    ))}
</ul>
</div>
<form onSubmit={handleSubmit(onSubmit)}>
<div className="mb-3">
<input type="email" style={{ marginLeft: '350px', width: '50%', height: '40px' }} placeholder='Add Member Email' {...register('addMemberEmail', { required: true })} />
<button type="submit" className="btn btn-primary" style={{ marginLeft: '30px', width: '150px' }}>ADD</button>

</div>
</form>

<div className="mb-3">
<button type="button" className="btn btn-primary" style={{ marginLeft: '350px', width: '150px' }}>Save Changes</button>
<button type="button" className="btn btn-light" style={{ marginLeft: '80px', width: '150px', border: '2px solid black' }}>Cancel</button>
<button type="button" className="btn btn-danger" style={{ marginLeft: '410px', width: '150px', backgroundColor: 'orange', color: 'white' }}>Delete</button>
</div>
</div>
</div>

        </>
  )
}

export default TeamPageEmployer
