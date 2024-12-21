```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a setInterval inside useEffect without cleanup
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []); // Empty dependency array - runs only once on mount

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```