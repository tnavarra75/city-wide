export const lookUpWard = function(address) {
    address = address.toLowerCase().split(' ')[0];
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
        streetName: 'adams st',
        ward: '3'
    },
    {
        streetName: 'ainsworth pl',
        ward: '3'
    },
    {
        streetName: 'albert st',
        ward: '2'
    },
    {
        streetName: 'albion st',
        ward: '1'
    },
    {
        streetName: 'albion st',
        ward: '2'
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
        streetName: 'ashmont park',
        ward: '5'
    },
    {
        streetName: 'ashmont st',
        ward: '5'
    },
    {
        streetName: 'atkinson ter',
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
        ward: '6'
    },
    {
        streetName: 'beech ave',
        ward: '7'
    },
    {
        streetName: 'beech ave',
        ward: '7'
    },
    {
        streetName: 'bellevue ave',
        ward: '2'
    },
    {
        streetName: 'bellevue ave',
        ward: '4'
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
        streetName: 'bradford park',
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
        ward: '6'
    },
    {
        streetName: 'charles st',
        ward: '3'
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
        streetName: 'chestnut park',
        ward: '6'
    },
    {
        streetName: 'chestnut st',
        ward: '5'
    },
    {
        streetName: 'chestnut st',
        ward: '6'
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
        streetName: 'clifton park',
        ward: '1'
    },
    {
        streetName: 'clifton park',
        ward: '1'
    },
    {
        streetName: 'clifton park ct',
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
        streetName: 'cottage park',
        ward: '3'
    },
    {
        streetName: 'cottage st',
        ward: '3'
    },
    {
        streetName: 'cottage st',
        ward: '5'
    },
    {
        streetName: 'country club rd',
        ward: '2'
    },
    {
        streetName: 'country club rd',
        ward: '4'
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
        streetName: 'forest st',
        ward: '7'
    },
    {
        streetName: 'frances st',
        ward: '5'
    },
    {
        streetName: 'franklin st',
        ward: '1'
    },
    {
        streetName: 'franklin st',
        ward: '1'
    },
    {
        streetName: 'franklin st',
        ward: '2'
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
        ward: '5'
    },
    {
        streetName: 'gibbons st',
        ward: '7'
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
        ward: '4'
    },
    {
        streetName: 'gooch st',
        ward: '6'
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
        ward: '2'
    },
    {
        streetName: 'green st',
        ward: '2'
    },
    {
        streetName: 'green st',
        ward: '4'
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
        ward: '6'
    },
    {
        streetName: 'grove st',
        ward: '6'
    },
    {
        streetName: 'grove st',
        ward: '7'
    },
    {
        streetName: 'grove st',
        ward: '7'
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
        streetName: 'main st',
        ward: '2'
    },
    {
        streetName: 'main st',
        ward: '2'
    },
    {
        streetName: 'main st',
        ward: '4'
    },
    {
        streetName: 'main st',
        ward: '5'
    },
    {
        streetName: 'main st',
        ward: '6'
    },
    {
        streetName: 'malvern st',
        ward: '7'
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
        streetName: 'maple st',
        ward: '3'
    },
    {
        streetName: 'maple ter',
        ward: '7'
    },
    {
        streetName: 'marmion rd',
        ward: '2'
    },
    {
        streetName: 'marmion rd',
        ward: '4'
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
        ward: '1'
    },
    {
        streetName: 'melrose st',
        ward: '1'
    },
    {
        streetName: 'melrose st',
        ward: '2'
    },
    {
        streetName: 'melrose st',
        ward: '4'
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
        streetName: 'mount hood ter',
        ward: '6'
    },
    {
        streetName: 'mount vernon ave',
        ward: '5'
    },
    {
        streetName: 'mount vernon st',
        ward: '5'
    },
    {
        streetName: 'mount zion rd',
        ward: '2'
    },
    {
        streetName: 'myrtle st',
        ward: '4'
    },
    {
        streetName: 'myrtle st',
        ward: '6'
    },
    {
        streetName: 'mystic ave',
        ward: '5'
    },
    {
        streetName: 'mystic ave',
        ward: '7'
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
        streetName: 'russet ln',
        ward: '4'
    },
    {
        streetName: 'ryder ave',
        ward: '5'
    },
    {
        streetName: 'ryder ave',
        ward: '7'
    },
    {
        streetName: 'sanford st',
        ward: '3'
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
        ward: '4'
    },
    {
        streetName: 'sewall st',
        ward: '6'
    },
    {
        streetName: 'sewall woods rd',
        ward: 'i'
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
        streetName: 'south cedar park',
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
        streetName: 'south mountain ave',
        ward: '7'
    },
    {
        streetName: 'spear st',
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
        ward: '6'
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
        ward: '5'
    },
    {
        streetName: 'summer st',
        ward: '6'
    },
    {
        streetName: 'summer st',
        ward: '7'
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
        streetName: 'swains pond ave',
        ward: '6'
    },
    {
        streetName: 'swains pond ave',
        ward: '7'
    },
    {
        streetName: 'sycamore rd',
        ward: '6'
    },
    {
        streetName: 'sylvan st',
        ward: '5'
    },
    {
        streetName: 'sylvan st',
        ward: '7'
    },
    {
        streetName: 'tappan st',
        ward: '3'
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
        streetName: 'winter st',
        ward: '6'
    },
    {
        streetName: 'winter st ext',
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
        streetName: 'west wyoming ave',
        ward: '5'
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
        ward: '1'
    },
    {
        streetName: 'youle st',
        ward: '3'
    }
];