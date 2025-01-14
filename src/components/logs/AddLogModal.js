import { useState } from 'react'
import TechSelectOptions from '../techs/TechSelectOptions'
import { connect } from 'react-redux'
import M from 'materialize-css'

import * as action from '../../store/actions'

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const onSubmitHandler = () => {
    if (!message.trim() || !tech) {
      M.toast({ html: 'Please enter a message and tech' })
    } else {
      const log = {
        message,
        attention,
        tech,
        date: new Date()
      }
      addLog(log)

      M.toast({ html: `Log added bu ${tech}` })
      // clear fields
      setMessage('')
      setTech('')
      setAttention(false)
    }
  }

  return (
    <div id="add-log-modal"
      className="modal"
      style={modalStyle}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>select Technician</option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          onClick={onSubmitHandler}
          className="modal-close waves-effect waves-green btn blue"
        >
          Enter
        </button>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

const mapDispatchToProps = dispatch => ({
  addLog: (log) => dispatch(action.addLog(log))
})

export default connect(null, mapDispatchToProps)(AddLogModal)
