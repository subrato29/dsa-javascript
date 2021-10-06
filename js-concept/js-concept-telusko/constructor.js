// The difference between a normal function and a constructor function is, a constructor functions starts with a Capital letter
//e.g.
function ConstructorFunction() {

}
//****************************************************************************** */

//constructor
function Tech(machine, language) {
    this.machine = machine;
    this.language = language;

    this.work = function() {
        console.log('coding...');
    }
}
let tech1 = new Tech('HP', 'java');
let tech2 = new Tech('MAC', 'dotnet');

console.log(tech1);
console.log(tech2);