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
	  { name: "Hat", key: "hat" ,checked: true},
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
	  { name: "Assorted Others", key: "others" ,checked: true},

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
    name: "Filter by Pack",
    key: "pack",
    tooltip: "Check this to restrict based on when the art for that character was finished.",
    checked: true,
    sub: [
	  { name: "Classic Pack", tooltip: "Relive the classic Python MS&Y experience.", key: "pc", checked: false },
      { name: "Pack 1", tooltip: "Characters from Pack 1.", key: "p1", checked: true },
	  { name: "Pack 2", tooltip: "Characters from Pack 2.", key: "p2", checked: true },
	  { name: "Pack 3", tooltip: "Characters from Pack 3.", key: "p3", checked: true },
	  { name: "Pack 4", tooltip: "Characters from Pack 4.", key: "p4", checked: true },
	  { name: "Pack 5", tooltip: "Characters and alternate forms from Pack 5.", key: "p5" }
    ]
  },
  {
    name: "Filter by S&Y-Relativity (Ignore this if you are here for S&Y only)",
    key: "snytest",
    tooltip: "Toggles the inclusion of characters on if they are related to S&Y at all. Ignore this if you only want S&Y characters to sort.",
    checked: true,
    sub: [
      { name: "S&Y", key: "sny", tooltip: "This character is from S&Y specifically (or part of the main MS&Y2 set).", checked: true},
	  { name: "Junky Extra", key: "junkyex", tooltip: "Junky's non S&Y OCs.", checked: false},
    ]
  },
  {
    name: "Ignore Alternate Forms",
    key: "altform",
    tooltip: "Ignore alternate forms of characters within the sorter.",
    checked: false
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
	bio: "Abuchi is a vulture from a far-off land. She once sang a song of mercy to the sky, pleading to end the suffering of man caused by a drought. The sky was moved to tears and rain came. Her voice reaches the ears of heaven, granting her pleas, though vultures are not known for their vocal talent. Abuchi calls out looking for a mate, listening for her song to be repeated back to her, but she might be one of a kind. So long as you aren't already dead, Abuchi will sing for your survival, which is to her detriment as a carrion eater, but much appricated unlike her singing.", 
	img: "TaM61YN.png",
	opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Aiko Daikazoku",
    bio: "Creator of beloved characters such as 'Strawberry Kirisame', the human teenage girl Aiko has a thing for writing fan-fiction about popular people. She ships...inventive couples, which includes thinking up fictional children for them. She will act out her creations in real life to suit her desires. Her acts go beyond just cosplay, she can change who her parents are. This doesn't change history, but she literally can become a love child of any two beings. She's most proud of her writing and her ability, but can't freely express the latter. She has Chirper accounts for all her characters.", 
	img: "gCtjDiY.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p2"]
    }
  },
  {
    name: "Chamemi Housen",
    bio: "A mysterious airy woman with a far-off look in her eye who steals from the rich and gives to the poor. She trains in the Forest of Magic, setting up traps and practicing tricks with her gadgets. Chamemi leaves monetary compensation tied to each of her pranks, another form of helping the poor, said poor being the ones pranked. She sometimes laughs to herself for seemingly no reason. She states her ability to be 'the ability to see the truth', perhaps that's related? She seems to like conspiracies.", 
	img: "h4ymhBc.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Cindy",
    bio: "Cindy is someone of elegant demeanor and regal taste, which is strange as she is actually an Akaname. She's unbothered by cleanliness, but she does prefer filth and fancy together. After being chased out of town, she found her own little paradise and gained the power to make mirages. She returned to the Human Village guised as a beautiful human woman, fearing her true appearance, having been called ugly by even her own kind. Seeking better social standing for her species as a whole, she likes to be thought of as a head maid. Her still-secret cleaning team is in it for the free food for now.", 
	img: "YfsZ0dm.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Kiikii",
    bio: "The dangerously sheltered daughter of an executioner, her innocence was ferociously protected by her father, wanting her to live a life without facing stigma. To her, his torture devices are just toys. She was turned into a Youkai as punishment for the pain she caused. Being told that the pain she caused is bad, Kiikii wanted to be good and learned to manipulate it so she could prevent physical pain...but she didn't change her behavior. Seeing her face causes a blackout-inducing migraine, removing the memory of it. It's pain she can't prevent, so she hates her face and wears a paper bag.", 
	img: "YeAGr5T.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Matarou",
    bio: "Matarou is tough, but gentle and very sentimental. He has practice restraining from crying to avoid being taken advantage of. Due to his nature as a Samebito, when he does cry, his tears become golden pearls. Matarou has manipulation of texture, but whether or not his skin was smooth beforehand is unknown. His hobby is collecting beach glass using his good eyesight, and he makes jewelery from them to make money rather than sew like is usual of his species. One poke from a needle was enough for him. Him and his boyfriend Samu are currently vacationing in Gensoukyou. He enjoys headpats.", 
	img: "oOJEyuw.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Samu",
    bio: "The cute cuddly, huggable wholesome, friendly flexible Samu, that's him! His self-descriptions are fairly accurate. Samu is a descendant of the Ainu god Repun-Kamuy, tasked with keeping the giant octopus Atkor-Kamuy from rampaging. Samu's red color and ability over elasticity comes from draining the creatures power to weaken it. Samu also rescues anyone struggling in the water. Through inherited oceanic powers, he can sense trouble in the water from quite a distance. Him and his boyfriend Matarou are currently vacationing in Gensoukyou. Samu only refers to Matarou as his good friend in public.", 
	img: "I0LWHI5.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Seigeki",
    bio: "Is that a shooting star? No, it's Seigeki burning up in re-entry after not quite making it out of the atmosphere. Seigeki is a haniwa of aerodynamic shape with rocket boots who can launch things, like herself. When not trying to escape gravity, she does freelance guard duty at various graveyards. She seems to looking for a sweetspot of launch force, enough to break free, but not enough to break her. Thankfully Seigeki can pull herself back together and use energy to heal the cracks away. Seigeki has a tendency to make strange noises and loves wordplay. Her mimicing ability is also uncanny. ", 
	img: "j8UxJoM.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Susugi",
    bio: "Susugi has a problem with humans. Not only do they take more than they need, but on top of that, they installed her upside-down, making her a Sakabashira. She spitefully gained the power to stop tasks from being finished properly, and can swap with other pillars to get around. Her goal is to fight wasted lumber by inviting more (usually unwelcome) guests into homes. Many animals share one tree together, why can't humans? She can be dramatic, causing house-wide commotion with woe-is-me wails and righteous anger. She insults with harsh but misused words. Don't get her started on Christmas trees.", 
	img: "gdxjByH.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Tatsuga",
    bio: "If you're in need of supplies for roughing it, you're in luck, you can find them at Tatsuga's shop. For those looking for less intense outings in nature, he also sells camping supplies. His Trail mix is a popular buy. His cartography is one of a kind. Not only is he good at map making, but with the ability to make and alter paths, he includes shortcuts he's made himself. What is Tatsuga exactly? Once could call him a Naga, but he seems a bit different. Though humans would benefit the most from his supplies, he doesn't get many of them as customers for obvious reasons.", 
	img: "Auoe5pN.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Yuno",
    bio: "As a Raijuu, Yuno has a higher risk of vanishing than other Youkai in Gensoukyou due to advancements. To combat this, she has put herself out there and is as authentic as she can be. She makes no attempt to hide her nature and goes into Human spaces to remind them she's here. Thankfully, she's usually pretty chill, and isn't dangerous unless there's a thunderstorm. She prefers respect over fear. Yuno dances and dresses in vogue style. Her temperament means she doesn't get along well with traditional thunder gods, so she works for the child of Raijin, who is open-minded and more with the times.", 
	img: "kEDOCnV.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Witori Karashiro",
    bio: "The mastermind of an incident noticed a rumor and put stolen light into it to have Witori realized early. She was one of Aiko's characters Aiko played out. Witori rejected the writing for her in regards to the Kawashiros and changed her surname. She was written to have amnesia, but there were no family memories to remember. As thanks for her existence, she downgraded all tech in Gensoukyou for the mastermind. It fit with her unlived, but still real nostalgia too. After her defeat, she fixed everything and gave up the light, returning to rumor. Maybe she'll return when she herself is retro.", 
	img: "Kx1XSOF.png",
    opts: { snytest: ["sny"],
      owner: ["achy"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  
  
  //=========================================
  //BANANA
  //=========================================
  {
    name: "Bana 'Banana' Narama",
    bio: "Placeholder Text (600 character limit).", img: "0K0pRFx.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Bana 'Banana' Narama",
    bio: "Placeholder Text (600 character limit).", img: "9GUBvTr.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Bridgette Palmer",
    bio: "Placeholder Text (600 character limit).", img: "iMHdB8V.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Cios",
    bio: "Placeholder Text (600 character limit).", img: "efZjAzf.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Cordycep",
    bio: "Placeholder Text (600 character limit).", img: "LDopA29.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["ambig"],
	  pack: ["p4"]
    }
  },
  {
    name: "Genmi",
    bio: "Placeholder Text (600 character limit).", img: "VFpYUkz.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Kachari Hinaka",
    bio: "Placeholder Text (600 character limit).", img: "YQFOKtn.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p2"]
    }
  },
  {
    name: "Kiyokuro Sakakiinu",
    bio: "Placeholder Text (600 character limit).", img: "rZBfj6W.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Makigai Mabokeshigai",
    bio: "Placeholder Text (600 character limit).", img: "vM7NaoV.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Mondo Ishigami",
    bio: "Placeholder Text (600 character limit).", img: "usk6Czv.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Mouru Ominaeshi",
    bio: "Placeholder Text (600 character limit).", img: "R01pmiv.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p2"]
    }
  },
  {
    name: "Piccolo Totanshou",
    bio: "Placeholder Text (600 character limit).", img: "P4dDGz7.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Sekki",
    bio: "Placeholder Text (600 character limit).", img: "GCFnPFE.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["ambig"],
	  pack: ["p4"]
    }
  },
  {
    name: "Shangvinrú",
    bio: "Placeholder Text (600 character limit).", img: "XmshWkH.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Shuu Kongei",
    bio: "Placeholder Text (600 character limit).", img: "CnTio39.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Siine",
    bio: "Placeholder Text (600 character limit).", img: "zkc3ixB.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Susugu Kumochimono",
    bio: "Placeholder Text (600 character limit).", img: "RO3pb6c.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Traskar",
    bio: "Placeholder Text (600 character limit).", img: "Vpe906N.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Usue",
    bio: "Placeholder Text (600 character limit).", img: "xKoxifE.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Hersir",
    bio: "Placeholder Text (600 character limit).", img: "A9OmdLd.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Valsir",
    bio: "Placeholder Text (600 character limit).", img: "czduBJz.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Créme de Latte",
    bio: "Placeholder Text (600 character limit).", img: "czduBJz.png",
    opts: { snytest: ["sny"],
      owner: ["banana"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p5"]
    }
  },
  
  
  //=========================================
  //CONAR
  //=========================================
  {
    name: "Conar Dinn",
    bio: "Placeholder Text (600 character limit).", img: "LlyVAeu.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Justin",
    bio: "Placeholder Text (600 character limit).", img: "MSsrN3E.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Kaito Dinn",
    bio: "Placeholder Text (600 character limit).", img: "Yv0Y0Ny.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Kenchi Yakumo",
    bio: "Placeholder Text (600 character limit).", img: "DjGCae4.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Keomi Kyogai",
    bio: "Placeholder Text (600 character limit).", img: "FNii5Dr.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p2"]
    }
  },
  {
    name: "Kian Juichi",
    bio: "Placeholder Text (600 character limit).", img: "XFCt0t2.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Leanne Dinn",
    bio: "Placeholder Text (600 character limit).", img: "LNCnaXB.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Rengetsu",
    bio: "Placeholder Text (600 character limit).", img: "NUz51cw.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Sus Drek",
    bio: "Placeholder Text (600 character limit).", img: "szRwvCM.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["male"],
	  species: ["furry"],
	  age: ["adult"],
	  pack: ["p4"],
	  nonrp: [],
	  joke: []
    }
  },
  {
    name: "Tesslyn Aurea",
    bio: "Placeholder Text (600 character limit).", img: "Xtu7LQ3.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Tyzairo",
    bio: "Placeholder Text (600 character limit).", img: "nt9B7ti.png",
    opts: { snytest: ["sny"],
      owner: ["conar"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  
  
  //=========================================
  //DREK
  //=========================================
  {
    name: "Charlie",
    bio: "Placeholder Text (600 character limit).", img: "Tm8lN9p.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult","ambig"],
	  pack: ["p1"],
	  joke: []
    }
  },
  {
    name: "Charlie (Human Disguise)",
    bio: "Placeholder Text (600 character limit).", img: "aZzoRVs.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p5"],
	  joke: [],
	  altform: []
    }
  },
  {
    name: "Drekareen",
    bio: "Placeholder Text (600 character limit).", img: "4pl4Den.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Drekareen (Human Disguise)",
    bio: "Placeholder Text (600 character limit).", img: "BKppwVG.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Kyuuko Memoto",
    bio: "Placeholder Text (600 character limit).", img: "h853kHj.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Nesthaar",
    bio: "Placeholder Text (600 character limit).", img: "ahVChuP.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Nesthaar (Human Disguise)",
    bio: "Placeholder Text (600 character limit).", img: "qnU1O77.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Raylan",
    bio: "Placeholder Text (600 character limit).", img: "W5nDZFN.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Zathareen",
    bio: "Placeholder Text (600 character limit).", img: "glBQUC3.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Zathareen (Human Disguise)",
    bio: "Placeholder Text (600 character limit).", img: "wFYQEQN.png",
    opts: { snytest: ["sny"],
      owner: ["drek"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  
  
  //=========================================
  //DRUGS
  //=========================================
  /*
  {
    name: "Alastair",
    bio: "Placeholder Text (600 character limit).", img: "4G2yiXt.png",
    opts: { snytest: ["sny"],
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Ayako",
    bio: "Placeholder Text (600 character limit).", img: "UPzzAXd.png",
    opts: { snytest: ["sny"],
      owner: ["drugs"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Cedric",
    bio: "Placeholder Text (600 character limit).", img: "QnGYMQT.png",
    opts: { snytest: ["sny"],
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Drugs",
    bio: "Placeholder Text (600 character limit).", img: "CY3SyBH.png",
    opts: { snytest: ["sny"],
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Halvan",
    bio: "Placeholder Text (600 character limit).", img: "DwrDUO3.png",
    opts: { snytest: ["sny"],
      owner: ["drugs"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Miyu Ito",
    bio: "Placeholder Text (600 character limit).", img: "1DTmm4j.png",
    opts: { snytest: ["sny"],
      owner: ["drugs"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  */
  
  
  //=========================================
  //GABE
  //=========================================
  {
    name: "Blaike",
    bio: "Placeholder Text (600 character limit).", img: "5HbJbu9.png",
    opts: { snytest: ["sny"],
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Eskandar Mausomi",
    bio: "Placeholder Text (600 character limit).", img: "wkZLJWr.png",
    opts: { snytest: ["sny"],
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Jodith",
    bio: "Placeholder Text (600 character limit).", img: "cqHIHPj.png",
    opts: { snytest: ["sny"],
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Johan",
    bio: "Placeholder Text (600 character limit).", img: "UFY43Kh.png",
    opts: { snytest: ["sny"],
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Markus",
    bio: "Placeholder Text (600 character limit).", img: "2aqk00J.png",
    opts: { snytest: ["sny"],
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Merhan",
    bio: "Placeholder Text (600 character limit).", img: "PPdthi6.png",
    opts: { snytest: ["sny"],
      owner: ["gabe"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p3"]
    }
  },
  {
    name: "Roshanne Salih",
    bio: "Placeholder Text (600 character limit).", img: "yY5idAb.png",
    opts: { snytest: ["sny"],
      owner: ["gabe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p4"]
    }
  },
  {
    name: "Sapphire",
    bio: "Placeholder Text (600 character limit).", img: "ny9ofTp.png",
    opts: { snytest: ["sny"],
      owner: ["gabe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  
  
  //=========================================
  //GUILMON
  //=========================================
  {
    name: "Arthur",
    bio: "Placeholder Text (600 character limit).", img: "f79pKak.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"],
	  pack: ["p4"]
    }
  },
  {
    name: "Chrysalis",
    bio: "Placeholder Text (600 character limit).", img: "waD7wyk.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult", "ambig"],
	  pack: ["p3"]
    }
  },
  {
    name: "Daisuke",
    bio: "Placeholder Text (600 character limit).", img: "28XFS2K.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"],
	  pack: ["p3"]
    }
  },
  {
    name: "Dandara",
    bio: "Placeholder Text (600 character limit).", img: "LoyaLCD.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Duke",
    bio: "Placeholder Text (600 character limit).", img: "ShbjnP4.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["ambig"],
	  pack: ["p3"]
    }
  },
  {
    name: "Grace",
    bio: "Placeholder Text (600 character limit).", img: "pSSXXc3.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["pokedigi"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Grandis",
    bio: "Placeholder Text (600 character limit).", img: "gP820o4.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Grandis",
    bio: "Placeholder Text (600 character limit).", img: "ZV6zgd0.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Grandis (Granini Form)",
    bio: "Placeholder Text (600 character limit).", img: "ASvpZLW.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: [],
	  joke: []
    }
  },
  {
    name: "Guilmon",
    bio: "Placeholder Text (600 character limit).", img: "zgHHdQG.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Hawk",
    bio: "Placeholder Text (600 character limit).", img: "SSfKTGA.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Hawk",
    bio: "Placeholder Text (600 character limit).", img: "48iIz12.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["pokedigi"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Hiroyuki",
    bio: "Placeholder Text (600 character limit).", img: "S2F74xq.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Hiroyuki",
    bio: "Placeholder Text (600 character limit).", img: "EIJfw5n.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Hatsudzuki no Kairyu",
    bio: "Placeholder Text (600 character limit).", img: "w3r3ya7.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Levi",
    bio: "Placeholder Text (600 character limit).", img: "VnYcwMm.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Redrin Lightclaw",
    bio: "Placeholder Text (600 character limit).", img: "ZfMTD3r.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Rei",
    bio: "Placeholder Text (600 character limit).", img: "2iUVJJH.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Takashi Reirin",
    bio: "Placeholder Text (600 character limit).", img: "nfa3aEy.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Tristan",
    bio: "Placeholder Text (600 character limit).", img: "UoZUd2z.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Tristan",
    bio: "Placeholder Text (600 character limit).", img: "EtJTMw0.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Tristan (Dragon Form)",
    bio: "Placeholder Text (600 character limit).", img: "ZAbr6JY.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Yuki",
    bio: "Placeholder Text (600 character limit).", img: "eZbMgys.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["female"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Kailan Confluentia",
    bio: "Placeholder Text (600 character limit).", img: "aZvalVQ.png",
    opts: { snytest: ["sny"],
      owner: ["guilmon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  
  
  //=========================================
  //JUNKY
  //=========================================
  {
    name: "Labour - 'The MS&Y2 Artist'",
    bio: "Placeholder Text (600 character limit).", img: "pCY81uV.png",
    opts: { snytest: ["sny", "junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"],
	  nonrp: []
    }
  },
  {
    name: "Earl",
    bio: "Totally a Conar character.", img: "wrAChS4.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p2"],
	  nonrp: [],
	  joke: []
    }
  },
  {
    name: "'dAU6' Zimmer",
    bio: "Placeholder Text (600 character limit).", img: "YRsvi7l.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Jenny",
    bio: "Placeholder Text (600 character limit).", img: "2a7VhHr.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Karigou Diaz",
    bio: "Placeholder Text (600 character limit).", img: "hvVOnen.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p1"]
    }
  },
  {
    name: "Lola",
    bio: "Placeholder Text (600 character limit).", img: "058Y9Qo.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p3"]
    }
  },
  {
    name: "The Golden Lute (Lute)",
    bio: "Placeholder Text (600 character limit).", img: "f7U60e3.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "The Golden Lute (Lute) (True Form)",
    bio: "Placeholder Text (600 character limit).", img: "Ty4Yd4C.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Maria",
    bio: "Placeholder Text (600 character limit).", img: "1OS7WwV.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult","ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Nobody",
    bio: "Placeholder Text (600 character limit).", img: "P0umA2y.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "The Cane of Contradiction Calamity (StaffLady)",
    bio: "Placeholder Text (600 character limit).", img: "IOuRhHp.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Suki",
    bio: "Placeholder Text (600 character limit).", img: "GBswHs5.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["ambig"],
	  pack: ["p2"]
    }
  },
  {
    name: "Sullen",
    bio: "Placeholder Text (600 character limit).", img: "KeXazMK.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Sullen (Human Disguise)",
    bio: "Placeholder Text (600 character limit).", img: "OQTyMag.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Tau",
    bio: "Placeholder Text (600 character limit).", img: "zm2RGYt.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["non"],
	  species: ["aniobj","pokedigi"],
	  age: ["child"],
	  pack: ["p2"]
    }
  },
  {
    name: "Tau (Origin Form)",
    bio: "Placeholder Text (600 character limit).", img: "OItno3w.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["non"],
	  species: ["aniobj","pokedigi"],
	  age: ["child"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Toru",
    bio: "Placeholder Text (600 character limit).", img: "6xvngvE.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Wolfy",
    bio: "Placeholder Text (600 character limit).", img: "dWO4PLV.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Kuria",
    bio: "Placeholder Text (600 character limit).", img: "Iuj6oy9.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Momoku Tanitsu",
    bio: "Placeholder Text (600 character limit).", img: "JW3DMbf.png",
    opts: { snytest: ["sny"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  
  {
    name: "Work",
    bio: "Placeholder Text (600 character limit).", img: "sc5ztaO.png",
    opts: { snytest: ["sny", "junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Blank",
    bio: "Placeholder Text (600 character limit).", img: "bC9IhND.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Boredom",
    bio: "Placeholder Text (600 character limit).", img: "1ZMfesc.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Derpy",
    bio: "Placeholder Text (600 character limit).", img: "cAKMBL4.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Envy",
    bio: "Placeholder Text (600 character limit).", img: "wkeUmk1.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Existence",
    bio: "Placeholder Text (600 character limit).", img: "I5lm0QV.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Extrovertedness",
    bio: "Placeholder Text (600 character limit).", img: "ptcavDd.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Fantasy",
    bio: "Placeholder Text (600 character limit).", img: "G7gnHdB.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Fear",
    bio: "Placeholder Text (600 character limit).", img: "7L2NdOy.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Foodie",
    bio: "Placeholder Text (600 character limit).", img: "SKVpTEq.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
    }
  },
  {
    name: "Frustration",
    bio: "Placeholder Text (600 character limit).", img: "MV4bKHw.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Insanity",
    bio: "Placeholder Text (600 character limit).", img: "NWq8h92.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Inspiration",
    bio: "Placeholder Text (600 character limit).", img: "e87kXam.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Jealousy",
    bio: "Placeholder Text (600 character limit).", img: "1JM5hDz.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Loneliness",
    bio: "Placeholder Text (600 character limit).", img: "DfYq17k.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Love",
    bio: "Placeholder Text (600 character limit).", img: "NPkgK6s.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Lovely",
    bio: "Placeholder Text (600 character limit).", img: "maJPyR6.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["child"],
    }
  },
  {
    name: "Lust",
    bio: "Placeholder Text (600 character limit).", img: "S6xkc21.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Motivation",
    bio: "Placeholder Text (600 character limit).", img: "c2QuSFO.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Name",
    bio: "Placeholder Text (600 character limit).", img: "gXNXD6j.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"],
    }
  },
  {
    name: "Passion",
    bio: "Placeholder Text (600 character limit).", img: "ocONpIN.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Perfection",
    bio: "Placeholder Text (600 character limit).", img: "0BoQ4ZN.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["adult"],
    }
  },
  {
    name: "Reality",
    bio: "Placeholder Text (600 character limit).", img: "gnUKLOV.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"],
    }
  },
  {
    name: "Regret",
    bio: "Placeholder Text (600 character limit).", img: "cBdpjUt.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"],
    }
  },
  {
    name: "Tinni",
    bio: "Placeholder Text (600 character limit).", img: "Whfy0Kl.png",
    opts: { snytest: ["junkyex"],
      owner: ["junky"],
	  gender: ["female"],
	  species: ["anthro"],
	  age: ["child"],
    }
  },
  
  
  //=========================================
  //LOBBY
  //=========================================
  {
    name: "Acolyte",
    bio: "Placeholder Text (600 character limit).", img: "DZfOZa0.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Annye Pihxie",
    bio: "Placeholder Text (600 character limit).", img: "GCFBTgz.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Bates Amanita",
    bio: "Placeholder Text (600 character limit).", img: "xLG1BCp.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Bates Amanita (Vincent Aster)",
    bio: "Placeholder Text (600 character limit).", img: "TtI5V0V.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: [],
	  nonrp: []
    }
  },
  {
    name: "Blob",
    bio: "Placeholder Text (600 character limit).", img: "2xohYoo.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Cedrik",
    bio: "Placeholder Text (600 character limit).", img: "CbtW6KM.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Chorus Melpomene",
    bio: "Placeholder Text (600 character limit).", img: "j6nekEt.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Felix Valentine",
    bio: "Placeholder Text (600 character limit).", img: "osdaXLm.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Kagah",
    bio: "Placeholder Text (600 character limit).", img: "OWHcMZK.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Minih",
    bio: "Placeholder Text (600 character limit).", img: "3JB0DRM.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Slime Boss",
    bio: "Placeholder Text (600 character limit).", img: "Sp7aTVh.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["ambig"],
	  pack: ["p4"],
	  generic: []
    }
  },
  {
    name: "Slime Girl",
    bio: "Placeholder Text (600 character limit).", img: "eF9oCwM.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female","non"],
	  species: ["humanoid"],
	  age: ["ambig"],
	  pack: ["p4"],
	  generic: []
    }
  },
  {
    name: "Yaci",
    bio: "Placeholder Text (600 character limit).", img: "cfglY06.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Yoko Niji",
    bio: "Placeholder Text (600 character limit).", img: "mrWY9Ya.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Matinta Luz dos Santos",
    bio: "Placeholder Text (600 character limit).", img: "1FD9ueX.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Amber Queen",
    bio: "Placeholder Text (600 character limit).", img: "mG0pfXZ.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Hinayo Yobiyama",
    bio: "Placeholder Text (600 character limit).", img: "1QyKgXJ.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Maou",
    bio: "Placeholder Text (600 character limit).", img: "hzhjl8F.png",
    opts: { snytest: ["sny"],
      owner: ["lobby"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child", "ambig"],
	  pack: ["p5"]
    }
  },
  
  
  //=========================================
  //LYOS
  //=========================================
  {
    name: "Atikaya Alsisar",
    bio: "Placeholder Text (600 character limit).", img: "nZZ5WBk.png",
    opts: { snytest: ["sny"],
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Denzel D'Abovile",
    bio: "Placeholder Text (600 character limit).", img: "Vau4uDv.png",
    opts: { snytest: ["sny"],
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Sabre Dubois",
    bio: "Placeholder Text (600 character limit).", img: "TZAOM7a.png",
    opts: { snytest: ["sny"],
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Zacharie LeBlanc",
    bio: "Placeholder Text (600 character limit).", img: "f8kpy2h.png",
    opts: { snytest: ["sny"],
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Kailan Dubois",
    bio: "Placeholder Text (600 character limit).", img: "Ji2X24N.png",
    opts: { snytest: ["sny"],
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Elio Athas",
    bio: "Placeholder Text (600 character limit).", img: "URlNtzf.png",
    opts: { snytest: ["sny"],
      owner: ["lyos"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  
  
  //=========================================
  //MEOWSTIC
  //=========================================
  {
    name: "Ava",
    bio: "Placeholder Text (600 character limit).", img: "LyP0MkK.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Vera Dariyev",
    bio: "Placeholder Text (600 character limit).", img: "T260itK.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Marzia Mondadori",
    bio: "Placeholder Text (600 character limit).", img: "wCD0wz5.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Mamoru 'Meowstic' Iwasaki",
    bio: "Placeholder Text (600 character limit).", img: "vqhcukK.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"],
	  pack: ["p1"]
    }
  },
  {
    name: "Mamoru 'Meowstic' Iwasaki",
    bio: "Placeholder Text (600 character limit).", img: "OdJ96JD.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"],
	  pack: ["pc"]
    }
  },
  {
    name: "Merrick Octans",
    bio: "Placeholder Text (600 character limit).", img: "QyIimVg.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Merrick Octans (Dream Dragon Form)",
    bio: "Placeholder Text (600 character limit).", img: "N41mgp5.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Muri",
    bio: "Placeholder Text (600 character limit).", img: "3o69sgl.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Nashirah 'Nash' bint al-nassaaj bint ʼinsāniyya al-Fārisī",
    bio: "Placeholder Text (600 character limit).", img: "4RwGF9I.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["furry"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Ercan 'Pigsy' Zorlu",
    bio: "Placeholder Text (600 character limit).", img: "YD0VIUu.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["furry"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Ellinor Vennesland",
    bio: "Placeholder Text (600 character limit).", img: "CIPbfqu.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Heinrich 'Rico' Viktor von Löwenthal",
    bio: "Placeholder Text (600 character limit).", img: "KO0Ve2j.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Tasia Vlahakis",
    bio: "Placeholder Text (600 character limit).", img: "csAEiqh.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "'Gato' the Fortune Teller",
    bio: "Placeholder Text (600 character limit).", img: "Jb5bnnG.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "'Gato' (Cleaner Disguise)",
    bio: "Placeholder Text (600 character limit).", img: "kPdaqaJ.png",
    opts: { snytest: ["sny"],
      owner: ["meowstic"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  
  
  //=========================================
  //MIRANSU
  //=========================================
  {
    name: "Alice",
    bio: "Placeholder Text (600 character limit).", img: "30gsGWk.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj", "pokedigi"],
	  age: ["child"],
	  pack: ["p4"],
	  legacy: []
    }
  },
  {
    name: "Altwilder",
    bio: "Placeholder Text (600 character limit).", img: "2OI61if.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p2"],
	  legacy: []
    }
  },
  {
    name: "Altwilder",
    bio: "Placeholder Text (600 character limit).", img: "azl02Bl.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  {
    name: "Dormarah",
    bio: "Placeholder Text (600 character limit).", img: "xy4OWOa.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["ambig"],
	  pack: ["p4"],
	  legacy: []
    }
  },
  {
    name: "Dormarah",
    bio: "Placeholder Text (600 character limit).", img: "qz2vCrv.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["ambig"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  {
    name: "Hikawa Motoharu",
    bio: "Placeholder Text (600 character limit).", img: "eFuPrf9.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"],
	  legacy: []
    }
  },
  {
    name: "Kureha Iwakura",
    bio: "Placeholder Text (600 character limit).", img: "IP2Zwo6.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["aniobj","pokedigi"],
	  age: ["adult","ambig"],
	  pack: ["p2"],
	  legacy: []
    }
  },
  {
    name: "Kureha Iwakura",
    bio: "Placeholder Text (600 character limit).", img: "xyYivq8.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["aniobj","pokedigi"],
	  age: ["adult","ambig"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  {
    name: "Kuro",
    bio: "Placeholder Text (600 character limit).", img: "mMoLA0w.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["ambig"],
	  pack: ["p4"],
	  legacy: []
    }
  },
  {
    name: "Kuro",
    bio: "Placeholder Text (600 character limit).", img: "5HJFDb5.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["ambig"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  {
    name: "Misaki",
    bio: "Placeholder Text (600 character limit).", img: "GuvjhHw.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p2"],
	  legacy: []
    }
  },
  {
    name: "Misaki",
    bio: "Placeholder Text (600 character limit).", img: "ID2ohyj.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  {
    name: "Mitsuru",
    bio: "Placeholder Text (600 character limit).", img: "aA4B96D.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"],
	  pack: ["p2"],
	  legacy: []
    }
  },
  {
    name: "Mitsuru",
    bio: "Placeholder Text (600 character limit).", img: "TgSPYHo.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  {
    name: "Susuki Iwasaki",
    bio: "Placeholder Text (600 character limit).", img: "yjSZp7Q.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj","pokedigi"],
	  age: ["adult"],
	  pack: ["p2"],
	  legacy: []
    }
  },
  {
    name: "Susuki Iwasaki",
    bio: "Placeholder Text (600 character limit).", img: "5TVwpea.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["female"],
	  species: ["aniobj","pokedigi"],
	  age: ["adult"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  {
    name: "Tsukasa",
    bio: "Placeholder Text (600 character limit).", img: "No4U1Tq.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult","ambig"],
	  pack: ["p2"],
	  legacy: []
    }
  },
  {
    name: "Tsukasa",
    bio: "Placeholder Text (600 character limit).", img: "2FNLjUU.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["adult","ambig"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  {
    name: "Yuuki 'Yukiharu' Iwasaki",
    bio: "Placeholder Text (600 character limit).", img: "mg6LreE.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child","ambig"],
	  pack: ["p2"],
	  legacy: []
    }
  },
  {
    name: "Yuuki 'Yukiharu' Iwasaki",
    bio: "Placeholder Text (600 character limit).", img: "DLThJsN.png",
    opts: { snytest: ["sny"],
      owner: ["miransu"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child","ambig"],
	  pack: ["pc"],
	  legacy: []
    }
  },
  
  
  //=========================================
  //PHANTOM
  //=========================================
  {
    name: "Alex",
    bio: "Placeholder Text (600 character limit).", img: "rWKhplB.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Jess",
    bio: "Placeholder Text (600 character limit).", img: "htbTzJk.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Jess",
    bio: "Placeholder Text (600 character limit).", img: "wFPrYkp.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Lucius",
    bio: "Placeholder Text (600 character limit).", img: "9RjThHf.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p2"]
    }
  },
  {
    name: "Lucius",
    bio: "Placeholder Text (600 character limit).", img: "jcRMJW0.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["pc"]
    }
  },
  {
    name: "Orion",
    bio: "Placeholder Text (600 character limit).", img: "gumhPox.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Orion",
    bio: "Placeholder Text (600 character limit).", img: "s9mMjv2.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Phantom",
    bio: "Placeholder Text (600 character limit).", img: "StO0fGy.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Phantom",
    bio: "Placeholder Text (600 character limit).", img: "zkAvog1.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Luke (Phantom)",
    bio: "Placeholder Text (600 character limit).", img: "pV4RJAT.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Sayuri",
    bio: "Placeholder Text (600 character limit).", img: "YEf0v7b.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Sayuri",
    bio: "Placeholder Text (600 character limit).", img: "JGFg7dP.png",
    opts: { snytest: ["sny"],
      owner: ["phantom"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  
  
  //=========================================
  //PYTHON
  //=========================================
  {
    name: "Apateonas",
    bio: "A telepathic alien and the employer of Theliea and Xiki, as well as something like their foster father. He runs a trade company that by now has established a large trading network across several different universes, with his home world, the Astral Realm, acting as the terminal. RAISU rice products are among the more popular exports from Gensokyo, while imports mainly consist of other kinds of alien food. This is thanks to an exclusive deal with Ryoumika Soukun, who uses the exotic ingredients for her restaurant.", 
	img: "xPhIGKW.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Apateonas",
    bio: "A telepathic alien and the employer of Theliea and Xiki, as well as something like their foster father. He runs a trade company that by now has established a large trading network across several different universes, with his home world, the Astral Realm, acting as the terminal. RAISU rice products are among the more popular exports from Gensokyo, while imports mainly consist of other kinds of alien food. This is thanks to an exclusive deal with Ryoumika Soukun, who uses the exotic ingredients for her restaurant.", 
	img: "oKqo1Wk.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Camelan Haimaku",
    bio: "Final boss of Least Connected Marketeer. An imori who turned her back on the battlefield and took center stage as a magician, mesmerizing audiences with her unique ability to awaken playing cards to life. Outside of her shows, she is a timid youkai that wants to play card games with people, but has great difficulty conveying the intricate rules of TCGs. The ability card incident awakened her passion, so she rose to the occasion to liberate the cards from an existence as mere tokens of wealth rather than sources of fun.", 
	img: "dlJqrS0.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Camelan Haimaku",
    bio: "Final boss of Least Connected Marketeer. An imori who turned her back on the battlefield and took center stage as a magician, mesmerizing audiences with her unique ability to awaken playing cards to life. Outside of her shows, she is a timid youkai that wants to play card games with people, but has great difficulty conveying the intricate rules of TCGs. The ability card incident awakened her passion, so she rose to the occasion to liberate the cards from an existence as mere tokens of wealth rather than sources of fun.", 
	img: "MS5oYhe.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Chikuji Toutetsu",
    bio: "Toutetsu prediction preceding Yuuma. A taotie and chimera of the twelve zodiac animals. Her unique form allows her to understand the desires of all animals and manipulate them to her advantage. Her endless greed stifled the growth of her organization, so she was eventually overthrown, split in twain and sealed away. A fanatic follower of hers set events in motion to reunite the two parts and restore the old leader, throwing the Animal Realm into peril once more.", 
	img: "NCbcsRa.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Chikuji Toutetsu (Weakened Form)",
    bio: "Toutetsu prediction preceding Yuuma. A taotie and chimera of the twelve zodiac animals. Her unique form allows her to understand the desires of all animals and manipulate them to her advantage. Her endless greed stifled the growth of her organization, so she was eventually overthrown, split in twain and sealed away. A fanatic follower of hers set events in motion to reunite the two parts and restore the old leader, throwing the Animal Realm into peril once more.", 
	img: "TqRsYeF.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Chiyo Yamanaka",
    bio: "A girl born into an esoteric magic cult. She holds the power to control the states of matter. After meeting the spirit of her ancestor, she cut ties with them and moved to Gensokyo, where she acted as an incident resolver for a while. She would eventually fall in love with a physician named Oliver, and the two have since lived a relatively normal life together. Chiyo works as a waitress in Ryoumika's Eight Treasures restaurant and has sworn off the supernatural.", 
	img: "v3Oc35Z.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p2"]
    }
  },
  {
    name: "Chiyo Yamanaka",
    bio: "A girl born into an esoteric magic cult. She holds the power to control the states of matter. After meeting the spirit of her ancestor, she cut ties with them and moved to Gensokyo, where she acted as an incident resolver for a while. She would eventually fall in love with a physician named Oliver, and the two have since lived a relatively normal life together. Chiyo works as a waitress in Ryoumika's Eight Treasures restaurant and has sworn off the supernatural.", 
	img: "Cn1EQj1.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["pc"]
    }
  },
  {
    name: "Cisa Perlach Augusta",
    bio: "Final boss of Augusta Iaponicorum. The patron goddess of Augsburg, a city in distant Germany. She traces her origins back to pre-Roman times, but in truth, they're somewhat of a mystery. Longing for a sense of personal identity, the citizens may have invented a god of their own into the past. In the present day, she has been all but forgotten. Cisa reappeared in Gensokyo in order to become the patron deity of the Human Village.", 
	img: "6Y0qZ1X.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Dr. Bees",
    bio: "What's this? An online character sorter with an alarming lack of bees? My JavaScript full of BEES ought to put a stop to that!", 
	img: "4mrzZ6I.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"],
	  joke: []
    }
  },
  {
    name: "Harue Nagatsuka",
    bio: "A youkai shrine maiden in service of Shiva, the benevolent god of destruction. She was originally human, but became cursed for reasons unknown to her. Now two snakes grow from her shoulders, threatening her soul. Harue was forced to leave her life in the village behind, feeding youkai to her snakes to pacify them. In doing so, she became hated by everyone. She lives as a hermit and has not forsaken her religious duties, performing trance-like dance rites in honor of her god while also training the art of controlling shikigami in hopes of gaining dominion over her curse.", 
	img: "tYv3mVg.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Hironishi Kyogetsuin",
    bio: "Just write 'Gigachad'. There's no need to tell them I'm a braggart baron or anything like that. - Hironishi Kyogetsuin.", 
	img: "s3GcI2Y.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Itsuyo Nukimoto",
    bio: "A lesser youkai with the power to mysteriously cause parts to be left over between disassembling and reassembling a complex object for repair. The leftover parts turn into instant tsukumogami due to the sudden realization that they were unnecessary to begin with. She is good friends with Tomino, herself a tsukumogami. She generates some second-hand fear from the kappa, but not much from humans themselves, resulting in a weak existence. She cherishes her little life nonetheless.", 
	img: "axQcc1s.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p4"]
    }
  },
  {
    name: "Kiju Sanadamushi",
    bio: "Leader of a department within the Harikikikyoku, a secretive organization in the Animal Realm. She is a hizou-no-kasamushi, a type of stomach bug that can cause rapid changes in weight and is difficult to cure. The parasitic agents under her command are similarly sneaky, relying not on physical might to hunt, but on subterfuge and espionage. The Animal Realm often understates the value of information, and the Harikikikyoku have infiltrated the other gangs undetected. Kiju often has to contend with her agents' incompetence however.", 
	img: "LWlb6Yt.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Kotobuki In'un",
    bio: "An auspicious chimera of the twelve zodiac animals, devoid of any and all evil. Her unique form allows her to understand the concerns of all animals and act as a representative for those who have none to call their own. Additionally, it is said that finding Kotobuki is a sign of good luck, but it's more accurate to say that it's a sign of having had good luck. You'll have spent it all by meeting her.", 
	img: "vpakJVL.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Kyra Gialla Osram",
    bio: "The Light Princess, heir to the throne of a world of light. She has always been an original girl and is definitely not part of a series of near-identical clones created to conquer the dark realm. Even if those clones existed, they definitely didn't all believe themselves to be the true Kyra Osram and absolutely did not have any identity crises upon discovering the truth. Come to think of it, is there anything original to her at all?", 
	img: "KObtvPi.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Frederica Lissai",
    bio: "A telepathic alien transformed from a sickly and lonesome human girl. Her psychic abilities are extraordinary, and she possesses a unique ability that lets her evade any manner of detection, hiding even in plain sight. Thanks to her friend Karigou's efforts, lately she has been coming out of her shell more. She has molded her style and personality after a mixture of espionage stories and cosmic horror tales, both of which she enjoyed while she was human. It's mainly a facade she uses when dealing with other people, but often she ends up alienating them with it.", 
	img: "iiiC17K.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult", "ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Frederica Lissai (Astral Satori Form)",
    bio: "A telepathic alien transformed from a sickly and lonesome human girl. Her psychic abilities are extraordinary, and she possesses a unique ability that lets her evade any manner of detection, hiding even in plain sight. Thanks to her friend Karigou's efforts, lately she has been coming out of her shell more. She has molded her style and personality after a mixture of espionage stories and cosmic horror tales, both of which she enjoyed while she was human. It's mainly a facade she uses when dealing with other people, but often she ends up alienating them with it.", 
	img: "tkiiIoR.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult", "ambig"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Lucienne von Burgund",
    bio: "Viivi's childhood friend and somewhat of a rival. Viivi's rejection of her fate as the hero of the era caused a bit of a schism in their friendship, which began to widen ever more with Lucienne's discovery of her own soul: Hagen, the traitor and murderer of Siegfried. When Viivi refused to hand over the sacred lance and Tazue - both given to her in association with the title of 'hero' that she rejected - their friendship fully ruptured, and Lucienne was fatally wounded by Dormun in the resulting battle of ideals.",
	img: "jkkCAGv.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Ma Sekisei",
    bio: "Midboss of Augusta Iaponicorum. A curmudgeonly baker awakened from a stone statue. Supposedly, she was a hero that once saved the city of Augsburg from a siege and paid for it with her right arm, and later her life. As such her right arm is perpetually petrified and immobile. True to her legend of origin, she can turn wood into bread, although the taste might not be much to write home about. She does real baking, too.", 
	img: "nUF2zGE.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Manozeen",
    bio: "A telepathic alien and part of the same group of multiverse delinquents as Mephisto. Violent by nature, she lives for war and strife as the utmost expressions of one's freedom. After their gang was finally disbanded, Manozeen became desperate for a new place to belong. She took a particular liking to a human from the Outside World named Bridgette, and although she initially just wanted to sow chaos in her life, the two somehow became friends. Now they play video games together to assert dominance over the noobs.", 
	img: "fetne77.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Mephistopheles",
    bio: "A telepathic alien and part of the same group of multiverse delinquents as Manozeen. He became famous in all the lands for his contract work and inspired images of devilish deals anywhere he and his group went. After a devastating tragedy struck his home world, the Astral Realm, he bid farewell to this old life to fill the power vacuum left by the deaths of the previous leaders. He holds Theliea and Xiki in high regard, as they are the offspring of another member of their group, and he protected them against an attempt to re-merge them into their parent.", 
	img: "M6eXUU4.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Mephistopheles",
    bio: "A telepathic alien and part of the same group of multiverse delinquents as Manozeen. He became famous in all the lands for his contract work and inspired images of devilish deals anywhere he and his group went. After a devastating tragedy struck his home world, the Astral Realm, he bid farewell to this old life to fill the power vacuum left by the deaths of the previous leaders. He holds Theliea and Xiki in high regard, as they are the offspring of another member of their group, and he protected them against an attempt to re-merge them into their parent.", 
	img: "fvvf1nL.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Ryoumika Soukun",
    bio: "Final boss of Hidden Spice in Four Seasonings. The Kitchen God Zao Jun, who once orchestrated an incident to concentrate all cooking power in her capable hands alone. She was forced to abdicate from her position as the heavenly chef as her apprentice succeeded her, so she opted to open a restaurant in the Human Village instead. Her Eight Treasures restaurant serves cuisine from all corners of the world created through a combination of Ryoumika's skill and divine power, making it a place of worship for all of Gensokyo's foodies.", 
	img: "SpC3zaa.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Ryoumika Soukun",
    bio: "Final boss of Hidden Spice in Four Seasonings. The Kitchen God Zao Jun, who once orchestrated an incident to concentrate all cooking power in her capable hands alone. She was forced to abdicate from her position as the heavenly chef as her apprentice succeeded her, so she opted to open a restaurant in the Human Village instead. Her Eight Treasures restaurant serves cuisine from all corners of the world created through a combination of Ryoumika's skill and divine power, making it a place of worship for all of Gensokyo's foodies.", 
	img: "eXouoEO.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Sanko Hakuchou",
    bio: "An engineer belonging to a race calling themselves 'Time Lords'. She studied a strange art to warp space and create pocket universes purely through performing complicated calculations in her head. Her perpetual drive to use her engineering skills to improve the livelihoods of everyone around her (even against their will) and her desire for respect and recognition sparked a colossal incident that ended with her migration to the more technology-inclined Lunar Capital. Despite that, she maintains good relations with a few treasured friends in Gensokyo.", 
	img: "6ImSUAU.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Sanko Hakuchou",
    bio: "An engineer belonging to a race calling themselves 'Time Lords'. She studied a strange art to warp space and create pocket universes purely through performing complicated calculations in her head. Her perpetual drive to use her engineering skills to improve the livelihoods of everyone around her (even against their will) and her desire for respect and recognition sparked a colossal incident that ended with her migration to the more technology-inclined Lunar Capital. Despite that, she maintains good relations with a few treasured friends in Gensokyo.", 
	img: "smKr2L0.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Shiromi Sadamoto",
    bio: "A Taoist hermit, who is secretly a naga from Hollow Earth, who is secretly a rejected god. Originally a pair of twin gods of healing and rescue, she was condemned and became the embodiment of dissatisfaction set to oppose the embodiment of holy devotion. She came to the surface world in order to sniff out discontentment and provide easy wish-granting solutions, but somehow nobody seems to fall fo---I mean, take her offer. She adores her boss, but more so just wants her praise, hoping it'll make her feel less empty inside.", 
	img: "wrLVb4r.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "SLUG",
    bio: "Amorphous and unintelligent drones created by an associate of Urara's - a perverse goddess of love and fertility. Also dubbed 'Shoggoth', they absorb nearly any type of matter and energy into their own form and can serve as anything from simple workers to building blocks of entire cities.", 
	img: "K1ahXYt.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["non"],
	  species: ["humanoid"],
	  age: ["ambig"],
	  pack: ["p4"],
	  generic: []
    }
  },
  {
    name: "Taya",
    bio: "A hellhound cursed with immortality, who obtained the prestigious title of 'Cerberus'. During an incident that opened the gate between this world and the underworld, she broke her chains and came to Gensokyo. Her hopes for a better life were set far too high, and she was ill-prepared to deal with the intricacies of social coexistence. Ultimately she distanced herself from everyone and now lives in the Youkai Forest, fiercely defending her territory.", 
	img: "SWt3LdN.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Taya",
    bio: "A hellhound cursed with immortality, who obtained the prestigious title of 'Cerberus'. During an incident that opened the gate between this world and the underworld, she broke her chains and came to Gensokyo. Her hopes for a better life were set far too high, and she was ill-prepared to deal with the intricacies of social coexistence. Ultimately she distanced herself from everyone and now lives in the Youkai Forest, fiercely defending her territory.", 
	img: "6TvbCRq.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Tazue Teidarou",
    bio: "Tatzelwurm, a shapeshifting, venomous, tunnel-digging cat-like dragon native to the Swiss alps and Viivi's companion/pet. After losing their way in Gensokyo, the two of them were captured by the Keigagumi, so in order to free Viivi, Tazue opted to work for them for a while. She later motivated an invasion of Gensokyo in order to try and reunite with her rider and escape the Keiga, but the plan failed. She was later rescued properly by Viivi and a few friends. Enjoys cat things, like loafing, and dragon things, like loafing on a pile of treasure.", 
	img: "0ZqmUWz.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Tazue Teidarou (Cat-dragon Form)",
    bio: "Tatzelwurm, a shapeshifting, venomous, tunnel-digging cat-like dragon native to the Swiss alps and Viivi's companion/pet. After losing their way in Gensokyo, the two of them were captured by the Keigagumi, so in order to free Viivi, Tazue opted to work for them for a while. She later motivated an invasion of Gensokyo in order to try and reunite with her rider and escape the Keiga, but the plan failed. She was later rescued properly by Viivi and a few friends. Enjoys cat things, like loafing, and dragon things, like loafing on a pile of treasure.", 
	img: "CAgYBOS.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Theliea",
    bio: "A telepathic alien and the quiet-loving sister of Xiki. They're merchants who came to Gensokyo as part of an experimental trade route with another world. Hailing from a well-ordered hivemind society, Theliea often struggles with the private nature of thoughts and emotions in this world. Even after her long stay, she is still not used to freedom of choice and prefers to be issued tasks in order to help people. She can calm the air of a room by absorbing strong emotions from her surroundings - often to her own detriment. It's a disorder she cannot control.", 
	img: "phV9vJe.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Theliea",
    bio: "A telepathic alien and the quiet-loving sister of Xiki. They're merchants who came to Gensokyo as part of an experimental trade route with another world. Hailing from a well-ordered hivemind society, Theliea often struggles with the private nature of thoughts and emotions in this world. Even after her long stay, she is still not used to freedom of choice and prefers to be issued tasks in order to help people. She can calm the air of a room by absorbing strong emotions from her surroundings - often to her own detriment. It's a disorder she cannot control.", 
	img: "Z0wnUuc.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult","ambig"],
	  pack: ["pc"]
    }
  },
  {
    name: "Theliea (Astral Satori Form)",
    bio: "A telepathic alien and the quiet-loving sister of Xiki. They're merchants who came to Gensokyo as part of an experimental trade route with another world. Hailing from a well-ordered hivemind society, Theliea often struggles with the private nature of thoughts and emotions in this world. Even after her long stay, she is still not used to freedom of choice and prefers to be issued tasks in order to help people. She can calm the air of a room by absorbing strong emotions from her surroundings - often to her own detriment. It's a disorder she cannot control.", 
	img: "Me0MYGe.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult","ambig"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Tomino Daiemon",
    bio: "Tsukumogami of a discarded painting, allegedly painted in the artist's own blood. Evil spirits flock to her side for that reason. Even though she wishes to be hung on someone's wall and genuinely appreciated, those spirits bring misfortune to everyone who owns the painting, prompting them to throw it away. Now she lives in a garbage dump, where she met Itsuyo, who told her that she's already become more than just a painting and to let go of that identity. The world inside her picture frame is infinitely scarier than Gensokyo.", 
	img: "5nO44Sr.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p4"]
    }
  },
  {
    name: "Tsushima",
    bio: "Midboss of Least Connected Marketeer. A never sated man-eating monster horse from a distant country. She was liberated by a hero, after which she and her three sisters scattered in different directions. She eventually drifted into Gensokyo, gobbling up everything that crossed her path. After taking up residence in the Youkai Forest, she also became friends with a few other youkai like Taya and Camelan, the latter of whom she met during a circus event for which the both of them had been recruited as performers.", 
	img: "sDZAyLe.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Tsushima",
    bio: "Midboss of Least Connected Marketeer. A never sated man-eating monster horse from a distant country. She was liberated by a hero, after which she and her three sisters scattered in different directions. She eventually drifted into Gensokyo, gobbling up everything that crossed her path. After taking up residence in the Youkai Forest, she also became friends with a few other youkai like Taya and Camelan, the latter of whom she met during a circus event for which the both of them had been recruited as performers.", 
	img: "zxEoMH1.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Urara Ukiyanagi",
    bio: "An ancient being who defied her own destruction and became known as a god of rebirth, worshipped under many names such as Dumuzid, Osiris, Dionysus, etc. Robbed of her body, she relies on possessing people she specifically engineered to act as perfect vessels for her. Lissai is one of them, who drew Urara's attention through a Halloween costume embodying her alias. In Gensokyo, she appears as a shepherding deity who gifts dogs with power, courage and loyalty, such that they may guard their owners and flock against demise.", 
	img: "rPT9rb4.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p3"]
    }
  },
  {
    name: "Viivi von Xanten",
    bio: "The true reincarnation of the hero Siegfried, or at least that's what the Cavaliers of Xanten believe. She felt crushed by the expectations that organization held for her, so she rejected her fate and escaped with her companion dragon. After she got stranded in Gensokyo, that fate would gradually catch up to her. Still, she enjoys an easygoing lifestyle consisting of eating delicious food and working off the calories through exercise, combat and volunteer work at the homeless shelter that took her in. Although she relies on her dragon Tazue for combat, the two are an unstoppable duo.", 
	img: "ObCg0NN.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Waluigi",
    bio: "You were expecting a normal S&Y character? TOO BAD, WALUIGI TIME", 
	img: "UIMgZOw.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"],
	  joke: []
    }
  },
  {
    name: "Xiki",
    bio: "A telepathic alien and the fun-loving sister of Theliea. They're merchants who came to Gensokyo as part of an experimental trade route with another world. Endlessly curious and excitable, Xiki often gets herself into trouble due to not understanding the social customs of this world. To emancipate herself from her beloved sister, she moved into her own home built into a cave at the base of Youkai Mountain. There she lives together with Lissai, Karigou and Nobody.", 
	img: "ymQuTF2.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Xiki",
    bio: "A telepathic alien and the fun-loving sister of Theliea. They're merchants who came to Gensokyo as part of an experimental trade route with another world. Endlessly curious and excitable, Xiki often gets herself into trouble due to not understanding the social customs of this world. To emancipate herself from her beloved sister, she moved into her own home built into a cave at the base of Youkai Mountain. There she lives together with Lissai, Karigou and Nobody.", 
	img: "O0HIChp.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Xiki (Astral Satori Form)",
    bio: "A telepathic alien and the fun-loving sister of Theliea. They're merchants who came to Gensokyo as part of an experimental trade route with another world. Endlessly curious and excitable, Xiki often gets herself into trouble due to not understanding the social customs of this world. To emancipate herself from her beloved sister, she moved into her own home built into a cave at the base of Youkai Mountain. There she lives together with Lissai, Karigou and Nobody.", 
	img: "NKEGtdl.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Youka Hinejuu",
    bio: "An author from the Human Village, who speaks and writes in incomprehensible idioms. Attempting to improve sales of her works, she summoned a spirit of language from another dimension. In that process her name was accidentally destroyed as well, preventing any association between author and work. She has since been evicted from her home and forced to live in a homeless shelter, where her odd stories are popular with children. Her biggest success is 'Path of Least Resistance', a homoerotic romance novel about a timid construction worker. Somehow, she can write normally if she's infatuated.", 
	img: "jg2jEUU.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Zika Parasite",
    bio: "A fairy embodying viral infections. She considers herself the ultimate life form, able to adapt to anything - even technology. The other fairies think she's a gross weirdo for her obsession with so-called 'computer viruses', but she's determined to earn their respect through her work. One day, she WILL prove her superiority once and for all, but she doesn't understand that that attitude is precisely the reason absolutely nobody gets along with her.", 
	img: "SDypHCO.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"],
	  pack: ["p2"]
    }
  },
  {
    name: "Kopa Machido",
    bio: "Placeholder Text (600 character limit).", img: "K6KC7pn.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Tomori Hijiki",
    bio: "Placeholder Text (600 character limit).", img: "I0O5Bq7.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Shuuni Hayata",
    bio: "Placeholder Text (600 character limit).", img: "OwCe0bN.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Kyon Kanamori",
    bio: "Placeholder Text (600 character limit).", img: "yTVSYZN.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Kari Yudonozawa",
    bio: "Placeholder Text (600 character limit).", img: "a9nfVUN.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Tsunoba Nobusou",
    bio: "Placeholder Text (600 character limit).", img: "GGh955W.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Ara Kannari",
    bio: "Placeholder Text (600 character limit).", img: "jW0TePw.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p5"]
    }
  },
  {
    name: "Jun Hayabusa",
    bio: "Placeholder Text (600 character limit).", img: "vbefef6.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Yaeka Ouga",
    bio: "Placeholder Text (600 character limit).", img: "fFlROUw.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Houki Kuroyagi",
    bio: "Placeholder Text (600 character limit).", img: "TKjqyLh.png",
    opts: { snytest: ["sny"],
      owner: ["python"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },

  
  //=========================================
  //ROBIN
  //=========================================
  {
    name: "Croire",
    bio: "Placeholder Text (600 character limit).", img: "qkypfpe.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["non"],
	  species: ["anthro"],
	  age: ["child"],
	  pack: ["p1"]
    }
  },
  {
    name: "Edelweiss",
    bio: "Placeholder Text (600 character limit).", img: "pq8WfNr.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p4"]
    }
  },
  {
    name: "Hikaru",
    bio: "Placeholder Text (600 character limit).", img: "FrbrRKK.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Irisu Sakazuki",
    bio: "Placeholder Text (600 character limit).", img: "tx5uw1U.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"],
	  pack: ["p3"]
    }
  },
  {
    name: "Noah Amenohara",
    bio: "Placeholder Text (600 character limit).", img: "N9L2wW5.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p3"]
    }
  },
  {
    name: "Robin",
    bio: "Placeholder Text (600 character limit).", img: "PkpBRco.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Sophie",
    bio: "Placeholder Text (600 character limit).", img: "jvzm3Pv.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p2"]
    }
  },
  {
    name: "Tohru",
    bio: "Placeholder Text (600 character limit).", img: "Hw8pbJb.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p4"]
    }
  },
  {
    name: "Valentine",
    bio: "Placeholder Text (600 character limit).", img: "EQ4WnHC.png",
    opts: { snytest: ["sny"],
      owner: ["robin"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  
  
  //=========================================
  //SPHE
  //=========================================
  {
    name: "Chionne",
    bio: "Placeholder Text (600 character limit).", img: "ZjSCqbe.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Lunesta",
    bio: "Placeholder Text (600 character limit).", img: "8T9WBT0.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult","ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Muna",
    bio: "Placeholder Text (600 character limit).", img: "WvKmSaM.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Muna (Crow Form)",
    bio: "Placeholder Text (600 character limit).", img: "LooA9dt.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "MunaBot",
    bio: "Placeholder Text (600 character limit).", img: "zfr6XPj.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"],
	  nonrp: []
    }
  },
  {
    name: "Oru Sumikata",
    bio: "Placeholder Text (600 character limit).", img: "BisLG8e.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Renée",
    bio: "Placeholder Text (600 character limit).", img: "zcTMi5o.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p2"]
    }
  },
  {
    name: "Renée (Glass Rose Form)",
    bio: "Placeholder Text (600 character limit).", img: "MFtO8eU.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["aniobj"],
	  age: ["adult","ambig"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Sandra Oikaze",
    bio: "Placeholder Text (600 character limit).", img: "zi6fE2C.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Sandra Oikaze",
    bio: "Placeholder Text (600 character limit).", img: "4jAQmJQ.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Sarah Oikaze",
    bio: "Placeholder Text (600 character limit).", img: "8z4Swt4.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Sarah Oikaze",
    bio: "Placeholder Text (600 character limit).", img: "aYTyX67.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Theresa",
    bio: "Placeholder Text (600 character limit).", img: "w24dzO9.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Theresa",
    bio: "Placeholder Text (600 character limit).", img: "nYh5MnK.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Fehu-1",
    bio: "Placeholder Text (600 character limit).", img: "IGpmJVI.png",
    opts: { snytest: ["sny"],
      owner: ["sphe"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"]
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
    opts: { snytest: ["sny"],
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Gibor Lazarus",
    bio: "Seth's uncle figure."+
	" Direct and aggressive lion who doesn't have a high opinion with regards to humans or human-adjacents."+
	" He doesn't understand fully how magic works and functions, making him a little held back in Gensokyo given majority are magic-users."+
	" He might call a human a slur. Gays DNI if he's drunk.", img: "RYxYC9S.png",
		opts: { snytest: ["sny"],
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Seth Victor Kurosagane",
    bio: "Most Bullyable Red Mage in Existence." +
	" Overly friendly (and naive) wolf who finds Gensokyo and its people really fascinating, Outsiders or Locals." +
	" He gathers herbs for Annye to repay for the staff he owned, but also does it as a way to explore around Gensokyo." +
	" His red mage outfit is just for cosplay originally.", img: "Jpm7Ur9.png",
    opts: { snytest: ["sny"],
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Calder Scrochel",
    bio: "Placeholder Text (600 character limit).", img: "et199Lm.png",
    opts: { snytest: ["sny"],
      owner: ["syoudre"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  
  
  //=========================================
  //TRES
  //=========================================
  {
    name: "Juro",
    bio: "Placeholder Text (600 character limit).", img: "zpvpYZC.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Juro",
    bio: "Placeholder Text (600 character limit).", img: "PFVHRbL.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Kinoko",
    bio: "Placeholder Text (600 character limit).", img: "DmChAKX.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Mary",
    bio: "Placeholder Text (600 character limit).", img: "qU7qWmU.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"],
	  pack: ["p2"]
    }
  },
  {
    name: "Mary",
    bio: "Placeholder Text (600 character limit).", img: "LOD2gbc.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child","ambig"],
	  pack: ["pc"]
    }
  },
  {
    name: "Matsu",
    bio: "Placeholder Text (600 character limit).", img: "sWTHcuM.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Matsu",
    bio: "Placeholder Text (600 character limit).", img: "cWX9buA.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Minami",
    bio: "Placeholder Text (600 character limit).", img: "Z2uUQJs.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p1"]
    }
  },
  {
    name: "Minami",
    bio: "Placeholder Text (600 character limit).", img: "FkBmMQ1.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["pc"]
    }
  },
  {
    name: "Qielan-Yu",
    bio: "Placeholder Text (600 character limit).", img: "kiXmtVU.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Qielan-Yu",
    bio: "Placeholder Text (600 character limit).", img: "FI0PDAt.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Ramiel",
    bio: "Placeholder Text (600 character limit).", img: "GPuzjzv.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Tori",
    bio: "Placeholder Text (600 character limit).", img: "8JADOhM.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Tori",
    bio: "Placeholder Text (600 character limit).", img: "avSKmaQ.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Tres",
    bio: "Placeholder Text (600 character limit).", img: "IhxIQkb.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Tres",
    bio: "Placeholder Text (600 character limit).", img: "I3eH1Iw.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Uriel",
    bio: "Placeholder Text (600 character limit).", img: "4kEo2ra.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Yoneka",
    bio: "Placeholder Text (600 character limit).", img: "J9lJQdq.png",
    opts: { snytest: ["sny"],
      owner: ["tres"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  
  
  //=========================================
  //TRICKY
  //=========================================
  {
    name: "Ashley Lightman",
    bio: "Placeholder Text (600 character limit).", img: "A07c38f.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Cole Lightman",
    bio: "Placeholder Text (600 character limit).", img: "o0WLHiz.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Elithabes Schäfer",
    bio: "Placeholder Text (600 character limit).", img: "isL9jzq.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Gabriella 'Gabby' Berger",
    bio: "Placeholder Text (600 character limit).", img: "WQ8r7gU.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Hunrios Pathcrafter",
    bio: "Placeholder Text (600 character limit).", img: "eI98ysW.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Ichiyu",
    bio: "Placeholder Text (600 character limit).", img: "Z4JqcwQ.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Kikyo",
    bio: "Placeholder Text (600 character limit).", img: "aNPQ9gp.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"],
	  joke: []
    }
  },
  {
    name: "Kokawa",
    bio: "Placeholder Text (600 character limit).", img: "9UaoRzt.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["child"],
	  pack: ["p3"]
    }
  },
  {
    name: "Kosuke Suzukaze",
    bio: "Placeholder Text (600 character limit).", img: "hhPdvuM.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Kosuke Suzukaze",
    bio: "Placeholder Text (600 character limit).", img: "C32EAFm.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Mr. Signykins",
    bio: "Placeholder Text (600 character limit).", img: "S2kBlF0.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p4"],
	  joke: []
    }
  },
  {
    name: "Keizou Takamori (Mr. Deerkins)",
    bio: "Placeholder Text (600 character limit).", img: "rFVo4gY.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Keizou Takamori (Mr. Deerkins) (Human Form)",
    bio: "Placeholder Text (600 character limit).", img: "l0lfG3w.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"],
	  altform: []
    }
  },
  {
    name: "Niyu",
    bio: "Placeholder Text (600 character limit).", img: "I32q9ds.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Oliver",
    bio: "Placeholder Text (600 character limit).", img: "cMBWBBw.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Oliver",
    bio: "Placeholder Text (600 character limit).", img: "svZDcRS.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Penny Cillum",
    bio: "Placeholder Text (600 character limit).", img: "UvSI58k.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p1"]
    }
  },
  {
    name: "Ryoutarou Kiriya",
    bio: "Placeholder Text (600 character limit).", img: "f1lWCk0.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Sanyu",
    bio: "Placeholder Text (600 character limit).", img: "oaawBMr.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Shokora",
    bio: "Placeholder Text (600 character limit).", img: "MKogqNr.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Shokora",
    bio: "Placeholder Text (600 character limit).", img: "lB4WtFE.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Shuu",
    bio: "Placeholder Text (600 character limit).", img: "kdY1d2h.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["aniobj"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Tooru Uei",
    bio: "Placeholder Text (600 character limit).", img: "BPxN0Js.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Tutorial Tracy",
    bio: "Placeholder Text (600 character limit).", img: "7rAks17.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p3"],
	  nonrp: []
    }
  },
  {
    name: "Rowan 'Tricky' Gardner",
    bio: "Placeholder Text (600 character limit).", img: "4uP3Wil.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Rowan 'Tricky' Gardner",
    bio: "Placeholder Text (600 character limit).", img: "E9rkMig.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Wylda Walcott",
    bio: "Placeholder Text (600 character limit).", img: "IbVAmFM.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  },
  {
    name: "Wylda Walcott",
    bio: "Placeholder Text (600 character limit).", img: "riuIKRj.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["pc"]
    }
  },
  {
    name: "Stacy Botrys",
    bio: "Placeholder Text (600 character limit).", img: "SIaqVgY.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p5"]
    }
  },
  {
    name: "Satoru Senkaku",
    bio: "Placeholder Text (600 character limit).", img: "svW9KHB.png",
    opts: { snytest: ["sny"],
      owner: ["tricky"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  
  //=========================================
  //VEEMON
  //=========================================
  {
    name: "Myonu",
    bio: "Placeholder Text (600 character limit).", img: "WYJ2VhR.png",
    opts: { snytest: ["sny"],
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["child"],
	  pack: ["p2"]
    }
  },
  {
    name: "Stanley",
    bio: "Placeholder Text (600 character limit).", img: "cbqxqMf.png",
    opts: { snytest: ["sny"],
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Veemon",
    bio: "Placeholder Text (600 character limit).", img: "IgM3NC9.png",
    opts: { snytest: ["sny"],
      owner: ["veemon"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"],
	  pack: ["p1"]
    }
  },
  
  
  //=========================================
  //VIGOR
  //=========================================
  {
    name: "Ariel Zaccaria",
    bio: "Placeholder Text (600 character limit).", img: "5QFR1mZ.png",
    opts: { snytest: ["sny"],
      owner: ["vigor"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"],
	  legacy: []
    }
  },
  {
    name: "William 'Illia' Winton",
    bio: "Placeholder Text (600 character limit).", img: "HnDNDl5.png",
    opts: { snytest: ["sny"],
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p1"],
	  legacy: []
    }
  },
  {
    name: "Shannon Aghaveagh",
    bio: "Placeholder Text (600 character limit).", img: "9I5aRgY.png",
    opts: { snytest: ["sny"],
      owner: ["vigor"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p1"],
	  legacy: []
    }
  },
  {
    name: "Shayne Luis",
    bio: "Placeholder Text (600 character limit).", img: "W2eVjXz.png",
    opts: { snytest: ["sny"],
      owner: ["vigor"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult","ambig"],
	  pack: ["p2"],
	  legacy: []
    }
  },
  
  
  //=========================================
  //ZACK
  //=========================================
  {
    name: "Dormun Albright",
    bio: "Placeholder Text (600 character limit).", img: "dLVj6Se.png",
    opts: { snytest: ["sny"],
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Jaime Montilyet",
    bio: "Placeholder Text (600 character limit).", img: "REXUBzu.png",
    opts: { snytest: ["sny"],
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Tian Long",
    bio: "Placeholder Text (600 character limit).", img: "6QJkL5n.png",
    opts: { snytest: ["sny"],
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Riella Faust",
    bio: "Placeholder Text (600 character limit).", img: "His5OYG.png",
    opts: { snytest: ["sny"],
      owner: ["zack"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  {
    name: "Snip-Snip",
    bio: "Placeholder Text (600 character limit).", img: "vbqawXQ.png",
    opts: { snytest: ["sny"],
      owner: ["zack"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  
  
  //=========================================
  //WISH
  //=========================================
  {
    name: "Jirachi",
    bio: "Placeholder Text (600 character limit).", img: "DowggQS.png",
    opts: { snytest: ["sny"],
      owner: ["wish"],
	  gender: ["male"],
	  species: ["anthro","pokedigi"],
	  age: ["child"],
	  pack: ["p3"]
    }
  },
  {
    name: "Meema",
    bio: "Placeholder Text (600 character limit).", img: "Og1G685.png",
    opts: { snytest: ["sny"],
      owner: ["wish"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"],
	  nonrp: []
    }
  },
  {
    name: "Philia",
    bio: "Placeholder Text (600 character limit).", img: "7Jh8UDq.png",
    opts: { snytest: ["sny"],
      owner: ["wish"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  
  //=========================================
  //HAT
  //=========================================
  {
    name: "Loftaire Kuafushi",
    bio: "Placeholder Text (600 character limit).", img: "nNSKmKM.png",
    opts: { snytest: ["sny"],
      owner: ["hat"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Goutarou Furuyama",
    bio: "Placeholder Text (600 character limit).", img: "8LdwTvz.png",
    opts: { snytest: ["sny"],
      owner: ["hat"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  
  //=========================================
  //OTHERS
  //=========================================
  {
    name: "Agent",
    bio: "Placeholder Text (600 character limit).", img: "E9HyqUT.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p1"]
    }
  },
  {
    name: "Asahi",
    bio: "Placeholder Text (600 character limit).", img: "l0OE50o.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Badz",
    bio: "Placeholder Text (600 character limit).", img: "LuztfiW.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"],
	  legacy: []
    }
  },
  {
    name: "Gizmo",
    bio: "Placeholder Text (600 character limit).", img: "iobkMSU.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p2"]
    }
  }, 
  {
    name: "Medjed",
    bio: "Placeholder Text (600 character limit).", img: "qskh3Yy.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["male"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p4"],
	  joke: []
    }
  },
  {
    name: "Mercury",
    bio: "Placeholder Text (600 character limit).", img: "ezv1X3g.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p4"]
    }
  },
  {
    name: "Training Dummy",
    bio: "Placeholder Text (600 character limit).", img: "RHbz1x9.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["non"],
	  species: ["aniobj"],
	  age: ["ambig"],
	  pack: ["p4"],
	  generic: []
    }
  },
  {
    name: "Umbra",
    bio: "Placeholder Text (600 character limit).", img: "1Vo6sW6.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["male"],
	  species: ["furry"],
	  age: ["adult"],
	  pack: ["p4"],
	  legacy: []
    }
  },
  {
    name: "Van",
    bio: "Placeholder Text (600 character limit).", img: "SRtPexY.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["male"],
	  species: ["anthro"],
	  age: ["adult"],
	  pack: ["p3"]
    }
  },
  {
    name: "Yuugen",
    bio: "Placeholder Text (600 character limit).", img: "LntgMRp.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["child"],
	  pack: ["p4"],
	  legacy: []
    }
  },
  {
    name: "Sostrate",
    bio: "Placeholder Text (600 character limit).", img: "gpgSOvT.png",
    opts: { snytest: ["sny"],
      owner: ["others"],
	  gender: ["female"],
	  species: ["humanoid"],
	  age: ["adult"],
	  pack: ["p5"]
    }
  },
  
];
