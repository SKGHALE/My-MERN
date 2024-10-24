function User(username, loginTime, loginCount) {
  this.username = username;
  this.loginTime = loginTime;
  this.loginCount = loginCount;

  return this;
}

const userOne = new User("Saheb", "07.12", 3);
console.log(userOne);
