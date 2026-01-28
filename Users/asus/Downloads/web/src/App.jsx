import { useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleButtonClick = () => {
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      const responseData = {
        success: true,
        next_step: 'pending_approval'
      }

      setResponse(responseData)
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="container">
      <h1>Button Response App</h1>
      <button
        id="actionButton"
        className="action-button"
        onClick={handleButtonClick}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Click Me'}
      </button>
      {response && (
        <div className={`response-container show`}>
          <div className="response-content">
            <div className="success-badge">✓ Success</div>
            <div style={{ marginTop: '15px' }}>
              <strong>Response:</strong>
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
            <div className="status-badge">Next Step: {response.next_step}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

