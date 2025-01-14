import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getTechs } from '../../store/actions/techActions'

const TechSelectOptions = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])
  return (
    !loading &&
    techs !== null &&
    techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{tech.firstName} {tech.lastName}</option>)
  )
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechSelectOptions)