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
    tooltip: "Check this to restrict to main species types",
    checked: false,
    sub: [
      { name: "Human-looking", key: "humanoid" },
	  { name: "Anthro/Furry", key: "anthro" },
	  { name: "Animals/Objects", key: "aniobj" },
	  { name: "Pokemon/Digimon", key: "pokedigi" }
	  
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
	  species: ["humanoid"]
    }
  },
  {
    name: "Aiko Daikazoku",
    img: "gCtjDiY.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Chamemi Housen",
    img: "h4ymhBc.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Cindy",
    img: "YfsZ0dm.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Seigeki",
    img: "j8UxJoM.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Tatsuga",
    img: "Auoe5pN.png",
    opts: {
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Yuno",
    img: "kEDOCnV.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Bana 'Banana' Narama",
    img: "0K0pRFx.png",
    opts: {
      owner: ["banana"],
	  gender: ["non"],
	  species: ["anthro"]
    }
  },
  {
    name: "Bridgette Palmer",
    img: "iMHdB8V.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Genmi",
    img: "VFpYUkz.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Kachari Hinaka",
    img: "YQFOKtn.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Mondo Ishigami",
    img: "usk6Czv.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Mouru Ominaeshi",
    img: "R01pmiv.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Siine",
    img: "zkc3ixB.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Usue",
    img: "xKoxifE.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Hersir",
    img: "A9OmdLd.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["antrho"]
    }
  },
  
  
  
  {
    name: "Conar Dinn",
    img: "LlyVAeu.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Earl",
    img: "wrAChS4.png",
    opts: {
      owner: ["junky"],
	  gender: ["non"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Justin",
    img: "MSsrN3E.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Kaito Dinn",
    img: "Yv0Y0Ny.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Kenchi Yakumo",
    img: "DjGCae4.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Keomi Kyogai",
    img: "FNii5Dr.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Kian Juichi",
    img: "XFCt0t2.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Rengetsu",
    img: "NUz51cw.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Tesslyn Aurea",
    img: "Xtu7LQ3.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Charlie",
    img: "Tm8lN9p.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Drekareen",
    img: "4pl4Den.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Nesthaar",
    img: "ahVChuP.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  
  
  
  {
    name: "Alastair",
    img: "4G2yiXt.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Drugs",
    img: "CY3SyBH.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Miyu Ito",
    img: "1DTmm4j.png",
    opts: {
      owner: ["drugs"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Blaike",
    img: "5HbJbu9.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Johan",
    img: "UFY43Kh.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Markus",
    img: "2aqk00J.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Merhan",
    img: "PPdthi6.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Sapphire",
    img: "ny9ofTp.png",
    opts: {
      owner: ["gabe"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Chrysalis",
    img: "waD7wyk.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  {
    name: "Daisuke",
    img: "28XFS2K.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid","pokedigi"]
    }
  },
  {
    name: "Duke",
    img: "ShbjnP4.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Grandis",
    img: "gP820o4.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Guilmon",
    img: "zgHHdQG.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Hawk",
    img: "SSfKTGA.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Hiroyuki",
    img: "S2F74xq.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  {
    name: "Hatsudzuki no Kairyu",
    img: "w3r3ya7.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Redrin Lightclaw",
    img: "ZfMTD3r.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Rei",
    img: "2iUVJJH.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  {
    name: "Tristan",
    img: "UoZUd2z.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Jenny",
    img: "2a7VhHr.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"]
    }
  },
  {
    name: "Karigou Diaz",
    img: "hvVOnen.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Lola",
    img: "058Y9Qo.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "The Golden Lute (Lute)",
    img: "f7U60e3.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Maria",
    img: "1OS7WwV.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"]
    }
  },
  {
    name: "Nobody",
    img: "P0umA2y.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"]
    }
  },
  {
    name: "The Cane of Contradiction Calamity (StaffLady)",
    img: "IOuRhHp.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Suki",
    img: "GBswHs5.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Sullen",
    img: "KeXazMK.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  {
    name: "Tau",
    img: "zm2RGYt.png",
    opts: {
      owner: ["junky"],
	  gender: ["non"],
	  species: ["aniobj","pokedigi"]
    }
  },
  {
    name: "Toru",
    img: "6xvngvE.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Wolfy",
    img: "dWO4PLV.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Work",
    img: "sc5ztaO.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"]
    }
  },
  
  
  
  {
    name: "Acolyte",
    img: "DZfOZa0.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Annye Pihxie",
    img: "GCFBTgz.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Bates Amanita",
    img: "xLG1BCp.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Blob",
    img: "2xohYoo.png",
    opts: {
      owner: ["lobby"],
	  gender: ["non"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Cedrik",
    img: "CbtW6KM.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Chorus Melpomene",
    img: "j6nekEt.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Felix Valentine",
    img: "osdaXLm.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Yaci",
    img: "cfglY06.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Atikaya Alsisar",
    img: "nZZ5WBk.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Denzel D'Abovile",
    img: "Vau4uDv.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Sabre Dubois",
    img: "TZAOM7a.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Zacharie LeBlanc",
    img: "f8kpy2h.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  
  
  
  {
    name: "Ava",
    img: "LyP0MkK.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Marzia Mondadori",
    img: "wCD0wz5.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Mamoru 'Meowstic' Iwasaki",
    img: "vqhcukK.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  {
    name: "Merrick Octans",
    img: "QyIimVg.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Heinrich 'Rico' Viktor von Löwenthal",
    img: "KO0Ve2j.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  
  
  
  {
    name: "Altwider",
    img: "2OI61if.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Kureha Iwakura",
    img: "IP2Zwo6.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["aniobj","pokedigi"]
    }
  },
  {
    name: "Misaki",
    img: "GuvjhHw.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Mitsuru ",
    img: "aA4B96D.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Susuki Iwasaki",
    img: "yjSZp7Q.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj","pokedigi"]
    }
  },
  {
    name: "Tsukasa",
    img: "No4U1Tq.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  {
    name: "Yuuki 'Yukiharu' Iwasaki",
    img: "mg6LreE.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  
  
  
  {
    name: "Jess",
    img: "htbTzJk.png",
    opts: {
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Lucius",
    img: "9RjThHf.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Orion",
    img: "gumhPox.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Phantom",
    img: "StO0fGy.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Sayuri",
    img: "YEf0v7b.png",
    opts: {
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Camelan Haimaku",
    img: "dlJqrS0.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Chikuji Toutetsu",
    img: "NCbcsRa.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Chiyo Yamanaka",
    img: "v3Oc35Z.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Cisa Perlach Augusta",
    img: "6Y0qZ1X.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Dr. Bees",
    img: "4mrzZ6I.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Harue Nagatsuka",
    img: "tYv3mVg.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Kotobuki In'un",
    img: "vpakJVL.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Frederica Lissai",
    img: "iiiC17K.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Ma Sekisei",
    img: "nUF2zGE.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Manozeen",
    img: "fetne77.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Mephistopheles",
    img: "M6eXUU4.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Ryoumika Soukun",
    img: "4NObNzq.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Sanko Hakuchou",
    img: "6ImSUAU.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Taya",
    img: "SWt3LdN.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Tazue Teidarou",
    img: "0ZqmUWz.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Theliea",
    img: "phV9vJe.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Tsushima",
    img: "sDZAyLe.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Urara Ukiyanagi",
    img: "rPT9rb4.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Viivi von Xanten",
    img: "ObCg0NN.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Waluigi",
    img: "UIMgZOw.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Xiki",
    img: "ymQuTF2.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Youka Hinejuu",
    img: "jg2jEUU.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Zika Parasite",
    img: "SDypHCO.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Croire",
    img: "qkypfpe.png",
    opts: {
      owner: ["robin"],
	  gender: ["non"],
	  species: ["anthro"]
    }
  },
  {
    name: "Hikaru",
    img: "FrbrRKK.png",
    opts: {
      owner: ["robin"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Irisu Sakazuki",
    img: "tx5uw1U.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Noah Amenohara",
    img: "N9L2wW5.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Robin",
    img: "PkpBRco.png",
    opts: {
      owner: ["robin"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Sophie",
    img: "jvzm3Pv.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Valentine",
    img: "EQ4WnHC.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Chionne",
    img: "ZjSCqbe.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Lunesta",
    img: "8T9WBT0.png",
    opts: {
      owner: ["sphe"],
	  gender: ["male"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Oru Sumikata",
    img: "BisLG8e.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Renée",
    img: "zcTMi5o.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Sandra",
    img: "zi6fE2C.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Sarah",
    img: "8z4Swt4.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Theresa",
    img: "w24dzO9.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Juro",
    img: "zpvpYZC.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Kinoko",
    img: "DmChAKX.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Mary",
    img: "qU7qWmU.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Matsu",
    img: "sWTHcuM.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Minami",
    img: "Z2uUQJs.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Qielan-Yu",
    img: "kiXmtVU.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Tori",
    img: "8JADOhM.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Tres",
    img: "IhxIQkb.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Yoneka",
    img: "J9lJQdq.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
   
  
  {
    name: "Ashley Lightman",
    img: "A07c38f.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Cole Lightman",
    img: "o0WLHiz.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Kokawa",
    img: "9UaoRzt.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Kosuke Suzukaze",
    img: "hhPdvuM.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Keizou Takamori (Mr. Deerkins)",
    img: "rFVo4gY.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Oliver",
    img: "cMBWBBw.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Penny Cillum",
    img: "UvSI58k.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Shokora",
    img: "MKogqNr.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Shuu",
    img: "kdY1d2h.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"]
    }
  },
  {
    name: "Tooru Uei",
    img: "BPxN0Js.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Rowan 'Tricky' Gardner",
    img: "4uP3Wil.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Wylda Walcott",
    img: "IbVAmFM.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Myonu",
    img: "WYJ2VhR.png",
    opts: {
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Veemon",
    img: "IgM3NC9.png",
    opts: {
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  
  

  {
    name: "Ariel Zaccaria",
    img: "5QFR1mZ.png",
    opts: {
      owner: ["vigor"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "William 'Illia' Winton",
    img: "HnDNDl5.png",
    opts: {
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Shannon Aghaveagh",
    img: "9I5aRgY.png",
    opts: {
      owner: ["vigor"],
	  gender: ["female"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Shayne Luis",
    img: "W2eVjXz.png",
    opts: {
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  
  
  
  {
    name: "Dormun Albright",
    img: "dLVj6Se.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Jaime Montilyet",
    img: "REXUBzu.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Tian Long",
    img: "6QJkL5n.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  
  
  
  {
    name: "Agent",
    img: "E9HyqUT.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  },
  {
    name: "Gizmo",
    img: "iobkMSU.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"]
    }
  },
  {
    name: "Jirachi",
    img: "oTzsnpg.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"]
    }
  },
  {
    name: "Loftaire Kuafushi",
    img: "mD9Y7vq.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"]
    }
  }
  
];
