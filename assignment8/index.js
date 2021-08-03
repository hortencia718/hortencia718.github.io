
console.log("A -- Tip Calculator")


let tips = bill =>{
    return bill > 50 && bill < 300 ? 
`bill = $${bill}\ntip 15%  = $${15 / 100 * bill}\ntotal = $${15 / 100 * bill + bill}` :
 `bill = $${bill}\nTip 20% = $${20 / 100 * bill}\ntotal = $${20 / 100 * bill + bill}`;

}

    console.log(tips(275))
    console.log(tips(28))
    console.log(tips(430))


    // console.log("B -- Celsius to fahrenheit ")

    // const temp = 32;

    console.log(" B ----- i didn't do this one ")
     function celToFarenheit(value) {
        // console.log("i didn't do this one ")
     }


    console.log("C ----------knicks, nets" )



    const calAverage= (nets, knicks) =>{
        let attempts = knicks.length;
        let knicksSum = 0;
        let netsSum =0;
        // loop
        for(let i=0; i< attempts; i++){
            // check i
            console.log(i)
            knicksSum += knicks[i]
            netsSum += nets[i]
        }
        // double the average
        let avgKnicks = knicksSum / attempts;
        let avgNets = netsSum / attempts;
        checkWinner(avgKnicks, avgNets)
    }

    const checkWinner = (avgKnicks, avgNets) => {
        console.log(`Knicks Average: ${avgKnicks}\nNets Average: ${avgNets}`)

    if (avgKnicks/2 >= avgNets) {
        console.log(`Knicks wins with (${avgKnicks} vs. ${avgNets}) points`)
    } else if (avgNets/2 >= avgKnicks) {
        console.log(`Nets wins with (${avgNets} vs.${avgKnicks}) points`)
    } else {
        console.log("No Winner!")
    }
}
console.log("Test Data 1 : Knicks = [65,54,49], Nets = [44,23,71]")
calAverage([65,54,49],[44,23,71]);
console.log("Test Data 2 : Knicks = [23,34,27], Nets = [85,54,41]")
calAverage([23,34,27],[85,54,41]);




console.log("D -----------------Tip calculator again and again and again , now with array")

    const bills =[125, 555, 44]
    // function
    const calTip =bills => {
        let tips=[];
        let total=[]
        bills.forEach(bill => {
            const tip = bill > 50&& bill < 300 ? 15 /100 * bill : 20/100 * bill;
            tips.push(tip)
            let subTotal = bill+tip;
            total.push(subTotal);
            
        });
        console.log("bills Array: ", bills, "\ntips Array: ", tips, "\ntotal Array:", total)
        const final = (`bills =  ${bills} \n Tips =  ${tips}  \nTotal =  ${total}`)
        return final
    }
    console.log(calTip(bills));

    // push it