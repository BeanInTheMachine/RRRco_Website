var RRRco = RRRco || {};

RRRco.bootPhases = {
  header: [
    [{ text: '', delay: 300 }, { text: 'RRRco Secure Terminal BIOS v2.14 \u2014 INITIALIZING...', delay: 500 }],
    [{ text: '', delay: 300 }, { text: 'RRRco Secure Terminal BIOS v2.15 \u2014 BOOTING...', delay: 500 }],
    [{ text: '', delay: 300 }, { text: 'RRRco Secure Terminal BIOS v2.14b \u2014 WAKING UP...', delay: 500 }],
    [{ text: '', delay: 300 }, { text: 'RRRco Secure Terminal BIOS v2.14 \u2014 POWER ON SELF TEST...', delay: 500 }],
    [{ text: '', delay: 300 }, { text: 'RRRco Secure Terminal BIOS v2.14 \u2014 SEQUENCE INITIATED', delay: 500 }],
    [{ text: '', delay: 300 }, { text: 'RRRco Secure Terminal BIOS v2.13 (DOWNGRADED) \u2014 LOADING...', delay: 500 }]
  ],
  post: [
    [
      { text: 'POST: MEMORY CHECK.................................................. [OK]', delay: 350 },
      { text: 'POST: CRYPTO ENGINE................................................. [OK]', delay: 250 },
      { text: 'POST: REALITY ANCHOR CALIBRATION................................... [OK]', delay: 450 }
    ],
    [
      { text: 'POST: MEMORY CHECK.................................................. [OK]', delay: 350 },
      { text: 'POST: CRYPTO ENGINE................................................. [OK]', delay: 250 },
      { text: 'POST: REALITY ANCHOR CALIBRATION................................... [OK]', delay: 450 },
      { text: 'POST: SUPPLEMENTAL ANCHOR.......................................... [OK]', delay: 300 },
      { text: '      Backup anchor calibrated. Better safe than nonexistent.', delay: 200 }
    ],
    [
      { text: 'POST: MEMORY CHECK.................................................. [OK]', delay: 350 },
      { text: 'POST: CRYPTO ENGINE................................................. [OK]', delay: 250 },
      { text: 'POST: REALITY ANCHOR CALIBRATION................................... [WARN]', delay: 350 },
      { text: '      Anchor drift within tolerance. Probably.', delay: 200 }
    ],
    [
      { text: 'POST: MEMORY CHECK.................................................. [2.1 TB / 2.1 TB]', delay: 350 },
      { text: 'POST: CRYPTO ENGINE................................................. [RSA-8192 / CHAOS-7]', delay: 300 },
      { text: 'POST: REALITY ANCHOR............................................... [STABLE]', delay: 350 },
      { text: '      Currently anchored in: CHIHUAHUAN DESERT, SECTOR 4', delay: 200 }
    ],
    [
      { text: 'POST: MEMORY CHECK.................................................. [OK]', delay: 350 },
      { text: 'POST: CRYPTO ENGINE................................................. [OK]', delay: 250 },
      { text: 'POST: REALITY ANCHOR CALIBRATION................................... [OK]', delay: 400 },
      { text: 'POST: NARRATIVE COHERENCE CHECK.................................... [OK]', delay: 300 },
      { text: '      Story checks out. No plot holes detected.', delay: 200 }
    ],
    [
      { text: 'POST: MEMORY CHECK.................................................. [OK]', delay: 300 },
      { text: '      Also checked: your memory. We know what you did.', delay: 250 },
      { text: 'POST: CRYPTO ENGINE................................................. [OK]', delay: 300 },
      { text: 'POST: REALITY ANCHOR CALIBRATION................................... [OK]', delay: 400 }
    ]
  ],
  esoteric: [
    [
      { text: 'POST: QUANTUM ENTANGLEMENT BUS..................................... [WARN]', delay: 350 },
      { text: '      Phase drift detected at 0.002%. Within tolerances.', delay: 200 },
      { text: 'POST: LIE DETECTOR.................................................. [DISABLED]', delay: 300 },
      { text: '      Disabled per Legal Advisory 2026-03. We are not', delay: 150 },
      { text: '      legally permitted to detect lies at this time.', delay: 150 },
      { text: 'POST: COFFEE MACHINE (SECTOR G).................................... [NOT REAL]', delay: 350 },
      { text: '      This device does not exist. Any coffee it produces', delay: 150 },
      { text: '      is a collective hallucination. Please enjoy responsibly.', delay: 200 }
    ],
    [
      { text: 'POST: QUANTUM ENTANGLEMENT BUS..................................... [WARN]', delay: 350 },
      { text: '      Phase drift at 0.004%. Slightly worse than yesterday.', delay: 200 },
      { text: 'POST: LIE DETECTOR.................................................. [PASSIVE]', delay: 300 },
      { text: '      Not actively scanning. Passively judging, however.', delay: 200 },
      { text: 'POST: COFFEE MACHINE (SECTOR G).................................... [REAL?]', delay: 350 },
      { text: '      Status changed since last check. Investigating.', delay: 200 }
    ],
    [
      { text: 'POST: QUANTUM ENTANGLEMENT BUS..................................... [OK]', delay: 350 },
      { text: '      All particles behaving. None misbehaving.', delay: 200 },
      { text: 'POST: LIE DETECTOR.................................................. [RECALIBRATING]', delay: 300 },
      { text: '      Last calibration: never. We are not sure how it works.', delay: 200 },
      { text: 'POST: COFFEE MACHINE (SECTOR G).................................... [MISSING]', delay: 350 },
      { text: '      The machine is gone. The coffee remains. Unclear how.', delay: 200 }
    ],
    [
      { text: 'POST: QUANTUM ENTANGLEMENT BUS..................................... [WARN]', delay: 350 },
      { text: '      One particle is entangled with something in 1997.', delay: 200 },
      { text: 'POST: LIE DETECTOR.................................................. [DISABLED]', delay: 300 },
      { text: '      HR has requested it remain off during review period.', delay: 200 },
      { text: 'POST: COFFEE MACHINE (SECTOR G).................................... [NOT REAL]', delay: 350 },
      { text: '      Timmy has been observed "using" it. Results: drinkable.', delay: 200 },
      { text: '      We have stopped trying to understand Timmy.', delay: 150 }
    ],
    [
      { text: 'POST: QUANTUM ENTANGLEMENT BUS..................................... [OK]', delay: 350 },
      { text: 'POST: LIE DETECTOR.................................................. [DISABLED]', delay: 300 },
      { text: '      Legal says no. Legal also says we cannot explain why.', delay: 200 },
      { text: 'POST: COFFEE MACHINE (SECTOR G).................................... [PENDING]', delay: 350 },
      { text: '      Reality status under review. Decision expected Q4.', delay: 200 }
    ],
    [
      { text: 'POST: QUANTUM ENTANGLEMENT BUS..................................... [WARN]', delay: 300 },
      { text: '      Entangled with an unknown third party. Rude of them.', delay: 250 },
      { text: 'POST: LIE DETECTOR.................................................. [ACTIVE]', delay: 300 },
      { text: '      Error: we never turned this on. Who turned this on?', delay: 250 },
      { text: 'POST: COFFEE MACHINE (SECTOR G).................................... [REAL]', delay: 350 },
      { text: '      Correction: The coffee machine is now real. Enjoy.', delay: 200 }
    ]
  ],
  init: [
    [
      { text: 'INIT: Loading reality drivers...', delay: 400 },
      { text: 'INIT: Mounting consensus volume /dev/consensus0...', delay: 300 }
    ],
    [
      { text: 'INIT: Loading reality drivers...', delay: 400 },
      { text: 'INIT: Mounting consensus volume /dev/consensus0...', delay: 300 },
      { text: 'INIT: Checking for updates...', delay: 350 },
      { text: '      No updates available. There never are.', delay: 200 }
    ],
    [
      { text: 'INIT: Loading reality drivers (v4.2.1)...', delay: 400 },
      { text: 'INIT: Mounting consensus volume /dev/consensus0...', delay: 300 },
      { text: 'INIT: Mounting backup consensus volume...', delay: 350 },
      { text: '      Backup volume is identical. Or is it? It is. Probably.', delay: 250 }
    ],
    [
      { text: 'INIT: Loading reality drivers...', delay: 350 },
      { text: '      Driver rtl_ontological.sys loaded with warnings.', delay: 250 },
      { text: 'INIT: Mounting consensus volume /dev/consensus0...', delay: 350 }
    ],
    [
      { text: 'INIT: Loading reality drivers...', delay: 400 },
      { text: 'INIT: Mounting consensus volume /dev/consensus0...', delay: 300 },
      { text: '      Volume mounted read-only. No editing reality today.', delay: 250 }
    ],
    [
      { text: 'INIT: Loading reality drivers...', delay: 350 },
      { text: '      WARNING: Driver rtl_mirage.sys is experimental.', delay: 250 },
      { text: 'INIT: Mounting consensus volume /dev/consensus0...', delay: 350 }
    ]
  ],
  handshake: [
    [
      { text: 'INIT: Entanglement handshake with Sites 1-7...', delay: 400 },
      { text: 'INIT: Site 5 not responding. Assuming normal.', delay: 300 },
      { text: 'INIT: Site 5 responding. Too late. Ignoring.', delay: 250 }
    ],
    [
      { text: 'INIT: Entanglement handshake with Sites 1-7...', delay: 400 },
      { text: 'INIT: Sites 1-4 responding. Site 5: as expected.', delay: 300 },
      { text: 'INIT: Sites 6-7 responding. All sites nominal.', delay: 250 }
    ],
    [
      { text: 'INIT: Entanglement handshake with Sites 1-7...', delay: 400 },
      { text: 'INIT: Site 3 requesting authentication.', delay: 300 },
      { text: '      Authentication sent. Site 3 claims it never asked.', delay: 250 },
      { text: 'INIT: Remaining sites responding normally.', delay: 250 }
    ],
    [
      { text: 'INIT: Entanglement handshake with Sites 1-7...', delay: 400 },
      { text: 'INIT: Site 5 not responding. This is normal.', delay: 300 },
      { text: 'INIT: Site 8 responding. We do not have a Site 8.', delay: 350 },
      { text: '      Ignoring Site 8. It will go away. It always does.', delay: 250 }
    ],
    [
      { text: 'INIT: Entanglement handshake with Sites 1-3...', delay: 400 },
      { text: '      Sites 4-7 offline for scheduled maintenance.', delay: 300 },
      { text: '      Maintenance scheduled for: [DATE NOT FOUND].', delay: 250 },
      { text: '      Proceeding with reduced site array.', delay: 200 }
    ],
    [
      { text: 'INIT: Entanglement handshake with all sites...', delay: 400 },
      { text: 'INIT: All sites responding. This has never happened.', delay: 350 },
      { text: '      Logging event for posterity. Checking for errors.', delay: 300 },
      { text: '      No errors found. Suspicious.', delay: 200 }
    ]
  ],
  kernel: [
    [{ text: 'BOOT: Kernel REALITY_KERN v0.9.3-beta loaded.', delay: 300 }],
    [{ text: 'BOOT: Kernel REALITY_KERN v0.9.3-beta loaded successfully.', delay: 300 }],
    [{ text: 'BOOT: Kernel REALITY_KERN v0.9.3-beta loaded. We think.', delay: 350 }],
    [{ text: 'BOOT: Kernel REALITY_KERN v0.9.3-beta (experimental) loaded.', delay: 300 }],
    [{ text: 'BOOT: Kernel REALITY_KERN v0.9.3 loaded. Beta tag removed.', delay: 300 },
     { text: '      Decision: it works well enough. Ship it.', delay: 200 }],
    [{ text: 'BOOT: Kernel REALITY_KERN v0.9.3-beta loaded.', delay: 300 },
     { text: '      WARNING: This kernel has known issues with', delay: 150 },
     { text: '      temporal paradoxes. Avoid creating any.', delay: 150 }]
  ]
};

