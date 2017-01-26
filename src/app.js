import intersection from 'intersection/intersection';

export default function hello() {
  return 'hello world';
}

if (module && module.hot) {
    module.hot.accept(); // Replace module in hot middleware
}

console.log(hello());
console.log(intersection([1, 2, 5], [2, 5, 78]));
