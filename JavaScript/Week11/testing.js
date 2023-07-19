const getFullName = (fname, lname) => {
  return `!${fname}${lname}`;
};

const actualFullName = getFullName("Alan", "Smith");
const expectedFullName = "!Alan Smith";

if (actualFullName !== expectedFullName) {
  throw new Error(`${actualFullName} is not equal to ${expectedFullName}`);
}

const addPeriod = (s) => {
  return `${s}.`;
};

const actual = addPeriod("Hello world");
const expected = "Hello world.";

if (actual !== expected) {
  throw new Error(`Test not passed`);
}
