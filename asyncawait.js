// Promise can be constructed using constructor 
// executor function

// promise is produced
// WAY 1 Using constructor
const p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let roll =[1,2,3,4,5]
       // resolve(roll);
        reject(`error while communicating`,2);
    },2000)
});

// WAY 2 
const getbiodata = (roll)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((roll)=>{
            let biodata={
                name:"sa",
                age:26
            }
           resolve(`my roll no is ${roll} name is ${biodata.name} age is ${biodata.age}` )
           reject(`error occured`);
        },2000,roll)
    })
}


//   the word async before any func means return a promise not a value 
async function getData()
{
   
   try {
    const rollnodata = await p;
    console.log(rollnodata);
   } catch (error) {
       console.log(error);
   }
    

   
    try { 
        const biodatas = await getbiodata(rollnodata);
        console.log(biodatas);
        return biodatas;
    } catch (error) {
        return error;
    }
   

  
}

const g =getData().then((myname)=>{
    console.log(myname);
});
console.log(g)