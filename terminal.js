var RRRco = RRRco || {};

RRRco.Terminal = function(containerEl) {
  this.el = containerEl;
  this.outputEl = null;
  this.inputLineEl = null;
  this.hiddenInput = null;
  this.mode = 'boot';
  this.currentInput = '';
  this.cursorPos = 0;
  this.prompt = '';
  this.onCommand = null;
  this.onLogin = null;
  this.cursorBlinkInterval = null;
  this.lastRenderedInput = '';
  this.lastCursorPos = -1;

  this._init();
};

RRRco.Terminal.prototype._init = function() {
  this.outputEl = document.createElement('div');
  this.outputEl.className = 'output';
  this.el.appendChild(this.outputEl);

  this.inputLineEl = document.createElement('div');
  this.inputLineEl.className = 'input-line';
  this.el.appendChild(this.inputLineEl);

  this.hiddenInput = document.createElement('input');
  this.hiddenInput.className = 'hidden-input';
  this.hiddenInput.setAttribute('autocomplete', 'off');
  this.hiddenInput.setAttribute('autocorrect', 'off');
  this.hiddenInput.setAttribute('autocapitalize', 'off');
  this.hiddenInput.setAttribute('spellcheck', 'false');
  this.el.appendChild(this.hiddenInput);

  var self = this;
  this.hiddenInput.addEventListener('keydown', function(e) { self._handleKeydown(e); });
  this.el.addEventListener('click', function() { self.hiddenInput.focus(); });

  this.hiddenInput.focus();
  this._renderInputLine();
};

RRRco.Terminal.prototype.writeLine = function(text) {
  var div = document.createElement('div');
  div.className = 'line';
  div.textContent = text;
  this.outputEl.appendChild(div);
  this._scrollToBottom();
};

RRRco.Terminal.prototype.writeLines = function(texts) {
  for (var i = 0; i < texts.length; i++) {
    this.writeLine(texts[i]);
  }
};

RRRco.Terminal.prototype.writeHTML = function(html) {
  var div = document.createElement('div');
  div.className = 'line';
  div.innerHTML = html;
  this.outputEl.appendChild(div);
  this._scrollToBottom();
};

RRRco.Terminal.prototype.clear = function() {
  this.outputEl.innerHTML = '';
  this._renderInputLine();
};

RRRco.Terminal.prototype.setPrompt = function(prompt) {
  this.prompt = prompt;
  this._renderInputLine();
};

RRRco.Terminal.prototype._scrollToBottom = function() {
  this.el.scrollTop = this.el.scrollHeight;
};

RRRco.Terminal.prototype._renderInputLine = function() {
  if (this.mode === 'boot') {
    this.inputLineEl.innerHTML = '<span class="cursor">&nbsp;</span>';
    return;
  }

  if (this.mode === 'loading') {
    this.inputLineEl.innerHTML = '';
    return;
  }

  var before = this.currentInput.substring(0, this.cursorPos);
  var after = this.currentInput.substring(this.cursorPos);

  this.inputLineEl.innerHTML =
    '<span class="prompt">' + this._escapeHTML(this.prompt) + '</span>' +
    '<span class="input-text">' + this._escapeHTML(before) + '</span>' +
    '<span class="cursor">&nbsp;</span>' +
    '<span class="input-text">' + this._escapeHTML(after) + '</span>';

  this.lastRenderedInput = this.currentInput;
  this.lastCursorPos = this.cursorPos;
  this._scrollToBottom();
};

RRRco.Terminal.prototype._escapeHTML = function(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/ /g, '&nbsp;');
};

RRRco.Terminal.prototype._handleKeydown = function(e) {
  if (this.mode === 'boot' || this.mode === 'loading') {
    e.preventDefault();
    return;
  }

  if (e.key === 'Enter') {
    e.preventDefault();
    this._submitLine();
    return;
  }

  if (e.key === 'Tab') {
    e.preventDefault();
    this._handleTab();
    return;
  }

  if (e.key === 'Backspace') {
    e.preventDefault();
    if (this.cursorPos > 0) {
      this.currentInput = this.currentInput.substring(0, this.cursorPos - 1) + this.currentInput.substring(this.cursorPos);
      this.cursorPos--;
      this._renderInputLine();
    }
    return;
  }

  if (e.key === 'Delete') {
    e.preventDefault();
    if (this.cursorPos < this.currentInput.length) {
      this.currentInput = this.currentInput.substring(0, this.cursorPos) + this.currentInput.substring(this.cursorPos + 1);
      this._renderInputLine();
    }
    return;
  }

  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    if (this.cursorPos > 0) {
      this.cursorPos--;
      this._renderInputLine();
    }
    return;
  }

  if (e.key === 'ArrowRight') {
    e.preventDefault();
    if (this.cursorPos < this.currentInput.length) {
      this.cursorPos++;
      this._renderInputLine();
    }
    return;
  }

  if (e.key === 'Home') {
    e.preventDefault();
    this.cursorPos = 0;
    this._renderInputLine();
    return;
  }

  if (e.key === 'End') {
    e.preventDefault();
    this.cursorPos = this.currentInput.length;
    this._renderInputLine();
    return;
  }

  if (e.ctrlKey && e.key === 'c') {
    e.preventDefault();
    this.writeLine(this.prompt + ' ' + this.currentInput + '^C');
    this.currentInput = '';
    this.cursorPos = 0;
    this._renderInputLine();
    return;
  }

  if (e.ctrlKey && e.key === 'l') {
    e.preventDefault();
    this.clear();
    return;
  }

  if (e.metaKey || e.ctrlKey || e.altKey) {
    return;
  }

  if (e.key.length === 1) {
    e.preventDefault();
    this.currentInput = this.currentInput.substring(0, this.cursorPos) + e.key + this.currentInput.substring(this.cursorPos);
    this.cursorPos++;
    this._renderInputLine();
  }
};

RRRco.Terminal.prototype._submitLine = function() {
  var line = this.currentInput;

  if (this.mode === 'login') {
    var username = line.trim() || 'visitor';
    this.writeLine('login: ' + line);
    this.currentInput = '';
    this.cursorPos = 0;
    RRRco.session.username = username;
    this.mode = 'loading';
    this._renderInputLine();
    if (this.onLogin) {
      this.onLogin(username);
    }
    return;
  }

  if (this.mode === 'command') {
    this.writeLine(this.prompt + line);
    this.currentInput = '';
    this.cursorPos = 0;
    this._renderInputLine();
    if (this.onCommand && line.trim()) {
      this.onCommand(line.trim());
    }
    return;
  }
};

RRRco.Terminal.prototype._handleTab = function() {
  if (this.mode !== 'command') return;
  if (!this.getCompletions) return;

  var words = this.currentInput.split(' ');
  var lastWord = words[words.length - 1];
  var prefix = lastWord.toLowerCase();

  var matches = this.getCompletions(prefix);

  if (matches.length === 0) return;

  if (matches.length === 1) {
    words[words.length - 1] = matches[0];
    this.currentInput = words.join(' ');
    this.cursorPos = this.currentInput.length;
    this._renderInputLine();
    return;
  }

  this.writeLine(this.prompt + ' ' + this.currentInput);
  this.writeLine(matches.join('  '));
  this._renderInputLine();
};
