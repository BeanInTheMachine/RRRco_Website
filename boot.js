var RRRco = RRRco || {};

RRRco.runBootSequence = function(terminal) {
  terminal.mode = 'boot';
  terminal._renderInputLine();

  return new Promise(function(resolve) {

    var messages = [
      { text: '', delay: 300 },
      { text: 'RRRco Secure Terminal BIOS v2.14 \u2014 INITIALIZING...', delay: 500 },
      { text: 'POST: MEMORY CHECK.................................................. [OK]', delay: 350 },
      { text: 'POST: CRYPTO ENGINE................................................. [OK]', delay: 250 },
      { text: 'POST: REALITY ANCHOR CALIBRATION................................... [OK]', delay: 450 },
      { text: 'POST: QUANTUM ENTANGLEMENT BUS..................................... [WARN]', delay: 350 },
      { text: '      Phase drift detected at 0.002%. Within tolerances.', delay: 200 },
      { text: 'POST: LIE DETECTOR.................................................. [DISABLED]', delay: 300 },
      { text: '      Disabled per Legal Advisory 2026-03. We are not', delay: 150 },
      { text: '      legally permitted to detect lies at this time.', delay: 150 },
      { text: 'POST: COFFEE MACHINE (SECTOR G).................................... [NOT REAL]', delay: 350 },
      { text: '      This device does not exist. Any coffee it produces', delay: 150 },
      { text: '      is a collective hallucination. Please enjoy responsibly.', delay: 200 },
      { text: 'INIT: Loading reality drivers...', delay: 400 },
      { text: 'INIT: Mounting consensus volume /dev/consensus0...', delay: 300 },
      { text: 'INIT: Entanglement handshake with Sites 1-7...', delay: 400 },
      { text: 'INIT: Site 5 not responding. Assuming normal.', delay: 300 },
      { text: 'INIT: Site 5 responding. Too late. Ignoring.', delay: 250 },
      { text: 'BOOT: Kernel REALITY_KERN v0.9.3-beta loaded.', delay: 300 }
    ];

    var slogans = [
      'Your Reality Is Our Priority',
      'We\'ve Already Been There. You Just Forgot.',
      'Consensus Is Just A Suggestion',
      'Reality: Locally Sourced Since [REDACTED]',
      'Because Someone Has To',
      'What Happens In The Desert Stays In The Desert. Usually.',
      'Trust The Process. The Process Is Us.',
      'We Don\'t Make The Reality. We Replace It.',
      'Nothing To See Here. Move Along.',
      'Serving The Greater Good (Patent Pending)',
      'Your Consent Is Not Required',
      'You\'re In Good Hands. Probably.'
    ];

    var slogan = slogans[Math.floor(Math.random() * slogans.length)];
    var sloganText = '"' + slogan + '"';
    var pad = Math.floor((39 - sloganText.length) / 2);
    var spaces = '';
    for (var i = 0; i < pad; i++) spaces += ' ';
    var paddedSlogan = spaces + sloganText;

    var asciiLogo = [
      '',
      '$$$$$$$\\   $$$$$$$\\   $$$$$$$\\                      ',
      '$$  __$$\\  $$  __$$\\  $$  __$$\\                     ',
      '$$ |  $$ | $$ |  $$ | $$ |  $$ | $$$$$$$\\  $$$$$$\\  ',
      '$$$$$$$  | $$$$$$$  | $$$$$$$  | $$  _____|$$  __$$\\ ',
      '$$  __ $$< $$  __ $$< $$  __ $$< $$ /      $$ /  $$ |',
      '$$ |   $$ |$$ |   $$ |$$ |   $$ |$$ |      $$ |  $$ |',
      '$$ |   $$ |$$ |   $$ |$$ |   $$ |\\$$$$$$$\\ \\$$$$$$  |',
      '\\__|   \\__|\\__|   \\__|\\__|   \\__| \\_______| \\______/ ',
      '',
      '          REALITY REPLACEMENT RESEARCH COMPANY',
      '          ' + paddedSlogan,
      ''
    ];

    var banner = [
      '',
      'RRRco Secure Terminal v' + RRRco.session.terminalVersion,
      'Clearance: ' + RRRco.session.clearance,
      'Kernel: REALITY_KERN v0.9.3-beta (experimental)',
      ''
    ];

    var motd = [
      '',
      '================================================================',
      '               MESSAGE OF THE DAY (UMBRA-4)                    ',
      '================================================================',
      '',
      'Welcome back, {username}. Your last login was from an',
      'unrecognized temporal coordinate. This has been reported.',
      '',
      'REMINDER: All terminal activity is monitored, logged, and',
      'potentially retroactively edited for compliance purposes.',
      '',
      'REMINDER: The coffee machine in Sector G is still not real.',
      'Do not attempt to drink from it. We are working on it.',
      '',
      'REMINDER: If you experience sudden unrecognition of loved',
      'ones, remain calm. This is a known side effect. Probably.',
      '',
      'Type "help" for available commands.',
      '================================================================',
      ''
    ];

    var i = 0;
    function nextMessage() {
      if (i < messages.length) {
        var msg = messages[i];
        terminal.writeLine(msg.text);
        i++;
        setTimeout(nextMessage, msg.delay);
      } else {
        setTimeout(showLogo, 400);
      }
    }

    function showLogo() {
      terminal.writeLines(asciiLogo);
      setTimeout(showBanner, 700);
    }

    function showBanner() {
      terminal.writeLines(banner);
      setTimeout(startLogin, 600);
    }

    function startLogin() {
      terminal.mode = 'login';
      terminal.setPrompt('login: ');
      terminal.onLogin = function(username) {
        setTimeout(function() {
          showMotd(username);
        }, 400);
      };
    }

    function showMotd(username) {
      var motdLines = [];
      for (var j = 0; j < motd.length; j++) {
        motdLines.push(motd[j].replace('{username}', username));
      }
      terminal.writeLines(motdLines);
      terminal.mode = 'command';
      terminal.setPrompt(username + '@' + RRRco.session.hostname + ':~$ ');
      resolve(username);
    }

    nextMessage();
  });
};
