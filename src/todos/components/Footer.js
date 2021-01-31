import React, { Component } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import PropTypes from 'prop-types'


const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export default class Footer extends Component {


  render() {

    const { activeCount, filter: selectedFilter, onShow, completedCount, onClearCompleted } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'
    return (
      <footer className="footer" style={{padding:0}}>
        <span className="todo-count">
          <strong>{activeCount || 'No'}</strong> {itemWord} left
        </span>
        <ul className="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            <li key={filter}>
              <a className={classnames({ selected: filter === selectedFilter })}
                style={{ cursor: 'pointer' }}
                onClick={() => onShow(filter)}>
                {FILTER_TITLES[filter]}
              </a>
            </li>
          )}
        </ul>
        {completedCount > 0 && <button className="clear-completed"
          onClick={onClearCompleted} >
          Clear completed
        </button>}
      </footer>
    )
  }
}



Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}
