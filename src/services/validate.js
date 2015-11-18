app.service("ValidateService", function($http) {
  this.validateNumber = (number)=> {
    if (number.match(/[a-z]/g) ||(typeof number) === 'undefined') {
      return false;
    }
    number = number.replace(/\D/g, '');
    if (number.length === 10 || number.length === 11 && number.charAt(0) === '1') {
      return number;
    }
    return false;
  };
  this.validateEmail = (email)=>{
    if (/(\w+\.)*\w+@((\w+\.)+\w+)/.test(email)){
      return true;
    }
    return false;
  }
  this.validateZipCode = (zipcode) => {
    return /\d{5}/.test(zipcode)
  }
})
