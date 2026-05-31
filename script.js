var RRRco = RRRco || {};

(function() {
  var terminalEl = document.getElementById('terminal');

  if (!terminalEl) return;

  var terminal = new RRRco.Terminal(terminalEl);

  RRRco.runBootSequence(terminal).then(function(username) {
    terminal.getCompletions = RRRco.getCompletions;

    terminal.onCommand = function(input) {
      RRRco.executeCommand(input, terminal);
    };
  }).catch(function(err) {
    terminal.writeLine('BOOT FAILURE: ' + err.message);
    terminal.writeLine('The terminal has encountered an unrecoverable error.');
    terminal.writeLine('Please remain calm. A technician has been dispatched.');
    terminal.writeLine('The technician is probably real.');
  });
})();
