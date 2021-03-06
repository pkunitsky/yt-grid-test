export enum GridEvents {
  columnEverythingChanged = 'columnEverythingChanged',
  newColumnsLoaded = 'newColumnsLoaded',
  columnPivotModeChanged = 'columnPivotModeChanged',
  columnRowGroupChanged = 'columnRowGroupChanged',
  expandOrCollapseAll = 'expandOrCollapseAll',
  columnPivotChanged = 'columnPivotChanged',
  gridColumnsChanged = 'gridColumnsChanged',
  columnValueChanged = 'columnValueChanged',
  columnMoved = 'columnMoved',
  columnVisible = 'columnVisible',
  columnPinned = 'columnPinned',
  columnGroupOpened = 'columnGroupOpened',
  columnResized = 'columnResized',
  displayedColumnsChanged = 'displayedColumnsChanged',
  virtualColumnsChanged = 'virtualColumnsChanged',
  rowGroupOpened = 'rowGroupOpened',
  rowDataChanged = 'rowDataChanged',
  rowDataUpdated = 'rowDataUpdated',
  pinnedRowDataChanged = 'pinnedRowDataChanged',
  rangeSelectionChanged = 'rangeSelectionChanged',
  chartCreated = 'chartCreated',
  chartRangeSelectionChanged = 'chartRangeSelectionChanged',
  chartOptionsChanged = 'chartOptionsChanged',
  chartDestroyed = 'chartDestroyed',
  toolPanelVisibleChanged = 'toolPanelVisibleChanged',
  modelUpdated = 'modelUpdated',
  pasteStart = 'pasteStart',
  pasteEnd = 'pasteEnd',
  fillStart = 'fillStart',
  fillEnd = 'fillEnd',
  cellClicked = 'cellClicked',
  cellDoubleClicked = 'cellDoubleClicked',
  cellMouseDown = 'cellMouseDown',
  cellContextMenu = 'cellContextMenu',
  cellValueChanged = 'cellValueChanged',
  rowValueChanged = 'rowValueChanged',
  cellFocused = 'cellFocused',
  rowSelected = 'rowSelected',
  selectionChanged = 'selectionChanged',
  cellKeyDown = 'cellKeyDown',
  cellKeyPress = 'cellKeyPress',
  cellMouseOver = 'cellMouseOver',
  cellMouseOut = 'cellMouseOut',
  filterChanged = 'filterChanged',
  filterModified = 'filterModified',
  filterOpened = 'filterOpened',
  sortChanged = 'sortChanged',
  virtualRowRemoved = 'virtualRowRemoved',
  rowClicked = 'rowClicked',
  rowDoubleClicked = 'rowDoubleClicked',
  gridReady = 'gridReady',
  gridSizeChanged = 'gridSizeChanged',
  viewportChanged = 'viewportChanged',
  firstDataRendered = 'firstDataRendered',
  dragStarted = 'dragStarted',
  dragStopped = 'dragStopped',
  checkboxChanged = 'checkboxChanged',
  rowEditingStarted = 'rowEditingStarted',
  rowEditingStopped = 'rowEditingStopped',
  cellEditingStarted = 'cellEditingStarted',
  cellEditingStopped = 'cellEditingStopped',
  bodyScroll = 'bodyScroll',
  animationQueueEmpty = 'animationQueueEmpty',
  heightScaleChanged = 'heightScaleChanged',
  paginationChanged = 'paginationChanged',
  componentStateChanged = 'componentStateChanged',
  bodyHeightChanged = 'bodyHeightChanged',
  displayedColumnsWidthChanged = 'displayedColumnsWidthChanged',
  scrollVisibilityChanged = 'scrollVisibilityChanged',
  columnHoverChanged = 'columnHoverChanged',
  flashCells = 'flashCells',
  rowDragEnter = 'rowDragEnter',
  rowDragMove = 'rowDragMove',
  rowDragLeave = 'rowDragLeave',
  rowDragEnd = 'rowDragEnd',
  popupToFront = 'popupToFront',
  columnRowGroupChangeRequest = 'columnRowGroupChangeRequest',
  columnPivotChangeRequest = 'columnPivotChangeRequest',
  columnValueChangeRequest = 'columnValueChangeRequest',
  columnAggFuncChangeRequest = 'columnAggFuncChangeRequest',
  keyboardFocus = 'keyboardFocus',
  mouseFocus = 'mouseFocus',
}
