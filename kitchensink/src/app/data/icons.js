// VERSION: 46
const icons = [
  { name: 'share', tags: ['social', 'share', 'send'] },
  { name: 'filter', tags: ['lines', 'filter', 'filters', 'filtering'] },
  { name: 'chevronLeft', tags: ['chevron', 'back', 'arrow', 'left', 'move'] },
  { name: 'chevronRight', tags: ['chevron', 'link', 'right', 'forward', 'move'] },
  { name: 'chevronUp', tags: ['arrow', 'chevron', 'up', 'move'] },
  { name: 'chevronDown', tags: ['arrow', 'chevron', 'down', 'move'] },		
  { name: 'collapsDown', tags: ['arrow', 'dropdown', 'down'] },
  { name: 'collapsUp', tags: ['arrow', 'dropdown', 'up'] },
  { name: 'errorOutline', tags: ['problem', 'invalid', 'error', 'outline'] },
  { name: 'delete', tags: ['clear', 'x', 'remove', 'cross'] },
  { name: 'search', tags: ['loupe', 'search', 'find'] },
  { name: 'infoOutline', tags: ['info', 'information', 'banner', 'outline'] },
  { name: 'check', tags: ['checkmark', 'ok', 'done', 'check'] },
  { name: 'warning', tags: ['warning', 'caution', 'attention', 'solid', 'error'] },
  { name: 'trash', tags: ['delete', 'bin', 'bucket', 'trash', 'dump', 'junk'] },
  { name: 'info', tags: ['information', 'banner', 'solid', 'info'] },
  { name: 'error', tags: ['wrong', 'banner', 'invalid', 'problem', 'solid', 'error'] },
  { name: 'success', tags: ['correct', 'match', 'true', 'done', 'ok', 'solid', 'success'] },
  { name: 'home', tags: ['house', 'home', 'return'] },
  { name: 'add', tags: ['add', 'plus', 'create', 'positive', 'addition', 'increase', 'new'] },
  { name: 'addCircleOutline', tags: ['add', 'plus', 'create', 'positive', 'addition', 'increase', 'new', 'outline'] },
  { name: 'addRound', tags: ['add', 'plus', 'create', 'positive', 'addition', 'increase', 'new', 'solid'] },
  { name: 'eye', tags: ['eye', 'view', 'visibility', 'look', 'observe', 'see', 'sight', 'vision', 'visible', 'watch'] },
  { name: 'hot', tags: ['hot', 'flame', 'fire', 'heat', 'burn', 'heat', 'warm'] },
  { name: 'question', tags: ['question', 'help', 'about', 'ask', 'faq', 'alert'] },
  { name: 'data', tags: ['data', 'report', 'statistics', 'graph', 'chart', 'analytics'] },
  { name: 'notifications', tags: ['notifications', 'bell', 'alert', 'support', 'sound', 'buzz', 'christmas','ringing', 'wake'] },
  { name: 'refresh', tags: ['refresh', 'repeat', 'infinity', 'infinite', 'loop', 'load', 'loading','update', 'replay', 'progress'] },
  { name: 'location', tags: ['location', 'pin', 'position', 'gps', 'map', 'place', 'marker'] },
  { name: 'pin', tags: ['pin', 'pinboard', 'pushpin', 'marker', 'place', 'push pin', 'pin board', 'board'] },
  { name: 'play', tags: ['play', 'video', 'multimedia', 'control', 'media', 'film', 'movie'] },
  { name: 'skip', tags: ['skip', 'next', 'forward', 'onward', 'arrow', 'proceed', 'advance', 'position'] },
  { name: 'circle', tags: ['circle', 'dot', 'point', 'spot', 'ring', 'circular', 'round'] },
  { name: 'zoomIn', tags: ['zoom', 'in', 'magnifying', 'loupe', 'plus'] },
  { name: 'zoomOut', tags: ['zoom', 'out', 'magnifying', 'loupe', 'minus'] },
  { name: 'trusted', tags: ['trusted', 'approved', 'ok', 'accept', 'selected', 'approve', 'member'] },
  { name: 'block', tags: ['block', 'blocked', 'private', 'not', 'prevent', 'forbidden', 'banned', 'stop'] },
  { name: 'moreHorizontal', tags: ['more', 'options', 'circles', 'dots'] },
  { name: 'moreVertical', tags: ['more', 'options', 'circles', 'dots'] },
  { name: 'wrench', tags: ['wrench', 'tool', 'building', 'adjust', 'tool', 'repair'] },
  { name: 'comment', tags: ['comment', 'communication', 'communicate', 'chat', 'talk', 'speak', 'dialog', 'message', 'messages', 'bubble', 'bubbles'] },
  { name: 'email', tags: ['email', 'communication', 'communicate', 'mail', 'send', 'envelope', 'letter', 'mailbox', 'news', 'newsletter'] },
  { name: 'phone', tags: ['phone', 'communication', 'call', 'talk', 'telephone'] },
  { name: 'document', tags: ['document', 'communication', 'summary', 'text', 'note', 'report', 'page', 'paper', 'letter', 'content', 'sheet'] },
  { name: 'server', tags: ['server', 'machine', 'host', 'rack', 'ftp', 'hosting', 'gateway', 'kermit', 'snowwhite', 'shrek'] },
  { name: 'protection', tags: ['protection', 'security', 'safety', 'privacy', 'secure', 'shield', 'protect', 'policy', 'firewall'] },
  { name: 'mdr', tags: ['mdr', 'nsm', 'security', 'search', 'protect', 'shield', 'privacy', 'safety', 'detection', 'response', 'malware', 'activity'] },
  { name: 'account', tags: ['account', 'user', 'person', 'people', 'avatar', 'contact', 'profile'] },
  { name: 'exit', tags: ['exit', 'logout', 'close', 'log', 'outside', 'out'] },
  { name: 'sync', tags: ['sync', 'repeat', 'load', 'process', 'refresh', 'loading', 'replay', 'update', 'progress'] },
  { name: 'newWindow', tags: ['new window', 'window', 'new', 'open', 'tab', 'browser', 'application', 'export', 'app'] },
  { name: 'fastForward', tags: ['fast-forward', 'fast forward', 'close', 'hide', 'collapse', 'direction', 'right', 'arrow', 'double arrow', 'forward'] },
  { name: 'rewind', tags: ['rewind', 'backward', 'arrow', 'back', 'left', 'backwards', 'prvious', 'double arrow', 'left', 'direction', 'hide', 'close', 'collapse', ] },
  { name: 'clock', tags: ['clock', 'time', 'schedule', 'tracking', 'hour', 'history', 'event', 'deadline', 'appointment', 'countdown', 'alarm', 'timer', 'alert', 'wait', 'progress' ] },
  { name: 'expand', tags: ['expand', 'open', 'enlarge', 'maximize', 'maximise', 'maxi', 'increase'] },
  { name: 'collapse', tags: ['collapse', 'close', 'minimize', 'minimise', 'mini', 'decrease', 'decrease'] },
  { name: 'globe', tags: ['globe', 'world', 'earth', 'network', 'system', 'timezone'] },
  { name: 'star', tags: ['star', 'rating', 'achievement', 'favorite', 'important', 'winner', 'like', 'rate', 'winner', 'review', 'best'] },
  { name: 'visibility', tags: ['visibility', 'eye', 'watching', 'see', 'follow', 'solid', 'preview', 'vision', 'visible', 'overview', 'watch'] },
  { name: 'visibilityOff', tags: ['visibility', 'eye', 'watching', 'see', 'unfollow', 'solid', 'preview', 'vision', 'invisible', 'overview', 'watch', 'blind', 'block', 'hidden'] },
  { name: 'visibilityOutline', tags: ['visibility', 'eye', 'watching', 'see', 'follow', 'outline', 'preview', 'vision', 'visible', 'overview', 'watch'] },	
  { name: 'visibilityOffOutline', tags: ['visibility', 'eye', 'watching', 'see', 'unfollow', 'outline', 'preview', 'vision', 'invisible', 'overview', 'watch', 'blind', 'block', 'hidden'] },
  { name: 'chef', tags: ['chef', 'admin', 'cook', 'cooking', 'broil', 'solid', 'restaurant', 'kitchen', 'kitchensink', 'hat', 'food', 'cap', 'roast', 'fry', 'pan'] },
  { name: 'settings', tags: ['settings', 'gear', 'cogwheel', 'wheel', 'manage', 'set', 'adjust', 'config', 'configure', 'edit', 'tools', 'options', 'control', 'preferences', 'parameter', 'setup', 'cog', 'tools', 'configuration', 'configurations'] },
  { name: 'resolved', tags: ['resolved', 'check', 'ok', 'approved', 'confirmed', 'checkmark', 'done', 'finished', 'complete', 'accept', 'tools', 'success', 'selected', 'mark', 'tick', 'approve'] },
  { name: 'copy', tags: ['copy', 'duplicate', 'clone', 'copies'] },
  { name: 'attachment', tags: ['attachment', 'add', 'file', 'attach', 'paperclip', 'include', 'clip', 'attaching', 'editing'] },
  { name: 'download', tags: ['download', 'load', 'get', 'storage', 'file', 'save', 'bottom', 'downward', 'down'] },
  { name: 'edit', tags: ['edit', 'settings', 'write', 'text', 'pen', 'pencil', 'design', 'draw', 'editor', 'editing','compose'] },
  { name: 'link', tags: ['link', 'tunnel', 'direction', 'bidirectional', 'bi-directional', 'bi'] },
  { name: 'isp', tags: ['isp', 'internet provider', 'provider', 'web', 'access point', 'access', 'internet', 'connection', 'radio', 'radio waves','waves'] },
  { name: 'minus', tags: ['minus', 'decrease', 'remove', 'close', 'less', 'substract', 'ui'] },
  { name: 'reset', tags: ['reset', 'back', 'rotate', 'undo', 'curve', 'invert', 'arrow', 'backward', 'reload', 'dot','circle', 'refund','rotation'] },
  { name: 'alarmActive', tags: ['alarm', 'active', 'bell', 'ringing', 'sound', 'alert', 'ring', 'ringtone', 'wake', 'cockpit'] },	
  { name: 'alarmOutline', tags: ['alarm', 'bell', 'outline', 'alert', 'notification', 'ringtone', 'wake', 'ring', 'cockpit'] },
  { name: 'flag', tags: ['flag', 'banner', 'important', 'tag', 'location', 'cockpit'] },	
  { name: 'moon', tags: ['moon', 'night', 'weather', 'sleeping', 'snooz', 'cockpit'] },
  { name: 'warningSquare', tags: ['warning', 'hot', 'attention', 'ticketviewer', 'arrange', 'surface', 'floors', 'level', 'cockpit'] },
  { name: 'clockFilled', tags: ['clock', 'time', 'schedule', 'tracking', 'hour', 'history', 'event', 'deadline', 'appointment', 'countdown', 'alarm', 'timer', 'alert', 'wait', 'progress', 'filled', 'cockpit' ] },
  { name: 'layers', tags: ['layers', 'stack', 'burst', 'platform', 'surface', 'floors', 'levels'] },
  { name: 'place', tags: ['place', 'city', 'map', 'pin', 'marker', 'position'] },
  { name: 'locationSmall', tags: ['location', 'small', 'locationSmall', 'city', 'building', 'office'] },
  { name: 'locationMedium', tags: ['location', 'medium', 'locationMedium', 'city', 'building', 'office'] },
  { name: 'locationBig', tags: ['location', 'big', 'locationBig', 'city', 'building', 'office'] },
  { name: 'locationRetail', tags: ['location', 'shop', 'retail', 'market', 'store'] },
  { name: 'thumbsUp', tags: ['thumb', 'up', 'positive', 'great', 'yeah', 'plus', 'top', 'thumbs up'] },	
  { name: 'path', tags: ['path', 'structure', 'way', 'find', 'direction', 'location', 'way', 'navigation', 'shape', 'vector', 'street', 'route', 'journey'] },		
  { name: 'lightbulb', tags: ['bulb', 'idea', 'saver', 'ecology', 'light', 'electric', 'environment', 'green', 'energy', 'lamp'] },		
  { name: 'calendar', tags: ['calendar', 'date', 'day', 'schedule', 'event', 'today', 'week', 'month', 'year'] },
  { name: 'application', tags: ['application', 'browser', 'window', 'app', 'apps', 'interface', 'ui', 'frame', 'widget'] },		
  { name: 'rule', tags: ['rule', 'rules', 'schedule', 'organize', 'process', 'list', 'checklist', 'check', 'task', 'todo', 'tasks', 'item', 'items'] },	
  { name: 'alert', tags: ['alert', 'ndrAlert', 'mdrAlert', 'ndr', 'mdr'] },
  { name: 'ip', tags: ['ip', 'flower', 'blossom', 'floral', 'pattern'] },	
  { name: 'file', tags: ['file', 'document', 'page', 'item', 'report', 'sheet'] },
  { name: 'files', tags: ['files', 'documents', 'pages', 'items', 'reports', 'sheets'] },
];

export default icons;
