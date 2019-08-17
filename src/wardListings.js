export const lookUpWard = function(address) {
    address = address.toLowerCase();
    for (let i = 0; i < wardListings.length; i++) {
        if (wardListings[i].streetName.includes(address)) {
            const ward = wardListings[i].ward;
            return ward;
        }
    }
};

export const wardListings = [{
        streetName: 'aaron st',
        ward: '5'
    },
    {
        'streetName': 'adams st',
        ward: '3'
    },
    {
        streetName: 'ainsworth pl',
        ward: '3'
    },
    {
        streetName: 'albert st',
        ward: '2 '
    },
    {
        streetName: 'albion st',
        ward: '1, 2'
    },
    {
        streetName: 'alden st',
        ward: '3'
    },
    {
        streetName: 'allen pl',
        ward: '6'
    },
    {
        streetName: 'altamont ave',
        ward: '6'
    },
    {
        streetName: 'angela cir',
        ward: '6'
    },
    {
        streetName: 'apple hill rd',
        ward: '4'
    },
    {
        streetName: 'appleton st',
        ward: '7'
    },
    {
        streetName: 'apthorp rd',
        ward: '1'
    },
    {
        streetName: 'ardsmoor rd',
        ward: '4'
    },
    {
        streetName: 'argyle st',
        ward: '7'
    },
    {
        streetName: 'arlington rd',
        ward: '2'
    },
    {
        streetName: 'arlington st',
        ward: '7'
    },
    {
        streetName: 'ash st',
        ward: '7'
    },
    {
        streetName: 'ashburton pl',
        ward: '1'
    },
    {
        streetName: 'ashcroft rd',
        ward: '6'
    },
    {
        streetName: 'ashland st',
        ward: '1'
    },
    {
        streetName: 'ashmont pk',
        ward: '5'
    },
    {
        streetName: 'ashmont st',
        ward: '5'
    },
    {
        streetName: 'atkinson te',
        ward: '5'
    },
    {
        streetName: 'auburn st',
        ward: '1'
    },
    {
        streetName: 'avon st',
        ward: '2'
    },
    {
        streetName: 'baldwin ave',
        ward: '5'
    },
    {
        streetName: 'bancroft rd',
        ward: '4'
    },
    {
        streetName: 'banks pl',
        ward: '5'
    },
    {
        streetName: 'bartlett st',
        ward: '5'
    },
    {
        streetName: 'batchelder st',
        ward: '2'
    },
    {
        streetName: 'baxter st',
        ward: '3'
    },
    {
        streetName: 'bay state rd',
        ward: '2'
    },
    {
        streetName: 'beacon pl',
        ward: '6'
    },
    {
        streetName: 'beacon st',
        ward: '7'
    },
    {
        streetName: 'beaumont st',
        ward: '5'
    },
    {
        streetName: 'beech ave',
        ward: '6, 7'
    },
    {
        streetName: 'bellevue ave',
        ward: '2, 4'
    },
    {
        streetName: 'belmont pl',
        ward: '1'
    },
    {
        streetName: 'belmont st',
        ward: '1'
    },
    {
        streetName: 'berkeley st',
        ward: '7'
    },
    {
        streetName: 'berwick pl',
        ward: '6'
    },
    {
        streetName: 'berwick st',
        ward: '6'
    },
    {
        streetName: 'beverly st',
        ward: '4'
    },
    {
        streetName: 'birch hill rd',
        ward: '7'
    },
    {
        streetName: 'black rock rd',
        ward: '5'
    },
    {
        streetName: 'boardman ave',
        ward: '2'
    },
    {
        streetName: 'boston rock rd',
        ward: '5'
    },
    {
        streetName: 'botolph st',
        ward: '1'
    },
    {
        streetName: 'bow st',
        ward: '6'
    },
    {
        streetName: 'bradford pk',
        ward: '4'
    },
    {
        streetName: 'bratley st',
        ward: '7'
    },
    {
        streetName: 'brazil st',
        ward: '5'
    },
    {
        streetName: 'briggs st',
        ward: '1'
    },
    {
        streetName: 'brookledge rd',
        ward: '6'
    },
    {
        streetName: 'brown st',
        ward: '5'
    },
    {
        streetName: 'brunswick park',
        ward: '1'
    },
    {
        streetName: 'burnett st',
        ward: '6'
    },
    {
        streetName: 'burrell st',
        ward: '2'
    },
    {
        streetName: 'cargill st',
        ward: '7'
    },
    {
        streetName: 'carlida rd',
        ward: '2'
    },
    {
        streetName: 'cass st',
        ward: '6'
    },
    {
        streetName: 'cedarwood ln',
        ward: '6'
    },
    {
        streetName: 'central ter',
        ward: '6 '
    },
    {
        streetName: 'charles st',
        ward: '3 '
    },
    {
        streetName: 'cherry st',
        ward: '6'
    },
    {
        streetName: 'chester st',
        ward: '3'
    },
    {
        streetName: 'chestnut pk',
        ward: '6'
    },
    {
        streetName: 'chestnut st',
        ward: '5, 6'
    },
    {
        streetName: 'chipman ave',
        ward: '1'
    },
    {
        streetName: 'chipman ter',
        ward: '1'
    },
    {
        streetName: 'church st',
        ward: '7'
    },
    {
        streetName: 'circuit st',
        ward: '3'
    },
    {
        streetName: 'clarendon st',
        ward: '7'
    },
    {
        streetName: 'cleveland st',
        ward: '3'
    },
    {
        streetName: 'cliff rd',
        ward: '7'
    },
    {
        streetName: 'cliff st',
        ward: '1'
    },
    {
        streetName: 'clifford st',
        ward: '2'
    },
    {
        streetName: 'clifton pk',
        ward: '1'
    },
    {
        streetName: 'clifton pk ct',
        ward: '1'
    },
    {
        streetName: 'clinton rd',
        ward: '5'
    },
    {
        streetName: 'clover cir',
        ward: '3'
    },
    {
        streetName: 'cochrane st',
        ward: '2'
    },
    {
        streetName: 'colby ter',
        ward: '3'
    },
    {
        streetName: 'conant rd',
        ward: '3'
    },
    {
        streetName: 'conrad rd',
        ward: '2'
    },
    {
        streetName: 'converse ln',
        ward: '5'
    },
    {
        streetName: 'coolidge rd',
        ward: '2'
    },
    {
        streetName: 'corner st',
        ward: '2'
    },
    {
        streetName: 'cottage pk',
        ward: '3'
    },
    {
        streetName: 'cottage st',
        ward: '3, 5'
    },
    {
        streetName: 'country club rd',
        ward: '2, 4'
    },
    {
        streetName: 'cranmore ln',
        ward: '2'
    },
    {
        streetName: 'cranmore st',
        ward: '2'
    },
    {
        streetName: 'crescent ave',
        ward: '5'
    },
    {
        streetName: 'crescent pl',
        ward: '6'
    },
    {
        streetName: 'crest ave',
        ward: '3'
    },
    {
        streetName: 'cricklewood ln',
        ward: '6'
    },
    {
        streetName: 'crystal st',
        ward: '4'
    },
    {
        streetName: 'cumner ave',
        ward: '6,7'
    },
    {
        streetName: 'cushing cir',
        ward: '6'
    },
    {
        streetName: 'cutter st',
        ward: '3'
    },
    {
        streetName: 'cypress pk',
        ward: '4'
    },
    {
        streetName: 'damon ave',
        ward: '2'
    },
    {
        streetName: 'dartmouth rd',
        ward: '4'
    },
    {
        streetName: 'day st',
        ward: '1'
    },
    {
        streetName: 'dell ave',
        ward: '6'
    },
    {
        streetName: 'derby rd',
        ward: '5'
    },
    {
        streetName: 'dexter rd',
        ward: '7'
    },
    {
        streetName: 'dyer ave',
        ward: '1'
    },
    {
        streetName: 'e emerson st',
        ward: '4'
    },
    {
        streetName: 'e foster st',
        ward: '6'
    },
    {
        streetName: 'e highland ave',
        ward: '2'
    },
    {
        streetName: 'east st',
        ward: '4'
    },
    {
        streetName: 'e wyoming ave',
        ward: '5, 6'
    },
    {
        streetName: 'echo st',
        ward: '7'
    },
    {
        streetName: 'edgemere st',
        ward: '7'
    },
    {
        streetName: 'edmund st',
        ward: '7'
    },
    {
        streetName: 'elliott st',
        ward: '7'
    },
    {
        streetName: 'ellis farm ln',
        ward: '4'
    },
    {
        streetName: 'ells ave',
        ward: '2'
    },
    {
        streetName: 'ellsworth ave',
        ward: '1'
    },
    {
        streetName: 'ellwood rd',
        ward: '1'
    },
    {
        streetName: 'elm st',
        ward: '2'
    },
    {
        streetName: 'elmcrest cir',
        ward: '4'
    },
    {
        streetName: 'emerson pl',
        ward: '4'
    },
    {
        streetName: 'enmore rd',
        ward: '4'
    },
    {
        streetName: 'essex st',
        ward: '4, 6'
    },
    {
        streetName: 'everett st',
        ward: '5'
    },
    {
        streetName: 'fairfield ave',
        ward: '7'
    },
    {
        streetName: 'fairmount st',
        ward: '7 '
    },
    {
        streetName: 'fairview ave',
        ward: '2'
    },
    {
        streetName: 'farwell ave',
        ward: '2'
    },
    {
        streetName: 'faulkner pl',
        ward: '6'
    },
    {
        streetName: 'faxon st',
        ward: '7'
    },
    {
        streetName: 'felicia rd',
        ward: '3'
    },
    {
        streetName: 'fellsview ter',
        ward: '5'
    },
    {
        streetName: 'fellsway east',
        ward: '5'
    },
    {
        streetName: 'felton pl',
        ward: '4'
    },
    {
        streetName: 'ferdinand st',
        ward: '1'
    },
    {
        streetName: 'fields ct',
        ward: '6'
    },
    {
        streetName: 'first st',
        ward: '4, 6'
    },
    {
        streetName: 'florence ave',
        ward: '7'
    },
    {
        streetName: 'florence st',
        ward: '3'
    },
    {
        streetName: 'forest st',
        ward: '7'
    },
    {
        streetName: 'frances st',
        ward: '5'
    },
    {
        streetName: 'franklin st',
        ward: '1, 2'
    },
    {
        streetName: 'franklin ter',
        ward: '1'
    },
    {
        streetName: 'frost ave',
        ward: '2'
    },
    {
        streetName: 'garden st',
        ward: '1'
    },
    {
        streetName: 'garfield rd',
        ward: '4'
    },
    {
        streetName: 'garland st',
        ward: '3'
    },
    {
        streetName: 'geneva rd',
        ward: '6'
    },
    {
        streetName: 'gibbons st',
        ward: '5, 7'
    },
    {
        streetName: 'glen ave',
        ward: '7'
    },
    {
        streetName: 'glen rd',
        ward: '1'
    },
    {
        streetName: 'glen st',
        ward: '3'
    },
    {
        streetName: 'glendale ave',
        ward: '2'
    },
    {
        streetName: 'glendower rd',
        ward: '7'
    },
    {
        streetName: 'gooch st',
        ward: '4, 6'
    },
    {
        streetName: 'goodyear ave',
        ward: '5'
    },
    {
        streetName: 'goss ave',
        ward: '7'
    },
    {
        streetName: 'gould st',
        ward: '5'
    },
    {
        streetName: 'grandview ave',
        ward: '7'
    },
    {
        streetName: 'granite st',
        ward: '6'
    },
    {
        streetName: 'green st',
        ward: '2, 4'
    },
    {
        streetName: 'greenleaf pl',
        ward: '2'
    },
    {
        streetName: 'greenwood st',
        ward: '1'
    },
    {
        streetName: 'greystone rd',
        ward: '4'
    },
    {
        streetName: 'grove pl',
        ward: '7'
    },
    {
        streetName: 'grove st',
        ward: '6, 7'
    },
    {
        streetName: 'groveland rd',
        ward: '5'
    },
    {
        streetName: 'hancock st',
        ward: '7'
    },
    {
        streetName: 'harding ct',
        ward: '2'
    },
    {
        streetName: 'harding rd',
        ward: '2'
    },
    {
        streetName: 'harold st',
        ward: '7'
    },
    {
        streetName: 'harrison st',
        ward: '1'
    },
    {
        streetName: 'harvard st',
        ward: '7'
    },
    {
        streetName: 'haskell st',
        ward: '2'
    },
    {
        streetName: 'haverhill pl',
        ward: '2'
    },
    {
        streetName: 'hawes ave',
        ward: '2'
    },
    {
        streetName: 'hawley rd',
        ward: '2'
    },
    {
        streetName: 'hawthorne st',
        ward: '7'
    },
    {
        streetName: 'hemenway ave',
        ward: '7'
    },
    {
        streetName: 'henry ave',
        ward: '1'
    },
    {
        streetName: 'herbert st',
        ward: '6'
    },
    {
        streetName: 'hesseltine ave',
        ward: '2'
    },
    {
        streetName: 'heywood ave',
        ward: '2'
    },
    {
        streetName: 'hickory st',
        ward: '7'
    },
    {
        streetName: 'highview ave',
        ward: '6'
    },
    {
        streetName: 'hillcrest ave',
        ward: '4'
    },
    {
        streetName: 'hillside ave',
        ward: '4'
    },
    {
        streetName: 'hillside pk',
        ward: '7'
    },
    {
        streetName: 'holbrook ct',
        ward: '2'
    },
    {
        streetName: 'holland rd',
        ward: '3'
    },
    {
        streetName: 'hopkins st',
        ward: '7'
    },
    {
        streetName: 'howard st',
        ward: '2'
    },
    {
        streetName: 'howard st',
        ward: '2'
    },
    {
        streetName: 'howie st',
        ward: '1'
    },
    {
        streetName: 'hunnewell st',
        ward: '6'
    },
    {
        streetName: 'hunt ter',
        ward: '7'
    },
    {
        streetName: 'hurd st',
        ward: '3  '
    },
    {
        streetName: 'indian hill ln',
        ward: '4'
    },
    {
        streetName: 'ingalls ct',
        ward: '4'
    },
    {
        streetName: 'ireson ct',
        ward: '7'
    },
    {
        streetName: 'irving st',
        ward: '7'
    },
    {
        streetName: 'island hill ave',
        ward: '5'
    },
    {
        streetName: 'keniston rd',
        ward: '2'
    },
    {
        streetName: 'kenmore rd',
        ward: '2'
    },
    {
        streetName: 'kingsley ave',
        ward: '5'
    },
    {
        streetName: 'lake ave',
        ward: '4'
    },
    {
        streetName: 'lakecroft ct',
        ward: '4'
    },
    {
        streetName: 'larchmont rd',
        ward: '2, 4'
    },
    {
        streetName: 'larrabee st',
        ward: '6'
    },
    {
        streetName: 'laurel st',
        ward: '6'
    },
    {
        streetName: 'leah st',
        ward: '7'
    },
    {
        streetName: 'lebanon st',
        ward: '4, 6'
    },
    {
        streetName: 'lebanon st',
        ward: '7'
    },
    {
        streetName: 'ledge st',
        ward: '2'
    },
    {
        streetName: 'ledgewood ave',
        ward: '5'
    },
    {
        streetName: 'leonard rd',
        ward: '6'
    },
    {
        streetName: 'lincoln st',
        ward: '2, 4'
    },
    {
        streetName: 'linden rd',
        ward: '2'
    },
    {
        streetName: 'linwood ave',
        ward: '7'
    },
    {
        streetName: 'lodge ave',
        ward: '5'
    },
    {
        streetName: 'longfellow rd',
        ward: '3'
    },
    {
        streetName: 'lovell rd',
        ward: '2'
    },
    {
        streetName: 'lynde ave',
        ward: '3'
    },
    {
        streetName: 'lynde st',
        ward: '3, 6, 7'
    },
    {
        streetName: 'lynn fells pky',
        ward: '1, 2, 3, 4'
    },
    {
        streetName: 'magnolia rd',
        ward: '4'
    },
    {
        streetName: 'main st',
        ward: '1, 2, 4, 5, 6'
    },
    {
        streetName: 'malvern st',
        ward: '7'
    },
    {
        streetName: 'maple grove st',
        ward: '7'
    },
    {
        streetName: 'maple rd',
        ward: '1'
    },
    {
        streetName: 'maple st',
        ward: '3'
    },
    {
        streetName: 'maple ter',
        ward: '7'
    },
    {
        streetName: 'marmion rd',
        ward: '2, 4'
    },
    {
        streetName: 'martin st',
        ward: '3'
    },
    {
        streetName: 'marvin rd',
        ward: '1'
    },
    {
        streetName: 'meacham st',
        ward: '7'
    },
    {
        streetName: 'meadowview rd',
        ward: '4'
    },
    {
        streetName: 'melbourne ave',
        ward: '3'
    },
    {
        streetName: 'melrose st',
        ward: '1, 2, 4'
    },
    {
        streetName: 'mendum st',
        ward: '1'
    },
    {
        streetName: 'meridian st',
        ward: '7'
    },
    {
        streetName: 'messenger ct',
        ward: '1'
    },
    {
        streetName: 'mill rd',
        ward: '6'
    },
    {
        streetName: 'montvale st',
        ward: '5'
    },
    {
        streetName: 'mooreland rd',
        ward: '4'
    },
    {
        streetName: 'morgan st',
        ward: '1'
    },
    {
        streetName: 'mt hood ter',
        ward: '6'
    },
    {
        streetName: 'mt vernon ave',
        ward: '5'
    },
    {
        streetName: 'mt vernon st',
        ward: '5'
    },
    {
        streetName: 'mt zion rd',
        ward: '2'
    },
    {
        streetName: 'myrtle st',
        ward: '4, 6'
    },
    {
        streetName: 'mystic ave',
        ward: '5, 7'
    },
    {
        streetName: 'naples rd',
        ward: '7'
    },
    {
        streetName: 'nason dr',
        ward: '1'
    },
    {
        streetName: 'natalie ave',
        ward: '1'
    },
    {
        streetName: 'nelson rd',
        ward: '2'
    },
    {
        streetName: 'newburyport tpk',
        ward: '6'
    },
    {
        streetName: 'nordic way',
        ward: '7'
    },
    {
        streetName: 'norman rd',
        ward: '4'
    },
    {
        streetName: 'norris ct',
        ward: '7'
    },
    {
        streetName: 'north ave',
        ward: '1'
    },
    {
        streetName: 'north cedar pk',
        ward: '3'
    },
    {
        streetName: 'north forest st',
        ward: '7'
    },
    {
        streetName: 'north high st',
        ward: '3'
    },
    {
        streetName: 'north mountain ave',
        ward: '7'
    },
    {
        streetName: 'nowell rd',
        ward: '1'
    },
    {
        streetName: 'oak grove ave',
        ward: '5'
    },
    {
        streetName: 'oak st',
        ward: '6'
    },
    {
        streetName: 'oakland st',
        ward: '3'
    },
    {
        streetName: 'old brook cir',
        ward: '2'
    },
    {
        streetName: 'orchard ln',
        ward: '4'
    },
    {
        streetName: 'orient ave',
        ward: '4'
    },
    {
        streetName: 'orient pl',
        ward: '4'
    },
    {
        streetName: 'orris pl',
        ward: '1'
    },
    {
        streetName: 'orris st',
        ward: '1'
    },
    {
        streetName: 'otis st',
        ward: '3'
    },
    {
        streetName: 'owego pk',
        ward: '3'
    },
    {
        streetName: 'oxford st',
        ward: '7'
    },
    {
        streetName: 'park st',
        ward: '7'
    },
    {
        streetName: 'parker st',
        ward: '4'
    },
    {
        streetName: 'patriot way',
        ward: '7'
    },
    {
        streetName: 'pearl st',
        ward: '2'
    },
    {
        streetName: 'pebble rd',
        ward: '5'
    },
    {
        streetName: 'penney hill rd',
        ward: '7'
    },
    {
        streetName: 'penney rd',
        ward: '6, 7'
    },
    {
        streetName: 'perham ave',
        ward: '6'
    },
    {
        streetName: 'perkins st',
        ward: '1'
    },
    {
        streetName: 'philip cir',
        ward: '6'
    },
    {
        streetName: 'philpot ter',
        ward: '6'
    },
    {
        streetName: 'pilgrim rd',
        ward: '3'
    },
    {
        streetName: 'pine st',
        ward: '3'
    },
    {
        streetName: 'pleasant st',
        ward: '5'
    },
    {
        streetName: 'plymouth cir',
        ward: '6'
    },
    {
        streetName: 'poplar st',
        ward: '3'
    },
    {
        streetName: 'porter st',
        ward: '2, 4'
    },
    {
        streetName: 'potter st',
        ward: '7'
    },
    {
        streetName: 'pratt st',
        ward: '1'
    },
    {
        streetName: 'prescott st',
        ward: '7'
    },
    {
        streetName: 'prospect st',
        ward: '3'
    },
    {
        streetName: 'radcliffe rd',
        ward: '7'
    },
    {
        streetName: 'ravine rd',
        ward: '3'
    },
    {
        streetName: 'ravine ter',
        ward: '3'
    },
    {
        streetName: 'reading hill ave',
        ward: '2'
    },
    {
        streetName: 'rendall pl',
        ward: '7'
    },
    {
        streetName: 'renwick rd',
        ward: '1'
    },
    {
        streetName: 'richardson rd',
        ward: '1'
    },
    {
        streetName: 'ridgewood ln',
        ward: '6'
    },
    {
        streetName: 'rivers ln',
        ward: '4'
    },
    {
        streetName: 'rockland ct',
        ward: '1'
    },
    {
        streetName: 'rockland st',
        ward: '1'
    },
    {
        streetName: 'rockview ave',
        ward: '5'
    },
    {
        streetName: 'rockwood st',
        ward: '5'
    },
    {
        streetName: 'rowe st',
        ward: '4'
    },
    {
        streetName: 'ruggles st',
        ward: '2'
    },
    {
        streetName: 'russell st',
        ward: '3, 5'
    },
    {
        streetName: 'russet ln',
        ward: '4'
    },
    {
        streetName: 'ryder ave',
        ward: '5, 7'
    },
    {
        streetName: 'sanford st',
        ward: '3'
    },
    {
        streetName: 'sargent st',
        ward: '1'
    },
    {
        streetName: 'sawyer rd',
        ward: '4'
    },
    {
        streetName: 'school st',
        ward: '4'
    },
    {
        streetName: 'sears ave',
        ward: '1'
    },
    {
        streetName: 'sewall st',
        ward: '4, 6'
    },
    {
        streetName: 'sewall woods rd',
        ward: '1'
    },
    {
        streetName: 'shadow rd',
        ward: '5'
    },
    {
        streetName: 'sharon rd',
        ward: '4'
    },
    {
        streetName: 'sheffield rd',
        ward: '4'
    },
    {
        streetName: 'sherman rd',
        ward: '1'
    },
    {
        streetName: 'sherwood rd',
        ward: '4'
    },
    {
        streetName: 'short st',
        ward: '4'
    },
    {
        streetName: 'sibley st',
        ward: '3'
    },
    {
        streetName: 'simonds rd',
        ward: '6'
    },
    {
        streetName: 'sixth st',
        ward: '6'
    },
    {
        streetName: 'slayton rd',
        ward: '6'
    },
    {
        streetName: 'south ave',
        ward: '1'
    },
    {
        streetName: 'south cedar pk',
        ward: '3'
    },
    {
        streetName: 'south high st',
        ward: '3'
    },
    {
        streetName: 'south mountain ave',
        ward: '7'
    },
    {
        streetName: 'spear st',
        ward: '7'
    },
    {
        streetName: 'standish rd',
        ward: '3'
    },
    {
        streetName: 'staples st',
        ward: '7'
    },
    {
        streetName: 'starbird st',
        ward: '2'
    },
    {
        streetName: 'stevens pl',
        ward: '6'
    },
    {
        streetName: 'stevens rd',
        ward: '1'
    },
    {
        streetName: 'stillman rd',
        ward: '6 '
    },
    {
        streetName: 'stone pl',
        ward: '5'
    },
    {
        streetName: 'stowecroft rd',
        ward: '2'
    },
    {
        streetName: 'stratford rd',
        ward: '4'
    },
    {
        streetName: 'stratford rd',
        ward: '4'
    },
    {
        streetName: 'summer st',
        ward: '5, 6, 7'
    },
    {
        streetName: 'summit ave',
        ward: '1'
    },
    {
        streetName: 'sunset rd',
        ward: '2'
    },
    {
        streetName: 'swains pd ave',
        ward: '6, 7'
    },
    {
        streetName: 'sycamore rd',
        ward: '6'
    },
    {
        streetName: 'sylvan st',
        ward: '5, 7'
    },
    {
        streetName: 'tappan st',
        ward: '3'
    },
    {
        streetName: 'taylor st',
        ward: '1'
    },
    {
        streetName: 'temple st',
        ward: '7'
    },
    {
        streetName: 'thirteenth st',
        ward: '6'
    },
    {
        streetName: 'thurston rd',
        ward: '2'
    },
    {
        streetName: 'tremont st',
        ward: '1, 4'
    },
    {
        streetName: 'trenton st',
        ward: '3, 5'
    },
    {
        streetName: 'union st',
        ward: '1'
    },
    {
        streetName: 'upham st',
        ward: '4, 6'
    },
    {
        streetName: 'upham ter',
        ward: '4'
    },
    {
        streetName: 'upland rd',
        ward: '1'
    },
    {
        streetName: 'vine st',
        ward: '4'
    },
    {
        streetName: 'vinton st',
        ward: '1, 3, 4'
    },
    {
        streetName: 'virginia ave',
        ward: '2'
    },
    {
        streetName: 'vista st',
        ward: '6'
    },
    {
        streetName: 'volpe way',
        ward: '1'
    },
    {
        streetName: 'walnut st',
        ward: '7'
    },
    {
        streetName: 'walton pk',
        ward: '1'
    },
    {
        streetName: 'warren st',
        ward: '1'
    },
    {
        streetName: 'warwick rd',
        ward: '1'
    },
    {
        streetName: 'washington st',
        ward: '3, 5'
    },
    {
        streetName: 'water st',
        ward: '6'
    },
    {
        streetName: 'waverly ave',
        ward: '6'
    },
    {
        streetName: 'waverly pl',
        ward: '5'
    },
    {
        streetName: 'wentworth rd',
        ward: '3'
    },
    {
        streetName: 'w emerson st',
        ward: '3, 4'
    },
    {
        streetName: 'w foster st',
        ward: '3'
    },
    {
        streetName: 'w foster st',
        ward: '6'
    },
    {
        streetName: 'w highland ave',
        ward: '1'
    },
    {
        streetName: 'w hill ave',
        ward: '1'
    },
    {
        streetName: 'w hill ter',
        ward: '1'
    },
    {
        streetName: 'w st',
        ward: '2'
    },
    {
        streetName: 'w wyoming ave',
        ward: '3, 5, 6'
    },
    {
        streetName: 'wheeler ave',
        ward: '6'
    },
    {
        streetName: 'whitman ave',
        ward: '7'
    },
    {
        streetName: 'whittier st',
        ward: '3'
    },
    {
        streetName: 'whitwell st',
        ward: '7'
    },
    {
        streetName: 'wildwood rd',
        ward: '4'
    },
    {
        streetName: 'willard st',
        ward: '7'
    },
    {
        streetName: 'willow park',
        ward: '6'
    },
    {
        streetName: 'willow st',
        ward: '4'
    },
    {
        streetName: 'willow st',
        ward: '6'
    },
    {
        streetName: 'windsor st',
        ward: '2'
    },
    {
        streetName: 'winter pl',
        ward: '6 '
    },
    {
        streetName: 'winter st',
        ward: '6'
    },
    {
        streetName: 'winter st ext',
        ward: '6'
    },
    {
        streetName: 'winthrop st',
        ward: '4'
    },
    {
        streetName: 'woodcrest dr',
        ward: '4'
    },
    {
        streetName: 'woodland ave',
        ward: '1'
    },
    {
        streetName: 'woodruff ave',
        ward: '5'
    },
    {
        streetName: 'worth st',
        ward: '7'
    },
    {
        streetName: 'wyoming hts',
        ward: '5'
    },
    {
        streetName: 'wyoming ter',
        ward: '5'
    },
    {
        streetName: 'york ter',
        ward: '1'
    },
    {
        streetName: 'youle st',
        ward: '1, 3'
    }
];