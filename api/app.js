const express = require("express")

const app = express();
const sql = require("mssql");
const cors = require('cors');



// Permitir todas as origens
app.use(cors());


app.get("/dados" , async (req, res) => {
    try {

        const nome = req.query.nome;

        const bdServer = "Driver={ODBC Driver 18 for SQL Server};Server=tcp:sucodetamarindoca.database.windows.net,1433;Database=turmadochavescá;Uid=professorgirafa;Pwd={Turmachaves@123};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;"

        await sql.connect(bdServer);
        
     
        const result = await sql.query(`SELECT * FROM Atores WHERE nome LIKE '%${nome}%'`);

        res.json(result.recordset); 
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao consultar o banco de dados.");
    } finally {
        
        await sql.close();
    }
});

app.listen(8080, () => {
    console.log("server on")
})