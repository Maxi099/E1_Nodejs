import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";


const today = new Date();

inquirer.registerPrompt("date", DatePrompt);
export async function promptNewExpense(){

    return await inquirer.prompt(newExpensePrompt);
}


const newExpensePrompt =[


    {
        
        type:"date",
        name:"Fecha",
        message:"Ingrese Fecha:",
        locale:"es-ES",
        format:{hour:undefined, minute:undefined}

    },
   
    {

        type:"input",
        name:"Descripcion",
        message:"Ingrese Descripcion:"

    },
    {
        type:"input",
        name:"Importe",
        message:"Ingrese Importe:"

    }

]
