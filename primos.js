function main(max) {
    for (var i = 0; i < max; i++) {
        console.log(i + " - " + type(i));
    }
}

function type(n) {
    if (n % 2 === 0) return "Par";
    var s = Math.sqrt(n);
    for (var i = 3; i <= s; i += 2) {
        if (n % i === 0) return "Compuesto";
    }
    return "Primo";
}
main(100);
