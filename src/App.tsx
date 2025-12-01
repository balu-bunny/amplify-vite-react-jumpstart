import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {

  const { user, signOut } = useAuthenticator();

  const [details, setDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Call the getdetailsFunction Lambda on component mount
  useEffect(() => {
    fetchDetails();
  }, []);

  async function fetchDetails() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/getdetailsFunction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDetails(data.data || data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      console.error('Error fetching details:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}</h1>
      <h2>Amplify + Vite + React (Lambda-powered)</h2>
      
      <button onClick={fetchDetails} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Details'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {details && (
        <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h3>Details from Lambda:</h3>
          <pre>{JSON.stringify(details, null, 2)}</pre>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        🥳 App successfully hosted. Lambda function is replacing the database.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
