import intersection from 'intersection/intersection';
import styles from './app.css';

export default function hello() {
  return 'hello world';
}

if (module && module.hot) {
    module.hot.accept(); // Replace module in hot middleware
}

console.log(hello());
console.log(intersection([1, 2, 5], [2, 5, 78]));

document.querySelector('#root').classList.add(styles.root);
