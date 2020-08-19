// import React from 'react';

const hebrewLetters = "אבגדהוזחטיכךלמםנןסעפףצץקרשת" ;

function par_to_letter_list(paragraph){
    var sentence; var word; var letter;
    var w = []; var s = []; var p = [];
    for (sentence of paragraph.split("\n")){
        for (word of sentence.split(" ")){
            for (letter of word){ 
                w.push(letter);
            }
            s.push(w); w = [];
        }
        p.push(s); s = [];
    }
    return p;
}
function par_to_letter_list_stripped(paragraph, allowedSymbols){
    var sentence; var word; var letter;
    var w = []; var s = []; var p = [];
    for (sentence of paragraph.split("\n")){
        for (word of sentence.split(" ")){
            for (letter of word){ 
                //only add alphabetical symbols
                if (allowedSymbols.indexOf(String(letter)) > -1){
                    w.push(letter);
                }
                if (String(letter) === "־"){
                    w.push(" ");
                }
            }
            s.push(w); w = [];
        }
        p.push(s); s = [];
    }
    return p;
}




//   const j = "שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד \n .בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד \n .וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל־לְבָבְךָ וּבְכָל־נַפְשְׁךָ וּבְכָל־מְאֹדֶךָ \n .וְהָיוּ הַדְּבָרִים הָאֵלֶּה אֲשֶׁר אָנֹכִי מְצַוְּךָ הַיּוֹם עַל־לְבָבֶךָ \n .וְשִׁנַּנְתָּם לְבָנֶיךָ וְדִבַּרְתָּ בָּם בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ \n .וּקְשַׁרְתָּם לְאוֹת עַל־יָדֶךָ וְהָיוּ לְטֹטָפֹת בֵּין עֵינֶיךָ \n .וּכְתַבְתָּם עַל־מְזוּזֹת בֵּיתֶךָ וּבִשְׁעָרֶיךָ \n";
//   const a = "שְׁמַ֖ע יִשְׂרָאֵ֑ל יְהוָ֥ה אֱלֹהֵ֖ינוּ יְהוָ֥ה ׀ אֶחָֽד \n .בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד \n .וְאָ֣הַבְתָּ֔ אֵ֖ת יְהוָ֣ה אֱלֹהֶ֑יךָ בְּכָל־לְבָבְךָ֥ וּבְכָל־נַפְשְׁךָ֖ וּבְכָל־מְאֹדֶֽךָ \n .וְהָי֞וּ הַדְּבָרִ֣ים הָאֵ֗לֶּה אֲשֶׁ֨ר אָנֹכִ֧י מְצַוְּךָ֛ הַיּ֖וֹם עַל־לְבָבֶֽךָ \n .וְשִׁנַּנְתָּ֣ם לְבָנֶ֔יךָ וְדִבַּרְתָּ֖ בָּ֑ם בְּשִׁבְתְּךָ֤ בְּבֵיתֶ֙ךָ֙ וּבְלֶכְתְּךָ֣ בַדֶּ֔רֶךְ וּֽבְשָׁכְבְּךָ֖ וּבְקוּמֶֽךָ \n .וּקְשַׁרְתָּ֥ם לְא֖וֹת עַל־יָדֶ֑ךָ וְהָי֥וּ לְטֹטָפֹ֖ת בֵּ֥ין עֵינֶֽיךָ \n .וּכְתַבְתָּ֛ם עַל־מְזוּזֹ֥ת בֵּיתֶ֖ךָ וּבִשְׁעָרֶֽיךָ \n"; 
  
