import shuffle from 'lodash/shuffle';

const wordBank = ["account", "act", "addition", "adjustment", "advertisement", "agreement", 
"air", "amount", "amusement", "animal", "answer", "apparatus", "approval", "argument", "art",
  "attack", "attempt", "attention", "attraction", "authority", "back", "balance", "base",
   "behavior", "belief", "birth", "bit", "bite", "blood", "blow", "body", "brass", "bread",
    "breath", "brother", "building", "burn", "burst", "business", "butter", "canvas", "care",
     "cause", "chalk", "chance", "change", "cloth", "coal", "color", "comfort", "committee",
      "company", "comparison", "competition", "condition", "connection", "control", "cook",
       "copper", "copy", "cork", "cotton", "cough", "country", "cover", "crack", "credit",
        "crime", "crush", "cry", "current", "curve", "damage", "danger", "daughter", "day",
         "death", "debt", "decision", "degree", "design", "desire", "destruction", "detail",
          "development", "digestion", "direction", "discovery", "discussion", "disease", "disgust",
           "distance", "distribution", "division", "doubt", "drink", "driving", "dust", "earth",
            "edge", "education", "effect", "end", "error", "event", "example", "exchange", "existence",
             "expansion", "experience", "expert", "fact", "fall", "family", "father", "fear", "feeling",
              "fiction", "field", "fight", "fire", "flame", "flight", "flower", "fold", "food", "force",
               "form", "friend", "front", "fruit"];

export const getWordBank = () => shuffle(wordBank);