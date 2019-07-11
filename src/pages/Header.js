import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import IconButton from '@material-ui/core/IconButton'

import InputBase from '@material-ui/core/InputBase'
import Container from '@material-ui/core/Container'

import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';

import SearchIcon from '@material-ui/icons/Search'





const useStyles = makeStyles({
    container: {
      margin: 7
      },
   
   
   
    
  });
  
  

const Header = (props) => {
    const classes = useStyles();
    return (
      <div className="Header">
        <Container maxWidth='lm'>
        <AppBar position="static" color="secondary">
        <Toolbar>
            
       
        <div className={classes.sectionDesktop}>
          <Tabs value={props.currentTab} onChange={props.changeTab} variant="scrollable" scrollButtons="off">
          <Tab value="ca" aria-label="Canada" label="CANADA"/>
       <Tab value="gb" aria-label="UK" label="UK"/>
       <Tab value="in" aria-label="India" label="INDIA" />
             <Tab value="us"  aria-label="US" label="US"/>
          <Tab value="s" icon={<SearchIcon />} />
    
        </Tabs>
    
             
          </div>

      <div className={classes.container} noValidate autoComplete="off" onSubmit={props.submitSearch}>
         
            
        
            <InputBase
             className={classes.input}
             label = "Keyword or Phrase Search"
             placeholder="Keyword or Phrase Search"
             inputProps={{ 'aria-label': 'Keyword or Phrase Search' }}
             onChange={props.Query}
            />


<IconButton className={classes.iconButton} aria-label="Search" color="secondary" type="submit">
              <SearchIcon />
            </IconButton>
          </div>
         
         
        </Toolbar>
        </AppBar>
    
        </Container>
  

       
    
      </div>
    )
  }
  export default Header
