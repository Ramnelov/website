import { Badge, Subtitle1, Title1, makeStyles, tokens } from '@fluentui/react-components';
import content from '../content.json';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
    boxSizing: 'border-box',
  },
  intro: {
    position: 'relative',
    maxWidth: '720px',
    paddingLeft: '24px',
    borderLeft: `3px solid ${tokens.colorBrandForeground1}`,
    animationName: {
      from: { opacity: 0, transform: 'translateY(18px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
    animationDuration: '700ms',
    animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    animationFillMode: 'both',
    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
  name: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '64px',
    lineHeight: 1,
  },
  role: {
    color: tokens.colorNeutralForeground2,
    animationName: {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    animationDuration: '500ms',
    animationDelay: '180ms',
    animationTimingFunction: 'ease-out',
    animationFillMode: 'both',
    '@media (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
  company: {
    fontSize: tokens.fontSizeBase500,
    lineHeight: '1.2',
    fontWeight: tokens.fontWeightSemibold,
    minHeight: '32px',
    height: 'auto',
    padding: '4px 10px',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <main className={classes.intro}>
        <Title1 className={classes.name}>{content.home.name}</Title1>
        <Subtitle1 className={classes.role}>
          {content.home.role}{' '}
          <Badge appearance="tint" color="brand" className={classes.company}>
            {content.home.company}
          </Badge>
        </Subtitle1>
      </main>
    </div>
  );
};

export default Home;
