import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple NFT Minting',
    image: require('@site/static/img/payment-system.png').default,
    description: (
      <>
        Simple, easy, and intuitive NFT minting and NFT Project creation on the Cardano Blockchain!
      </>
    ),
  },
  {
    title: 'Execute Smart Contracts',
    image: require('@site/static/img/contract.png').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'API Integration',
    image: require('@site/static/img/nft-minting.png').default,
    description: (
      <>
        Mint NFTs or Execute Smart Contracts directly from our APIs for maximum customization!
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {

  return (
    <div className={clsx('col col--4')}>
      <div>
        <img src={image} className='rounded-xl'/>
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
