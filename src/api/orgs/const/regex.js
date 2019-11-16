"use strict";
const NAME_REGEX = /^[A-z0-9\s]{3,50}$/;
const DESCRIPTION_REGEX = /^[\s\S]{10,100}$/;

module.exports = {
    NAME_REGEX,
    DESCRIPTION_REGEX
};