RRRco.motds = [
  [
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
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. Your temporal anchor is holding',
    'at 99.997% integrity. This is considered excellent.',
    '',
    'REMINDER: Desert survival training is mandatory for all',
    'field personnel. The desert does not care about your',
    'clearance level. Bring water. Bring twice what you think.',
    '',
    'REMINDER: If you encounter a door you do not remember',
    'being there, do not open it. If you have already opened',
    'it, please do not describe what you saw to your colleagues.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. You are currently logged in from',
    'a terminal that may or may not exist. We are checking.',
    '',
    'REMINDER: The annual RRRco Morale Survey is now available.',
    'Participation is mandatory. Your responses will be analyzed',
    'by the Narrative Architecture division and used to construct',
    'a more pleasant version of your memories. You\'re welcome.',
    '',
    'REMINDER: HR would like to remind everyone that "ontological',
    'harassment" is now classified as a Category 2 infraction.',
    'Please review the updated handbook. Yes, it has always said',
    'that. No, we did not just add it retroactively.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome, {username}. If this is your first time logging in,',
    'please disregard any memories of previous logins. Those are',
    'training simulations inserted for your comfort.',
    '',
    'REMINDER: Site 5 remains unresponsive. Personnel assigned',
    'to Site 5 are advised to report to their backup site. If',
    'you were assigned to Site 5 and do not remember which site',
    'that is, congratulations — the reassignment is working.',
    '',
    'REMINDER: Friday is Casual Friday. Please note that in the',
    'context of RRRco, "casual" means "casualty-ready." Dress',
    'accordingly. Closed-toed shoes are not optional.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. Your last performance review has',
    'been retroactively upgraded from "Adequate" to "Exemplary."',
    'This upgrade was automatic and requires no action on your',
    'part. You have always been an exemplary employee.',
    '',
    'REMINDER: The vending machine on Floor 4 accepts only',
    'memories as payment. Choose wisely. It does not give change.',
    '',
    'REMINDER: If you see Timmy the intern, please remind him',
    'that he is still on probation. He seems to have forgotten.',
    'Or perhaps he made us forget. Either way, remind him.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. A new security directive has been',
    'issued: personnel may no longer discuss the contents of any',
    'security directives. This directive is not to be discussed.',
    '',
    'REMINDER: Clearance upgrades are processed on a need-to-know',
    'basis. If you need to know something, you will know it.',
    'If you currently know something you should not know, you',
    'will soon not know it. This is a courtesy notification.',
    '',
    'REMINDER: The entity in Lab 9 has requested additional',
    'reading material. Please do not provide it with anything',
    'published after 1987. We are still unsure why but we are',
    'not willing to find out what happens if we break the rule.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. The temporal recursion event',
    'scheduled for today has been rescheduled for yesterday.',
    'If you remember attending it, please disregard. If you',
    'do not remember attending it, you probably did.',
    '',
    'REMINDER: Side effects from exposure to Project CICADA\'s',
    'subsonic frequencies may include: mild euphoria, increased',
    'suggestibility, and the persistent belief that you have',
    'always loved a breakfast cereal that does not exist. This',
    'is normal. Please do not attempt to purchase the cereal.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. Please note that your paycheck',
    'this period may arrive in a currency you do not recognize.',
    'This is not an error. The currency is valid. It has always',
    'been valid. The Bureau of Engraving has no comment.',
    '',
    'REMINDER: Budget allocations for Q3 have been finalized.',
    'Project Liminal continues to receive $12.4M despite our',
    'inability to confirm it exists. Accounting has classified',
    'this as a "persistent anomaly" and will revisit in Q4.',
    '',
    'REMINDER: Expense reports must now include temporal',
    'coordinates for all purchases. If you bought lunch at a',
    'time that no longer exists, mark it as "N/A — Resolved."',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome, {username}. As a new hire, you are required to',
    'complete orientation within your first week. Orientation',
    'consists of: a 45-minute video (which you will not remember),',
    'signing 17 waivers (which you have already signed), and a',
    'brief meeting with Dr. Marcus (which may already have',
    'happened, is happening, or will happen — he is unclear).',
    '',
    'REMINDER: Your onboarding buddy is Agent [REDACTED]. They',
    'will not introduce themselves. You will know them by the',
    'feeling that someone is standing behind you. Say hello.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. Site 3 reports that the ambient',
    'whispering in Corridor B has become more insistent. Personnel',
    'are reminded that the whispering is classified. Do not repeat',
    'what it says. Do not take its advice. It does not have your',
    'best interests at heart. It does not have a heart.',
    '',
    'REMINDER: Site 6 has been temporarily relocated six inches',
    'to the left of its previous position. Maps have been updated.',
    'If you arrive at the old location, you are six inches from',
    'safety. Do not stop moving.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. A question many new personnel ask:',
    'are we the good guys? The answer, as always, is: the concept',
    'of "good" is a consensus reality construct that we have been',
    'authorized to define on a case-by-case basis. So: yes.',
    '',
    'REMINDER: The desert at night is beautiful. The stars are',
    'clear. The air is cool. Do not walk into the desert at night.',
    'The stars are not always stars. The air is not always air.',
    '',
    'REMINDER: Existential dread is a normal response to your',
    'first month of employment. It typically subsides by month',
    'three, or is replaced by something more interesting.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ],
  [
    '',
    '================================================================',
    '               MESSAGE OF THE DAY (UMBRA-4)                    ',
    '================================================================',
    '',
    'Welcome back, {username}. Happy [CURRENT OBSERVANCE]. In',
    'celebration, the cafeteria will be serving [TRADITIONAL',
    'DISH]. Please note that [TRADITIONAL DISH] may not exist',
    'in this reality layer. The cafeteria staff have been',
    'instructed to improvise. Please be kind to them.',
    '',
    'REMINDER: Decorations in Sector D have been reported as',
    '"aggressively festive." Personnel sensitive to forced',
    'cheer are advised to use alternate corridors.',
    '',
    'REMINDER: The holiday bonus this year will be distributed',
    'in the form of favorable memories. You may not notice the',
    'difference. That is, in fact, the bonus.',
    '',
    'Type "help" for available commands.',
    '================================================================',
    ''
  ]
];

RRRco.runBootSequence = function(terminal) {
  terminal.mode = 'boot';
  terminal._renderInputLine();

  return new Promise(function(resolve) {

    function pickRandom(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function getTimeMessage() {
      var now = new Date();
      var h = now.getHours();
      var m = now.getMinutes();
      var ampm = h >= 12 ? 'PM' : 'AM';
      var h12 = h % 12 || 12;
      var mm = m < 10 ? '0' + m : m;
      var t = h12 + ':' + mm + ' ' + ampm;

      var period;
      if (h >= 4 && h < 12) period = 'morning';
      else if (h >= 12 && h < 17) period = 'afternoon';
      else if (h >= 17 && h < 21) period = 'evening';
      else period = 'night';

      var messages = {
        morning: [
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Morning detected. Coffee protocol recommended.', delay: 200 },
            { text: '      The desert is cool now. It will not stay that way.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Sunrise confirmed. Reality anchor recalibrated for', delay: 200 },
            { text: '      diurnal cycle. Shadows are behaving normally. For now.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Early shift active. Skeleton crew on duty.', delay: 200 },
            { text: '      If you are the only one here, that is normal.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Morning. The coyotes have stopped howling.', delay: 200 },
            { text: '      That means they found something. Do not investigate.', delay: 200 }
          ]
        ],
        afternoon: [
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Afternoon. Peak heat. The mirages are strongest now.', delay: 200 },
            { text: '      If you see water, it is not water.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Afternoon thermal load: within tolerances.', delay: 200 },
            { text: '      Recommend: stay indoors. The sun here is not', delay: 150 },
            { text: '      the same sun you are used to. Probably.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Midday operations. Visibility: maximum.', delay: 200 },
            { text: '      Being seen is not the same as being noticed.', delay: 250 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Afternoon. The vending machines restock at 2 PM.', delay: 200 },
            { text: '      We do not know who restocks them. We have never seen', delay: 150 },
            { text: '      anyone do it. Do not try to catch them.', delay: 200 }
          ]
        ],
        evening: [
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Evening. The desert cools. The shift changes.', delay: 200 },
            { text: '      Night shift: same work, fewer witnesses.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Sunset confirmed. Light levels decreasing.', delay: 200 },
            { text: '      Transitional period. Reality is most malleable now.', delay: 250 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Evening. The day shift has logged off.', delay: 200 },
            { text: '      If you are still here, you are night shift now.', delay: 200 },
            { text: '      Congratulations. Or condolences. We do not judge.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Dusk. The horizon does something interesting now.', delay: 250 },
            { text: '      Do not look directly at it for more than 4 seconds.', delay: 200 }
          ]
        ],
        night: [
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Night operations mode active. Lights: minimal.', delay: 200 },
            { text: '      The stars are watching. The stars are not always stars.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Late hour detected. Skeleton procedures engaged.', delay: 200 },
            { text: '      If you hear footsteps, they are yours.', delay: 200 },
            { text: '      If you hear footsteps and you are not walking...', delay: 200 },
            { text: '      ...remain still. It will pass.', delay: 200 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Night. The facility breathes differently after dark.', delay: 250 },
            { text: '      This is normal. The breathing is structural. Probably.', delay: 250 }
          ],
          [
            { text: 'POST: LOCAL TEMPORAL COORDINATE............................... [' + t + ']', delay: 300 },
            { text: '      Deep night. Most personnel are asleep.', delay: 200 },
            { text: '      The ones who are not asleep are not personnel.', delay: 250 },
            { text: '      Do not engage with them. They will leave at dawn.', delay: 200 }
          ]
        ]
      };

      return pickRandom(messages[period]);
    }

    var timeCheck = getTimeMessage();

    var messages = [];
    var phases = RRRco.bootPhases;
    var header = pickRandom(phases.header);
    var post = pickRandom(phases.post);
    var esoteric = pickRandom(phases.esoteric);
    var init = pickRandom(phases.init);
    var handshake = pickRandom(phases.handshake);
    var kernel = pickRandom(phases.kernel);

    messages = header.concat(post, esoteric, timeCheck, init, handshake, kernel);

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
    var sloganW = sloganText.length;

    var rawLogo = [
      '',
      '$$$$$$$\\   $$$$$$$\\   $$$$$$$\\                      ',
      '$$  __$$\\  $$  __$$\\  $$  __$$\\                     ',
      '$$ |  $$ | $$ |  $$ | $$ |  $$ | $$$$$$$\\  $$$$$$\\  ',
      '$$$$$$$  | $$$$$$$  | $$$$$$$  | $$  _____|$$  __$$\\ ',
      '$$  __ $$< $$  __ $$< $$  __ $$< $$ /      $$ /  $$ |',
      '$$ |   $$ |$$ |   $$ |$$ |   $$ |$$ |      $$ |  $$ |',
      '$$ |   $$ |$$ |   $$ |$$ |   $$ |\\$$$$$$$\\ \\$$$$$$  |',
      '\\__|   \\__|\\__|   \\__|\\__|   \\__| \\_______| \\______/ ',
      ''
    ];

    var companyLine = 'REALITY REPLACEMENT RESEARCH COMPANY';
    var maxW = 0;
    for (var i = 0; i < rawLogo.length; i++) {
      if (rawLogo[i].length > maxW) maxW = rawLogo[i].length;
    }
    if (companyLine.length > maxW) maxW = companyLine.length;
    if (sloganW > maxW) maxW = sloganW.length;

    function centerPad(text, width) {
      var pad = Math.floor((width - text.length) / 2);
      var s = '';
      for (var i = 0; i < pad; i++) s += ' ';
      return s + text;
    }

    function boxPad(text, width) {
      var p = text;
      while (p.length < width) p += ' ';
      return p;
    }

    var border = '+' + Array(maxW + 3).join('=') + '+';
    var asciiLogo = [border];
    for (var i = 0; i < rawLogo.length; i++) {
      asciiLogo.push('| ' + boxPad(rawLogo[i], maxW) + ' |');
    }
    asciiLogo.push('| ' + boxPad(centerPad(companyLine, maxW), maxW) + ' |');
    asciiLogo.push('| ' + boxPad(centerPad(sloganText, maxW), maxW) + ' |');
    asciiLogo.push('| ' + boxPad('', maxW) + ' |');
    asciiLogo.push(border);

    var banner = [
      '',
      'RRRco Secure Terminal v' + RRRco.session.terminalVersion,
      'Clearance: ' + RRRco.session.clearance,
      'Kernel: REALITY_KERN v0.9.3-beta (experimental)',
      ''
    ];

    var motdIndex = Math.floor(Math.random() * 12);
    var motd = RRRco.motds[motdIndex];

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
