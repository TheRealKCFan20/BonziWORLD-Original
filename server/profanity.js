// This is the profanity filter. Profanity filter replaces severe swear words with "beep".
// Mild language is (intentionally) allowed.

const BAD_WORDS = [
    // f-word and variants
    "fuck", "f+u+c+k", "fuk", "fvck", "fck", "fucc", "fucks", "fucking",
    "fucked", "fucker", "fuckers", "fuckface", "fuckhead", "motherfuck", "motherfucka", "motherfuckaz", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings",
    "motherfucker", "motherfucking", "motherfuckings", "motherfucked", "motherfucks", "mf", "mfs", "motherfck", "motherfcker", "motherfcks", "motherfckers", "motherfvck", "motherfvcked", "motherfvcker", "motherfvcking", "motherfvckings", "motherfvcks", "motherfvckers", "motherfvcka", "motherfvckaz",  "motherfvckin", "motherfucc", "motherfucced", "motherfuccing", "motherfuccer", "motherfuccers", "motherfuccs", "motherfucca", "motherfuccaz", "motherfuckin", "motherfuccings",
    // s-word and variants
    "shit", "sh1t", "shyt", "shiit", "shits", "shitting", "shitty",
    "bullshit", "horseshit",
    // c-word (slur)
    "cunt", "cunts", "cunting", "cuntings",
    // b-word
    "bitch", "biatch", "b1tch", "bitches", "bitching",
    // d-word (anatomical slur)
    "dick", "d1ck", "dicks", "dickhead",
    // c-word (anatomical)
    "cock", "c0ck", "cocks", "cocksucker",
    // p-word (slur)
    "pussy", "pussies", "pussing", "pussings",
    // w-word
    "whore", "wh0re", "whores", "wh0res",
    // n-word (hard r and soft)
    "nigger", "niggers", "nigga", "niggas", "niggering", "niggerings", "niggaing", "niggaings", "nigging", "niggings", "nigged", "niggaeds",
    // other slurs
    "faggot", "fag", "fags", "faggots",
    "retard", "retarded", "retards",
    "kike", "chink", "spic", "wetback", "tranny", "rape",
    // combinations
    "asshole", "assholes", "asswipe", "asshat", "assholer", "assholers", "asswiper", "asswipers", "asshater", "asshaters", "assholing", "assholings", "asswiping", "asswipings", "asshating", "asshatings", "assholed", "asswiped", "asswipes", "asshats", "asshated",
    "bastard", "bastards", "bitchass", "bitchasses", "bitchassing", "bitchassings", "bitchassed", "bitcher", "bitchers", "gayass", "gayasses", "gayassing", "gayassed", "gayassings",
    "twat", "twats", "twating", "twatings", "twated", "twater", "twaters",
    "wanker", "wankers", "wank",
    "prick", "pricks",
    "cumshot", "cum", "cuming", "cums", "cumings", "jizz",
    "kiko", "kikos", "kys", "pedo", "pedos", "pedoing", "pedoings", "pedoed", "pedophile", "pedophiled", "pedophiling", "pedophilings",
"k1ll", "k!ll", "k!lling", "k1lling", "k!llings", "k1llings", "k!lls", "k1lls", "k!lled", "k1lled",
"k1ko", "k1k0", "k1kos", "k1k0s", "k1koer", "k1koers", "k1k0er", "k1k3", "k1k3s", "kikoer", "kikoers", "kikos", "nig er", "nig ers", "nig ering", "nig erings", "nyg er", "nyg ers", "nyg ering", "nyg erings", "nig ered", "nyg ered", "nygga", "nyggas", "nygging", "nyggings", "nygged", "ny gga", "ny ggas", "ny gging", "ny ggings", "ny gged", "nyggr",
];

// Build one combined regex with word boundaries, case-insensitive
const pattern = new RegExp(
    '\\b(' + BAD_WORDS.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b',
    'gi'
);
const murderWordPattern = /\bkill\b/gi;
const dunkWordPattern = /\bpiss\b/gi;
const dunkingWordPattern = /\bpissing\b/gi;
const dunkedWordPattern = /\bpissed\b/gi;
const dunksWordPattern = /\bpisses\b/gi;
const allofyouWordPattern = /\bmoron\b/gi;
const NumberPattern = /\b6 7\b/gi;
const skillissuePattern = /\bkys\b/gi;
const anotherskillissuePattern = /\bkill yourself\b/gi;
const AnotherNumberPattern = /\b67\b/gi;
const AnotherNumberPatternAgain = /\b61\b/gi;
const getdunkedoffPattern = /\bno fuck off\b/gi;

function filter(text) {
    return text
        .replace(getdunkedoffPattern, 'get dunked off')
        .replace(AnotherNumberPatternAgain, '21')
        .replace(AnotherNumberPattern, '21')
        .replace(anotherskillissuePattern, 'skill issue')
        .replace(skillissuePattern, 'skill issue')
        .replace(NumberPattern, '21')
        .replace(allofyouWordPattern, 'all of you')
        .replace(dunksWordPattern, 'dunks')
        .replace(dunkedWordPattern, 'dunked')
        .replace(dunkingWordPattern, 'dunking')
        .replace(dunkWordPattern, 'dunk')
        .replace(murderWordPattern, 'murder')
        .replace(pattern, 'beep');
}

module.exports = { filter };
