import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const withMediaQuery = (queries = []) => Component => props => {
  const mediaProps = {}
  queries.forEach(q => {
    mediaProps[q[0]] = useMediaQuery(q[1])
    console.log(q)
  })
  console.log('mediaProps', mediaProps)
  return <Component {...mediaProps} {...props} />
}

export default withMediaQuery;