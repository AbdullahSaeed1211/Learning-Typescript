"use strict";
// TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
Object.defineProperty(exports, "__esModule", { value: true });
// When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal:
var hero; //always will be infered as a string
function getHero() {
    return "thor";
}
hero = getHero();
