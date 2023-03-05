const axios =require('axios');
const nodemailer = require('nodemailer');
const fs = require('fs');
const http = require('http');

//to forward email
// var require = require('email-templates').EmailTemplate

//read email
const emails = fs.readFileSync('mail.txt').toString().split('\n');

//API
const apiUrl = 'https://inshortsapi.vercel.app/news?category=sports';

//fetch data from api

axios.get(apiUrl)
  .then(response => {
    const data = response.data;
    console.log(data);
 
    let result = `<html>

    <head>

    <style>
    body{
        background-color: #2f3e46;
    }
    table,th ,td{
        border: 1px solid white;
        /* border-collapse: collapse; */
        margin: auto;
        margin-top: 200px;
        padding: 15px;
    
      
    }
    #head{
        background-color: #231942;
        color: #ffffff;
        size: 500px  ;
        
    }
    tr{
        background-color: #4cc9f0;
        color: #000000;
        font-weight: bold;
    }
    
  
    </style>


    <div id="data">
    <table id="mytable">
        <tr id="head">
            <th> Author</th>
            <th> Content</th>
            <th>  Date</th>
            <th> Image </th>
            <th> Title</th>
        </tr>

        <tbody id="userData">` 
        data.data.map((values) =>{
          result += `<tr>
          <td>${values.author}</td>
          <td>${values.content}</td>
          <td>${values.date}</td>
          <td><img width="50" height="50" src="${values.imageUrl}"/></td>
          <td>${values.title}</td>
      </tr>` 
      });

      result += `</tbody>
    </table>

    </div>
</body>
</html>` 
        
const msg = {
    from: 'purvi1800v@gmail.com' ,
    to: emails.join(', '),
    subject:'sports news',
    html: result
}

 //  SENDING MAIL FROM SERVER

let transporter = nodemailer.createTransport({
    service:'gmail',     
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
      user: "purvi1800v@gmail.com",
      pass: "abzblzvdsfnhmwle"
    }
  });
  
  // Send email
  transporter.sendMail(msg, (error, info) => {
    if (error)
     {
      console.log(error);
    } 
    else 
    {
      console.log('Email sent: ' + info.response);
    }
  });
  })
  .catch(error => {
    console.log(error);
});

  






