// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">بيئة برمجة مرئية</span><span id="blocklyMessage">بلوكلي</span><span id="codeTooltip">راجع إنشاء تعليمات برمجية JavaScript.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">شغِّل البرنامج</span><span id="resetProgram">إعادة ضبط</span><span id="dialogOk">حسن</span><span id="dialogCancel">إلغاء الأمر</span><span id="catLogic">منطق</span><span id="catLoops">الحلقات</span><span id="catMath">رياضيات</span><span id="catText">نص</span><span id="catLists">قوائم</span><span id="catColour">لون</span><span id="catVariables">متغيرات</span><span id="catProcedures">إجراءات</span><span id="httpRequestError">كانت هناك مشكلة مع هذا الطلب.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">عذراً،ال \'1%\' لا تتوافق مع أي برنامج تم حفظه.</span><span id="xmlError">تعذر تحميل الملف المحفوظة الخاصة بك.  ربما تم إنشاؤه باستخدام إصدار مختلف من بلوكلي؟</span><span id="listVariable">قائمة</span><span id="textVariable">نص</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">حسن</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">تحريك السلحفاة إلى الأمام أو إلى الخلف بمقدار محدد.</span><span id="Turtle_moveForward">move forward by</span><span id="Turtle_moveBackward">move backward by</span><span id="Turtle_turnTooltip">تحويل السلحفاة الى الأيمن أو الأيسر بعدد معين من \\nالدرجات. </span><span id="Turtle_turnRight">turn right by</span><span id="Turtle_turnLeft">turn left by</span><span id="Turtle_widthTooltip">تغيير عرض القلم.</span><span id="Turtle_setWidth">تعيين العرض إلى</span><span id="Turtle_colourTooltip">تغيير لون القلم.</span><span id="Turtle_setColour">تعيين اللون إلى</span><span id="Turtle_penTooltip">يرفع أو يخفض القلم، ليتم إيقاف أو بدء الرسم.</span><span id="Turtle_penUp">رفع القلم</span><span id="Turtle_penDown">انزال القلم</span><span id="Turtle_turtleVisibilityTooltip">جعل السلحفاة (دائرة وسهم) مرئية أو غير مرئية.</span><span id="Turtle_hideTurtle">إخفاء السلحفاة</span><span id="Turtle_showTurtle">إظهار السلحفاة</span><span id="Turtle_printHelpUrl">http://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">رسم/طباعة النص في في موقع اتجاه سلحفاة.</span><span id="Turtle_print">إطبع</span><span id="Turtle_fontHelpUrl">http://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Sets the font used by the print block.</span><span id="Turtle_font">الخط</span><span id="Turtle_fontSize">حجم الخط</span><span id="Turtle_fontNormal">عادي</span><span id="Turtle_fontBold">غامق</span><span id="Turtle_fontItalic">مائل</span><span id="Turtle_unloadWarning">ترك هذه الصفحة وسوف يؤدي إلى فقدان العمل الخاص بك.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html">بلوكلي</a> : رسومات السلحفاة</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><script type="text/javascript" src="../slider.js"><\/script><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Makes the turtle do what the blocks say."><img src="../../media/1x1.gif" class="run icon21">شغِّل البرنامج</button><button id="resetButton" class="primary" style="display: none"><img src="../../media/1x1.gif" class="stop icon21"> إعادة ضبط</button></td></tr></table><div id="toolbarDiv"><button id="codeButton" class="notext" title="راجع إنشاء تعليمات برمجية JavaScript."><img src=\'../../media/1x1.gif\' class="code icon21"></button><button id="linkButton" class="notext" title="Save and link to blocks."><img src=\'../../media/1x1.gif\' class="link icon21"></button><button class="notext" id="captureButton" title="حفظ الرسم." onclick="Turtle.createImageLink();"><img src=\'../../media/1x1.gif\' class="img icon21"></button><a id="downloadImageLink" download="الرسمة.png"></a></div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="السلحفاة"><block type="draw_move"><value name="VALUE"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><title name="NUM">90</title></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="لون"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="منطق"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="الحلقات"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><title name="NUM">10</title></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">10</title></block></value><value name="BY"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="رياضيات"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><title name="NUM">1</title></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="قوائم"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><title name="NUM">5</title></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><title name="VAR">قائمة</title></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><title name="VAR">قائمة</title></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><title name="VAR">قائمة</title></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><title name="VAR">قائمة</title></block></value></block></category><category name="متغيرات" custom="VARIABLE"></category><category name="إجراءات" custom="PROCEDURE"></category></xml>';
};
