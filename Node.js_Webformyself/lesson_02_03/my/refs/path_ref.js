const path = require('path');

console.log(__filename); // абсолютный путь с именем файла
console.log(path.basename(__filename)); // имя файла
console.log(path.dirname(__filename)); // имя каталога
console.log(path.extname(__filename)); // расширение файла

console.log(path.parse(__filename));
console.log(path.parse(__filename).ext);
console.log(path.parse(__filename).base);

// компонует правильную строку пути из частей
console.log(path.join(__dirname, 'test', 'second.html'));

// компонует путь из частей с учетом абсолютных путей
console.log(path.resolve(__dirname, './test', '/second.html'));
