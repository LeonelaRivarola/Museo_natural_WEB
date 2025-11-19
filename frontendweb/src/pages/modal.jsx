import { useNavigate } from 'react-router-dom';

export default function ModalScreen() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>This is a modal</h1>
      <button onClick={() => navigate('/')} style={styles.link}>
        <span>Go to home screen</span>
      </button>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
};