var RRRco = RRRco || {};

RRRco.commands = {};

RRRco.registerCommand = function(name, handler, description, hidden) {
  RRRco.commands[name] = {
    handler: handler,
    description: description,
    hidden: hidden || false
  };
};

RRRco.executeCommand = function(input, terminal) {
  var parts = input.split(/\s+/);
  var cmdName = parts[0].toLowerCase();
  var args = parts.slice(1);

  var cmd = RRRco.commands[cmdName];

  if (!cmd) {
    terminal.writeLine('Command not found: ' + cmdName);
    terminal.writeLine('Type "help" for available commands.');
    return;
  }

  cmd.handler(args, terminal);
};

RRRco.getCompletions = function(prefix) {
  var matches = [];
  var cmdNames = Object.keys(RRRco.commands);
  for (var i = 0; i < cmdNames.length; i++) {
    var name = cmdNames[i];
    var cmd = RRRco.commands[name];
    if (!cmd.hidden && name.indexOf(prefix) === 0) {
      matches.push(name);
    }
  }
  return matches;
};

(function initCommands() {

  var t = function(term, text) { term.writeLine(text); };
  var hr = function(term) { term.writeLine('================================================================'); };

  RRRco.registerCommand('help', function(args, term) {
    if (args.length > 0) {
      var cmd = RRRco.commands[args[0].toLowerCase()];
      if (cmd && !cmd.hidden) {
        term.writeLine('');
        term.writeLine(args[0].toUpperCase() + ' \u2014 ' + cmd.description);
        return;
      }
      term.writeLine('No help available for: ' + args[0]);
      return;
    }

    term.writeLine('');
    hr(term);
    term.writeLine('  AVAILABLE COMMANDS');
    hr(term);
    term.writeLine('');

    var names = Object.keys(RRRco.commands).sort();
    var maxLen = 0;
    for (var i = 0; i < names.length; i++) {
      var cmd = RRRco.commands[names[i]];
      if (!cmd.hidden && names[i].length > maxLen) {
        maxLen = names[i].length;
      }
    }

    for (var i = 0; i < names.length; i++) {
      var cmd = RRRco.commands[names[i]];
      if (cmd.hidden) continue;
      var padded = names[i];
      while (padded.length < maxLen + 2) padded += ' ';
      term.writeLine('  ' + padded + cmd.description);
    }

    term.writeLine('');
    hr(term);
    term.writeLine('');
    term.writeLine('Tab completion available. Type "help <command>" for details.');
    term.writeLine('');
  }, 'List available commands');

  RRRco.registerCommand('clear', function(args, term) {
    term.clear();
  }, 'Clear the terminal screen');

  RRRco.registerCommand('about', function(args, term) {
    term.writeLine('');
    hr(term);
    term.writeLine('  REALITY REPLACEMENT RESEARCH COMPANY');
    hr(term);
    term.writeLine('');
    term.writeLine('RRRco was founded in [REDACTED] under the Department of');
    term.writeLine('Reality Assurance (DRA) charter 447-B. Our mission is simple:');
    term.writeLine('identify, contain, and \u2014 when necessary \u2014 replace consensus');
    term.writeLine('reality layers that have become unstable, inconvenient, or');
    term.writeLine('embarrassing to authorized stakeholders.');
    term.writeLine('');
    term.writeLine('Headquartered in the Sonoran Desert for reasons of ambient');
    term.writeLine('thermal noise masking and excellent sunsets, RRRco operates');
    term.writeLine('seven known facilities (and three that are not known).');
    term.writeLine('');
    term.writeLine('Our team consists of physicists, ontologists, narrative');
    term.writeLine('architects, and a suspicious number of former magicians.');
    term.writeLine('');
    term.writeLine('We do not exist on any public registry. We are not a');
    term.writeLine('government agency. We are not a private contractor. We are');
    term.writeLine('simply here. You have always known about us. You simply');
    term.writeLine('forgot until now.');
    term.writeLine('');
    hr(term);
    term.writeLine('');
  }, 'About the Reality Replacement Research Company');

  RRRco.registerCommand('research', function(args, term) {
    if (args.length > 0) {
      var project = args[0].toUpperCase();
      showProjectDetail(project, term);
      return;
    }

    term.writeLine('');
    hr(term);
    term.writeLine('  ACTIVE RESEARCH PROJECTS');
    hr(term);
    term.writeLine('');
    term.writeLine('  PROJECT CICADA       Status: ACTIVE    Clearance: UMBRA-3');
    term.writeLine('    Acoustic reality imprinting via sustained subsonic');
    term.writeLine('    frequencies. Field tests in three metropolitan areas.');
    term.writeLine('    Early results suggest the sound of a can opening may');
    term.writeLine('    induce mild compliance in 78% of exposed populations.');
    term.writeLine('');
    term.writeLine('  PROJECT SANDPAPER    Status: ACTIVE    Clearance: UMBRA-4');
    term.writeLine('    Abrasive ontological removal. When a memory needs to');
    term.writeLine('    be erased so thoroughly that it never occurred.');
    term.writeLine('    Side effects may include: phantom nostalgia, sudden');
    term.writeLine('    distrust of sandpaper, and spontaneous podcasting.');
    term.writeLine('');
    term.writeLine('  PROJECT MIRAGE       Status: ACTIVE    Clearance: UMBRA-2');
    term.writeLine('    Long-term atmospheric suggestion via persistent mirage');
    term.writeLine('    generation. Desert-based. Subjects report seeing things');
    term.writeLine('    that are not there. Unclear if this is the project or');
    term.writeLine('    just normal desert behavior. Further study needed.');
    term.writeLine('');
    term.writeLine('  PROJECT DUPLICATE    Status: ON HOLD   Clearance: UMBRA-5');
    term.writeLine('    [ACCESS RESTRICTED \u2014 See Site Director for clearance]');
    term.writeLine('');
    term.writeLine('  PROJECT LIMINAL      Status: UNKNOWN  Clearance: N/A');
    term.writeLine('    We are not sure if this project exists. If it does,');
    term.writeLine('    someone is running it without authorization. If it');
    term.writeLine('    doesn\'t, why does it keep showing up in the budget?');
    term.writeLine('    Budget allocation for FY2026: $12,400,000.');
    term.writeLine('');
    hr(term);
    term.writeLine('');
    term.writeLine('Type "research <project>" for details. (e.g. "research cicada")');
    term.writeLine('');
  }, 'View active research projects');

  function showProjectDetail(project, term) {
    var details = {
      'CICADA': [
        'PROJECT CICADA \u2014 Acoustic Reality Imprinting',
        'Clearance: UMBRA-3 | Status: ACTIVE',
        '',
        'Lead: Dr. Elena Vasquez, Chief Narrative Architect',
        'Budget: $4.7M (FY2026)',
        '',
        'Project Cicada explores the use of sustained subsonic',
        'frequencies to imprint consensus reality adjustments across',
        'large populations without individual awareness. The target',
        'frequency band (17-19 Hz) has been shown to induce mild',
        'suggestibility in controlled trials.',
        '',
        'Phase 3 trials in three metropolitan areas have demonstrated',
        'a 73% success rate in convincing test populations that a',
        'new brand of breakfast cereal has "always existed." The',
        'cereal does not exist. This has not stopped focus groups',
        'from describing its taste in detail.',
        '',
        'RELEVANT MEMO: Personnel assigned to Project Cicada are',
        'advised to avoid humming. We cannot stress this enough.'
      ],
      'SANDPAPER': [
        'PROJECT SANDPAPER \u2014 Abrasive Ontological Removal',
        'Clearance: UMBRA-4 | Status: ACTIVE',
        '',
        'Lead: Agent [REDACTED] "Sandman"',
        'Budget: Classified',
        '',
        'Project Sandpaper develops techniques for the complete',
        'removal of specific memories or concepts from consensus',
        'reality. Unlike conventional memory suppression, Sandpaper',
        'erases the ontological footprint \u2014 the memory not only',
        'fades, it retroactively never occurred.',
        '',
        'Current focus: scaling from individual targets to group',
        'targets. Early results are promising. We successfully',
        'removed the concept of a specific shade of blue from a',
        'test town of 400 residents. Residents now describe the',
        'sky as "that other color" and have stopped painting.',
        '',
        'WARNING: Do not volunteer for Sandpaper trials. Several',
        'volunteers have forgotten they volunteered and are now',
        'trapped in a loop where they keep volunteering.'
      ],
      'MIRAGE': [
        'PROJECT MIRAGE \u2014 Atmospheric Suggestion',
        'Clearance: UMBRA-2 | Status: ACTIVE',
        '',
        'Lead: Dr. \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 Marcus',
        'Budget: $2.1M (FY2026)',
        '',
        'Project Mirage leverages the unique atmospheric conditions',
        'of the Sonoran Desert to project persistent visual and',
        'auditory suggestions across large areas. The project asks:',
        'if a mirage is convincing enough, is it still a mirage?',
        '',
        'Field tests have generated everything from phantom oases',
        'to convincing office buildings. One test generated what',
        'appeared to be a functioning DMV office. Test subjects',
        'waited in line for three hours before realizing there was',
        'no building. Most stayed in line anyway, citing "sunk cost."',
        '',
        'NOTICE: If you see a building that was not there yesterday,',
        'do not enter it. If you have already entered it, please',
        'fill out Form 882-C and submit to your Site Director.'
      ],
      'DUPLICATE': [
        'PROJECT DUPLICATE \u2014 [ACCESS RESTRICTED]',
        'Clearance: UMBRA-5 REQUIRED',
        '',
        'Your clearance level (UMBRA-4) is insufficient to access',
        'Project Duplicate documentation.',
        '',
        'If you believe you have been granted UMBRA-5 clearance,',
        'please contact your Site Director. If you are unsure who',
        'your Site Director is, you do not have UMBRA-5 clearance.',
        '',
        'If you are reading this and you DO have UMBRA-5 clearance,',
        'you should not be using this terminal. Please report to',
        'your assigned secure workstation immediately.'
      ],
      'LIMINAL': [
        'PROJECT LIMINAL \u2014 [EXISTENCE UNVERIFIED]',
        'Clearance: N/A | Status: UNKNOWN',
        '',
        'We are not sure if this project exists.',
        '',
        'If it does exist, it is being run without authorization',
        'by an unknown party operating within our systems.',
        '',
        'If it does not exist, we have been allocating $12.4M',
        'annually to nothing, which is its own kind of achievement.',
        '',
        'Investigation is ongoing. Or it isn\'t. We cannot tell.',
        '',
        'If you have any information about Project Liminal, please',
        'do not report it. Standard reporting channels may be',
        'compromised. Instead, write your findings on a physical',
        'piece of paper and bury it in the desert. Someone will',
        'find it. Someone always does.'
      ]
    };

    var lines = details[project];
    if (!lines) {
      term.writeLine('Project not found: ' + project);
      term.writeLine('Available: CICADA, SANDPAPER, MIRAGE, DUPLICATE, LIMINAL');
      return;
    }

    term.writeLine('');
    for (var i = 0; i < lines.length; i++) {
      term.writeLine(lines[i]);
    }
    term.writeLine('');
  }

  RRRco.registerCommand('personnel', function(args, term) {
    term.writeLine('');
    hr(term);
    term.writeLine('  KEY PERSONNEL DIRECTORY');
    hr(term);
    term.writeLine('');
    term.writeLine('  DR. \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 MARCUS, PhD, PhD, Esq.');
    term.writeLine('  Position: Director of Reality Assurance');
    term.writeLine('  Status: ACTIVE \u2014 Last seen: 2026-05-29');
    term.writeLine('  Notes: Claims to have invented the concept of "before."');
    term.writeLine('  Has been with the company since its founding, which he');
    term.writeLine('  also claims to have invented. His office is on Floor 13,');
    term.writeLine('  which he also claims to have invented. The building only');
    term.writeLine('  has 12 floors. We have stopped questioning this.');
    term.writeLine('');
    term.writeLine('  DR. ELENA VASQUEZ');
    term.writeLine('  Position: Chief Narrative Architect');
    term.writeLine('  Status: ACTIVE \u2014 Currently on-site');
    term.writeLine('  Notes: Specializes in the construction of convincing');
    term.writeLine('  alternative histories. Do not accept dinner invitations');
    term.writeLine('  from Dr. Vasquez. The food is real but the memories of');
    term.writeLine('  eating it may not be. Formerly a bestselling novelist');
    term.writeLine('  under a pen name she has since erased from all records.');
    term.writeLine('');
    term.writeLine('  AGENT [REDACTED] "SANDMAN"');
    term.writeLine('  Position: Field Operations Lead');
    term.writeLine('  Status: ACTIVE \u2014 Deployed');
    term.writeLine('  Notes: You have already met Agent [REDACTED]. You do not');
    term.writeLine('  remember this meeting. That is by design. Agent [REDACTED]');
    term.writeLine('  has an exemplary record with a 94% success rate. The 6%');
    term.writeLine('  failure rate is also by design. Do not ask about the 6%.');
    term.writeLine('');
    term.writeLine('  TIMMY (INTERN)');
    term.writeLine('  Position: Coffee Acquisition Specialist');
    term.writeLine('  Status: PROBATIONARY \u2014 Incident Report #4471 pending');
    term.writeLine('  Notes: Timmy is real. We have checked. Twice. The coffee');
    term.writeLine('  machine in Sector G is not real but Timmy continues to');
    term.writeLine('  make coffee with it anyway and it is, against all known');
    term.writeLine('  physics, drinkable. Timmy is not to be fired under any');
    term.writeLine('  circumstances. Timmy may be the most important asset we have.');
    term.writeLine('');
    hr(term);
    term.writeLine('');
  }, 'View company personnel directory');

  RRRco.registerCommand('contact', function(args, term) {
    term.writeLine('');
    hr(term);
    term.writeLine('  CONTACT');
    hr(term);
    term.writeLine('');
    term.writeLine('Unsolicited contact is discouraged. If you are reading this,');
    term.writeLine('we are already aware of your interest. A representative will');
    term.writeLine('reach out when \u2014 and if \u2014 your reality profile warrants');
    term.writeLine('engagement.');
    term.writeLine('');
    term.writeLine('For emergencies involving consensus collapse, temporal');
    term.writeLine('recursion, or unauthorized reality editing, please remain');
    term.writeLine('exactly where you are. Someone is already en route.');
    term.writeLine('');
    term.writeLine('If you believe you have been contacted by RRRco in error,');
    term.writeLine('please disregard this message. You were not contacted.');
    term.writeLine('');
    term.writeLine('For media inquiries: There is no media. There are no');
    term.writeLine('inquiries. If a journalist contacts you about RRRco,');
    term.writeLine('they are either very confused or an ontological anomaly.');
    term.writeLine('In either case, do not engage. Report the incident.');
    term.writeLine('');
    hr(term);
    term.writeLine('');
  }, 'Contact information (you cannot contact us, we contact you)');

  RRRco.registerCommand('classified', function(args, term) {
    if (args.length === 0 || args[0] === 'help') {
      term.writeLine('');
      term.writeLine('Usage:');
      term.writeLine('  classified list          \u2014 View index of available files');
      term.writeLine('  classified read <id>     \u2014 Read a specific classified file');
      term.writeLine('');
      return;
    }

    if (args[0] === 'list') {
      term.writeLine('');
      hr(term);
      term.writeLine('  CLASSIFIED FILE INDEX');
      hr(term);
      term.writeLine('');
      term.writeLine('  ID              TITLE                                  DATE         CLEARANCE');
      term.writeLine('  ----------------   ----------------------------------------   ------------   ---------');

      for (var i = 0; i < RRRco.posts.length; i++) {
        var p = RRRco.posts[i];
        var id = p.id;
        while (id.length < 16) id += ' ';
        var title = p.title.substring(0, 38);
        while (title.length < 40) title += ' ';
        var date = p.date;
        while (date.length < 13) date += ' ';
        term.writeLine('  ' + id + ' ' + title + ' ' + date + ' ' + p.clearance);
      }

      term.writeLine('');
      term.writeLine('  Type "classified read <id>" to access a file.');
      term.writeLine('');
      hr(term);
      term.writeLine('');
      return;
    }

    if (args[0] === 'read') {
      if (!args[1]) {
        term.writeLine('Usage: classified read <id>');
        term.writeLine('Example: classified read UMBRA-001');
        return;
      }

      var searchId = args[1].toUpperCase();
      var post = null;
      for (var i = 0; i < RRRco.posts.length; i++) {
        if (RRRco.posts[i].id.toUpperCase() === searchId) {
          post = RRRco.posts[i];
          break;
        }
      }

      if (!post) {
        term.writeLine('FILE NOT FOUND: ' + args[1].toUpperCase());
        term.writeLine('This file may not exist. Or it may have been retroactively');
        term.writeLine('deleted. Either way, you cannot read it.');
        term.writeLine('Use "classified list" to see available files.');
        return;
      }

      term.writeLine('');
      hr(term);
      term.writeLine('  FILE: ' + post.id + '  |  CLEARANCE: ' + post.clearance);
      term.writeLine('  TITLE: ' + post.title);
      term.writeLine('  DATE: ' + post.date);
      hr(term);
      term.writeLine('');

      var words = post.content.split(/\s+/);
      var line = '';
      var maxWidth = 74;
      for (var i = 0; i < words.length; i++) {
        if (line.length + words[i].length + (line ? 1 : 0) > maxWidth) {
          term.writeLine(line);
          line = words[i];
        } else {
          line += (line ? ' ' : '') + words[i];
        }
      }
      if (line) term.writeLine(line);

      term.writeLine('');
      hr(term);
      term.writeLine('');
      return;
    }

    term.writeLine('Unknown subcommand: ' + args[0]);
    term.writeLine('Usage: classified [list|read <id>]');
  }, 'Access classified/leaked files and blog posts');

})();
