window._TOASTED_ID = '9a0e0776-a69c-4241-8d47-fd4b1877fbb2'

window.logJSError = function (error) {
  if (
    window.toastedAnalytics != null &&
    typeof window.toastedAnalytics.emit === 'function'
  ) {
    window.toastedAnalytics.emit('error', {
      url: window.location.href,
      name: error.name || error.number,
      message: error.message || error.description,
      fileName: error.fileName,
      lineNumber: error.lineNumber,
      columnNumber: error.columnNumber,
    })
  } else {
    console.error('Uncaught Error', error)
  }
}

window.addEventListener('error', window.logJSError)
