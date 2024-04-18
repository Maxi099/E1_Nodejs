import {get,save} from "./fileMethods.js";
import inquirer from "inquirer";
import { promptNewExpense } from "./expensePrompts.js";

const main = async()=>{
let run=true;
    while(run){
        const action= await inquirer.prompt([
            {
                type:"list",
                name: "chosen",
                message:"\nElija por favor:",
                choices:[
                    {value:1,name:"Agregar gasto"},
                    {value:2,name:"Eliminar gasto"},
                    {value:3,name:"Ver gastos"},
                    {value:4,name:"Salir"}

                ]
            }

        ]);
        switch (action.chosen){
            case 1:
            await createExpense();
            break;
            case 2:
            await deleteExpense();
            break;
            case 3:
            await getAllExpenses();
            break;
            case 4: 
            run=false;
            break;
            default:
            run=false;
            break;


        }


    }
}


main();


async function createExpense(){
console.log("\nAgregando nuevo gasto:");
const newData = await promptNewExpense();
const currentExpense = await get("data");
currentExpense.push(newData);
await save("data",currentExpense );
console.log("\n")
console.log("Se agrego el siguiente gasto:")
console.log (newData);
console.log("\n")
}

async function getAllExpenses(){
const currentExpense =await get ("data");
console.table (currentExpense);

}

async function deleteExpense(){

    const currentExpense =await get ("data");
    console.table (currentExpense);
    const newData = await promptDeleteExpense();
    console.log("\n")
     console.log("Se va a elimianr el siguiente gasto:")
    console.log (currentExpense[parseInt(newData.Index)]);
    console.log("\n")
    await save("data",currentExpense.filter((el, i)=> i !== parseInt(newData.Index)));

    }


    async function promptDeleteExpense(){
        return await inquirer.prompt([
    
            {                
                type:"input",
                name:"Index",
                message:"Ingrese index:"
        
            }, 
           
           ])

    }

 
    
    