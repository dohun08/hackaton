const sqlite3 = require('sqlite3').verbose();

// 데이터베이스 파일 경로
const dbPath = 'db/database.db';

// 데이터베이스 연결
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
    console.error('데이터베이스 연결 실패:', err.message);
    } else {
    console.log('데이터베이스에 성공적으로 연결되었습니다.');
    }
});


db.serialize(() => {
  db.each('SELECT * FROM users;', (err, row) => {
    if (err) {
        console.error('쿼리 실행 오류:', err.message);
    } else {
        console.log(row);
    }
    });
});


// 데이터베이스 연결 닫기
// db.close((err) => {
//     if (err) {
//         console.error('데이터베이스 연결 닫기 실패:', err.message);
//     } else {
//     console.log('데이터베이스 연결이 성공적으로 닫혔습니다.');
//     }
// });