//   const q = "וְהָיָ֗ה אִם־שָׁמֹ֤עַ תִּשְׁמְעוּ֙ אֶל־מִצְוֺתַ֔י אֲשֶׁ֧ר אָנֹכִ֛י מְצַוֶּ֥ה אֶתְכֶ֖ם הַיּ֑וֹם לְאַהֲבָ֞ה אֶת־יְהוָ֤ה אֱלֹֽהֵיכֶם֙ וּלְעָבְד֔וֹ בְּכָל־לְבַבְכֶ֖ם וּבְכָל־נַפְשְׁכֶֽם \n .וְנָתַתִּ֧י מְטַֽר־אַרְצְכֶ֛ם בְּעִתּ֖וֹ יוֹרֶ֣ה וּמַלְק֑וֹשׁ וְאָסַפְתָּ֣ דְגָנֶ֔ךָ וְתִֽירֹשְׁךָ֖ וְיִצְהָרֶֽךָ \n .וְנָתַתִּ֛י עֵ֥שֶׂב בְּשָׂדְךָ֖ לִבְהֶמְתֶּ֑ךָ וְאָכַלְתָּ֖ וְשָׂבָֽעְתָּ \n .הִשָּֽׁמְר֣וּ לָכֶ֔ם פֶּ֥ן יִפְתֶּ֖ה לְבַבְכֶ֑ם וְסַרְתֶּ֗ם וַעֲבַדְתֶּם֙ אֱלֹהִ֣ים אֲחֵרִ֔ים וְהִשְׁתַּחֲוִיתֶ֖ם לָהֶֽם \n .וְחָרָ֨ה אַף־יְהוָ֜ה בָּכֶ֗ם וְעָצַ֤ר אֶת־הַשָּׁמַ֙יִם֙ וְלֹֽא־יִהְיֶ֣ה מָטָ֔ר וְהָ֣אֲדָמָ֔ה לֹ֥א תִתֵּ֖ן אֶת־יְבוּלָ֑הּ וַאֲבַדְתֶּ֣ם מְהֵרָ֗ה מֵעַל֙ הָאָ֣רֶץ הַטֹּבָ֔ה אֲשֶׁ֥ר יְהוָ֖ה נֹתֵ֥ן לָכֶֽם \n .וְשַׂמְתֶּם֙ אֶת־דְּבָרַ֣י אֵ֔לֶּה עַל־לְבַבְכֶ֖ם וְעַֽל־נַפְשְׁכֶ֑ם וּקְשַׁרְתֶּ֨ם אֹתָ֤ם לְאוֹת֙ עַל־יֶדְכֶ֔ם וְהָי֥וּ לְטוֹטָפֹ֖ת בֵּ֥ין עֵינֵיכֶֽם \n .וְלִמַּדְתֶּ֥ם אֹתָ֛ם אֶת־בְּנֵיכֶ֖ם לְדַבֵּ֣ר בָּ֑ם בְּשִׁבְתְּךָ֤ בְּבֵיתֶ֙ךָ֙ וּבְלֶכְתְּךָ֣ בַדֶּ֔רֶךְ וּֽבְשָׁכְבְּךָ֖ וּבְקוּמֶֽךָ \n .וּכְתַבְתָּ֛ם עַל־מְזוּז֥וֹת בֵּיתֶ֖ךָ וּבִשְׁעָרֶֽיךָ \n .לְמַ֨עַן יִרְבּ֤וּ יְמֵיכֶם֙ וִימֵ֣י בְנֵיכֶ֔ם עַ֚ל הָֽאֲדָמָ֔ה אֲשֶׁ֨ר נִשְׁבַּ֧ע יְהוָ֛ה לַאֲבֹתֵיכֶ֖ם לָתֵ֣ת לָהֶ֑ם כִּימֵ֥י הַשָּׁמַ֖יִם עַל־הָאָֽרֶץ"

