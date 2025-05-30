import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Điều Gì làm bạn muốn nỗ lực mỗi sáng!?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          Điều đáng sợ nhất đối với mỗi người là mỗi ngày thức dậy. 
          Và nhận ra trong cuộc sống mình không có người và điều gì để chờ đợi, cố gắng.
       
      </>
    ),
  },
  {
    title: 'Nhận Định về những điều không như ý',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Đầy ắp những việc không như ý, chúng ta chẳng thể nào né tránh.
        Điều duy nhất có thể làm là thay đổi góc nhìn về nó <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Góc nhìn phát triển',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Cuộc sông không phải lúc nào cũng màu hồng.
        Muốn thấy cầu vồng phải chấp nhận những cơn mưa.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
