// Promise can be constructed using constructor 
// executor function

// promise is produced
// WAY 1 Using constructor
const p = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        let roll =[1,2,3,4,5]
        //resolve(roll);
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

// The methods Promise.then(), Promise.catch() and Promise.finally
// Promise is consumed
p.then((roll)=>{
    console.log(`getting the roll number ${roll}`)
    return getbiodata(roll[0])}).then((r)=>{
            console.log(r);
    }).catch((err)=>{
        console.log(err);
    })
.catch((error)=>{
    console.log(`${error} `)
})