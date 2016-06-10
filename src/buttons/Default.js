import React, {PropTypes} from 'react'
import styles from './styles/Default.css'

export default class DefaultButton extends React.Component {
  static propTypes = {
    kind: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
  }

  render() {
    const {onClick, kind} = this.props

    let rootStyle = styles.root

    if (kind == 'danger') {
      rootStyle = styles.danger
    }

    return (
      <button
        className={rootStyle}
        type="button"
        title="Clear value"
        onClick={onClick}
      >
        {this.props.children}
      </button>
    )
  }
}
