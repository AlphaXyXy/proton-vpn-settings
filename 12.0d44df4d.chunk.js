(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HyFC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},JVC1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n("Q/uj")),i=d(n("NXl1")),r=d(n("XZ7z")),o=d(n("idCP")),u=d(n("ve55"));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"ar-DZ",formatDistance:a.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default},NXl1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n("HyFC"))&&a.__esModule?a:{default:a};var r={date:(0,i.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'عند' {{time}}",long:"{{date}} 'عند' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},"Q/uj":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i;n=n||{},i="string"==typeof a[e]?a[e]:1===t?a[e].one:2===t?a[e].two:t<=10?a[e].threeToTen.replace("{{count}}",t):a[e].other.replace("{{count}}",t);if(n.addSuffix)return n.comparison>0?"في خلال "+i:"منذ "+i;return i};var a={lessThanXSeconds:{one:"أقل من ثانية واحدة",two:"أقل من ثانتين",threeToTen:"أقل من {{count}} ثواني",other:"أقل من {{count}} ثانية"},xSeconds:{one:"ثانية واحدة",two:"ثانتين",threeToTen:"{{count}} ثواني",other:"{{count}} ثانية"},halfAMinute:"نصف دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",two:"أقل من دقيقتين",threeToTen:"أقل من {{count}} دقائق",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة واحدة",two:"دقيقتين",threeToTen:"{{count}} دقائق",other:"{{count}} دقيقة"},aboutXHours:{one:"ساعة واحدة تقريباً",two:"ساعتين تقريباً",threeToTen:"{{count}} ساعات تقريباً",other:"{{count}} ساعة تقريباً"},xHours:{one:"ساعة واحدة",two:"ساعتين",threeToTen:"{{count}} ساعات",other:"{{count}} ساعة"},xDays:{one:"يوم واحد",two:"يومين",threeToTen:"{{count}} أيام",other:"{{count}} يوم"},aboutXMonths:{one:"شهر واحد تقريباً",two:"شهرين تقريباً",threeToTen:"{{count}} أشهر تقريباً",other:"{{count}} شهر تقريباً"},xMonths:{one:"شهر واحد",two:"شهرين",threeToTen:"{{count}} أشهر",other:"{{count}} شهر"},aboutXYears:{one:"عام واحد تقريباً",two:"عامين تقريباً",threeToTen:"{{count}} أعوام تقريباً",other:"{{count}} عام تقريباً"},xYears:{one:"عام واحد",two:"عامين",threeToTen:"{{count}} أعوام",other:"{{count}} عام"},overXYears:{one:"أكثر من عام",two:"أكثر من عامين",threeToTen:"أكثر من {{count}} أعوام",other:"أكثر من {{count}} عام"},almostXYears:{one:"عام واحد تقريباً",two:"عامين تقريباً",threeToTen:"{{count}} أعوام تقريباً",other:"{{count}} عام تقريباً"}};e.exports=t.default},XZ7z:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,i){return a[e]};var a={lastWeek:"'أخر' eeee 'عند' p",yesterday:"'أمس عند' p",today:"'اليوم عند' p",tomorrow:"'غداً عند' p",nextWeek:"eeee 'عند' p",other:"P"};e.exports=t.default},idCP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n("rwOc"))&&a.__esModule?a:{default:a};var r={ordinalNumber:function(e){return String(e)},era:(0,i.default)({values:{narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:{narrow:["ج","ف","م","أ","م","ج","ج","أ","س","أ","ن","د"],abbreviated:["جانـ","فيفـ","مارس","أفريل","مايـ","جوانـ","جويـ","أوت","سبتـ","أكتـ","نوفـ","ديسـ"],wide:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنـ","ثلا","أربـ","خميـ","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"صباحاً",afternoon:"بعد الظهر",evening:"مساءاً",night:"ليلاً"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ص",pm:"م",midnight:"ن",noon:"ظ",morning:"في الصباح",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"},abbreviated:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",morning:"في الصباح",evening:"في المساء",night:"في الليل"},wide:{am:"ص",pm:"م",midnight:"نصف الليل",noon:"ظهر",afternoon:"بعد الظـهر",evening:"في المساء",night:"في الليل"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},loZk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),i=n||{},r=a.match(e.matchPattern);if(!r)return null;var o=r[0],u=a.match(e.parsePattern);if(!u)return null;var d=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:d=i.valueCallback?i.valueCallback(d):d,rest:a.slice(o.length)}}},e.exports=t.default},rwOc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,d=i.width?String(i.width):e.defaultWidth;a=e.values[d]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},sCib:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a=String(t),i=n||{},r=i.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=a.match(o);if(!u)return null;var d,l=u[0],f=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(f)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(f,(function(e){return e.test(a)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(f,(function(e){return e.test(a)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=i.valueCallback?i.valueCallback(d):d,rest:a.slice(l.length)}}},e.exports=t.default},ve55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("loZk")),i=r(n("sCib"));function r(e){return e&&e.__esModule?e:{default:e}}var o={ordinalNumber:(0,a.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^قبل/i,/^بعد/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[جفمأسند]/i,abbreviated:/^(جان|فيف|مار|أفر|ماي|جوا|جوي|أوت|سبت|أكت|نوف|ديس)/i,wide:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ج/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ج/i,/^ج/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^جان/i,/^فيف/i,/^مار/i,/^أفر/i,/^ماي/i,/^جوا/i,/^جوي/i,/^أوت/i,/^سبت/i,/^أكت/i,/^نوف/i,/^ديس/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=12.0d44df4d.chunk.js.map