const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  // Write your JavaScript code inside the init() function
  let index = 0;

  function init() {
  document.body.addEventListener('keydown', function(e) {
    let key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Hurray!");
        index = 0;
      };
    } else {
      index = 0;
    };
  });
};
