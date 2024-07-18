const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const sqlite3 = require('sqlite3').verbose();
const dbPath = 'db/database.db';

app.use(express.static(path.join(__dirname, 'public', 'static')));
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
      if (filePath.endsWith('.js')) {
          res.setHeader('Content-Type', 'text/javascript');
      }
  }
}));

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
    console.error('데이터베이스 연결 실패:', err.message);
    } else {
    console.log('데이터베이스에 성공적으로 연결되었습니다.');
    }
});

app.get('/glassReq', (req, res) => {
    const primary = req.query.userid;
    
    db.each(`SELECT glass FROM users WHERE userid = ${primary};`, (err, row) => {
      if (err) {
        console.error('쿼리 실행 오류:', err.message);
      } else {
        res.json(row);
      }
    });
  });

// GET 요청 처리 예시: '/users' 경로에 쿼리 파라미터 사용
app.get('/users', (req, res) => {
  const userName = req.query.name; // req.query 객체를 통해 'name' 쿼리 파라미터 값 가져오기
  
  if (userName) {
      res.send(`사용자 이름 '${userName}'을(를) 검색합니다.`);
  } else {
      res.send('사용자 이름을 지정하세요.');
  }
});

app.post('/api/purchase', (req, res) => {
  const { productId, quantity } = req.body;
  console.log(`Product ID: ${productId}, Quantity: ${quantity}`);
  
  // 실제 구매 처리 로직은 여기에 추가하세요
  res.json({ message: 'Purchase received successfully', productId, quantity });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
