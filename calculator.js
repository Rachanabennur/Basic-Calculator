let screen = document.getElementById('screen'); // to display on the calculator screen
buttons = document.querySelectorAll('button');  // all buttons on the calculator
var screenvalue;                                // stores the value on the calculator screen
let string;                                     // stores the value on the calculator screen as a string
var buttonText = "";                           // extracts the text on the button
var openbrac = false;                          // to check if brackets are open
let status = false;                            // to check if calculator is power on

class Stack{                                   // Stack to store all the open brackets. To ensure there is no syntax
                                               // error due to brackets.
    constructor(){
        this.items = [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length==0)
        return "invalid";
        return this.items[this.items.length-1];
    }

  isEmpty()
{
	return this.items.length == 0;
}

}

for(item of buttons){

    var stack = new Stack();
    
   
    item.addEventListener('click', ((e) => {         // when the button is clicked
            buttonText = e.target.innerText;


            if(buttonText == 'ON'){                  // if power on button is clicked
                status = true;             
                screen.value = "Power On";
                setTimeout(()=> {screen.value ="RPB Calculator";},1000);
                screenvalue = ' ';
                string=" ";
                console.log(status +"first");
                console.log(string +"is string");
                 
                }
            
            if(status==true && buttonText == 'X'){     // for multiplication
                buttonText = '*';
                string = string + buttonText;
                screenvalue = screenvalue + buttonText;
                screen.value = screenvalue; 
                console.log(string +"is string");
            }

            else if(status==true && buttonText =='AC'){  // for all clear button
                string=" ";  
                screenvalue = "";
                screen.value = "";
                console.log(string +"is string");
            }

            else if(status==true && buttonText == '='){   // if = button is clicked
                if(openbrac == true){
                    screen.value = "Invalid bracket";
                }
                else{  // for equal to button
                screenvalue = eval(screenvalue);
                string = screenvalue.toString();
                screen.value = screenvalue;
                console.log(string +"is string");
                }
            }

            else if(status==true && buttonText == 'C'){   // for backspace or clear button
               string = string.slice(0,-1);
               screenvalue = string;
               screen.value = screenvalue;
               console.log(string +"is string");
            }

           else if(status==true && buttonText == 'OFF'){  // power off button
                status = false;
                screen.value = "Power Off";
                string = " ";
                screenvalue = ""; 
                console.log("value of string in off "+string);
                console.log("value of screenvalue in off "+screenvalue);
                console.log(string +"is string");
                return;
             }

            else if(status==true && buttonText == '('){  // if open bracket is used
                stack.push(buttonText);
                openbrac = true;
                
                screenvalue = screenvalue + buttonText;
                screen.value = screenvalue;
                string = screenvalue.toString();
            }

            else if(status==true && buttonText == ')'){  // if closed bracket is used
                if(stack.isEmpty==false){
                screen.value = "invalid brackets"
                }
                else{
                stack.pop();
                bracket = false;
                screenvalue = screenvalue + buttonText;
                screen.value = screenvalue;
                
                string = screenvalue.toString();}
            }
                else{         // for remaining buttons except power on
                    if(status == true && buttonText!='ON'){
                screenvalue = screenvalue + buttonText;
                screen.value = screenvalue;
                string = screenvalue.toString();
               
            }
          }
         
        } ) 
     )       
 }
 

