import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Resume',
    Svg: require('@site/static/img/resume.svg').default,
    description: (
      <>
        This is my current resume.
      </>
    ),
  },
  {
    title: 'Bitcoin',
    Svg: require('@site/static/img/bwBitcoin.svg').default,
    description: (
      <>
        Bitcoin is the decentralized future of finance.
      </>
    ),
  },
  {
    title: 'Gypsy Jazz',
    Svg: require('@site/static/img/bwDjango.svg').default,
    description: (
      <>
        The Gypsy Jazz musical genre.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
