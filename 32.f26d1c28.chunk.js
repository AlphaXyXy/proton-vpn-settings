(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"4bge":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(a("EIwU")),n=u(a("6B3v")),o=u(a("c3OS")),i=u(a("72dw")),d=u(a("oVBZ"));function u(e){return e&&e.__esModule?e:{default:e}}var s={code:"gl",formatDistance:r.default,formatLong:n.default,formatRelative:o.default,localize:i.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=s,e.exports=t.default},"6B3v":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a("HyFC"))&&r.__esModule?r:{default:r};var o={date:(0,n.default)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'ás' {{time}}",long:"{{date}} 'ás' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},"72dw":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a("rwOc"))&&r.__esModule?r:{default:r};var o={ordinalNumber:function(e){return Number(e)+"º"},era:(0,n.default)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,n.default)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","mércores","xoves","venres","sábado"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañá",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},EIwU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n;a=a||{},n="string"==typeof r[e]?r[e]:1===t?r[e].one:r[e].other.replace("{{count}}",t);if(a.addSuffix)return a.comparison>0?"en "+n:"hai "+n;return n};var r={lessThanXSeconds:{one:"menos dun segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos dun minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"arredor de 1 hora",other:"arredor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXMonths:{one:"arredor de 1 mes",other:"arredor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"arredor de 1 ano",other:"arredor de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"casi 1 ano",other:"casi {{count}} anos"}};e.exports=t.default},HyFC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=t||{},r=a.width?String(a.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}},e.exports=t.default},c3OS:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,o){if(1!==t.getUTCHours())return n[e];return r[e]};var r={lastWeek:"'o' eeee 'pasado á' LT",yesterday:"'onte á' p",today:"'hoxe á' p",tomorrow:"'mañá á' p",nextWeek:"eeee 'á' p",other:"P"},n={lastWeek:"'o' eeee 'pasado ás' p",yesterday:"'onte ás' p",today:"'hoxe ás' p",tomorrow:"'mañá ás' p",nextWeek:"eeee 'ás' p",other:"P"};e.exports=t.default},loZk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},o=r.match(e.matchPattern);if(!o)return null;var i=o[0],d=r.match(e.parsePattern);if(!d)return null;var u=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:u=n.valueCallback?n.valueCallback(u):u,rest:r.slice(i.length)}}},e.exports=t.default},oVBZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a("loZk")),n=o(a("sCib"));function o(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[uú]n)/i,/^(despois de cristo|era com[uú]n)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañ[aá]/i,afternoon:/tarde/i,evening:/tardiña/i,night:/noite/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},rwOc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r,n=a||{};if("formatting"===(n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=n.width?String(n.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var d=e.defaultWidth,u=n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[d]}return r[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var r=String(t),n=a||{},o=n.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],d=r.match(i);if(!d)return null;var u,s=d[0],l=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(l,(function(e){return e.test(r)})):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(l,(function(e){return e.test(r)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=n.valueCallback?n.valueCallback(u):u,rest:r.slice(s.length)}}},e.exports=t.default}}]);
//# sourceMappingURL=32.f26d1c28.chunk.js.map