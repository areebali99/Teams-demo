import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core'
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
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const AddTeamForm = () => {
  const { register, handleSubmit } = useForm()

  const [gridData, setGridData] = useState([])
  const onSubmit = data => { setGridData([...gridData, data]) }
  console.log(gridData)
  const drawerWidth = 240
  const useStyles = makeStyles((theme) => ({
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
    paper: {
      marginTop: '20px',
      width: '50%',
      marginLeft: '450px',
      height: '100%',
      boxSizing: 'border-box',
      boxShadow: '5px 10px 10px 10px'

    },
    form: {
      marginTop: '200px',
      marginLeft: '200px'
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
          <div className={classes.paper}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
  <div className="mb-3">
    <label htmlFor="teamName" className={classes.formLabel} >Team Name</label>
    <input type="text" className="form-control" style={{ width: '70%' }} placeholder='Enter Team Name'{...register('teamName', { required: true, maxLength: 20 })} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="teamMember" className={classes.formLabel} >Add Team Member</label>
    <input type="text" className="form-control" style={{ width: '70%' }} placeholder='Enter Team Member'{...register('teamMember', { required: true, maxLength: 20 })} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="teamDescription" className={classes.formLabel} >Team Description</label>
    <textarea type="text" style={{ height: '100px', width: '70%' }} placeholder='Enter Team Description' {...register('teamDescription', { required: true, maxLength: 100 })} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div>
  <label htmlFor="category" className={classes.formLabel} >Team Category:</label>
  <select {...register('Category')} style={{ marginBottom: '10px', marginLeft: '10px' }}>
        <option value='Category A'>Category A</option>
        <option value='Category B'>Category B</option>
        <option value='Category C'>Category C</option>
      </select>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

<div style={{ marginTop: '20px', marginLeft: '150px' }}>

</div>
</div>
<Card container>
    {gridData.map((data) => (
        <CardContent item key={data.id} >
    <CardContent className={classes.gridData}> <span style={{ marginLeft: '150px' }}>Team Name:</span><span style={{ marginLeft: '20px' }}>{data.teamName}</span></CardContent>
    <CardContent className={classes.gridData}><span style={{ marginLeft: '150px' }}>Team Team Member:</span><span style={{ marginLeft: '20px' }}>{data.teamMember}</span></CardContent>
    <CardContent className={classes.gridData}><span style={{ marginLeft: '150px' }}>Team Category:</span><span style={{ marginLeft: '20px' }}>{data.Category}</span></CardContent>
    <CardContent className={classes.gridData}><span style={{ marginLeft: '150px' }}>Team Description:</span><span style={{ marginLeft: '20px' }}>{data.teamDescription}</span></CardContent>
    </CardContent>))}
</Card>

        </>
  )
}

export default AddTeamForm
