const getRollNo =(a,callback)=>{
    setTimeout(()=>{
        console.log("API GETTING ROLL NUMBER");
        let roll = [1,2,3,4,5];
        console.log(roll);
        setTimeout((roll)=>{
            console.log("API fetching NAme ");
           const biodata ={
               name : 'vinod',
               age : 26
           }
            console.log(`name is  ${biodata.name} and rol is ${biodata.age} ${roll}`);
            setTimeout((a)=>{

                console.log(`age verified ${a}`);
            },2000,biodata.age)
        },2000,roll[0])
    },2000);
}

getRollNo(3,(a)=>{
    console.log(a);
})