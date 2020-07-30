import React  from 'react'; 

export default function master ( ) {

    return (
        <div>
            <h1 >Welcome to Harrison's Bar Mitzva Website! </h1>
            <h2 >Explore the Links Above</h2>
            <img src="/Slides/Shema/02.jpg" 
                    alt="icon"
                    align="center"
                    loading="lazy"  
                    width="50%" height="50%"
                    >
            </img>
            <img src="/Slides/Cov.jpg" 
                    alt="icon"
                    align="center"
                    loading="lazy"  
                    width="50%" height="50%"
                    >
            </img>
            {/* <parsha_2 style={{backgroundColor: 'gray', color: 'orange'}}>
    1 When you enter the land that the LORD your God is giving you as a heritage, and you possess it and settle in it,
    <br></br>2 you shall take some of every first fruit of the soil, which you harvest from the land that the LORD your God is giving you, put it in a basket and go to the place where the LORD your God will choose to establish His name.
    <br></br>3 You shall go to the priest in charge at that time and say to him, “I acknowledge this day before the LORD your God that I have entered the land that the LORD swore to our fathers to assign us.”
    <br></br>4 The priest shall take the basket from your hand and set it down in front of the altar of the LORD your God.
    <br></br> 5 You shall then recite as follows before the LORD your God: “My father was a fugitive Aramean. He went down to Egypt with meager numbers and sojourned there; but there he became a great and very populous nation.
    <br></br> 6 The Egyptians dealt harshly with us and oppressed us; they imposed heavy labor upon us.
    <br></br>7 We cried to the LORD, the God of our fathers, and the LORD heard our plea and saw our plight, our misery, and our oppression.
    <br></br>8 The LORD freed us from Egypt by a mighty hand, by an outstretched arm and awesome power, and by signs and portents.
    <br></br>9 He brought us to this place and gave us this land, a land flowing with milk and honey.
    <br></br>10 Wherefore I now bring the first fruits of the soil which You, O LORD, have given me.” You shall leave it before the LORD your God and bow low before the LORD your God.
    <br></br>11 And you shall enjoy, together with the Levite and the stranger in your midst, all the bounty that the LORD your God has bestowed upon you and your household.
            
        </parsha_2>

        <parsha_1 style={{backgroundColor: 'orange', color: 'gray'}}> 

            א וְהָיָה֙ כִּֽי־תָב֣וֹא אֶל־הָאָ֔רֶץ אֲשֶׁר֙ יְהוָ֣ה אֱלֹהֶ֔יךָ נֹתֵ֥ן לְךָ֖ נַֽחֲלָ֑ה וִֽירִשְׁתָּ֖הּ וְיָשַׁ֥בְתָּ בָּֽהּ׃
            <div> ב וְלָֽקַחְתָּ֞ מֵֽרֵאשִׁ֣ית ׀ כָּל־פְּרִ֣י הָֽאֲדָמָ֗ה אֲשֶׁ֨ר תָּבִ֧יא מֵֽאַרְצְךָ֛ אֲשֶׁ֨ר יְהוָ֧ה אֱלֹהֶ֛יךָ נֹתֵ֥ן לָ֖ךְ וְשַׂמְתָּ֣ בַטֶּ֑נֶא וְהָֽלַכְתָּ֙ אֶל־הַמָּק֔וֹם אֲשֶׁ֤ר יִבְחַר֙ יְהוָ֣ה אֱלֹהֶ֔יךָ לְשַׁכֵּ֥ן שְׁמ֖וֹ שָֽׁם׃
            </div><div> ג וּבָאתָ֙ אֶל־הַכֹּהֵ֔ן אֲשֶׁ֥ר יִֽהְיֶ֖ה בַּיָּמִ֣ים הָהֵ֑ם וְאָֽמַרְתָּ֣ אֵלָ֗יו הִגַּ֤דְתִּי הַיּוֹם֙ לַֽיהוָ֣ה אֱלֹהֶ֔יךָ כִּי־בָ֨אתִי֙ אֶל־הָאָ֔רֶץ אֲשֶׁ֨ר נִשְׁבַּ֧ע יְהוָ֛ה לַֽאֲבֹתֵ֖ינוּ לָ֥תֶת לָֽנוּ׃
            </div><div>      
            </div><div> ד וְלָקַ֧ח הַכֹּהֵ֛ן הַטֶּ֖נֶא מִיָּדֶ֑ךָ וְהִ֨נִּיח֔וֹ לִפְנֵ֕י מִזְבַּ֖ח יְהוָ֥ה אֱלֹהֶֽיךָ׃
            </div><div>  ה וְעָנִ֨יתָ וְאָֽמַרְתָּ֜ לִפְנֵ֣י ׀ יְהוָ֣ה אֱלֹהֶ֗יךָ אֲרַמִּי֙ אֹבֵ֣ד אָבִ֔י וַיֵּ֣רֶד מִצְרַ֔יְמָה וַיָּ֥גָר שָׁ֖ם בִּמְתֵ֣י מְעָ֑ט וַֽיְהִי־שָׁ֕ם לְג֥וֹי גָּד֖וֹל עָצ֥וּם וָרָֽב׃
            </div><div> ו וַיָּרֵ֧עוּ אֹתָ֛נוּ הַמִּצְרִ֖ים וַיְעַנּ֑וּנוּ וַיִּתְּנ֥וּ עָלֵ֖ינוּ עֲבֹדָ֥ה קָשָֽׁה׃
            </div><div> ז וַנִּצְעַ֕ק אֶל־יְהוָ֖ה אֱלֹהֵ֣י אֲבֹתֵ֑ינוּ וַיִּשְׁמַ֤ע יְהוָה֙ אֶת־קֹלֵ֔נוּ וַיַּ֧רְא אֶת־עָנְיֵ֛נוּ וְאֶת־עֲמָלֵ֖נוּ וְאֶת־לַֽחֲצֵֽנוּ׃
            </div><div>  
            </div><div> ח וַיּֽוֹצִאֵ֤נוּ יְהוָה֙ מִמִּצְרַ֔יִם בְּיָ֤ד חֲזָקָה֙ וּבִזְרֹ֣עַ נְטוּיָ֔ה וּבְמֹרָ֖א גָּדֹ֑ל וּבְאֹת֖וֹת וּבְמֹֽפְתִֽים׃
            </div><div> ט וַיְבִאֵ֖נוּ אֶל־הַמָּק֣וֹם הַזֶּ֑ה וַיִּתֶּן־לָ֨נוּ֙ אֶת־הָאָ֣רֶץ הַזֹּ֔את אֶ֛רֶץ זָבַ֥ת חָלָ֖ב וּדְבָֽשׁ׃
            </div><div>  י וְעַתָּ֗ה הִנֵּ֤ה הֵבֵ֨אתִי֙ אֶת־רֵאשִׁית֙ פְּרִ֣י הָֽאֲדָמָ֔ה אֲשֶׁר־נָתַ֥תָּה לִּ֖י יְהוָ֑ה וְהִנַּחְתּ֗וֹ לִפְנֵי֙ יְהוָ֣ה אֱלֹהֶ֔יךָ וְהִֽשְׁתַּחֲוִ֔יתָ לִפְנֵ֖י יְהוָ֥ה אֱלֹהֶֽיךָ׃
            </div> יא וְשָֽׂמַחְתָּ֣ בְכָל־הַטּ֗וֹב אֲשֶׁ֧ר נָֽתַן־לְךָ֛ יְהוָ֥ה אֱלֹהֶ֖יךָ וּלְבֵיתֶ֑ךָ אַתָּה֙ וְהַלֵּוִ֔י וְהַגֵּ֖ר אֲשֶׁ֥ר בְּקִרְבֶּֽךָ׃
            <br></br>
        </parsha_1> */}
       
        </div>
);
}