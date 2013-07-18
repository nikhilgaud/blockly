// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof puzzlepage == 'undefined') { var puzzlepage = {}; }


puzzlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="MSG" style="display: none"><span id="country1">Úc</span><span id="country1Flag">flag_au.png</span><span id="country1FlagHeight">50</span><span id="country1FlagWidth">100</span><span id="country1Language">Tiếng Anh</span><span id="country1City1">Melbourne</span><span id="country1City2">Sydney</span><span id="country1HelpUrl">http://vi.wikipedia.org/wiki/%C3%9Ac</span><span id="country2">Đức</span><span id="country2Flag">flag_de.png</span><span id="country2FlagHeight">60</span><span id="country2FlagWidth">100</span><span id="country2Language">Tiếng Đức</span><span id="country2City1">Béclin</span><span id="country2City2">Munich</span><span id="country2HelpUrl">http://vi.wikipedia.org/wiki/%C4%90%E1%BB%A9c</span><span id="country3">Trung Quốc</span><span id="country3Flag">flag_cn.png</span><span id="country3FlagHeight">66</span><span id="country3FlagWidth">100</span><span id="country3Language">Tiếng Hoa</span><span id="country3City1">Bắc Kinh</span><span id="country3City2">Thượng Hải</span><span id="country3HelpUrl">http://vi.wikipedia.org/wiki/Trung_Qu%E1%BB%91c</span><span id="country4">Braxin</span><span id="country4Flag">flag_br.png</span><span id="country4FlagHeight">70</span><span id="country4FlagWidth">100</span><span id="country4Language">Tiếng Bồ Đào Nha</span><span id="country4City1">Rio de Janeiro</span><span id="country4City2">São Paulo</span><span id="country4HelpUrl">http://vi.wikipedia.org/wiki/Brasil</span><span id="flag">cờ</span><span id="language">ngôn ngữ:</span><span id="languageChoose">chọn...</span><span id="cities">các thành phố:</span><span id="error0">Rất hoàn chỉnh!\nTất cả %1 mảnh đều chính xác.</span><span id="error1">Gần đúng rồi! Một mảnh còn chưa chính xác.</span><span id="error2">%1 mảnh còn chưa chính xác.</span><span id="tryAgain">Các mảnh được đánh dấu là không đúng.\nCố lên!</span></div><table id="header" width="100%"><tr><td valign="bottom"><h1><span id="title"><a href="../index.html">Blockly</a> : Đố vui</span></h1></td><td class="farSide"><select id="languageMenu" onchange="Puzzle.changeLanguage();"></select>&nbsp; &nbsp;<button id="helpButton" onclick="Puzzle.showHelp();">Trợ giúp</button>&nbsp; &nbsp;<button id="checkButton" class="launch" onclick="Puzzle.checkAnswers();">Kiểm tra đáp án</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div><div id="shadow"></div><div id="help"><div style="padding-bottom: 0.7ex">Với mỗi quốc gia (màu xanh lá cây), hãy gắn vào đó lá cờ đúng của quốc gia đó, chọn ngôn ngữ, và nối chồng các thành phố của nó vào quốc gia đó.</div><div><img src="help/help_vi.png"></div><div class="farSide" style="padding: 1ex 3ex 0"><button id="okButton" onclick="Puzzle.hideHelp()">OK</button></div></div>';
};
