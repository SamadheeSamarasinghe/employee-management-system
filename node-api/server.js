import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeedb"
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Server error" });
        return res.json(result);
    })
})

app.post('/', (req, res) => {
    const sql = "INSERT INTO employee (`name`,`designation`,`empType`,`experience`) VALUES (?,?,?,?)";
    const values = [
        req.body.name,
        req.body.designation,
        req.body.empType,
        req.body.experience
    ]
    db.query(sql, values, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.get('/edit/:empId', (req, res) => {
    const sql = "SELECT * FROM employee WHERE empId = ?";
    const empId = req.params.empId;

    db.query(sql, empId, (err, result) => {
        if (err) return res.json({ Message: "Server error" });
        return res.json(result);
    })
})

app.put('/update/:empId', (req, res) => {
    const sql = "UPDATE employee SET `name`=?, `designation`=?, `empType`=?, `experience`=? WHERE empId=?";
    const empId = req.params.empId;

    db.query(sql, [req.body.name, req.body.designation, req.body.empType, req.body.experience, empId], (err, result) => {
        if (err) return res.json({ Message: "Server error" });
        return res.json({ updated: true });
    })
})

app.delete('/:empId', (req, res) => {
    const sql = "DELETE FROM employee WHERE empId=?";
    const empId = req.params.empId;
    db.query(sql, empId, (err, result) => {
        if (err) return res.json({ Message: "Server error" });
        return res.json(result);
    })
})


const port = 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

});

