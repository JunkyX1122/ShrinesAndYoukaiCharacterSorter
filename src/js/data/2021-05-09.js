dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Owner",
    key: "owner",
    tooltip: "Check this to restrict to certain OC owners.",
    checked: false,
    sub: [
      { name: "Achy", key: "achy" ,checked: true},
	  { name: "Banana", key: "banana" ,checked: true},
	  { name: "Conar", key: "conar" ,checked: true},
	  { name: "Drek", key: "drek" ,checked: true},
	  //{ name: "Drugs", key: "drugs" ,checked: true},
	  { name: "Gabe", key: "gabe" ,checked: true},
	  { name: "Guilmon", key: "guilmon" ,checked: true},
	  { name: "Junky", key: "junky" ,checked: true},
	  { name: "Lobby", key: "lobby" ,checked: true},
	  { name: "Lyos", key: "lyos" ,checked: true},
	  { name: "Meowstic", key: "meowstic" ,checked: true},
	  { name: "Miransu", key: "miransu" ,checked: true},
	  { name: "Phantom", key: "phantom" ,checked: true},
	  { name: "Python", key: "python" ,checked: true},
	  { name: "Robin", key: "robin" ,checked: true},
	  { name: "Sphe", key: "sphe" ,checked: true},
	  { name: "Syoudre", key: "syoudre" ,checked: true},
	  { name: "Tres", key: "tres" ,checked: true},
	  { name: "Tricky", key: "tricky" ,checked: true},
	  { name: "Veemon", key: "veemon" ,checked: true},
	  { name: "Vigor", key: "vigor" ,checked: true},
	  { name: "Wish", key: "wish" ,checked: true},
	  { name: "Zack", key: "zack" ,checked: true},
	  { name: "Assorted Others", key: "others" ,checked: true}
	  

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
    tooltip: "Check this to restrict to adults/children.",
    checked: false,
    sub: [
      { name: "Adults", tooltip: "Without a shadow of a doubt an adult (18+).", key: "adult" },
	  { name: "Young'ns", tooltip: "Without a shadow of a doubt a child (minor).", key: "child" },
	  { name: "Ambiguous", tooltip: "Each OC has a guess, however I'm not perfect and if you don't want to deal with ambiguity, turn this off.", key: "ambig" }
    ]
  },
  {
    name: "Ignore Generic Enemies",
    key: "generic",
    tooltip: "Ignore generic enemies.",
    checked: false
  },
  {
    name: "Ignore Unrevealed Characters",
    key: "hidden",
    tooltip: "Ignore characters that have not been revealed yet (blacked-out characters).",
    checked: false
  },
  {
    name: "Ignore Legacy Characters",
    key: "legacy",
    tooltip: "Ignore characters from owners who no longer are in Shrines and Youkai.",
    checked: false
  },
  {
    name: "Ignore Non-RP Characters",
    key: "nonrp",
    tooltip: "Ignore characters that don't show up in the roleplay universe.",
    checked: false
  },
  {
    name: "Ignore Joke Characters",
    key: "joke",
    tooltip: "Ignore the funnies.",
    checked: false
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
	  age: ["adult"],
    }
  },
  {
    name: "Aiko Daikazoku",
    img: "gCtjDiY.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
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
    name: "Kiikii",
    img: "YeAGr5T.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Matarou",
    img: "oOJEyuw.png",
    opts: {
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Samu",
    img: "I0LWHI5.png",
    opts: {
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
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
    name: "Susugi",
    img: "gdxjByH.png",
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
    name: "Witori Karashiro",
    img: "Kx1XSOF.png",
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
    name: "Cios",
    img: "efZjAzf.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Cordycep",
    img: "LDopA29.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
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
    name: "Kiyokuro Sakakiinu",
    img: "rZBfj6W.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Makigai Mabokeshigai",
    img: "vM7NaoV.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
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
    name: "Piccolo Totanshou",
    img: "P4dDGz7.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sekki",
    img: "GCFnPFE.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Shangvinrú",
    img: "XmshWkH.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Shuu Kongei",
    img: "CnTio39.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
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
    name: "Susugu Kumochimono",
    img: "RO3pb6c.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Traskar",
    img: "Vpe906N.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
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
    name: "Valsir",
    img: "czduBJz.png",
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
    name: "Leanne Dinn",
    img: "LNCnaXB.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
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
    name: "Sus Drek",
    img: "szRwvCM.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["furry"],
	  age: ["adult"],
	  nonrp: [],
	  joke: []
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
    name: "Tyzairo",
    img: "nt9B7ti.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
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
	  age: ["adult","ambig"],
	  joke: []
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
    name: "Kyuuko Memoto",
    img: "h853kHj.png",
    opts: {
      owner: ["drek"],
	  gender: ["female"],
	  species: ["humanoid"],
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
	  age: ["adult"]
    }
  },
  {
    name: "Raylan",
    img: "W5nDZFN.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Zathareen",
    img: "glBQUC3.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  /*
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
    name: "Ayako",
    img: "UPzzAXd.png",
    opts: {
      owner: ["drugs"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Cedric",
    img: "QnGYMQT.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["aniobj"],
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
    name: "Halvan",
    img: "DwrDUO3.png",
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
  */
  
  
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
    name: "Eskandar Mausomi",
    img: "wkZLJWr.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Jodith",
    img: "cqHIHPj.png",
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
    name: "Roshanne Salih",
    img: "yY5idAb.png",
    opts: {
      owner: ["gabe"],
	  gender: ["female"],
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
    name: "Arthur",
    img: "f79pKak.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"]
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
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Dandara",
    img: "LoyaLCD.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
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
    name: "Grace",
    img: "pSSXXc3.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["pokedigi"],
	  age: ["adult"]
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
    name: "Levi",
    img: "VnYcwMm.png",
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
    name: "Takashi Reirin",
    img: "nfa3aEy.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
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
    name: "Yuki",
    img: "eZbMgys.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  

  {
    name: "Labour - 'The MS&Y2 Artist'",
    img: "pCY81uV.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  nonrp: []
    }
  },
  {
    name: "Earl",
    img: "wrAChS4.png",
    opts: {
      owner: ["junky"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["adult"],
	  nonrp: [],
	  joke: []
    }
  },
  {
    name: "'dAU6' Zimmer",
    img: "YRsvi7l.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
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
    name: "Kagah",
    img: "OWHcMZK.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Minih",
    img: "3JB0DRM.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Slime Boss",
    img: "Sp7aTVh.png",
    opts: {
      owner: ["lobby"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["ambig"],
	  generic: []
    }
  },
  {
    name: "Slime Girl",
    img: "eF9oCwM.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female","non"],
	  species: ["humanoid"],
	  age: ["ambig"],
	  generic: []
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
    name: "??? (BlueBird)",
    img: "T260itK.png",
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
    name: "??? (Smile)",
    img: "0vGlJPw.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  hidden: []
    }
  },
  {
    name: "Nashirah 'Nash' bint al-nassaaj bint ʼinsāniyya al-Fārisī",
    img: "4RwGF9I.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["furry"],
	  age: ["adult"]
    }
  },
  {
    name: "Ercan 'Pigsy' Zorlu",
    img: "YD0VIUu.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["furry"],
	  age: ["adult"]
    }
  },
  {
    name: "??? (Darker)",
    img: "tnuUqFi.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  hidden: []
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
    name: "Tasia",
    img: "csAEiqh.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  
  {
    name: "Alice",
    img: "30gsGWk.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj", "pokedigi"],
	  age: ["child"],
	  legacy: []
    }
  },
  {
    name: "Altwilder",
    img: "2OI61if.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  legacy: []
    }
  },
  {
    name: "Dormarah",
    img: "xy4OWOa.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["ambig"],
	  legacy: []
    }
  },
  {
    name: "Hikawa Motoharu",
    img: "eFuPrf9.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  legacy: []
    }
  },
  {
    name: "Kureha Iwakura",
    img: "IP2Zwo6.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["aniobj","pokedigi"],
	  age: ["adult","ambig"],
	  legacy: []
    }
  },
  {
    name: "Kuro",
    img: "mMoLA0w.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["ambig"],
	  legacy: []
    }
  },
  {
    name: "Misaki",
    img: "GuvjhHw.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult"],
	  legacy: []
    }
  },
  {
    name: "Mitsuru",
    img: "aA4B96D.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"],
	  legacy: []
    }
  },
  {
    name: "Susuki Iwasaki",
    img: "yjSZp7Q.png",
    opts: {
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj","pokedigi"],
	  age: ["adult"],
	  legacy: []
    }
  },
  {
    name: "Tsukasa",
    img: "No4U1Tq.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult","ambig"],
	  legacy: []
    }
  },
  {
    name: "Yuuki 'Yukiharu' Iwasaki",
    img: "mg6LreE.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child","ambig"],
	  legacy: []
    }
  },
  
  
  
  {
    name: "Alex",
    img: "rWKhplB.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
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
    name: "Apateonas",
    img: "xPhIGKW.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["aniobj"],
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
	  age: ["adult"],
	  joke: []
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
    name: "Hironishi Kyogetsuin",
    img: "s3GcI2Y.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Itsuyo Nukimoto",
    img: "axQcc1s.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Kiju Sanadamushi",
    img: "LWlb6Yt.png",
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
    name: "Kyra Gialla Osram",
    img: "KObtvPi.png",
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
    name: "Lucienne von Burgund",
    img: "jkkCAGv.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
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
    img: "SpC3zaa.png",
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
    name: "Shiromi Sadamoto",
    img: "wrLVb4r.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "SLUG",
    img: "K1ahXYt.png",
    opts: {
      owner: ["python"],
	  gender: ["non"],
	  species: ["humanoid"],
	  age: ["ambig"],
	  generic: []
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
    name: "Tomino Daiemon",
    img: "5nO44Sr.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
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
	  age: ["adult"],
	  joke: []
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
    name: "Edelweiss",
    img: "pq8WfNr.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
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
    name: "Tohru",
    img: "Hw8pbJb.png",
    opts: {
      owner: ["robin"],
	  gender: ["male"],
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
    name: "Muna",
    img: "WvKmSaM.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "MunaBot",
    img: "zfr6XPj.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  nonrp: []
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
    name: "Gao Kurosagane",
    img: "GVqhijf.png",
    opts: {
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Gibor Lazarus",
    img: "RYxYC9S.png",
    opts: {
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Seth Victor Kurosagane",
    img: "Jpm7Ur9.png",
    opts: {
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
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
    name: "Ramiel",
    img: "GPuzjzv.png",
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
    name: "Uriel",
    img: "4kEo2ra.png",
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
	  age: ["adult"]
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
    name: "Elithabes Schäfer",
    img: "isL9jzq.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Gabriella 'Gabby' Berger",
    img: "WQ8r7gU.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Hunrios Pathcrafter",
    img: "eI98ysW.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Ichiyu",
    img: "Z4JqcwQ.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kikyo",
    img: "aNPQ9gp.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  joke: []
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
    name: "Mr Signykins",
    img: "S2kBlF0.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  joke: []
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
    name: "Niyu",
    img: "I32q9ds.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
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
    name: "Ryoutarou Kiriya",
    img: "f1lWCk0.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Sanyu",
    img: "oaawBMr.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
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
    name: "Tutorial Tracy",
    img: "7rAks17.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  nonrp: []
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
    name: "Stanley",
    img: "cbqxqMf.png",
    opts: {
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
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
	  age: ["adult"],
	  legacy: []
    }
  },
  {
    name: "William 'Illia' Winton",
    img: "HnDNDl5.png",
    opts: {
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"],
	  legacy: []
    }
  },
  {
    name: "Shannon Aghaveagh",
    img: "9I5aRgY.png",
    opts: {
      owner: ["vigor"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  legacy: []
    }
  },
  {
    name: "Shayne Luis",
    img: "W2eVjXz.png",
    opts: {
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  legacy: []
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
    name: "Jirachi",
    img: "DowggQS.png",
    opts: {
      owner: ["wish"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Meema",
    img: "Og1G685.png",
    opts: {
      owner: ["wish"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  nonrp: []
    }
  },
  {
    name: "Philia",
    img: "7Jh8UDq.png",
    opts: {
      owner: ["wish"],
	  gender: ["female"],
	  species: ["humanoid"],
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
    name: "Asahi",
    img: "l0OE50o.png",
    opts: {
      owner: ["others"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Badz",
    img: "LuztfiW.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  legacy: []
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
    name: "Loftaire Kuafushi",
    img: "mD9Y7vq.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mejed",
    img: "qskh3Yy.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  joke: []
    }
  },
  {
    name: "Mercury",
    img: "ezv1X3g.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Training Dummy",
    img: "RHbz1x9.png",
    opts: {
      owner: ["others"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["ambig"],
	  generic: []
    }
  },
  {
    name: "Umbra",
    img: "1Vo6sW6.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["furry"],
	  age: ["adult"],
	  legacy: []
    }
  },
  {
    name: "Van",
    img: "SRtPexY.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Yuugen",
    img: "LntgMRp.png",
    opts: {
      owner: ["others"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  legacy: []
    }
  },
  
];
