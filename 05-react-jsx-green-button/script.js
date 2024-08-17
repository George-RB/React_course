const App = ({ initialButtonText, initialClassesList }) => {
  // const { initialButtonText } = props; // эту строку мы убрали потому что в начале мы использовали деструктуризацию
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClassesList);
  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('green-btn');
  };

  return (
    <div className="app">
      <button className={classesList} id="my-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassesList="" />); // <  /> это значит, что тег для реакта будет самозакрывающимся
