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
};