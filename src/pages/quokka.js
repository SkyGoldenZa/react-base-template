const words = 'Mark Johansson/waffle iron/80/2\n' +
   'Mark Johansson/blender/200/1\n' +
   'Mark Johansson/knife/10/4\n' +
   'Nikita Smith/waffle iron/80/10\n' +
   'Nikita Smith/knife/200/1\n' +
   'Nikita Smith/pot/20/3\n';
console.log('words', words);

const test = words
   .trim()
   .split('\n')
   .map(line => line.split('/'))
   .reduce((acc, [name, order, price, quantity]) => {
      acc[name] = acc[name] || [];
      acc[name].push({ order, price, quantity });
      return acc;
   }, {});
console.log('test', test);
