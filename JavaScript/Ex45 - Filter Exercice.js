function validUserNames(names) {
    let validName = names.filter(n => n.length < 10);
    return validName;
}