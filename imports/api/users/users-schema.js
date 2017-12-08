const Schemas = {};
Schemas.Users = new SimpleSchema({
  firstName: {
    type: String,
    max: 20
  },
  secondName: {
    type: String,
    max: 20
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    max: 50
  },
  phone: {
    type: String,
    max: 15
  },
  address: {
    type: String,
    max: 50
  },
  city: {
    type: String,
    max: 20
  },
  province: {
    type: String,
    max: 20
  },
  postalCode: {
    type: String,
    regEx: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
    max: 9
  },
  country: {
    type: String,
    max: 20
  },
  comments: {
    type: String,
  },
});

SimpleSchema.messages({
  "regEx postalCode": [
    {msg: "Postal code format is - 'A1A 1A1'"}
  ],
});

export default Schemas