const second_trope = ` וְהָיָ֗ה אִם־שָׁמֹ֤עַ תִּשְׁמְעוּ֙ אֶל־מִצְוֺתַ֔י אֲשֶׁ֧ר אָנֹכִ֛י מְצַוֶּ֥ה אֶתְכֶ֖ם הַיּ֑וֹם לְאַהֲבָ֞ה אֶת־יְהוָ֤ה אֱלֹֽהֵיכֶם֙ וּלְעָבְד֔וֹ בְּכָל־לְבַבְכֶ֖ם וּבְכָל־נַפְשְׁכֶֽם׃
וְנָתַתִּ֧י מְטַֽר־אַרְצְכֶ֛ם בְּעִתּ֖וֹ יוֹרֶ֣ה וּמַלְק֑וֹשׁ וְאָסַפְתָּ֣ דְגָנֶ֔ךָ וְתִֽירֹשְׁךָ֖ וְיִצְהָרֶֽךָ׃
וְנָתַתִּ֛י עֵ֥שֶׂב בְּשָׂדְךָ֖ לִבְהֶמְתֶּ֑ךָ וְאָכַלְתָּ֖ וְשָׂבָֽעְתָּ׃
הִשָּֽׁמְר֣וּ לָכֶ֔ם פֶּ֥ן יִפְתֶּ֖ה לְבַבְכֶ֑ם וְסַרְתֶּ֗ם וַעֲבַדְתֶּם֙ אֱלֹהִ֣ים אֲחֵרִ֔ים וְהִשְׁתַּחֲוִיתֶ֖ם לָהֶֽם׃
וְחָרָ֨ה אַף־יְהוָ֜ה בָּכֶ֗ם וְעָצַ֤ר אֶת־הַשָּׁמַ֙יִם֙ וְלֹֽא־יִהְיֶ֣ה מָטָ֔ר וְהָ֣אֲדָמָ֔ה לֹ֥א תִתֵּ֖ן אֶת־יְבוּלָ֑הּ וַאֲבַדְתֶּ֣ם מְהֵרָ֗ה מֵעַל֙ הָאָ֣רֶץ הַטֹּבָ֔ה אֲשֶׁ֥ר יְהוָ֖ה נֹתֵ֥ן לָכֶֽם׃
וְשַׂמְתֶּם֙ אֶת־דְּבָרַ֣י אֵ֔לֶּה עַל־לְבַבְכֶ֖ם וְעַֽל־נַפְשְׁכֶ֑ם וּקְשַׁרְתֶּ֨ם אֹתָ֤ם לְאוֹת֙ עַל־יֶדְכֶ֔ם וְהָי֥וּ לְטוֹטָפֹ֖ת בֵּ֥ין עֵינֵיכֶֽם׃
וְלִמַּדְתֶּ֥ם אֹתָ֛ם אֶת־בְּנֵיכֶ֖ם לְדַבֵּ֣ר בָּ֑ם בְּשִׁבְתְּךָ֤ בְּבֵיתֶ֙ךָ֙ וּבְלֶכְתְּךָ֣ בַדֶּ֔רֶךְ וּֽבְשָׁכְבְּךָ֖ וּבְקוּמֶֽךָ׃
וּכְתַבְתָּ֛ם עַל־מְזוּז֥וֹת בֵּיתֶ֖ךָ וּבִשְׁעָרֶֽיךָ׃
♢לְמַ֨עַן יִרְבּ֤וּ יְמֵיכֶם֙ וִימֵ֣י בְנֵיכֶ֔ם עַ֚ל הָֽאֲדָמָ֔ה אֲשֶׁ֨ר נִשְׁבַּ֧ע יְהוָ֛ה לַאֲבֹתֵיכֶ֖ם לָתֵ֣ת לָהֶ֑ם כִּימֵ֥י הַשָּׁמַ֖יִם עַל־הָאָֽרֶץ׃`

const second_plain = `וְהָיָה אִם־שָׁמֹעַ תִּשְׁמְעוּ אֶל־מִצְוֺתַי אֲשֶׁר אָנֹכִי מְצַוֶּה אֶתְכֶם הַיּוֹם לְאַהֲבָה אֶת־יְהוָה אֱלֹהֵיכֶם וּלְעָבְדוֹ בְּכָל־לְבַבְכֶם וּבְכָל־נַפְשְׁכֶם׃
וְנָתַתִּי מְטַר־אַרְצְכֶם בְּעִתּוֹ יוֹרֶה וּמַלְקוֹשׁ וְאָסַפְתָּ דְגָנֶךָ וְתִירֹשְׁךָ וְיִצְהָרֶךָ׃
וְנָתַתִּי עֵשֶׂב בְּשָׂדְךָ לִבְהֶמְתֶּךָ וְאָכַלְתָּ וְשָׂבָעְתָּ׃
הִשָּׁמְרוּ לָכֶם פֶּן יִפְתֶּה לְבַבְכֶם וְסַרְתֶּם וַעֲבַדְתֶּם אֱלֹהִים אֲחֵרִים וְהִשְׁתַּחֲוִיתֶם לָהֶם׃
וְחָרָה אַף־יְהוָה בָּכֶם וְעָצַר אֶת־הַשָּׁמַיִם וְלֹא־יִהְיֶה מָטָר וְהָאֲדָמָה לֹא תִתֵּן אֶת־יְבוּלָהּ וַאֲבַדְתֶּם מְהֵרָה מֵעַל הָאָרֶץ הַטֹּבָה אֲשֶׁר יְהוָה נֹתֵן לָכֶם׃
וְשַׂמְתֶּם אֶת־דְּבָרַי אֵלֶּה עַל־לְבַבְכֶם וְעַל־נַפְשְׁכֶם וּקְשַׁרְתֶּם אֹתָם לְאוֹת עַל־יֶדְכֶם וְהָיוּ לְטוֹטָפֹת בֵּין עֵינֵיכֶם׃
וְלִמַּדְתֶּם אֹתָם אֶת־בְּנֵיכֶם לְדַבֵּר בָּם בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ׃
וּכְתַבְתָּם עַל־מְזוּזוֹת בֵּיתֶךָ וּבִשְׁעָרֶיךָ׃
לְמַעַן יִרְבּוּ יְמֵיכֶם וִימֵי בְנֵיכֶם עַל הָאֲדָמָה אֲשֶׁר נִשְׁבַּע יְהוָה לַאֲבֹתֵיכֶם לָתֵת לָהֶם כִּימֵי הַשָּׁמַיִם עַל־הָאָרֶץ׃`

