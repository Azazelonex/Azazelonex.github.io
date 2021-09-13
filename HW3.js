console.log((name ??) && (age>18));
console.log((role===`Admin`) && (occupation ===`CEO`));
console.log(occupation ?? role);
console.log((name ??) && (age>18) || (role===`Admin`));
console.log((role!==`Admin`) && (name??) && age);