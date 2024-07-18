document.getElementById('options').addEventListener('change', function() {
    var inputEtc = document.getElementById('inputEtc');
    if (this.value === 'etc') {
      inputEtc.style.display = 'block';
    } else {
      inputEtc.style.display = 'none';
    }
  });