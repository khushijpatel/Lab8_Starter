// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//tests for isPhoneNumber
test('isPhoneNumberNormal', () => {
    expect(functions.isPhoneNumber('987-654-3210')).toBe(true);
});
test('isPhoneNumberNormal', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});
test('isPhoneNumberBad', () => {
    expect(functions.isPhoneNumber('49fnwfarfa4234')).toBe(false);
});
test('isPhoneNumberBad', () => {
    expect(functions.isPhoneNumber('12344345853934')).toBe(false);
});

//tests for isEmail
test('isEmailNormal', () => {
    expect(functions.isEmail('test@test.com')).toBe(true);
});
test('isEmailNormal', () => {
    expect(functions.isEmail('test47@test.com')).toBe(true);
});
test('isEmailBad', () => {
    expect(functions.isEmail('1234567890')).toBe(false);
});
test('isEmailBad', () => {
    expect(functions.isEmail('Test@@@com')).toBe(false);
});

//tests for isStrongPassword
test('isStrongPasswordNormal', () => {
    expect(functions.isStrongPassword('letter___12')).toBe(true);
});
test('isStrongPasswordNormal', () => {
    expect(functions.isStrongPassword('letter92383')).toBe(true);
});
test('isStrongPasswordBad', () => {
    expect(functions.isStrongPassword('123')).toBe(false);
});
test('isStrongPasswordBad', () => {
    expect(functions.isStrongPassword('_^^4')).toBe(false);
});

//tests for isDate
test('isDateNormal', () => {
    expect(functions.isDate('11/19/2022')).toBe(true);
});
test('isDateNormal', () => {
    expect(functions.isDate('1/19/2023')).toBe(true);
});
test('isDateBad', () => {
    expect(functions.isDate('December 15th, 2023')).toBe(false);
});
test('isDateBad', () => {
    expect(functions.isDate('11-20-2019')).toBe(false);
});

//tests for isHexColor
test('isHexColorNormal', () => {
    expect(functions.isHexColor('#955dc6')).toBe(true);
});
test('isHexColorNormal', () => {
    expect(functions.isHexColor('#FCD')).toBe(true);
});
test('isHexColorBad', () => {
    expect(functions.isHexColor('#092342009294')).toBe(false);
});
test('isHexColorBad', () => {
    expect(functions.isHexColor('#FICI8')).toBe(false);
});