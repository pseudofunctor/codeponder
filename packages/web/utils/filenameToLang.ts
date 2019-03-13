/* eslint-disable @typescript-eslint/camelcase */
const extensions: { [key: string]: string } = {
  py: "python",
  gyp: "python",
  wsgi: "python",
  htm: "html",
  xhtml: "html",
  erl: "erlang",
  jsp: "java",
  js: "javascript",
  pl: "perl",
  rss: "xml",
  atom: "xml",
  xsl: "xml",
  plist: "xml",
  rb: "ruby",
  builder: "ruby",
  gemspec: "ruby",
  podspec: "ruby",
  thor: "ruby",
  diff: "patch",
  hs: "haskell",
  icl: "haskell",
  php3: "php",
  php4: "php",
  php5: "php",
  php6: "php",
  sh: "bash",
  zsh: "bash",
  st: "smalltalk",
  as: "actionscript",
  apacheconf: "apache",
  osacript: "applescript",
  b: "brainfuck",
  bf: "brainfuck",
  clj: "clojure",
  "cmake.in": "cmake",
  coffee: "coffeescript",
  cson: "coffescript",
  cs: "csharp",
  iced: "coffescript",
  "c++": "cpp",
  "h++": "cpp",
  hh: "cpp",
  jinja: "django",
  bat: "dos",
  cmd: "dos",
  fs: "fsharp",
  hbs: "handlebars",
  "html.hbs": "handlebars",
  "html.handlebars": "handlebars",
  sublime_metrics: "json",
  sublime_session: "json",
  "sublime-keymap": "json",
  "sublime-mousemap": "json",
  "sublime-project": "json",
  "sublime-settings": "json",
  "sublime-workspace": "json",
  mk: "makefile",
  mak: "makefile",
  md: "markdown",
  mkdown: "markdown",
  mkd: "markdown",
  nginxconf: "nginx",
  m: "objectivec",
  mm: "objectivec",
  ml: "ocaml",
  rs: "rust",
  sci: "scilab",
  vb: "vbnet",
  vbs: "vbscript",
  ts: "typescript",
  yml: "yaml",
  hpp: "c++",
  h: "c",
  asm: "asm6502",
};

export const filenameToLang = (filename: string):string => {
  const lfn = filename.toLowerCase();
  const extension = (lfn.match(/\.(\w+)$/) || ["", ""])[1];
  if (extension) {
    return extensions[extension] || extension;
  }

  return lfn;
};
