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
  
  
  //=========================================
  //ACHY
  //=========================================
  {
    name: "Abuchi",
	bio: "Placeholder Text (600 character limit).", img: "TaM61YN.png",
	opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
    }
  },
  {
    name: "Aiko Daikazoku",
    bio: "Placeholder Text (600 character limit).", img: "gCtjDiY.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
    }
  },
  {
    name: "Chamemi Housen",
    bio: "Placeholder Text (600 character limit).", img: "h4ymhBc.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Cindy",
    bio: "Placeholder Text (600 character limit).", img: "YfsZ0dm.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kiikii",
    bio: "Placeholder Text (600 character limit).", img: "YeAGr5T.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Matarou",
    bio: "Placeholder Text (600 character limit).", img: "oOJEyuw.png",
    opts: {
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Samu",
    bio: "Placeholder Text (600 character limit).", img: "I0LWHI5.png",
    opts: {
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Seigeki",
    bio: "Placeholder Text (600 character limit).", img: "j8UxJoM.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Susugi",
    bio: "Placeholder Text (600 character limit).", img: "gdxjByH.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tatsuga",
    bio: "Placeholder Text (600 character limit).", img: "Auoe5pN.png",
    opts: {
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Yuno",
    bio: "Placeholder Text (600 character limit).", img: "kEDOCnV.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Witori Karashiro",
    bio: "Placeholder Text (600 character limit).", img: "Kx1XSOF.png",
    opts: {
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //BANANA
  //=========================================
  {
    name: "Bana 'Banana' Narama",
    bio: "Placeholder Text (600 character limit).", img: "0K0pRFx.png",
    opts: {
      owner: ["banana"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Bridgette Palmer",
    bio: "Placeholder Text (600 character limit).", img: "iMHdB8V.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Cios",
    bio: "Placeholder Text (600 character limit).", img: "efZjAzf.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Cordycep",
    bio: "Placeholder Text (600 character limit).", img: "LDopA29.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["ambig"]
    }
  },
  {
    name: "Genmi",
    bio: "Placeholder Text (600 character limit).", img: "VFpYUkz.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Kachari Hinaka",
    bio: "Placeholder Text (600 character limit).", img: "YQFOKtn.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Kiyokuro Sakakiinu",
    bio: "Placeholder Text (600 character limit).", img: "rZBfj6W.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Makigai Mabokeshigai",
    bio: "Placeholder Text (600 character limit).", img: "vM7NaoV.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mondo Ishigami",
    bio: "Placeholder Text (600 character limit).", img: "usk6Czv.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Mouru Ominaeshi",
    bio: "Placeholder Text (600 character limit).", img: "R01pmiv.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Piccolo Totanshou",
    bio: "Placeholder Text (600 character limit).", img: "P4dDGz7.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sekki",
    bio: "Placeholder Text (600 character limit).", img: "GCFnPFE.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["ambig"]
    }
  },
  {
    name: "Shangvinrú",
    bio: "Placeholder Text (600 character limit).", img: "XmshWkH.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Shuu Kongei",
    bio: "Placeholder Text (600 character limit).", img: "CnTio39.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Siine",
    bio: "Placeholder Text (600 character limit).", img: "zkc3ixB.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Susugu Kumochimono",
    bio: "Placeholder Text (600 character limit).", img: "RO3pb6c.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Traskar",
    bio: "Placeholder Text (600 character limit).", img: "Vpe906N.png",
    opts: {
      owner: ["banana"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Usue",
    bio: "Placeholder Text (600 character limit).", img: "xKoxifE.png",
    opts: {
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Hersir",
    bio: "Placeholder Text (600 character limit).", img: "A9OmdLd.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Valsir",
    bio: "Placeholder Text (600 character limit).", img: "czduBJz.png",
    opts: {
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //CONAR
  //=========================================
  {
    name: "Conar Dinn",
    bio: "Placeholder Text (600 character limit).", img: "LlyVAeu.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Justin",
    bio: "Placeholder Text (600 character limit).", img: "MSsrN3E.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kaito Dinn",
    bio: "Placeholder Text (600 character limit).", img: "Yv0Y0Ny.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kenchi Yakumo",
    bio: "Placeholder Text (600 character limit).", img: "DjGCae4.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Keomi Kyogai",
    bio: "Placeholder Text (600 character limit).", img: "FNii5Dr.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Kian Juichi",
    bio: "Placeholder Text (600 character limit).", img: "XFCt0t2.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Leanne Dinn",
    bio: "Placeholder Text (600 character limit).", img: "LNCnaXB.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Rengetsu",
    bio: "Placeholder Text (600 character limit).", img: "NUz51cw.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sus Drek",
    bio: "Placeholder Text (600 character limit).", img: "szRwvCM.png",
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
    bio: "Placeholder Text (600 character limit).", img: "Xtu7LQ3.png",
    opts: {
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tyzairo",
    bio: "Placeholder Text (600 character limit).", img: "nt9B7ti.png",
    opts: {
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //DREK
  //=========================================
  {
    name: "Charlie",
    bio: "Placeholder Text (600 character limit).", img: "Tm8lN9p.png",
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
    bio: "Placeholder Text (600 character limit).", img: "4pl4Den.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Kyuuko Memoto",
    bio: "Placeholder Text (600 character limit).", img: "h853kHj.png",
    opts: {
      owner: ["drek"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Nesthaar",
    bio: "Placeholder Text (600 character limit).", img: "ahVChuP.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Raylan",
    bio: "Placeholder Text (600 character limit).", img: "W5nDZFN.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Zathareen",
    bio: "Placeholder Text (600 character limit).", img: "glBQUC3.png",
    opts: {
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //DRUGS
  //=========================================
  /*
  {
    name: "Alastair",
    bio: "Placeholder Text (600 character limit).", img: "4G2yiXt.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Ayako",
    bio: "Placeholder Text (600 character limit).", img: "UPzzAXd.png",
    opts: {
      owner: ["drugs"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Cedric",
    bio: "Placeholder Text (600 character limit).", img: "QnGYMQT.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Drugs",
    bio: "Placeholder Text (600 character limit).", img: "CY3SyBH.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Halvan",
    bio: "Placeholder Text (600 character limit).", img: "DwrDUO3.png",
    opts: {
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Miyu Ito",
    bio: "Placeholder Text (600 character limit).", img: "1DTmm4j.png",
    opts: {
      owner: ["drugs"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  */
  
  
  //=========================================
  //GABE
  //=========================================
  {
    name: "Blaike",
    bio: "Placeholder Text (600 character limit).", img: "5HbJbu9.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Eskandar Mausomi",
    bio: "Placeholder Text (600 character limit).", img: "wkZLJWr.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Jodith",
    bio: "Placeholder Text (600 character limit).", img: "cqHIHPj.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Johan",
    bio: "Placeholder Text (600 character limit).", img: "UFY43Kh.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Markus",
    bio: "Placeholder Text (600 character limit).", img: "2aqk00J.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Merhan",
    bio: "Placeholder Text (600 character limit).", img: "PPdthi6.png",
    opts: {
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Roshanne Salih",
    bio: "Placeholder Text (600 character limit).", img: "yY5idAb.png",
    opts: {
      owner: ["gabe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Sapphire",
    bio: "Placeholder Text (600 character limit).", img: "ny9ofTp.png",
    opts: {
      owner: ["gabe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //GUILMON
  //=========================================
  {
    name: "Arthur",
    bio: "Placeholder Text (600 character limit).", img: "f79pKak.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"]
    }
  },
  {
    name: "Chrysalis",
    bio: "Placeholder Text (600 character limit).", img: "waD7wyk.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult", "ambig"]
    }
  },
  {
    name: "Daisuke",
    bio: "Placeholder Text (600 character limit).", img: "28XFS2K.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Dandara",
    bio: "Placeholder Text (600 character limit).", img: "LoyaLCD.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Duke",
    bio: "Placeholder Text (600 character limit).", img: "ShbjnP4.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["ambig"]
    }
  },
  {
    name: "Grace",
    bio: "Placeholder Text (600 character limit).", img: "pSSXXc3.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Grandis",
    bio: "Placeholder Text (600 character limit).", img: "gP820o4.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Guilmon",
    bio: "Placeholder Text (600 character limit).", img: "zgHHdQG.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["ambig"]
    }
  },
  {
    name: "Hawk",
    bio: "Placeholder Text (600 character limit).", img: "SSfKTGA.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Hiroyuki",
    bio: "Placeholder Text (600 character limit).", img: "S2F74xq.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Hatsudzuki no Kairyu",
    bio: "Placeholder Text (600 character limit).", img: "w3r3ya7.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Levi",
    bio: "Placeholder Text (600 character limit).", img: "VnYcwMm.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Redrin Lightclaw",
    bio: "Placeholder Text (600 character limit).", img: "ZfMTD3r.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Rei",
    bio: "Placeholder Text (600 character limit).", img: "2iUVJJH.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Takashi Reirin",
    bio: "Placeholder Text (600 character limit).", img: "nfa3aEy.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tristan",
    bio: "Placeholder Text (600 character limit).", img: "UoZUd2z.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Yuki",
    bio: "Placeholder Text (600 character limit).", img: "eZbMgys.png",
    opts: {
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //JUNKY
  //=========================================
  {
    name: "Labour - 'The MS&Y2 Artist'",
    bio: "Placeholder Text (600 character limit).", img: "pCY81uV.png",
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
    bio: "Placeholder Text (600 character limit).", img: "wrAChS4.png",
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
    bio: "Placeholder Text (600 character limit).", img: "YRsvi7l.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Jenny",
    bio: "Placeholder Text (600 character limit).", img: "2a7VhHr.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Karigou Diaz",
    bio: "Placeholder Text (600 character limit).", img: "hvVOnen.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Lola",
    bio: "Placeholder Text (600 character limit).", img: "058Y9Qo.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "The Golden Lute (Lute)",
    bio: "Placeholder Text (600 character limit).", img: "f7U60e3.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Maria",
    bio: "Placeholder Text (600 character limit).", img: "1OS7WwV.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Nobody",
    bio: "Placeholder Text (600 character limit).", img: "P0umA2y.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "The Cane of Contradiction Calamity (StaffLady)",
    bio: "Placeholder Text (600 character limit).", img: "IOuRhHp.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Suki",
    bio: "Placeholder Text (600 character limit).", img: "GBswHs5.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["ambig"]
    }
  },
  {
    name: "Sullen",
    bio: "Placeholder Text (600 character limit).", img: "KeXazMK.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"]
    }
  },
  {
    name: "Tau",
    bio: "Placeholder Text (600 character limit).", img: "zm2RGYt.png",
    opts: {
      owner: ["junky"],
	  gender: ["non"],
	  species: ["aniobj","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Toru",
    bio: "Placeholder Text (600 character limit).", img: "6xvngvE.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Wolfy",
    bio: "Placeholder Text (600 character limit).", img: "dWO4PLV.png",
    opts: {
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Work",
    bio: "Placeholder Text (600 character limit).", img: "sc5ztaO.png",
    opts: {
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["child"]
    }
  },
  
  
  //=========================================
  //LOBBY
  //=========================================
  {
    name: "Acolyte",
    bio: "Placeholder Text (600 character limit).", img: "DZfOZa0.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Annye Pihxie",
    bio: "Placeholder Text (600 character limit).", img: "GCFBTgz.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Bates Amanita",
    bio: "Placeholder Text (600 character limit).", img: "xLG1BCp.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Blob",
    bio: "Placeholder Text (600 character limit).", img: "2xohYoo.png",
    opts: {
      owner: ["lobby"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["ambig"]
    }
  },
  {
    name: "Cedrik",
    bio: "Placeholder Text (600 character limit).", img: "CbtW6KM.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Chorus Melpomene",
    bio: "Placeholder Text (600 character limit).", img: "j6nekEt.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Felix Valentine",
    bio: "Placeholder Text (600 character limit).", img: "osdaXLm.png",
    opts: {
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Kagah",
    bio: "Placeholder Text (600 character limit).", img: "OWHcMZK.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Minih",
    bio: "Placeholder Text (600 character limit).", img: "3JB0DRM.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Slime Boss",
    bio: "Placeholder Text (600 character limit).", img: "Sp7aTVh.png",
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
    bio: "Placeholder Text (600 character limit).", img: "eF9oCwM.png",
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
    bio: "Placeholder Text (600 character limit).", img: "cfglY06.png",
    opts: {
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //LYOS
  //=========================================
  {
    name: "Atikaya Alsisar",
    bio: "Placeholder Text (600 character limit).", img: "nZZ5WBk.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Denzel D'Abovile",
    bio: "Placeholder Text (600 character limit).", img: "Vau4uDv.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Sabre Dubois",
    bio: "Placeholder Text (600 character limit).", img: "TZAOM7a.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Zacharie LeBlanc",
    bio: "Placeholder Text (600 character limit).", img: "f8kpy2h.png",
    opts: {
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //MEOWSTIC
  //=========================================
  {
    name: "Ava",
    bio: "Placeholder Text (600 character limit).", img: "LyP0MkK.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Vera Dariyev",
    bio: "Placeholder Text (600 character limit).", img: "T260itK.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Marzia Mondadori",
    bio: "Placeholder Text (600 character limit).", img: "wCD0wz5.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mamoru 'Meowstic' Iwasaki",
    bio: "Placeholder Text (600 character limit).", img: "vqhcukK.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Merrick Octans",
    bio: "Placeholder Text (600 character limit).", img: "QyIimVg.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Muri",
    bio: "Placeholder Text (600 character limit).", img: "3o69sgl.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Nashirah 'Nash' bint al-nassaaj bint ʼinsāniyya al-Fārisī",
    bio: "Placeholder Text (600 character limit).", img: "4RwGF9I.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["furry"],
	  age: ["adult"]
    }
  },
  {
    name: "Ercan 'Pigsy' Zorlu",
    bio: "Placeholder Text (600 character limit).", img: "YD0VIUu.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["furry"],
	  age: ["adult"]
    }
  },
  {
    name: "Ellinor Vennesland",
    bio: "Placeholder Text (600 character limit).", img: "CIPbfqu.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Heinrich 'Rico' Viktor von Löwenthal",
    bio: "Placeholder Text (600 character limit).", img: "KO0Ve2j.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Tasia Vlahakis",
    bio: "Placeholder Text (600 character limit).", img: "csAEiqh.png",
    opts: {
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //MIRANSU
  //=========================================
  {
    name: "Alice",
    bio: "Placeholder Text (600 character limit).", img: "30gsGWk.png",
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
    bio: "Placeholder Text (600 character limit).", img: "2OI61if.png",
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
    bio: "Placeholder Text (600 character limit).", img: "xy4OWOa.png",
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
    bio: "Placeholder Text (600 character limit).", img: "eFuPrf9.png",
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
    bio: "Placeholder Text (600 character limit).", img: "IP2Zwo6.png",
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
    bio: "Placeholder Text (600 character limit).", img: "mMoLA0w.png",
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
    bio: "Placeholder Text (600 character limit).", img: "GuvjhHw.png",
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
    bio: "Placeholder Text (600 character limit).", img: "aA4B96D.png",
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
    bio: "Placeholder Text (600 character limit).", img: "yjSZp7Q.png",
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
    bio: "Placeholder Text (600 character limit).", img: "No4U1Tq.png",
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
    bio: "Placeholder Text (600 character limit).", img: "mg6LreE.png",
    opts: {
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child","ambig"],
	  legacy: []
    }
  },
  
  
  //=========================================
  //PHANTOM
  //=========================================
  {
    name: "Alex",
    bio: "Placeholder Text (600 character limit).", img: "rWKhplB.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Jess",
    bio: "Placeholder Text (600 character limit).", img: "htbTzJk.png",
    opts: {
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Lucius",
    bio: "Placeholder Text (600 character limit).", img: "9RjThHf.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Orion",
    bio: "Placeholder Text (600 character limit).", img: "gumhPox.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Phantom",
    bio: "Placeholder Text (600 character limit).", img: "StO0fGy.png",
    opts: {
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sayuri",
    bio: "Placeholder Text (600 character limit).", img: "YEf0v7b.png",
    opts: {
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //PYTHON
  //=========================================
  {
    name: "Apateonas",
    bio: "Placeholder Text (600 character limit).", img: "xPhIGKW.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Camelan Haimaku",
    bio: "Placeholder Text (600 character limit).", img: "dlJqrS0.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Chikuji Toutetsu",
    bio: "Placeholder Text (600 character limit).", img: "NCbcsRa.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Chiyo Yamanaka",
    bio: "Placeholder Text (600 character limit).", img: "v3Oc35Z.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Cisa Perlach Augusta",
    bio: "Placeholder Text (600 character limit).", img: "6Y0qZ1X.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Dr. Bees",
    bio: "Placeholder Text (600 character limit).", img: "4mrzZ6I.png",
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
    bio: "Placeholder Text (600 character limit).", img: "tYv3mVg.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Hironishi Kyogetsuin",
    bio: "Placeholder Text (600 character limit).", img: "s3GcI2Y.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Itsuyo Nukimoto",
    bio: "Placeholder Text (600 character limit).", img: "axQcc1s.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Kiju Sanadamushi",
    bio: "Placeholder Text (600 character limit).", img: "LWlb6Yt.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kotobuki In'un",
    bio: "Placeholder Text (600 character limit).", img: "vpakJVL.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kyra Gialla Osram",
    bio: "Placeholder Text (600 character limit).", img: "KObtvPi.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Frederica Lissai",
    bio: "Placeholder Text (600 character limit).", img: "iiiC17K.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult", "ambig"]
    }
  },
  {
    name: "Lucienne von Burgund",
    bio: "Placeholder Text (600 character limit).", img: "jkkCAGv.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Ma Sekisei",
    bio: "Placeholder Text (600 character limit).", img: "nUF2zGE.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Manozeen",
    bio: "Placeholder Text (600 character limit).", img: "fetne77.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mephistopheles",
    bio: "Placeholder Text (600 character limit).", img: "M6eXUU4.png",
    opts: {
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Ryoumika Soukun",
    bio: "Placeholder Text (600 character limit).", img: "SpC3zaa.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sanko Hakuchou",
    bio: "Placeholder Text (600 character limit).", img: "6ImSUAU.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Shiromi Sadamoto",
    bio: "Placeholder Text (600 character limit).", img: "wrLVb4r.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "SLUG",
    bio: "Placeholder Text (600 character limit).", img: "K1ahXYt.png",
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
    bio: "Placeholder Text (600 character limit).", img: "SWt3LdN.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tazue Teidarou",
    bio: "Placeholder Text (600 character limit).", img: "0ZqmUWz.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Theliea",
    bio: "Placeholder Text (600 character limit).", img: "phV9vJe.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Tomino Daiemon",
    bio: "Placeholder Text (600 character limit).", img: "5nO44Sr.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Tsushima",
    bio: "Placeholder Text (600 character limit).", img: "sDZAyLe.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Urara Ukiyanagi",
    bio: "Placeholder Text (600 character limit).", img: "rPT9rb4.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Viivi von Xanten",
    bio: "Placeholder Text (600 character limit).", img: "ObCg0NN.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Waluigi",
    bio: "Placeholder Text (600 character limit).", img: "UIMgZOw.png",
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
    bio: "Placeholder Text (600 character limit).", img: "ymQuTF2.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Youka Hinejuu",
    bio: "Placeholder Text (600 character limit).", img: "jg2jEUU.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Zika Parasite",
    bio: "Placeholder Text (600 character limit).", img: "SDypHCO.png",
    opts: {
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"]
    }
  },
  
  
  //=========================================
  //ROBIN
  //=========================================
  {
    name: "Croire",
    bio: "Placeholder Text (600 character limit).", img: "qkypfpe.png",
    opts: {
      owner: ["robin"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["child"]
    }
  },
  {
    name: "Edelweiss",
    bio: "Placeholder Text (600 character limit).", img: "pq8WfNr.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Hikaru",
    bio: "Placeholder Text (600 character limit).", img: "FrbrRKK.png",
    opts: {
      owner: ["robin"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Irisu Sakazuki",
    bio: "Placeholder Text (600 character limit).", img: "tx5uw1U.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"]
    }
  },
  {
    name: "Noah Amenohara",
    bio: "Placeholder Text (600 character limit).", img: "N9L2wW5.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Robin",
    bio: "Placeholder Text (600 character limit).", img: "PkpBRco.png",
    opts: {
      owner: ["robin"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Sophie",
    bio: "Placeholder Text (600 character limit).", img: "jvzm3Pv.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Tohru",
    bio: "Placeholder Text (600 character limit).", img: "Hw8pbJb.png",
    opts: {
      owner: ["robin"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Valentine",
    bio: "Placeholder Text (600 character limit).", img: "EQ4WnHC.png",
    opts: {
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //SPHE
  //=========================================
  {
    name: "Chionne",
    bio: "Placeholder Text (600 character limit).", img: "ZjSCqbe.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Lunesta",
    bio: "Placeholder Text (600 character limit).", img: "8T9WBT0.png",
    opts: {
      owner: ["sphe"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Muna",
    bio: "Placeholder Text (600 character limit).", img: "WvKmSaM.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "MunaBot",
    bio: "Placeholder Text (600 character limit).", img: "zfr6XPj.png",
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
    bio: "Placeholder Text (600 character limit).", img: "BisLG8e.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Renée",
    bio: "Placeholder Text (600 character limit).", img: "zcTMi5o.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Sandra Oikaze",
    bio: "Placeholder Text (600 character limit).", img: "zi6fE2C.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Sarah Oikaze",
    bio: "Placeholder Text (600 character limit).", img: "8z4Swt4.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Theresa",
    bio: "Placeholder Text (600 character limit).", img: "w24dzO9.png",
    opts: {
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //SYOUDRE
  //=========================================
  {
    name: "Gao Kurosagane",
    bio: "Seth's adoptive father."+
	" Approachable and direct Luxray who takes things unnecessarily seriously."+
	" He's usually holed up in his room doing an indoor investigation about how he and his family got into Gensokyo, catching him outside his room usually means he's taking a break."+
	" He's addicted to coffee that helps him stay up to do his work. Someone help him he might get very palpitated.", img: "GVqhijf.png",
    opts: {
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Gibor Lazarus",
    bio: "Seth's uncle figure."+
	" Direct and aggressive lion who doesn't have a high opinion with regards to humans or human-adjacents."+
	" He doesn't understand fully how magic works and functions, making him a little held back in Gensokyo given majority are magic-users."+
	" He might call a human a slur. Gays DNI if he's drunk.", img: "RYxYC9S.png",
		opts: {
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Seth Victor Kurosagane",
    bio: "Most Bullyable Red Mage in Existence." +
	" Overly friendly (and naive) wolf who finds Gensokyo and its people really fascinating, Outsiders or Locals." +
	" He gathers herbs for Annye to repay for the staff he owned, but also does it as a way to explore around Gensokyo." +
	" His red mage outfit is just for cosplay originally.", img: "Jpm7Ur9.png",
    opts: {
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //TRES
  //=========================================
  {
    name: "Juro",
    bio: "Placeholder Text (600 character limit).", img: "zpvpYZC.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kinoko",
    bio: "Placeholder Text (600 character limit).", img: "DmChAKX.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mary",
    bio: "Placeholder Text (600 character limit).", img: "qU7qWmU.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"]
    }
  },
  {
    name: "Matsu",
    bio: "Placeholder Text (600 character limit).", img: "sWTHcuM.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Minami",
    bio: "Placeholder Text (600 character limit).", img: "Z2uUQJs.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"]
    }
  },
  {
    name: "Qielan-Yu",
    bio: "Placeholder Text (600 character limit).", img: "kiXmtVU.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Ramiel",
    bio: "Placeholder Text (600 character limit).", img: "GPuzjzv.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tori",
    bio: "Placeholder Text (600 character limit).", img: "8JADOhM.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tres",
    bio: "Placeholder Text (600 character limit).", img: "IhxIQkb.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Uriel",
    bio: "Placeholder Text (600 character limit).", img: "4kEo2ra.png",
    opts: {
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Yoneka",
    bio: "Placeholder Text (600 character limit).", img: "J9lJQdq.png",
    opts: {
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //TRICKY
  //=========================================
  {
    name: "Ashley Lightman",
    bio: "Placeholder Text (600 character limit).", img: "A07c38f.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Cole Lightman",
    bio: "Placeholder Text (600 character limit).", img: "o0WLHiz.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Elithabes Schäfer",
    bio: "Placeholder Text (600 character limit).", img: "isL9jzq.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Gabriella 'Gabby' Berger",
    bio: "Placeholder Text (600 character limit).", img: "WQ8r7gU.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Hunrios Pathcrafter",
    bio: "Placeholder Text (600 character limit).", img: "eI98ysW.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Ichiyu",
    bio: "Placeholder Text (600 character limit).", img: "Z4JqcwQ.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Kikyo",
    bio: "Placeholder Text (600 character limit).", img: "aNPQ9gp.png",
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
    bio: "Placeholder Text (600 character limit).", img: "9UaoRzt.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["child"]
    }
  },
  {
    name: "Kosuke Suzukaze",
    bio: "Placeholder Text (600 character limit).", img: "hhPdvuM.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Mr Signykins",
    bio: "Placeholder Text (600 character limit).", img: "S2kBlF0.png",
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
    bio: "Placeholder Text (600 character limit).", img: "rFVo4gY.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Niyu",
    bio: "Placeholder Text (600 character limit).", img: "I32q9ds.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Oliver",
    bio: "Placeholder Text (600 character limit).", img: "cMBWBBw.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Penny Cillum",
    bio: "Placeholder Text (600 character limit).", img: "UvSI58k.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"]
    }
  },
  {
    name: "Ryoutarou Kiriya",
    bio: "Placeholder Text (600 character limit).", img: "f1lWCk0.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Sanyu",
    bio: "Placeholder Text (600 character limit).", img: "oaawBMr.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Shokora",
    bio: "Placeholder Text (600 character limit).", img: "MKogqNr.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Shuu",
    bio: "Placeholder Text (600 character limit).", img: "kdY1d2h.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"]
    }
  },
  {
    name: "Tooru Uei",
    bio: "Placeholder Text (600 character limit).", img: "BPxN0Js.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Tutorial Tracy",
    bio: "Placeholder Text (600 character limit).", img: "7rAks17.png",
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
    bio: "Placeholder Text (600 character limit).", img: "4uP3Wil.png",
    opts: {
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Wylda Walcott",
    bio: "Placeholder Text (600 character limit).", img: "IbVAmFM.png",
    opts: {
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //VEEMON
  //=========================================
  {
    name: "Myonu",
    bio: "Placeholder Text (600 character limit).", img: "WYJ2VhR.png",
    opts: {
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"]
    }
  },
  {
    name: "Stanley",
    bio: "Placeholder Text (600 character limit).", img: "cbqxqMf.png",
    opts: {
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Veemon",
    bio: "Placeholder Text (600 character limit).", img: "IgM3NC9.png",
    opts: {
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  
  
  //=========================================
  //VIGOR
  //=========================================
  {
    name: "Ariel Zaccaria",
    bio: "Placeholder Text (600 character limit).", img: "5QFR1mZ.png",
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
    bio: "Placeholder Text (600 character limit).", img: "HnDNDl5.png",
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
    bio: "Placeholder Text (600 character limit).", img: "9I5aRgY.png",
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
    bio: "Placeholder Text (600 character limit).", img: "W2eVjXz.png",
    opts: {
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  legacy: []
    }
  },
  
  
  //=========================================
  //ZACK
  //=========================================
  {
    name: "Dormun Albright",
    bio: "Placeholder Text (600 character limit).", img: "dLVj6Se.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Jaime Montilyet",
    bio: "Placeholder Text (600 character limit).", img: "REXUBzu.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Tian Long",
    bio: "Placeholder Text (600 character limit).", img: "6QJkL5n.png",
    opts: {
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //WISH
  //=========================================
  {
    name: "Jirachi",
    bio: "Placeholder Text (600 character limit).", img: "DowggQS.png",
    opts: {
      owner: ["wish"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"]
    }
  },
  {
    name: "Meema",
    bio: "Placeholder Text (600 character limit).", img: "Og1G685.png",
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
    bio: "Placeholder Text (600 character limit).", img: "7Jh8UDq.png",
    opts: {
      owner: ["wish"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  
  
  //=========================================
  //OTHERS
  //=========================================
  {
    name: "Agent",
    bio: "Placeholder Text (600 character limit).", img: "E9HyqUT.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Asahi",
    bio: "Placeholder Text (600 character limit).", img: "l0OE50o.png",
    opts: {
      owner: ["others"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Badz",
    bio: "Placeholder Text (600 character limit).", img: "LuztfiW.png",
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
    bio: "Placeholder Text (600 character limit).", img: "iobkMSU.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  }, 
  {
    name: "Loftaire Kuafushi",
    bio: "Placeholder Text (600 character limit).", img: "mD9Y7vq.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"]
    }
  },
  {
    name: "Medjed",
    bio: "Placeholder Text (600 character limit).", img: "qskh3Yy.png",
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
    bio: "Placeholder Text (600 character limit).", img: "ezv1X3g.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Training Dummy",
    bio: "Placeholder Text (600 character limit).", img: "RHbz1x9.png",
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
    bio: "Placeholder Text (600 character limit).", img: "1Vo6sW6.png",
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
    bio: "Placeholder Text (600 character limit).", img: "SRtPexY.png",
    opts: {
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"]
    }
  },
  {
    name: "Yuugen",
    bio: "Placeholder Text (600 character limit).", img: "LntgMRp.png",
    opts: {
      owner: ["others"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  legacy: []
    }
  },
  
];