const second_eng = `And it will be, if you will diligently obey My commandments which I instruct you this day, 
to love the Lord your God and to serve Him with all your heart and with all your soul, 
I will give rain for your land at the proper time, the early rain and the late rain, 
and you will gather in your grain, your wine and your oil. 
And I will give grass in your fields for your cattle, and you will eat and be sated. 
Take care lest your heart be lured away, and you turn astray and worship alien gods and bow down to them. 
For then the Lord's wrath will flare up against you, and He will close the heavens 
so that there will be no rain and the earth will not yield its produce, 
and you will swiftly perish from the good land which the Lord gives you. 
Therefore, place these words of Mine upon your heart and upon your soul,
and bind them for a sign on your hand, and they shall be for a reminder between your eyes. 
You shall teach them to your children, to speak of them when you sit in your house and when you walk on the road, 
when you lie down and when you rise. 
And you shall inscribe them on the doorposts of your house and on your gates -
so that your days and the days of your children may be prolonged 
on the land which the Lord swore to your fathers to give to them for as long as the heavens are above the earth.`

const first_plain = `שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָד׃
(בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד)
וְאָהַבְתָּ אֵת יְהוָה אֱלֹהֶיךָ בְּכָל־לְבָבְךָ וּבְכָל־נַפְשְׁךָ וּבְכָל־מְאֹדֶךָ׃
וְהָיוּ הַדְּבָרִים הָאֵלֶּה אֲשֶׁר אָנֹכִי מְצַוְּךָ הַיּוֹם עַל־לְבָבֶךָ׃
וְשִׁנַּנְתָּם לְבָנֶיךָ וְדִבַּרְתָּ בָּם בְּשִׁבְתְּךָ בְּבֵיתֶךָ וּבְלֶכְתְּךָ בַדֶּרֶךְ וּבְשָׁכְבְּךָ וּבְקוּמֶךָ׃
וּקְשַׁרְתָּם לְאוֹת עַל־יָדֶךָ וְהָיוּ לְטֹטָפֹת בֵּין עֵינֶיךָ׃
וּכְתַבְתָּם עַל־מְזוּזֹת בֵּיתֶךָ וּבִשְׁעָרֶיךָ׃`

const first_trope = `שְׁמַ֖ע יִשְׂרָאֵ֑ל יְהוָ֥ה אֱלֹהֵ֖ינוּ יְהוָ֥ה ׀ אֶחָֽד׃
(בָּרוּךְ שֵׁם כְּבוֹד מַלְכוּתוֹ לְעוֹלָם וָעֶד)
וְאָ֣הָבְתָּ֔ אֵ֖ת יְהוָ֣ה אֱלֹהֶ֑יךָ בְּכָל־לְבָבְךָ֥ וּבְכָל־נַפְשְׁךָ֖ וּבְכָל־מְאֹדֶֽךָ׃
וְהָי֞וּ הַדְּבָרִ֣ים הָאֵ֗לֶּה אֲשֶׁ֨ר אָנֹכִ֧י מְצַוְּךָ֛ הַיּ֖וֹם עַל־לְבָבֶֽךָ׃
וְשִׁנַּנְתָּ֣ם לְבָנֶ֔יךָ וְדִבַּרְתָּ֖ בָּ֑ם בְּשִׁבְתְּךָ֤ בְּבֵיתֶ֙ךָ֙ וּבְלֶכְתְּךָ֣ בַדֶּ֔רֶךְ וּֽבְשָׁכְבְּךָ֖ וּבְקוּמֶֽךָ׃
וּקְשַׁרְתָּ֥ם לְא֖וֹת עַל־יָדֶ֑ךָ וְהָי֥וּ לְטֹטָפֹ֖ת בֵּ֥ין עֵינֶֽיךָ׃
♢וּכְתַבְתָּ֛ם עַל־מְזוּזֹ֥ת בֵּיתֶ֖ךָ וּבִשְׁעָרֶֽיךָ׃`

