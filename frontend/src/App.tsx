import { FluentProvider, makeStyles, webDarkTheme } from '@fluentui/react-components';
import { Navigate, Route, Routes } from 'react-router';
import Home from './pages/Home';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <FluentProvider theme={webDarkTheme}>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </FluentProvider>
  );
};

export default App;
