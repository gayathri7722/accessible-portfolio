(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  var rules = {
    name: function (v) { return v.trim() ? '' : 'Enter your full name.'; },
    email: function (v) {
      if (!v.trim()) return 'Enter your email address.';
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email, like name@example.com.';
    },
    message: function (v) { return v.trim().length >= 10 ? '' : 'Enter a message of at least 10 characters.'; }
  };

  function check(id) {
    var field = document.getElementById(id);
    var msg = rules[id](field.value);
    document.getElementById(id + '-error').textContent = msg;
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }

  Object.keys(rules).forEach(function (id) {
    document.getElementById(id).addEventListener('blur', function () { check(id); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.hidden = true;
    var firstBad = null;
    Object.keys(rules).forEach(function (id) {
      if (!check(id) && !firstBad) firstBad = document.getElementById(id);
    });
    if (firstBad) { firstBad.focus(); return; }
    status.hidden = false;
    status.focus();
    form.reset();
  });
})();
