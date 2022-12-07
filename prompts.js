
  let birthYear = prompt("Please enter your year of Birth");
        let now = new Date();
        let age = now.getYear() - birthYear + 1900;

        if(age<18) {
          alert("Minor");
      }
      else if(age>=18 && age<36) {
          alert("Youth");
      }
      else { alert("Elder");
    }