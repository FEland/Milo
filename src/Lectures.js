export const Slideshows = [
    // {
    //     id: 1,
    //     images_path: importAll(require.context("./Slides3/Mitzvas/",
    //     name: "Mitzvas",
    //     pdf_file: './Slides3/Mitzvas/Mitzvas.pdf',
    //     date: "03/25/2015")
    // },
    {
        images_path: importAll(require.context("./Slides3/Mitzvas/", false, /^\.\/.*\.jpg$/)),
        name: "Mitzvas",
        pdf: "./Slides3/Mitzvas/Mitzvas.pdf", 
        size: sizeofAll(require.context("./Slides3/Mitzvas/", false, /^\.\/.*\.jpg$/)),
        date: "05/06/20",
        id: 1
    },
    {
        images_path: importAll(require.context("./Slides3/Neshama/", false, /^\.\/.*\.jpg$/)),
        name: "Neshama",
        pdf: './Slides3/Neshama/Neshama.pdf', 
        size: sizeofAll(require.context("./Slides3/Neshama/", false, /^\.\/.*\.jpg$/)),
        date: "07/08/20",
        id: 2
    },
    {
        images_path: importAll(require.context("./Slides3/Abraham/", false, /^\.\/.*\.jpg$/)),
        name: "Abraham",
        pdf: './Slides3/Abraham/Abraham.pdf', 
        size: sizeofAll(require.context("./Slides3/Abraham/", false, /^\.\/.*\.jpg$/)),
        date: "07/12/20",
        id: 3
    },
    {
        images_path: importAll(require.context("./Slides3/Bereishit/", false, /^\.\/.*\.jpg$/)),
        name: "Creation",
        pdf: './Slides3/Bereishit/Creation.pdf', 
        size: sizeofAll(require.context("./Slides3/Bereishit/", false, /^\.\/.*\.jpg$/)),
        date: "07/19/20",
        id: 4
    },
    {
        images_path: importAll(require.context("./Slides3/Brachas/", false, /^\.\/.*\.jpg$/)),
        name: "Brachot",
        pdf: './Slides3/Brachas/Brachas.pdf', 
        size: sizeofAll(require.context("./Slides3/Brachas/", false, /^\.\/.*\.jpg$/)),
        date: "08/02/20",
        id: 5
    },
    {
        images_path: importAll(require.context("./Slides3/YomYeru/", false, /^\.\/.*\.jpg$/)),
        name: "Jerusalem Day",
        pdf: './Slides3/YomYeru/YomYeru.pdf', 
        size: sizeofAll(require.context("./Slides3/YomYeru/", false, /^\.\/.*\.jpg$/)),
        date: "05/20/20",
        id: 6
    },
    {
        images_path: importAll(require.context("./Slides3/Tishbav/", false, /^\.\/.*\.jpg$/)),
        name: "Tisha B'av",
        pdf: './Slides3/Tishbav/Tishbav.pdf', 
        size: sizeofAll(require.context("./Slides3/Tishbav/", false, /^\.\/.*\.jpg$/)),
        date: "08/18/20",
        id: 7
    },
    {
        images_path: importAll(require.context("./Slides3/Shema/", false, /^\.\/.*\.jpg$/)),
        name: "Shema",
        pdf: './Slides3/Shema/Shema.pdf', 
        size: sizeofAll(require.context("./Slides3/Shema/", false, /^\.\/.*\.jpg$/)),
        date: "05/06/20",
        id: 8
    },
    {
        images_path: importAll(require.context("./Slides3/Mezuzah/", false, /^\.\/.*\.jpg$/)),
        name: "Mezuzah",
        pdf: './Slides3/Mezuzah/Mezuzah.pdf', 
        size: sizeofAll(require.context("./Slides3/Mezuzah/", false, /^\.\/.*\.jpg$/)),
        date: "07/01/20",
        id: 9
    },
    {
        images_path: importAll(require.context("./Slides3/Sefira/", false, /^\.\/.*\.jpg$/)),
        name: "Sefirat HaOmer",
        pdf: './Slides3/Sefira/Sefira.pdf', 
        size: sizeofAll(require.context("./Slides3/Sefira/", false, /^\.\/.*\.jpg$/)),
        date: "05/27/20",
        id: 10
    },
    {
        images_path: importAll(require.context("./Slides3/Vocab/", false, /^\.\/.*\.jpg$/)),
        name: "Vocabulary",
        pdf: './Slides3/Vocab/Vocab.pdf', 
        size: sizeofAll(require.context("./Slides3/Vocab/", false, /^\.\/.*\.jpg$/)),
        date: "08/13/20",
        id: 11
    },
    {
        images_path: importAll(require.context("./Slides3/TenCommandments/", false, /^\.\/.*\.jpg$/)),
        name: "Ten Commandments",
        pdf: './Slides3/TenCommandments/TenCommandments.pdf', 
        size: sizeofAll(require.context("./Slides3/TenCommandments/", false, /^\.\/.*\.jpg$/)),
        date: "08/09/20",
        id: 12
    },
    {
        images_path: importAll(require.context("./Slides3/AlephBet2/", false, /^\.\/.*\.jpg$/)),
        name: "AlephBet Revisited",
        pdf: './Slides3/AlephBet2/AlephBet2.pdf', 
        size: sizeofAll(require.context("./Slides3/AlephBet2/", false, /^\.\/.*\.jpg$/)),
        date: "08/30/20",
        id: 13
    },
    {
        images_path: importAll(require.context("./Slides3/HebrewBasics1/", false, /^\.\/.*\.jpg$/)),
        name: "Hebrew Basics",
        pdf: './Slides3/HebrewBasics1/HebrewBasics1.pdf', 
        size: sizeofAll(require.context("./Slides3/HebrewBasics1/", false, /^\.\/.*\.jpg$/)),
        date: "08/18/20",
        id: 14
    },
    {
        images_path: importAll(require.context("./Slides3/Months/", false, /^\.\/.*\.jpg$/)),
        name: "Jewish Calendar",
        pdf: './Slides3/Months/Months.pdf', 
        size: sizeofAll(require.context("./Slides3/Months/", false, /^\.\/.*\.jpg$/)),
        date: "9/06/20",
        id: 15
    },
    {
        images_path: importAll(require.context("./Slides3/HighHolidays/", false, /^\.\/.*\.jpg$/)),
        name: "High Holidays",
        pdf: './Slides3/HighHolidays/HighHolidays.pdf', 
        size: sizeofAll(require.context("./Slides3/HighHolidays/", false, /^\.\/.*\.jpg$/)),
        date: "09/22/20",
        id: 16
    },
    {
        images_path: importAll(require.context("./Slides3/Tefilin/", false, /^\.\/.*\.jpg$/)),
        name: "Tefillin",
        pdf: './Slides3/Tefilin/Tefilin.pdf', 
        size: sizeofAll(require.context("./Slides3/Tefilin/", false, /^\.\/.*\.jpg$/)),
        date: "09/30/20",
        id: 17
    },
    {
        images_path: importAll(require.context("./Slides3/JewishHistory/", false, /^\.\/.*\.jpg$/)),
        name: "Jewish History",
        pdf: './Slides3/JewishHistory/JewishHistory.pdf', 
        size: sizeofAll(require.context("./Slides3/JewishHistory/", false, /^\.\/.*\.jpg$/)),
        date: "09/16/20",
        id: 18
    }

  ]


function importAll(r) {
    return r.keys().map(r);
  }
  
  function sizeofAll(r) {
    return r.keys().map(r).length + ' slides';
  }



// const slideshows = [Vocab, Mitzvas, Abraham, Neshama, JewishHistory, Brachas, HighHolidays, Months, Shema, AlephBet2, Tefilin, TenCommandments, Mezuza, Sefira, YomYeru, Tishbav, Bereishit, HebrewBasics1];