const first_eng = `Hear, O Israel! The LORD is our God, the LORD is One.
(Blessed be the name of the glory of His kingdom forever and ever).
You shall love the LORD your God with all your heart, with all your soul, and with all your might. 
And these words which I command you today shall be upon your heart. 
You shall teach them [deeply] to your children, 
and you shall speak of them when you sit in your house and when you walk on the road, when you lie down and when you rise. 
You shall bind them as a sign upon your hand, and they shall be for a reminder between your eyes [Tefillin]. 
And you shall write them upon the doorposts of your house and upon your gates [Mezuzot].`

const third_plain = `וַיֹּאמֶר יְהוָה אֶל־מֹשֶׁה לֵּאמֹר׃
דַּבֵּר אֶל־בְּנֵי יִשְׂרָאֵל וְאָמַרְתָּ אֲלֵהֶם וְעָשׂוּ לָהֶם צִיצִת עַל־כַּנְפֵי בִגְדֵיהֶם לְדֹרֹתָם וְנָתְנוּ עַל־צִיצִת הַכָּנָף פְּתִיל תְּכֵלֶת׃
וְהָיָה לָכֶם לְצִיצִת וּרְאִיתֶם אֹתוֹ וּזְכַרְתֶּם אֶת־כָּל־מִצְוֺת יְהוָה וַעֲשִׂיתֶם אֹתָם וְלֹא־תָתֻרוּ אַחֲרֵי לְבַבְכֶם וְאַחֲרֵי עֵינֵיכֶם אֲשֶׁר־אַתֶּם זֹנִים אַחֲרֵיהֶם׃
לְמַעַן תִּזְכְּרוּ וַעֲשִׂיתֶם אֶת־כָּל־מִצְוֺתָי וִהְיִיתֶם קְדֹשִׁים לֵאלֹהֵיכֶם׃
אֲנִי יְהוָה אֱלֹהֵיכֶם אֲשֶׁר הוֹצֵאתִי אֶתְכֶם מֵאֶרֶץ מִצְרַיִם לִהְיוֹת לָכֶם לֵאלֹהִים אֲנִי יְהוָה אֱלֹהֵיכֶם׃`

const third_trope = `וַיֹּ֥אמֶר יְהוָ֖ה אֶל־מֹשֶׁ֥ה לֵּאמֹֽר׃
דַּבֵּ֞ר אֶל־בְּנֵ֤י יִשְׂרָאֵל֙ וְאָמַרְתָּ֣ אֲלֵהֶ֔ם וְעָשׂ֨וּ לָהֶ֥ם צִיצִ֛ת עַל־כַּנְפֵ֥י בִגְדֵיהֶ֖ם לְדֹרֹתָ֑ם וְנָֽתְנ֛וּ עַל־צִיצִ֥ת הַכָּנָ֖ף פְּתִ֥יל תְּכֵֽלֶת׃
וְהָיָ֣ה לָכֶם֮ לְצִיצִת֒ וּרְאִיתֶ֣ם אֹת֗וֹ וּזְכַרְתֶּם֙ אֶת־כָּל־מִצְוֺ֣ת יְהוָ֔ה וַעֲשִׂיתֶ֖ם אֹתָ֑ם וְלֹֽא־תָתֻ֜רוּ אַחֲרֵ֤י לְבַבְכֶם֙ וְאַחֲרֵ֣י עֵֽינֵיכֶ֔ם אֲשֶׁר־אַתֶּ֥ם זֹנִ֖ים אַחֲרֵיהֶֽם׃
לְמַ֣עַן תִּזְכְּר֔וּ וַעֲשִׂיתֶ֖ם אֶת־כָּל־מִצְוֺתָ֑י וִהְיִיתֶ֥ם קְדֹשִׁ֖ים לֵֽאלֹהֵיכֶֽם׃
♢:אֲנִ֞י יְהוָ֣ה אֱלֹֽהֵיכֶ֗ם אֲשֶׁ֨ר הוֹצֵ֤אתִי אֶתְכֶם֙ מֵאֶ֣רֶץ מִצְרַ֔יִם לִהְי֥וֹת לָכֶ֖ם לֵאלֹהִ֑ים אֲנִ֖י יְהוָ֥ה אֱלֹהֵיכֶֽם`

