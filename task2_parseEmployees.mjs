import fs from'fs'
import {parse} from 'csv-parse'
fs.readFile('employees.csv','utf8',(err,data)=>{
  if(err) throw err;

  console.log(data);

parse(data, {columns:true},(err,rows)=>{
  if(err){
    console.log("error",err);
  }
  rows.forEach(row=>{
    console.log(JSON.stringify(row));
  });
  const total = rows.length;
  const sumsalary=rows.reduce((sum,r)=>sum+Number(r.salary),0);
  const avg = sumsalary/total;
  const counts={};
  rows.forEach(r=>{
    const department=r.department;
    counts[department]=(counts[department]||0)+1;
  });
  console.log('total employee',total);
  console.log('avg salary is',avg);
  console.log('employe in each dept',counts);
})
});
