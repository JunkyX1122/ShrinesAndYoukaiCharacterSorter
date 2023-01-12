dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Owner",
    key: "owner",
    tooltip: "Check this to restrict to certain OC owners.",
    checked: false,
    sub: [
      { name: "Achy", key: "achy" },
	  { name: "Banana", key: "banana" },
	  { name: "Conar", key: "conar" },
	  { name: "Drek", key: "drek" },
	  { name: "Drugs", key: "drugs" },
	  { name: "Gabe", key: "gabe" },
	  { name: "Guilmon", key: "guilmon" },
	  { name: "Junky", key: "junky" },
	  { name: "Lobby", key: "lobby" },
	  { name: "Lyos", key: "lyos" },
	  { name: "Meowstic", key: "meowstic" },
	  { name: "Miransu", key: "miransu" },
	  { name: "Phantom", key: "phantom" },
	  { name: "Python", key: "python" },
	  { name: "Robin", key: "robin" },
	  { name: "Sphe", key: "sphe" },
	  { name: "Tres", key: "tres" },
	  { name: "Tricky", key: "tricky" },
	  { name: "Veemon", key: "veemon" },
	  { name: "Vigor", key: "vigor" },
	  { name: "Zack", key: "zack" },
	  { name: "Assorted Others", key: "others" }
	  

    ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to certain OC genders.",
    checked: false,
    sub: [
      { name: "Male", key: "male" },
	  { name: "Female", key: "female" },
	  { name: "Non-Binary/Non-Specified", key: "non" }
	  
    ]
  },
  {
    name: "Filter by Species Type",
    key: "species",
    tooltip: "Check this to restrict to main species types.",
    checked: false,
    sub: [
      { name: "Human-looking", key: "humanoid" },
	  { name: "Anthro/Furry", key: "anthro" },
	  { name: "Animals/Objects", key: "aniobj" },
	  { name: "Pokemon/Digimon", key: "pokedigi" }
	  
    ]
  },
  {
    name: "Filter by Age",
    key: "age",
    tooltip: "Check this to restrict to adults/children. This is meant purely for shipping-shrine purposes ouo.",
    checked: false,
    sub: [
      { name: "Adults", tooltip: "Without a shadow of a doubt an adult (18+).", key: "adult" },
	  { name: "Young'ns", tooltip: "Without a shadow of a doubt a child (minor).", key: "child" },
	  { name: "Ambiguous", tooltip: "Each OC has a guess, however I'm not perfect and if you don't want to deal with ambiguity, turn this off.", key: "ambig" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Abuchi",
    img: "TaM61YN.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Aiko Daikazoku",
    img: "gCtjDiY.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Chamemi Housen",
    img: "h4ymhBc.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Cindy",
    img: "YfsZ0dm.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Seigeki",
    img: "j8UxJoM.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tatsuga",
    img: "Auoe5pN.png",
    opts: {
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Yuno",
    img: "kEDOCnV.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Bana 'Banana' Narama",
    img: "0K0pRFx.png",
    opts: {
      owner: ["banana"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["adult", "ambig"]
    }
  },
  {
    name: "Bridgette Palmer",
    img: "iMHdB8V.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult", "ambig"]
    }
  },
  {
    name: "Genmi",
    img: "VFpYUkz.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Kachari Hinaka",
    img: "YQFOKtn.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Mondo Ishigami",
    img: "usk6Czv.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Mouru Ominaeshi",
    img: "R01pmiv.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Siine",
    img: "zkc3ixB.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult", "ambig"]
    }
  },
  {
    name: "Usue",
    img: "xKoxifE.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult", "ambig"]
    }
  },
  {
    name: "Hersir",
    img: "A9OmdLd.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["antrho"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Conar Dinn",
    img: "LlyVAeu.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Earl",
    img: "wrAChS4.png",
    opts: {
      owner: ["conar","junky"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Justin",
    img: "MSsrN3E.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kaito Dinn",
    img: "Yv0Y0Ny.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kenchi Yakumo",
    img: "DjGCae4.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Keomi Kyogai",
    img: "FNii5Dr.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Kian Juichi",
    img: "XFCt0t2.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Rengetsu",
    img: "NUz51cw.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tesslyn Aurea",
    img: "Xtu7LQ3.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Charlie",
    img: "Tm8lN9p.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Drekareen",
    img: "4pl4Den.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Nesthaar",
    img: "ahVChuP.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"]
    }
  },
  
  
  
  {
    name: "Alastair",
    img: "4G2yiXt.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Drugs",
    img: "CY3SyBH.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Miyu Ito",
    img: "1DTmm4j.png",
    opts: {
      owner: ["drugs"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Blaike",
    img: "5HbJbu9.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Johan",
    img: "UFY43Kh.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Markus",
    img: "2aqk00J.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Merhan",
    img: "PPdthi6.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Sapphire",
    img: "ny9ofTp.png",
    opts: {
      owner: ["gabe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Chrysalis",
    img: "waD7wyk.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult", "ambig"]
    }
  },
  {
    name: "Daisuke",
    img: "28XFS2K.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Duke",
    img: "ShbjnP4.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["ambig"]
    }
  },
  {
    name: "Grandis",
    img: "gP820o4.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Guilmon",
    img: "zgHHdQG.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["ambig"]
    }
  },
  {
    name: "Hawk",
    img: "SSfKTGA.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Hiroyuki",
    img: "S2F74xq.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Hatsudzuki no Kairyu",
    img: "w3r3ya7.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Redrin Lightclaw",
    img: "ZfMTD3r.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Rei",
    img: "2iUVJJH.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Tristan",
    img: "UoZUd2z.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Jenny",
    img: "2a7VhHr.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Karigou Diaz",
    img: "hvVOnen.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Lola",
    img: "058Y9Qo.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "The Golden Lute (Lute)",
    img: "f7U60e3.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Maria",
    img: "1OS7WwV.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Nobody",
    img: "P0umA2y.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "The Cane of Contradiction Calamity (StaffLady)",
    img: "IOuRhHp.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Suki",
    img: "GBswHs5.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["ambig"]
    }
  },
  {
    name: "Sullen",
    img: "KeXazMK.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Tau",
    img: "zm2RGYt.png",
    opts: {
      owner: ["junky"],
	  gender: ["non"],
	  species: ["aniobj","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Toru",
    img: "6xvngvE.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Wolfy",
    img: "dWO4PLV.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Work",
    img: "sc5ztaO.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["child"]
    }
  },
  
  
  
  {
    name: "Acolyte",
    img: "DZfOZa0.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Annye Pihxie",
    img: "GCFBTgz.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Bates Amanita",
    img: "xLG1BCp.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Blob",
    img: "2xohYoo.png",
    opts: {
      owner: ["lobby"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["ambig"]
    }
  },
  {
    name: "Cedrik",
    img: "CbtW6KM.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Chorus Melpomene",
    img: "j6nekEt.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Felix Valentine",
    img: "osdaXLm.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Yaci",
    img: "cfglY06.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Atikaya Alsisar",
    img: "nZZ5WBk.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Denzel D'Abovile",
    img: "Vau4uDv.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Sabre Dubois",
    img: "TZAOM7a.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Zacharie LeBlanc",
    img: "f8kpy2h.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Ava",
    img: "LyP0MkK.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Marzia Mondadori",
    img: "wCD0wz5.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mamoru 'Meowstic' Iwasaki",
    img: "vqhcukK.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Merrick Octans",
    img: "QyIimVg.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Heinrich 'Rico' Viktor von Löwenthal",
    img: "KO0Ve2j.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Altwider",
    img: "2OI61if.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Kureha Iwakura",
    img: "IP2Zwo6.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["aniobj","pokedigi"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Misaki",
    img: "GuvjhHw.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Mitsuru",
    img: "aA4B96D.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"]
    }
  },
  {
    name: "Susuki Iwasaki",
    img: "yjSZp7Q.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj","pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Tsukasa",
    img: "No4U1Tq.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Yuuki 'Yukiharu' Iwasaki",
    img: "mg6LreE.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child","ambig"]
    }
  },
  
  
  
  {
    name: "Jess",
    img: "htbTzJk.png",
    opts: {
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Lucius",
    img: "9RjThHf.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Orion",
    img: "gumhPox.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Phantom",
    img: "StO0fGy.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sayuri",
    img: "YEf0v7b.png",
    opts: {
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Camelan Haimaku",
    img: "dlJqrS0.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Chikuji Toutetsu",
    img: "NCbcsRa.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Chiyo Yamanaka",
    img: "v3Oc35Z.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Cisa Perlach Augusta",
    img: "6Y0qZ1X.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Dr. Bees",
    img: "4mrzZ6I.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Harue Nagatsuka",
    img: "tYv3mVg.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kotobuki In'un",
    img: "vpakJVL.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Frederica Lissai",
    img: "iiiC17K.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["ambig"]
    }
  },
  {
    name: "Ma Sekisei",
    img: "nUF2zGE.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Manozeen",
    img: "fetne77.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mephistopheles",
    img: "M6eXUU4.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Ryoumika Soukun",
    img: "4NObNzq.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sanko Hakuchou",
    img: "6ImSUAU.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Taya",
    img: "SWt3LdN.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tazue Teidarou",
    img: "0ZqmUWz.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Theliea",
    img: "phV9vJe.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Tsushima",
    img: "sDZAyLe.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Urara Ukiyanagi",
    img: "rPT9rb4.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Viivi von Xanten",
    img: "ObCg0NN.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Waluigi",
    img: "UIMgZOw.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Xiki",
    img: "ymQuTF2.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Youka Hinejuu",
    img: "jg2jEUU.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Zika Parasite",
    img: "SDypHCO.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"]
    }
  },
  
  
  
  {
    name: "Croire",
    img: "qkypfpe.png",
    opts: {
      owner: ["robin"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["child"]
    }
  },
  {
    name: "Hikaru",
    img: "FrbrRKK.png",
    opts: {
      owner: ["robin"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Irisu Sakazuki",
    img: "tx5uw1U.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"]
    }
  },
  {
    name: "Noah Amenohara",
    img: "N9L2wW5.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Robin",
    img: "PkpBRco.png",
    opts: {
      owner: ["robin"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Sophie",
    img: "jvzm3Pv.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Valentine",
    img: "EQ4WnHC.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Chionne",
    img: "ZjSCqbe.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Lunesta",
    img: "8T9WBT0.png",
    opts: {
      owner: ["sphe"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Oru Sumikata",
    img: "BisLG8e.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Renée",
    img: "zcTMi5o.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Sandra",
    img: "zi6fE2C.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sarah",
    img: "8z4Swt4.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Theresa",
    img: "w24dzO9.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Juro",
    img: "zpvpYZC.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kinoko",
    img: "DmChAKX.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mary",
    img: "qU7qWmU.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"]
    }
  },
  {
    name: "Matsu",
    img: "sWTHcuM.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Minami",
    img: "Z2uUQJs.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Qielan-Yu",
    img: "kiXmtVU.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tori",
    img: "8JADOhM.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tres",
    img: "IhxIQkb.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Yoneka",
    img: "J9lJQdq.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
   
  
  {
    name: "Ashley Lightman",
    img: "A07c38f.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Cole Lightman",
    img: "o0WLHiz.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kokawa",
    img: "9UaoRzt.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["child"]
    }
  },
  {
    name: "Kosuke Suzukaze",
    img: "hhPdvuM.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Keizou Takamori (Mr. Deerkins)",
    img: "rFVo4gY.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Oliver",
    img: "cMBWBBw.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Penny Cillum",
    img: "UvSI58k.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Shokora",
    img: "MKogqNr.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Shuu",
    img: "kdY1d2h.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Tooru Uei",
    img: "BPxN0Js.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Rowan 'Tricky' Gardner",
    img: "4uP3Wil.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Wylda Walcott",
    img: "IbVAmFM.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Myonu",
    img: "WYJ2VhR.png",
    opts: {
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"]
    }
  },
  {
    name: "Veemon",
    img: "IgM3NC9.png",
    opts: {
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  
  

  {
    name: "Ariel Zaccaria",
    img: "5QFR1mZ.png",
    opts: {
      owner: ["vigor"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "William 'Illia' Winton",
    img: "HnDNDl5.png",
    opts: {
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Shannon Aghaveagh",
    img: "9I5aRgY.png",
    opts: {
      owner: ["vigor"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Shayne Luis",
    img: "W2eVjXz.png",
    opts: {
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  
  
  
  {
    name: "Dormun Albright",
    img: "dLVj6Se.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Jaime Montilyet",
    img: "REXUBzu.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Tian Long",
    img: "6QJkL5n.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Agent",
    img: "E9HyqUT.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Gizmo",
    img: "iobkMSU.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Jirachi",
    img: "oTzsnpg.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Loftaire Kuafushi",
    img: "mD9Y7vq.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  }
  
];
