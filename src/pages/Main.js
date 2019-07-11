import React from 'react'
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Content from './Content'

const TabContainer = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const Main = (props) => {
  const { currentTab } = props

  return(
    <div className='Main'>

      {props.articles &&
        <React.Fragment>
          {currentTab === 'ca' && <TabContainer>Canada</TabContainer>}
          {currentTab === 'gb' && <TabContainer>UK</TabContainer>}
          {currentTab === 'in' && <TabContainer>India</TabContainer>}
          {currentTab === 's' && <TabContainer>Results</TabContainer>}
          {currentTab === 'us' && <TabContainer>USA</TabContainer>}
        </React.Fragment>
      }

      {!props.articles && 
        <TabContainer>Select  tab</TabContainer>
      }

\  {props.loading &&
        <LinearProgress />
      }
      
      {props.articles && props.articles.map((item, key) =>
        <Content item={item} key={key} />
      )}
      
    
    </div>
  )
}

export default Main