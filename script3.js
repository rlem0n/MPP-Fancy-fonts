function translate (char) { let diff; if (/[A-Z]/.test (char)) { diff = "𝓐".codePointAt (0) - "A".codePointAt (0); } else { diff = "𝓪".codePointAt (0) - "a".codePointAt (0); } return String.fromCodePoint (char.codePointAt (0) + diff); } MPP.chat.send = function(message) { var msg = message.replace (/[A-Za-z]/g, translate); MPP.client.sendArray([{m: 'a', message: msg}]); }