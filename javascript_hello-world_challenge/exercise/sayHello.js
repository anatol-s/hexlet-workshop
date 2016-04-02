var assert = require("assert");

describe("sayHello", function() {
  it("Говорит \"Hello <name>!\"", function() {
    assert.equal(sayHello("Hexlet"), "Hello Hexlet!");

	// BEGIN
	function sayHello(name) {
		return "Hello " + name + "!";
	}
	// END

  });
});
