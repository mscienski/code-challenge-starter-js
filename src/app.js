import { intersection } from 'intersection';
import rootHtml from 'rootHtml';

export default function hello() {
  return 'hello world';
}

if (module && module.hot) {
    module.hot.accept(); // Replace module in hot middleware
}

console.log(hello());
console.log(intersection([1, 2, 5], [2, 5, 78]));

if (document && document.querySelector('#root')) {
    document.querySelector('#root').innerHTML = rootHtml;
}