const third_eng = `The Lord spoke to Moses, saying: Speak to the children of Israel
and tell them to make for themselves fringes on the corners of their garments throughout their generations, 
and to attach a thread of blue on the fringe of each corner. They shall be to you as tzizit.
And you shall look upon them and remember all the commandments of the Lord and fulfill them, 
and you will not follow after your heart and after your eyes by which you go astray - 
so that you may remember and fulfill all My commandments and be holy to your God. 
I am the Lord your God who brought you out of the land of Egypt to be your God; 
I, the Lord, am your God. True.`

// const _first_trope = par_to_letter_list(first_trope);
// const _second_trope = par_to_letter_list(second_trope);
// const _sarahsue = par_to_letter_list_stripped(third_plain, hebrewLetters);
// const _third_trope = par_to_letter_list(third_trope);
// const _first_plain = par_to_letter_list(first_plain);
// const _second_plain = par_to_letter_list(second_plain);
// const _third_plain = par_to_letter_list(third_plain);
// const _sarahsue = par_to_letter_list_stripped(third_plain, hebrewLetters);

export const Songs = [

    {
        id: 1,
        label: "1st Shema Paragraph",
        title1: "1st Paragraph - just Hebrew",
        song1: "./sounds/1-plain.m4a", 
        title2: "1st Paragraph - with Trope",
        song2: "./sounds/1-trope.m4a",
    },
    {
        id: 2,
        label: "2nd Shema Paragraph",
        title1: "2nd Paragraph - just Hebrew",
        song1: "./sounds/2-plain.m4a", 
        title2: "2nd Paragraph - with Trope",
        song2: "./sounds/2-trope.m4a",
    },  
    {
        id: 3,
        label: "3rd Shema Paragraph",
        title1: "3rd Paragraph - just Hebrew",
        song1: "./sounds/3-plain.m4a", 
        title2: "3rd Paragraph - with Trope",
        song2: "./sounds/3-trope.m4a",
    }

]

 export const Shemas = [
    par_to_letter_list(first_plain),
    par_to_letter_list(first_trope),
    par_to_letter_list_stripped(first_plain, hebrewLetters),
    first_eng,
    par_to_letter_list(second_plain),
    par_to_letter_list(second_trope),
    par_to_letter_list_stripped(second_plain, hebrewLetters),
    second_eng,
    par_to_letter_list(third_plain),
    par_to_letter_list(third_trope),
    par_to_letter_list_stripped(third_plain, hebrewLetters),
    third_eng,
    first_trope,
    second_trope,
    third_trope
]

// export const Shemas = [
//         _first_plain,
//         _first_trope,
//         _second_plain,
//         _second_trope,
//         _third_plain,
//         _third_trope,
//         _sarahsue
// ]
// export const Shemas = [
//     {
//         name: 'first_plain',
//         text: _first_plain
//     },
//     {
//         name: 'first_trope',
//         text: _first_trope
//     },
//     {
//         name: 'second_plain',
//         text: _second_plain
//     },
//     {
//         name: 'second_trope',
//         text: _second_trope
//     },
//     {
//         name: 'third_plain',
//         text: _third_plain
//     },
//     {
//         name: 'third_trope',
//         text: _third_trope
//     },
// ]
// export default function Effie ( {p}) {
//     // &nbsp;
//     return (
//             <div>
//                 {p.map(s => {
//                   return (
//                     <>{s.map(w => {
//                         return (
//                             <>
//                             <hov2>
//                                 {w.map(l => {return ( <hov>{l}</hov>)})} 
//                             </hov2> 
//                             &nbsp;
//                             </>
//                         ) })} <br/> 
//                     </> 
//                   )
//                 })}
//             </div>

// );
// }