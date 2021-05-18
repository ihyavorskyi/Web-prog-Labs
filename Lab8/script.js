(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim", "Anna"];
    var goodBye = speakGoodBye();
    var hello = speakHello();

    console.log("When name start from 'J' or 'j' show 'Good Bye + name'. Otherwise show 'Hello + name'")
    names.forEach(item => {
        if (item.toLowerCase().charAt(0) === "j") {
            goodBye(item)
        } else {
            hello(item)
        }
    });

    console.log("\n\n\nWhen name include 'A' or 'a' show 'Good Bye + name'.  Otherwise show 'Hello + name'")
    names.forEach(item => {
        if (item.toLowerCase().includes("a")) {
            goodBye(item)
        } else {
            hello(item)
        }
    });
}());