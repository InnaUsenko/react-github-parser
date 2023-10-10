console.log(process.env.REACT_APP_CLIENT_ID);
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {process.env.REACT_APP_CLIENT_ID}
    </div>
  );
};
