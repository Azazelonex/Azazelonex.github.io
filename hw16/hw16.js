<<<<<<< HEAD
//first
function capitalaize(string) {
        return string
                .split(' ')
                .map((elem) => 
                elem[0].toUpperCase() + elem.slice(1)
                )
                .join(' ');
};

//second
function  checkSubstring(string, substring) {
        return string.toUpperCase().includes(substring.toUpperCase());
=======
//first
function capitalaize(string) {
        return string
                .split(' ')
                .map((elem) => 
                elem[0].toUpperCase() + elem.slice(1)
                )
                .join(' ');
};

//second
function  checkSubstring(string, substring) {
        return string.toUpperCase().includes(substring.toUpperCase());
>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
};