const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me');
  const onButtonClick = () => {
    setButtonText('Hello from React');
  };

  return (
    <div className="app">
      <button id="my-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />); // <  /> это значит, что тег для реакта будет самозакрывающимся
