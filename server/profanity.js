// Profanity filter — replaces severe swear words with "beep".
// Mild language (damn, hell, crap, ass, dang, etc.) is intentionally allowed.

const BAD_WORDS = [
    // f-word and variants
    "fuck", "f+u+c+k", "fuk", "fvck", "fck", "fucc", "fucks", "fucking",
    "fucked", "fucker", "fuckers", "fuckface", "fuckhead", "motherfuck",
    "motherfucker", "motherfucking", "mf",
    // s-word and variants
    "shit", "sh1t", "shyt", "shiit", "shits", "shitting", "shitty",
    "bullshit", "horseshit",
    // c-word (slur)
    "cunt", "cunts",
    // b-word
    "bitch", "biatch", "b1tch", "bitches", "bitching",
    // d-word (anatomical slur)
    "dick", "d1ck", "dicks", "dickhead",
    // c-word (anatomical)
    "cock", "c0ck", "cocks", "cocksucker",
    // p-word (slur)
    "pussy", "pussies",
    // w-word
    "whore", "wh0re", "whores",
    // n-word (hard r and soft)
    "nigger", "niggers", "nigga", "niggas",
    // other slurs
    "faggot", "fag", "fags", "faggots",
    "retard", "retarded", "retards",
    "kike", "chink", "spic", "wetback", "tranny",
    // combinations
    "asshole", "assholes", "asswipe", "asshat",
    "bastard", "bastards",
    "twat", "twats",
    "wanker", "wankers", "wank",
    "prick", "pricks",
    "cumshot", "cum", "jizz",
];

// Build one combined regex with word boundaries, case-insensitive
const pattern = new RegExp(
    '\\b(' + BAD_WORDS.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b',
    'gi'
);

function filter(text) {
    return text.replace(pattern, 'beep');
}

module.exports = { filter };
