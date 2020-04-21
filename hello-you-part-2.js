function hello(name) {
  if (name == null) {
    console.log(`Hello, world!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

hello("Mustache");
hello();
