var mysql = require('mysql');
const express= require('express');
const app=express();
app.use(express.json());
const {sendMail}=require('./controllers/Db_Data');


app.listen(3300, async(req,res)=>{        //server
    console.log("Sever is now listening at port 3300");
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    // password: "",   
    database: "test"
});

con.connect(function(err) {
  if (err) 
  {
    console.log("error",err)
  }
    console.log("Connected!");
   
});



// get api
app.get('/',(req,res)=>{
    con.query(`Select * from newt`, (err, result)=>{
                if(err){
                    res.send({message:"error",err});
                }
                else{
                    res.send(result)
                }
            });
    // con.end;
})

//----------------for sending mail to particular id, add singlemail file------------------------------ 
// app.get('/mail', sendMail) // for one mail without using db




//------------sending mail from db using id , add sendDbMail file-----------------------------------------------
// app.get('/mail', (req, res) => {
//     const query = 'SELECT id FROM newt'; // Adjust the query as needed
//     con.query(query, (err, results) => {
//       if (err) {
//         console.error('Error executing database query:', err);
//         return;
//       }
  
//       // Extract email addresses from the query results
//       const emailAddresses = results.map(row => row.id);
  
//       if (emailAddresses.length === 0) {
//         console.error('No email addresses found in the database');
//         return;
//       }
  
//       // Call the sendMail function to send emails
//       sendMail(emailAddresses,con);
  
//       res.send('Emails sent successfully'); // Respond to the client
      
//     //   sendMail(customer,con);
//     });
//   });



//---------------------------add Db_data file---------------------------------------------------------------
// sending mail with data , which is stored in db
app.get('/mail', (req, res) => {
    const query = 'SELECT id, data FROM newt'; // Adjust the query as needed
    con.query(query, (err, results) => {
      if (err) {
        console.error('Error executing database query:', err);
        return;
      }
  
      // Extract email addresses from the query results
      console.log("result",results);
   
      sendMail(results);
  
      res.send('Emails sent successfully'); // Respond to the client
      
    });
  });



  // post data
  app.post('/newt', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into newt(id, data, status) 
                       values('${user.id}', '${user.data}','${user.status}')`

    con.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    // con.end;
})



