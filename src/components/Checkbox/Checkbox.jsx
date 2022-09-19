import React from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.scss'

const Checkbox = ({ checked, onChange, name }) => (
  <label className={styles.container}>
    <input
      type='checkbox'
      name={name}
      checked={checked}
      onChange={onChange}
      className={styles.checkbox}
    />
    <span className={styles.checkmark} />
  </label>
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
}

Checkbox.defaultProps = {
  checked: null,
  onChange: () => {},
}

export default Checkbox