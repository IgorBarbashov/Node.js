const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw new Error(err);

//     console.log('Папка была создана');
// });

fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello world!',
    err => {
        if (err) throw new Error(err);
        console.log('Файл был создан');
    }
);

// fs.appendFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     '\nHello everybody!',
//     err => {
//         if (err) throw new Error(err);
//         console.log('Файл был обновлен');
        
//         // асинхонный вызов в callback'е - читает файл полностью только после окончания работы метода appendFile
//         fs.readFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             'utf-8',
//             (err, data) => {
//                 if (err) throw new Error(err);
//                 // console.log(Buffer.from(data).toString());
//                 console.log(data);
//             }
//         );
//     }
// );

// асинхонный вызов - не всегда получает весь обновленный файл
// fs.readFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw new Error(err);
//         // console.log(Buffer.from(data).toString());
//         console.log(data);
//     }
// );

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw new Error(err);
        console.log('Файл переименован');
    }
);