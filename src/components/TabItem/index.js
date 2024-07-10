import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActiveTab} = props
  const {displayText, tabId} = tabDetails
  const change = () => {
    changeTab(tabId)
  }
  console.log(isActiveTab)
  const tabBtn = isActiveTab ? 'selected-tab-btn' : 'tab-btn'
  const line = isActiveTab ? 'selected-line' : 'line'
  return (
    <>
      <li className="tab-item" onClick={change}>
        <button type="button" className={tabBtn}>
          {displayText}
        </button>
        <hr className={line} />
      </li>
    </>
  )
}

export default TabItem
