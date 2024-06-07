//write a person class to hold all the details 
class person {
    #email;
    #updatedCount;
    constructor(firstName,lastName,age,place,address,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 26;
        this.place = place;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.#email = email;
        this.#updatedCount = 0;
    }
    printThis(){
        console.log(This);
    }
    get emailId(){
        return this.#email;
    }
    set emailId(email){
        if(String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ){
        this.email = email;
        this.#updatedCount++;
        console.log("Email updated for",this.#updatedCount,"times");
        } else { 
            console.warn("invalid email")
        }
    }
    get Age(){
        return newDate().getFullYear()-this.BirthYear;
    }
    getAgeInDays(){
        return this.getAge()*365;
    }
    greetings(){
       return `Hello ${this.firstName},${this.lastName}`
    }
    static greetings(){
       return Hello;
    }
}
const meenu = new person("meenu","sri","trichy","123 xxx street xxx trichy","1234567890","abc@gmail.com");
const sri = new person("sri","valli","hyderabad","456 yyy street xxx colony","5678902345","sample@gmail.com");
console.log(meenu);
console.log(sri);
console.log(meenu.email);
console.log(sri.email);
meenu.emailId = "abc@gmail.com";
sri.emailId = "sample@gmail.com";
meenu.emailId = "manikavalli9@gmail.com";
sri.emailId = "rpsram98@gmail.com";
